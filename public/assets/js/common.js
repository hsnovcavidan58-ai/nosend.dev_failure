/**
 * ============================================================================
 * nosend.dev — Shared UI Script
 * ============================================================================
 *
 * Handles:
 *   1. Header injection (logo + primary navigation + mobile menu toggle)
 *   2. Footer injection (copyright + legal links)
 *   3. Active navigation link highlighting (section-aware)
 *   4. Mobile menu behavior (toggle, outside-click, Escape, resize, link-click)
 *   5. Dynamic footer year
 *
 * Loaded on every page with `defer`:
 *   <script src="/assets/js/common.js" defer></script>
 *
 * Guarantees:
 *   - No globals leak into window (entire file is an IIFE)
 *   - Idempotent: running twice is a no-op
 *   - Respects per-page header/footer content (won't overwrite non-empty)
 *   - Degrades gracefully if any expected element is missing
 *   - Works from any directory depth (uses absolute paths)
 *
 * @generated 2026-10-21
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     DOUBLE-INIT GUARD
     Prevents the IIFE from running twice if the script is accidentally
     included more than once (e.g., duplicated <script> tag).
     ========================================================================== */
  if (document.documentElement.dataset.nsCommon === '1') {
    return;
  }
  document.documentElement.dataset.nsCommon = '1';

  /* ==========================================================================
     CONFIGURATION
     Edit this object to change navigation, footer links, or branding.
     ========================================================================== */
  const CONFIG = {
    brand: {
      strong: 'nosend',
      rest: '.dev',
      href: '/',
      ariaLabel: 'nosend.dev home'
    },

    /**
     * Primary navigation links.
     * Each entry has a `section` key used by `getCurrentSection()` to
     * determine which link should be visually highlighted.
     *
     * To add a new link: append { href, label, section }.
     * To remove a link: delete the entry.
     */
    nav: [
      { href: '/#tools',   label: 'Tools',   section: 'tools'   },
      { href: '/#privacy', label: 'Privacy', section: 'privacy' },
      { href: '/pricing',  label: 'Pricing', section: 'pricing' }
    ],

    footer: {
      brand: 'nosend.dev',
      links: [
        { href: '/privacy.html', label: 'Privacy' },
        { href: '/terms.html',   label: 'Terms'   }
      ]
    },

    /** Media query breakpoint matching the CSS mobile layout. */
    breakpoint: '(max-width: 768px)',

    /** Element IDs used by the script (must match the injected markup). */
    ids: {
      nav:        'primary-nav',
      menuToggle: 'menu-toggle',
      footerYear: 'footer-year'
    },

    /**
     * data-attribute markers used to prevent double injection.
     * Values are internal — do not depend on them from outside code.
     */
    markers: {
      header: 'header',
      footer: 'footer'
    }
  };

  /* ==========================================================================
     INLINE SVG ICONS
     Kept in JS so the header markup can be fully injected in one place.
     `aria-hidden` prevents screen readers from announcing decorative icons.
     ========================================================================== */
  const ICONS = {
    menu:
      '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" ' +
      'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true" focusable="false">' +
      '<line x1="3" y1="6" x2="21" y2="6"></line>' +
      '<line x1="3" y1="12" x2="21" y2="12"></line>' +
      '<line x1="3" y1="18" x2="21" y2="18"></line>' +
      '</svg>',
    close:
      '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" ' +
      'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true" focusable="false">' +
      '<line x1="18" y1="6" x2="6" y2="18"></line>' +
      '<line x1="6" y1="6" x2="18" y2="18"></line>' +
      '</svg>'
  };

  /* ==========================================================================
     UTILITIES
     ========================================================================== */

  /**
   * Escape a string for safe inclusion inside HTML text or attribute values.
   * Defensive against null / undefined / non-string inputs.
   *
   * @param   {*}      input
   * @returns {string}
   */
  function escapeHtml(input) {
    return String(input == null ? '' : input)
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#39;');
  }

  /**
   * Normalize a URL path:
   *   - strip query string and hash
   *   - convert `/index.html` → `/`
   *   - strip a single trailing slash (except for the root `/`)
   *
   * @param   {string} path
   * @returns {string}
   */
  function normalizePath(path) {
    if (!path) return '/';
    let p = String(path).split('?')[0].split('#')[0];
    p = p.replace(/\/index\.html?$/i, '/');
    if (p.length > 1 && p.charAt(p.length - 1) === '/') {
      p = p.slice(0, -1);
    }
    return p || '/';
  }

  /**
   * Determine which top-level "section" the current URL belongs to.
   * Used by `highlightActiveNav()` to decide which nav link to activate.
   *
   * Returns one of: 'tools' | 'privacy' | 'legal' | 'pricing' | null
   *
   * Rules:
   *   /                     → 'tools'  (default homepage section)
   *   /#privacy             → 'privacy'
   *   /#pricing             → 'pricing'
   *   /#tools               → 'tools'
   *   /tools/...            → 'tools'
   *   /privacy(.html)       → 'privacy'
   *   /terms(.html)         → 'legal'
   *   /pricing(.html)       → 'pricing'
   *   anything else         → null (no nav link highlighted)
   *
   * @returns {string|null}
   */
  function getCurrentSection() {
    const path = normalizePath(window.location.pathname);
    const hash = String(window.location.hash || '').toLowerCase();

    // Dedicated pages
    if (path === '/privacy' || path === '/privacy.html') return 'privacy';
    if (path === '/terms'   || path === '/terms.html')   return 'legal';
    if (path === '/pricing' || path === '/pricing.html') return 'pricing';

    // Tool pages
    if (path === '/tools' || path.indexOf('/tools/') === 0) return 'tools';

    // Homepage — decide based on hash
    if (path === '/') {
      if (hash === '#privacy') return 'privacy';
      if (hash === '#pricing') return 'pricing';
      if (hash === '#tools')   return 'tools';
      return 'tools'; // default: homepage = tools catalog
    }

    return null;
  }

  /* ==========================================================================
     HEADER
     ========================================================================== */

  /**
   * Build the header HTML string.
   * Structure must match the selectors used in `style.css`:
   *   header > .container > (.logo + nav#primary-nav + .menu-toggle)
   *
   * @returns {string}
   */
  function buildHeaderHTML() {
    const navItems = CONFIG.nav.map(function (item) {
      return (
        '<li><a href="' + escapeHtml(item.href) + '">' +
        escapeHtml(item.label) +
        '</a></li>'
      );
    }).join('');

    return [
      '<div class="container">',
      '  <a href="' + escapeHtml(CONFIG.brand.href) + '" ' +
            'class="logo" ' +
            'aria-label="' + escapeHtml(CONFIG.brand.ariaLabel) + '">' +
      '    <strong>' + escapeHtml(CONFIG.brand.strong) + '</strong>' +
            escapeHtml(CONFIG.brand.rest) +
      '  </a>',
      '  <nav id="' + escapeHtml(CONFIG.ids.nav) + '" ' +
            'aria-label="Main navigation">',
      '    <ul>' + navItems + '</ul>',
      '  </nav>',
      '  <button type="button" ' +
              'id="' + escapeHtml(CONFIG.ids.menuToggle) + '" ' +
              'class="menu-toggle" ' +
              'aria-label="Open menu" ' +
              'aria-expanded="false" ' +
              'aria-controls="' + escapeHtml(CONFIG.ids.nav) + '">',
      '    <span data-icon="menu">' + ICONS.menu + '</span>',
      '    <span data-icon="close" hidden>' + ICONS.close + '</span>',
      '  </button>',
      '</div>'
    ].join('\n');
  }

  /**
   * Inject the header markup into `<body > header>`.
   * Skips if:
   *   - the element is missing,
   *   - already injected by us (marker present),
   *   - already contains content (per-page override).
   */
  function injectHeader() {
    const header = document.querySelector('body > header');
    if (!header) return;

    if (header.dataset.nsInjected === CONFIG.markers.header) return;
    if (header.children.length > 0) {
      header.dataset.nsInjected = CONFIG.markers.header;
      return;
    }

    header.innerHTML = buildHeaderHTML();
    header.dataset.nsInjected = CONFIG.markers.header;
  }

  /* ==========================================================================
     FOOTER
     ========================================================================== */

  /**
   * Build the footer HTML string.
   * Layout (per CSS): `<footer .container>` is a flex row with copyright on
   * the left and legal links on the right.
   *
   * @returns {string}
   */
  function buildFooterHTML() {
    const links = CONFIG.footer.links.map(function (link) {
      return (
        '<a href="' + escapeHtml(link.href) + '">' +
        escapeHtml(link.label) +
        '</a>'
      );
    }).join('');

    const year = new Date().getFullYear();

    return [
      '<div class="container">',
      '  <p>&copy; <span id="' + escapeHtml(CONFIG.ids.footerYear) + '">' +
            year + '</span> ' + escapeHtml(CONFIG.footer.brand) + '</p>',
      '  <nav aria-label="Footer">' + links + '</nav>',
      '</div>'
    ].join('\n');
  }

  /**
   * Inject the footer markup into `<body > footer>`.
   * Same defensive checks as `injectHeader()`.
   */
  function injectFooter() {
    const footer = document.querySelector('body > footer');
    if (!footer) return;

    if (footer.dataset.nsInjected === CONFIG.markers.footer) return;
    if (footer.children.length > 0) {
      footer.dataset.nsInjected = CONFIG.markers.footer;
      return;
    }

    footer.innerHTML = buildFooterHTML();
    footer.dataset.nsInjected = CONFIG.markers.footer;
  }

  /* ==========================================================================
     ACTIVE NAV HIGHLIGHTING
     ========================================================================== */

  /**
   * Add `.active` class + `aria-current` attribute to the nav link whose
   * `section` matches the current page's section.
   * Idempotent: safe to call repeatedly (e.g., on hashchange).
   */
  function highlightActiveNav() {
    const nav = document.getElementById(CONFIG.ids.nav);
    if (!nav) return;

    const current = getCurrentSection();

    nav.querySelectorAll('a').forEach(function (link) {
      const href = link.getAttribute('href');
      const item = CONFIG.nav.find(function (n) { return n.href === href; });
      if (!item) return;

      const active = current !== null && item.section === current;

      link.classList.toggle('active', active);

      if (active) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ==========================================================================
     MOBILE MENU
     ========================================================================== */

  /**
   * Wire up the mobile menu toggle behavior:
   *   - Click toggle: open/close
   *   - Click inside nav on a link: close
   *   - Click outside nav + toggle: close
   *   - Press Escape: close, return focus to toggle
   *   - Resize above breakpoint: close
   *
   * Icon state (hamburger ↔ X) is driven by `aria-expanded` + `hidden`.
   */
  function setupMobileMenu() {
    const nav    = document.getElementById(CONFIG.ids.nav);
    const toggle = document.getElementById(CONFIG.ids.menuToggle);
    if (!nav || !toggle) return;

    // Guard against double-wiring if this function is ever called twice.
    if (toggle.dataset.nsWired === '1') return;
    toggle.dataset.nsWired = '1';

    const iconMenu  = toggle.querySelector('[data-icon="menu"]');
    const iconClose = toggle.querySelector('[data-icon="close"]');

    /**
     * Apply open/closed state to DOM + ARIA.
     * @param {boolean} open
     */
    function setOpen(open) {
      nav.classList.toggle('open', open);

      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute(
        'aria-label',
        open ? 'Close menu' : 'Open menu'
      );

      if (iconMenu)  iconMenu.hidden  = open;
      if (iconClose) iconClose.hidden = !open;
    }

    /** @returns {boolean} */
    function isOpen() {
      return nav.classList.contains('open');
    }

    // --- Toggle button ----------------------------------------------------
    toggle.addEventListener('click', function (event) {
      // Stop propagation so the document-level "outside click" handler
      // doesn't immediately close what we just opened.
      event.stopPropagation();
      setOpen(!isOpen());
    });

    // --- Close when a nav link is clicked --------------------------------
    nav.addEventListener('click', function (event) {
      if (!isOpen()) return;
      const link = event.target.closest('a');
      if (link) setOpen(false);
    });

    // --- Close when clicking outside -------------------------------------
    document.addEventListener('click', function (event) {
      if (!isOpen()) return;
      if (nav.contains(event.target)) return;
      if (toggle.contains(event.target)) return;
      setOpen(false);
    });

    // --- Close on Escape -------------------------------------------------
    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      if (!isOpen()) return;
      setOpen(false);
      toggle.focus();
    });

    // --- Close when resizing above the mobile breakpoint -----------------
    const mq = window.matchMedia(CONFIG.breakpoint);

    function onBreakpointChange() {
      if (!mq.matches && isOpen()) setOpen(false);
    }

    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', onBreakpointChange);
    } else if (typeof mq.addListener === 'function') {
      // Fallback for very old Safari (< 14).
      mq.addListener(onBreakpointChange);
    }

    // --- Initial state ---------------------------------------------------
    setOpen(false);
  }

  /* ==========================================================================
     FOOTER YEAR
     ========================================================================== */

  /**
   * Write the current year into every `#footer-year` element on the page.
   * Handles both injected footers and per-page footers that already have
   * the `<span id="footer-year">` placeholder in their markup.
   */
  function updateFooterYear() {
    const year = String(new Date().getFullYear());
    const nodes = document.querySelectorAll(
      '#' + CONFIG.ids.footerYear
    );
    nodes.forEach(function (el) { el.textContent = year; });
  }

  /* ==========================================================================
     INITIALIZATION
     ========================================================================== */

  /**
   * Run all setup routines in the correct order.
   * Header/footer must be injected first because `setupMobileMenu()` and
   * `highlightActiveNav()` query for elements that only exist after injection.
   */
  function init() {
    injectHeader();
    injectFooter();
    highlightActiveNav();
    setupMobileMenu();
    updateFooterYear();
  }

  // Run as soon as the DOM is ready. With `defer`, `readyState` is typically
  // 'interactive' here, so `init()` runs immediately. If the script is loaded
  // without `defer` and runs during parsing, we fall back to DOMContentLoaded.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  // Re-evaluate active link whenever the hash changes (e.g., clicking
  // `/#privacy` from the homepage). Delegated via the persistent nav element
  // would be overkill — the window-level event is cheap and fires rarely.
  window.addEventListener('hashchange', highlightActiveNav);

})();