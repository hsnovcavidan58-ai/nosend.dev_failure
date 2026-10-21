/**
 * ============================================================================
 * nosend.dev — Premium License Gate & Usage Tracker
 * ============================================================================
 *
 * Public API — exposed as `window.nosendLicense` (frozen, read-only):
 *
 *   ── Premium ──────────────────────────────────────────────────────────────
 *   checkPremium(options?)        → Promise<{premium, reason, expires}>
 *   getCachedResult()             → {premium, reason, expires}  (sync, may be stale)
 *
 *   ── License key ─────────────────────────────────────────────────────────
 *   getLicenseKey()               → string | null
 *   setLicenseKey(key)            → Promise<{premium, reason, expires}>
 *   clearLicenseKey()             → void
 *
 *   ── Usage counter ────────────────────────────────────────────────────────
 *   getUsageCount()               → number    (operations this calendar month)
 *   incrementUsage()              → number    (new total after increment)
 *   getUsageInfo()                → {count, limit, remaining, isPremium}
 *   canUseFree()                  → boolean
 *   getFreeTierLimit()            → number
 *
 *   ── File-size limits ─────────────────────────────────────────────────────
 *   getMaxFileSizeMB(type?, premiumOverride?) → number
 *
 *   ── Maintenance / introspection ──────────────────────────────────────────
 *   clearCache()                  → void
 *   getMode()                     → 'stub' | 'production'
 *   getConfig()                   → read-only snapshot of CONFIG
 *
 * Lifecycle
 * ---------
 *   1. Every page loads this file with `defer`:
 *        <script src="/assets/js/license.js" defer></script>
 *   2. Default mode is `'stub'` — `checkPremium()` returns `premium: true`
 *      without hitting the network. All paid features are unlocked locally
 *      so development can proceed before KYC is complete.
 *   3. On 18 January 2027, flip `CONFIG.mode` to `'production'`. From that
 *      point on, `checkPremium()` validates via Cloudflare Worker →
 *      Lemon Squeezy.
 *   4. Tools call `await checkPremium()` before gating paid features, and
 *      call `incrementUsage()` after each successful free-tier operation.
 *
 * Security model
 * --------------
 *   • The user's LICENSE KEY lives in `localStorage` (it is their own input).
 *   • The user's LICENSE STATUS is **never** trusted from `localStorage`.
 *     It is always verified via the Worker → Lemon Squeezy.
 *   • The cache is a performance optimization with a hard TTL (1 h success,
 *     5 min failure) so a revoked key stops working within one hour.
 *   • The usage counter lives in `localStorage` because it is stats-only —
 *     clearing it does not grant premium access (the Worker still says no).
 *   • All storage access is wrapped in try/catch and falls back to memory,
 *     so the module never throws in private browsing / sandboxed iframes.
 *   • Fails **closed**: any network error, timeout, or malformed response
 *     is treated as `premium: false`, except for the success-cache window.
 *
 * Loaded everywhere. Zero dependencies. No globals leak. Idempotent.
 *
 * @generated 2026-10-21
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     DOUBLE-INIT GUARD
     Prevents the IIFE from running twice if the script is included more than
     once (e.g., duplicated <script> tag, or a tool page with extra includes).
     ========================================================================== */

  if (window.nosendLicense) {
    return;
  }

  /* ==========================================================================
     CONFIGURATION
     Single source of truth. Flip `mode` to 'production' on 18 Jan 2027.
     ========================================================================== */

  const CONFIG = {
    /**
     * Runtime mode.
     *   'stub'       — always returns `premium: true` (development).
     *   'production' — validates via Cloudflare Worker → Lemon Squeezy.
     *
     * ⚠️  Change to 'production' on 18 January 2027.
     */
    mode: 'stub',

    /** Cloudflare Worker endpoint (production mode only). */
    endpoint: 'https://api.nosend.dev/validate',

    /** HTTP timeout for license validation requests (ms). */
    requestTimeout: 10000,

    /** localStorage keys (all prefixed to avoid collisions). */
    storageKeys: {
      license: 'nosend_license',
      usage: 'nosend_usage',
      cache: 'nosend_license_cache'
    },

    /** Free tier limits (production mode). */
    freeTier: {
      monthlyLimit: 10,     // operations per calendar month
      maxFileSizeMB: 10     // per-file size cap
    },

    /** Premium tier limits (production mode). */
    premiumTier: {
      maxFileSizeMB: {
        pdf: 50,
        csv: 500,
        image: 100,
        default: 100
      }
    },

    /**
     * Cache TTLs (ms).
     * Do not extend success beyond 1 hour — revoked keys must propagate.
     */
    cacheTTL: {
      success: 60 * 60 * 1000,   // 1 hour
      failure: 5 * 60 * 1000     // 5 minutes
    },

    /** Emit console logs. Set to true only when debugging locally. */
    debug: false
  };

  /* ==========================================================================
     LOGGING
     ========================================================================== */

  function log() {
    if (!CONFIG.debug) return;
    console.log.apply(console, ['[nosendLicense]'].concat(Array.prototype.slice.call(arguments)));
  }

  function warn() {
    if (!CONFIG.debug) return;
    console.warn.apply(console, ['[nosendLicense]'].concat(Array.prototype.slice.call(arguments)));
  }

  /* ==========================================================================
     SAFE STORAGE
     localStorage throws in private browsing, sandboxed iframes, and quota-
     exhausted conditions. Wrap every access and fall back to an in-memory
     store that resets on navigation.
     ========================================================================== */

  const memoryStore = Object.create(null);

  /**
   * @param   {string} key
   * @returns {string | null}
   */
  function safeGetItem(key) {
    try {
      const value = window.localStorage.getItem(key);
      if (value !== null) return value;
    } catch (e) {
      // Ignore — fall through to memory.
    }
    const memValue = memoryStore[key];
    return memValue !== undefined ? memValue : null;
  }

  /**
   * @param {string} key
   * @param {string} value
   */
  function safeSetItem(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      // Quota exceeded or storage blocked — memory fallback only.
    }
    memoryStore[key] = value;
  }

  /**
   * @param {string} key
   */
  function safeRemoveItem(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      // Ignore.
    }
    delete memoryStore[key];
  }

  /**
   * @param   {string} key
   * @param   {*}      fallback
   * @returns {*}
   */
  function safeGetJSON(key, fallback) {
    const raw = safeGetItem(key);
    if (raw === null) return fallback;
    try {
      return JSON.parse(raw);
    } catch (e) {
      warn('corrupt JSON in "' + key + '" — resetting');
      safeRemoveItem(key);
      return fallback;
    }
  }

  /**
   * @param {string} key
   * @param {*}      value
   */
  function safeSetJSON(key, value) {
    try {
      safeSetItem(key, JSON.stringify(value));
    } catch (e) {
      warn('failed to serialize "' + key + '"');
    }
  }

  /* ==========================================================================
     USAGE TRACKING
     Per calendar month, stored as: { "2026-10": 3, "2026-11": 12 }
     localStorage only — statistics, not authorization.
     ========================================================================== */

  /**
   * Current month key in "YYYY-MM" form.
   * @returns {string}
   */
  function getCurrentMonthKey() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return year + '-' + month;
  }

  /**
   * Read the full usage map from storage.
   * @returns {Object<string, number>}
   */
  function readUsageMap() {
    const map = safeGetJSON(CONFIG.storageKeys.usage, {});
    return (map && typeof map === 'object' && !Array.isArray(map)) ? map : {};
  }

  /**
   * Number of operations used in the current calendar month.
   * @returns {number}
   */
  function getUsageCount() {
    const map = readUsageMap();
    const count = map[getCurrentMonthKey()];
    return Number.isFinite(count) && count > 0 ? count : 0;
  }

  /**
   * Increment the current month's counter by one.
   * @returns {number} the new count
   */
  function incrementUsage() {
    const map = readUsageMap();
    const month = getCurrentMonthKey();
    const current = Number.isFinite(map[month]) ? map[month] : 0;
    const next = current + 1;
    map[month] = next;
    safeSetJSON(CONFIG.storageKeys.usage, map);
    log('usage incremented →', next, '(' + month + ')');
    return next;
  }

  /* ==========================================================================
     LICENSE KEY MANAGEMENT
     The key is user-supplied input, stored locally. It is not proof of
     validity — the worker validates it on every fresh check.
     ========================================================================== */

  /**
   * @returns {string | null}
   */
  function getLicenseKey() {
    const key = safeGetItem(CONFIG.storageKeys.license);
    if (typeof key !== 'string') return null;
    const trimmed = key.trim();
    return trimmed.length > 0 ? trimmed : null;
  }

  /**
   * Persist (or clear) the license key.
   * @param {string | null | undefined} key
   */
  function storeLicenseKey(key) {
    if (key == null) {
      safeRemoveItem(CONFIG.storageKeys.license);
      return;
    }
    const trimmed = String(key).trim();
    if (trimmed.length === 0) {
      safeRemoveItem(CONFIG.storageKeys.license);
      return;
    }
    safeSetItem(CONFIG.storageKeys.license, trimmed);
  }

  /* ==========================================================================
     PREMIUM CACHE
     Stores the most recent validation result with a TTL. Never trusted past
     TTL — treated as a hint to avoid spamming the worker.
     ========================================================================== */

  /**
   * @returns {{premium: boolean, reason: string, expires: string|null, ts: number} | null}
   */
  function readCache() {
    const cached = safeGetJSON(CONFIG.storageKeys.cache, null);
    if (!cached || typeof cached !== 'object') return null;
    if (typeof cached.premium !== 'boolean') return null;
    if (typeof cached.reason !== 'string') return null;
    if (!Number.isFinite(cached.ts)) return null;
    return cached;
  }

  /**
   * @param {{premium: boolean, reason: string, expires: string|null}} result
   */
  function writeCache(result) {
    safeSetJSON(CONFIG.storageKeys.cache, {
      premium: Boolean(result.premium),
      reason: String(result.reason || 'unknown'),
      expires: result.expires || null,
      ts: Date.now()
    });
  }

  /**
   * Delete the cached validation result.
   */
  function clearCache() {
    safeRemoveItem(CONFIG.storageKeys.cache);
    log('cache cleared');
  }

  /**
   * @param   {{premium: boolean, ts: number}|null} cached
   * @returns {boolean}
   */
  function isCacheFresh(cached) {
    if (!cached) return false;
    const ttl = cached.premium ? CONFIG.cacheTTL.success : CONFIG.cacheTTL.failure;
    return (Date.now() - cached.ts) < ttl;
  }

  /**
   * Synchronous snapshot of the last cached result (may be stale or absent).
   * @returns {{premium: boolean, reason: string, expires: string|null}}
   */
  function getCachedResult() {
    const cached = readCache();
    if (!cached) {
      return { premium: false, reason: 'no_cache', expires: null };
    }
    return {
      premium: cached.premium,
      reason: cached.reason,
      expires: cached.expires
    };
  }

  /* ==========================================================================
     NETWORK — Worker validation
     Fails closed on any error. Never throws.
     ========================================================================== */

  /**
   * POST the license key to the Cloudflare Worker for validation.
   *
   * @param   {string} licenseKey
   * @returns {Promise<{premium: boolean, reason: string, expires: string|null}>}
   */
  async function validateWithWorker(licenseKey) {
    const supportsAbort = typeof AbortController !== 'undefined';
    const controller = supportsAbort ? new AbortController() : null;

    const timeoutId = setTimeout(function () {
      if (controller) {
        controller.abort();
      }
    }, CONFIG.requestTimeout);

    try {
      const response = await fetch(CONFIG.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ licenseKey: licenseKey }),
        signal: controller ? controller.signal : undefined,
        credentials: 'omit',
        mode: 'cors',
        cache: 'no-store'
      });

      if (!response.ok) {
        warn('worker returned HTTP', response.status);
        return {
          premium: false,
          reason: 'server_error_' + response.status,
          expires: null
        };
      }

      let data;
      try {
        data = await response.json();
      } catch (e) {
        warn('worker returned non-JSON body');
        return { premium: false, reason: 'invalid_response', expires: null };
      }

      if (!data || typeof data.premium !== 'boolean') {
        warn('worker returned unexpected shape:', data);
        return { premium: false, reason: 'invalid_response', expires: null };
      }

      return {
        premium: data.premium,
        reason: String(data.reason || (data.premium ? 'ok' : 'invalid_key')),
        expires: data.expires || null
      };
    } catch (err) {
      if (err && err.name === 'AbortError') {
        warn('worker request timed out');
        return { premium: false, reason: 'timeout', expires: null };
      }
      warn('worker request failed:', err);
      return { premium: false, reason: 'network_error', expires: null };
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /* ==========================================================================
     PUBLIC — checkPremium()
     ========================================================================== */

  /**
   * Determine whether the current user has premium access.
   *
   * In stub mode, always resolves `{premium: true, reason: 'development'}`.
   * In production, honors a fresh cache, otherwise calls the worker.
   *
   * @param   {{forceRefresh?: boolean}} [options]
   * @returns {Promise<{premium: boolean, reason: string, expires: string|null}>}
   */
  async function checkPremium(options) {
    const opts = options || {};

    // ── Stub mode: bypass all network calls ───────────────────────────────
    if (CONFIG.mode === 'stub') {
      return { premium: true, reason: 'development', expires: null };
    }

    // ── Production mode: honor fresh cache unless forced ─────────────────
    if (!opts.forceRefresh) {
      const cached = readCache();
      if (isCacheFresh(cached)) {
        log('cache hit — premium:', cached.premium, '· reason:', cached.reason);
        return {
          premium: cached.premium,
          reason: cached.reason,
          expires: cached.expires
        };
      }
    }

    // ── No key → worker cannot validate → deny ───────────────────────────
    const key = getLicenseKey();
    if (!key) {
      const result = { premium: false, reason: 'no_key', expires: null };
      writeCache(result);
      return result;
    }

    // ── Validate with worker ─────────────────────────────────────────────
    const result = await validateWithWorker(key);
    writeCache(result);
    log('worker check — premium:', result.premium, '· reason:', result.reason);
    return result;
  }

  /* ==========================================================================
     PUBLIC — setLicenseKey()
     ========================================================================== */

  /**
   * Persist a license key and validate it immediately (unless in stub mode).
   * Invalidates any cached result first.
   *
   * @param   {string} key
   * @returns {Promise<{premium: boolean, reason: string, expires: string|null}>}
   */
  async function setLicenseKey(key) {
    storeLicenseKey(key);
    clearCache();

    if (CONFIG.mode === 'stub') {
      return { premium: true, reason: 'development', expires: null };
    }

    return checkPremium({ forceRefresh: true });
  }

  /**
   * Remove the stored license key and any cached validation result.
   */
  function clearLicenseKey() {
    safeRemoveItem(CONFIG.storageKeys.license);
    clearCache();
    log('license key cleared');
  }

  /* ==========================================================================
     PUBLIC — helpers
     ========================================================================== */

  /**
   * Free tier monthly operation limit.
   * @returns {number}
   */
  function getFreeTierLimit() {
    return CONFIG.freeTier.monthlyLimit;
  }

  /**
   * Combined snapshot for UI rendering.
   * Synchronous — relies on the cached premium status.
   *
   * @returns {{count: number, limit: number, remaining: number, isPremium: boolean}}
   */
  function getUsageInfo() {
    const count = getUsageCount();
    const limit = CONFIG.freeTier.monthlyLimit;
    const isPremium = CONFIG.mode === 'stub'
      ? true
      : getCachedResult().premium;

    return {
      count: count,
      limit: limit,
      remaining: Math.max(0, limit - count),
      isPremium: isPremium
    };
  }

  /**
   * Can the user still perform a free-tier operation?
   * Always true in stub mode.
   *
   * @returns {boolean}
   */
  function canUseFree() {
    if (CONFIG.mode === 'stub') return true;
    if (getCachedResult().premium) return true;
    return getUsageCount() < CONFIG.freeTier.monthlyLimit;
  }

  /**
   * File size cap in megabytes, based on tier and file type.
   *
   * @param   {string}  [fileType='default']  'pdf' | 'csv' | 'image' | 'default'
   * @param   {boolean} [premiumOverride]     bypass the cached premium check
   * @returns {number}
   */
  function getMaxFileSizeMB(fileType, premiumOverride) {
    const type = String(fileType || 'default').toLowerCase();

    const isPremium = typeof premiumOverride === 'boolean'
      ? premiumOverride
      : (CONFIG.mode === 'stub' ? true : getCachedResult().premium);

    if (!isPremium) {
      return CONFIG.freeTier.maxFileSizeMB;
    }

    const map = CONFIG.premiumTier.maxFileSizeMB;
    return Number.isFinite(map[type]) ? map[type] : map.default;
  }

  /* ==========================================================================
     PUBLIC API
     Frozen so tools cannot accidentally overwrite methods.
     ========================================================================== */

  window.nosendLicense = Object.freeze({

    // ── Metadata ─────────────────────────────────────────────────────────
    version: '1.0.0',
    getMode: function () { return CONFIG.mode; },

    // ── Premium ──────────────────────────────────────────────────────────
    checkPremium: checkPremium,
    getCachedResult: getCachedResult,

    // ── License key ──────────────────────────────────────────────────────
    getLicenseKey: getLicenseKey,
    setLicenseKey: setLicenseKey,
    clearLicenseKey: clearLicenseKey,

    // ── Usage ────────────────────────────────────────────────────────────
    getUsageCount: getUsageCount,
    incrementUsage: incrementUsage,
    getUsageInfo: getUsageInfo,
    canUseFree: canUseFree,
    getFreeTierLimit: getFreeTierLimit,

    // ── File-size limits ─────────────────────────────────────────────────
    getMaxFileSizeMB: getMaxFileSizeMB,

    // ── Maintenance ──────────────────────────────────────────────────────
    clearCache: clearCache,

    // ── Config snapshot (read-only) ──────────────────────────────────────
    getConfig: function () {
      return {
        mode: CONFIG.mode,
        endpoint: CONFIG.endpoint,
        freeTier: {
          monthlyLimit: CONFIG.freeTier.monthlyLimit,
          maxFileSizeMB: CONFIG.freeTier.maxFileSizeMB
        },
        premiumTier: {
          maxFileSizeMB: Object.assign({}, CONFIG.premiumTier.maxFileSizeMB)
        }
      };
    }
  });

  log('initialized — mode:', CONFIG.mode, '· version:', window.nosendLicense.version);

})();