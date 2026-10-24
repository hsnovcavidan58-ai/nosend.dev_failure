# 📋 `docs/launch-checklist.md` — Tam Professional Versiya

Aşağıda `docs/launch-checklist.md` faylının **v2 strategiyasına tam uyğun**, heç bir eksiklik olmadan, sıfırdan professional şəkildə yazılmış tam kodunu verirəm. Fayl birbaşa repo-ya kopyalana bilər.

---

```markdown
# nosend.dev — 90 Günlük Lansman Checklist (v2)

> **Sənəd versiyası:** 2.0
> **Son yenilənmə:** 24 Oktyabr 2026
> **Hazırlıq dövrü:** 18 Oktyabr 2026 — 17 Yanvar 2027 (92 gün / 13 həftə)
> **Rəsmi lansman:** 18 Yanvar 2027
> **Sahibi:** Javidan Hasanov
> **Strategiya mənbələri:** `fikir_meqale_v2.md`, `fayl_sirasi.md`, `README.md`
> **Versiya tarixçəsi:** v1 (27 fayl, 6 alət) → **v2 (31 fayl, 3 alət prioriteti, B2B əsas gəlir)**

---

## 📖 Bu Sənəd Nə Üçündür?

Bu, **90 günlük hazırlıq dövrünün** yeganə həqiqət mənbəyidir (single source of truth). Hər həftənin əvvəlində açılır, hər həftənin sonunda yenilənir. Hər task-ın **"Done" (hazır)** sayılması üçün konkret meyarları var — subyektiv "bitdi" anlayışı yoxdur.

**Bu sənəd nə deyil:**
- Strategiya sənədi deyil → `docs/strategy.md`-yə bax
- Texniki sənədləşdirmə deyil → `README.md`-yə bax
- Biznes planı deyil → `fikir_meqale_v2.md`-yə bax

**Bu sənəd nədir:**
- Həftəlik atomic task siyahısı
- Hər task üçün **Definition of Done (DoD)**
- QA yoxlama siyahıları
- Risk reyestri və eskalasiya protokolu
- Lansman günü üçün dəqiqə-dəqiqə plan

---

## 🎯 Hazırlıq Dövrünün Uğur Meyarları

**18 Yanvar 2027-də "hazır" sayılmaq üçün:**

| Metrik | Hədəf | Ölçmə üsulu |
|---|---|---|
| İşlək alət sayı | **3** (CSV Merger, JSON Formatter, Image Compressor) | Canlı URL-də əl ilə test |
| Səhifə sayı (SEO) | **20+** | `sitemap.xml` yoxlaması |
| Aylıq ziyarətçi (Dek sonu) | **500–1,000** | Cloudflare Analytics |
| B2B əlaqə (cavab verən) | **2–5** | E-poçt qeydləri |
| B2B əlaqə (göndərilən) | **20** | `docs/b2b-emails.md` jurnalı |
| Premium infrastruktur | Test rejimində işlək | `license.js` stub → worker mock |
| Pricing səhifəsi | v2 qiymətləri ($3/$19) | Vizual yoxlama |
| Hüquqi sənədlər | Privacy + Terms canlı | URL yoxlaması |
| Sıfır kritik bug | 0 🔴 | QA checklist |

**Uğursuzluq meyarları (əgər bunlar baş verərsə, lansman təxirə salınır):**
- 3-dən az alət işlək
- Privacy və ya Terms səhifəsi yoxdur
- Worker production-a deploy olunmayıb
- `pricing.html` hələ də v1 qiymətləri göstərir
- `.env` və ya `LS_API_KEY` GitHub-a sızıb

---

## 🧭 Qızıl Qaydalar (Bütün 90 Gün Ərzində)

Bu 8 qayda hər qərarın təməlidir. Pozulursa, həmin həftə yenidən planlaşdırılır.

### 1. **Keyfiyyət > Kəmiyyət**
6 aləti yarımçıq bitirmək əvəzinə **3 aləti mükəmməl** bitir. `pdf-merger` və `image-converter` post-launch-dır — **toxunma**.

### 2. **Hər gün 1 commit, minimum**
GitHub-da yaşıl kvadrat motivasiya deyil — **davamlılıq sübutudur**. İşləmədiyin gün belə `docs/`-a 3 sətir yaz.

### 3. **Alət B, alət A bitməmiş başlamır**
`json-formatter`-i bitirməmiş `image-compressor`-ə keçmək **ən böyük tələdir**. Hər alət tam "Done" olmalıdır.

### 4. **Hər task-ın DoD-u var**
"HTML yazdım" bitmə deyil. "HTML yazdım + Chrome/Firefox/Safari-də açıldı + Network tab-da upload yoxdur + mobile-də işləyir" — bu bitmədir.

### 5. **DevTools Network tab — hər gün**
Hər aləti bitirdikdən sonra `F12 → Network → Upload` yoxla. **Sıfır upload** görməlisən. Görmürsənsə, alət privacy iddiasını pozur — dərhal düzəlt.

### 6. **Səssiz lansman (Həftə 7) — Product Hunt YOX**
Həftə 7-də yalnız Reddit + HN. Product Hunt **18 Yanvarda**. Səbəb: monetizasiya yoxdur → trafik boşa gedər.

### 7. **B2B əlaqə Həftə 9-da başlayır — gecikmə = gəlir itkisi**
Sales cycle 6–12 ay çəkir. Hər gecikən həftə **potensial $299–$999 müqaviləni** 1 ay geri atır.

### 8. **18 Yanvardan əvvəl heç bir ödəniş cəhdi YOX**
Lemon Squeezy, PayPal, AdSense — hamısı 18+. Valideyn adı ilə **qəti qadağandır** (ToS pozuntusu → hesab dondurulur → reputasiya zədəsi).

---

## 🗓️ 13 Həftəlik Ümumi Baxış

| Həftə | Tarix | Əsas Fokus | Çıxış |
|---|---|---|---|
| 1 | 18–24 Okt | CSV Merger HTML/CSS skeleton | Brauzerdə görünən UI |
| 2 | 25–31 Okt | CSV Merger məntiq (PapaParse) | İşlək birləşdirmə |
| 3 | 1–7 Noy | Cloudflare Pages deploy + domen | Canlı URL |
| 4 | 8–14 Noy | JSON Formatter + Image Compressor | 3 alət hazır |
| 5 | 15–21 Noy | SEO təməli (meta, JSON-LD, sitemap) | Search Console qeydiyyatı |
| 6 | 22–28 Noy | Image Compressor refinement + 5 pSEO | 5 blog səhifəsi |
| 7 | 29 Noy – 5 Dek | Səssiz lansman (Reddit/HN) | İlk 100 ziyarətçi |
| 8 | 6–12 Dek | B2B white-label səhifəsi (`business.html`) | `/business` canlı |
| 9 | 13–19 Dek | İlk 20 B2B e-poçt | 2–5 cavab |
| 10 | 20–26 Dek | Cloudflare Worker + Lemon Squeezy hazırlıq | Ödəniş sistemi hazır |
| 11 | 27 Dek – 2 Yan | Premium məntiq (test rejimində) | 1 alətdə premium stub |
| 12 | 3–9 Yan | SEO genişlənmə + lansman materialları | 20+ səhifə |
| 13 | 10–17 Yan | Son hazırlıq + bank sənədləşmə | 18 Yanvara hazır |
| **L** | **18 Yan 2027** | **Rəsmi lansman** | **İlk satış 🎉** |

---

## 📅 HƏFTƏ 1 — CSV Merger HTML/CSS Skeleti

**Tarix:** 18–24 Oktyabr 2026
**Hədəf:** `public/tools/csv-merger/index.html` faylı brauzerdə açılır, şablon doldurulub, hər şey görünür.
**Risk:** Şablonu səhv kopyalamaq → `{{placeholder}}` qalır → SEO pozulur.

### Gündəlik Task-lar

**Bazar ertəsi (19 Okt):**
- [ ] `_template/tool.html`-i `public/tools/csv-merger/index.html`-ə kopyala
- [ ] Bütün `{{PLACEHOLDER}}`-ləri tap: `grep -n "{{" public/tools/csv-merger/index.html`
- [ ] `{{TOOL_NAME}}` → `CSV Merger`
- [ ] `{{TOOL_SLUG}}` → `csv-merger`
- [ ] `{{TOOL_DESCRIPTION}}` → `Merge multiple CSV files in your browser. No upload. No server.`
- [ ] `{{TOOL_TECH}}` → `PapaParse and Web Workers`

**Çərşənbə axşamı (20 Okt):**
- [ ] `{{TOOL_LIBRARY}}` → `<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js" defer></script>`
- [ ] `<title>` → `CSV Merger — Merge CSV Files Locally | nosend.dev`
- [ ] `<meta name="description">` → `Merge multiple CSV files in your browser. Files never leave your device. Free, private, no signup.`
- [ ] `<link rel="canonical">` → `https://nosend.dev/tools/csv-merger/`

**Çərşənbə (21 Okt):**
- [ ] Dropzone HTML-i yoxla (`<input type="file" multiple accept=".csv">`)
- [ ] Options UI əlavə et:
  ```html
  <fieldset>
    <legend>Options</legend>
    <label><input type="checkbox" id="opt-headers" checked> First row is header</label>
    <label><input type="radio" name="mode" value="append" checked> Append</label>
    <label><input type="radio" name="mode" value="interleave"> Interleave</label>
  </fieldset>
  ```
- [ ] Result UI əlavə et:
  ```html
  <div id="result" hidden>
    <p><strong id="result-count"></strong> rows merged from <strong id="result-files"></strong> files.</p>
    <button id="download-btn" class="btn btn-primary">Download merged.csv</button>
  </div>
  ```

**Cümə axşamı (22 Okt):**
- [ ] `processFiles()`, `collectOptions()`, `renderResult()` funksiyalarının skeleton-u yaz
- [ ] `console.log('CSV Merger loaded')` əlavə et — yoxlamaq üçün
- [ ] `common.js`, `license.js` yükləndiyini yoxla (DevTools Console-da xəta olmamalıdır)

**Cümə (23 Okt):**
- [ ] Mobile görünüşü yoxla (DevTools → 375px width)
- [ ] Dark mode yoxla (`prefers-color-scheme: dark`)
- [ ] Accessibility: Tab ilə bütün elementlərə çatmaq mümkündürmü?
- [ ] `noscript` xəbərdarlığı görünür?

**Şənbə (24 Okt):**
- [ ] `git add public/tools/csv-merger/index.html`
- [ ] `git commit -m "feat(csv-merger): HTML/CSS skeleton from template"`
- [ ] `git push`
- [ ] Həftəlik review yaz (`docs/strategy.md`-yə)

**Bazar (25 Okt):** **İSTİRAHƏT** (Qızıl Qayda #2)

### ✅ Həftə 1 — Definition of Done

Aşağıdakıların **hamısı** doğrudursa, Həftə 1 bitib:

- [ ] `public/tools/csv-merger/index.html` mövcuddur
- [ ] Brauzerdə açılır, heç bir JS xətası yoxdur
- [ ] `{{` ilə başlayan heç bir placeholder qalmayıb
- [ ] `<title>`, `<meta description>`, `<link canonical>` doldurulub
- [ ] PapaParse CDN yüklənir (Network tab)
- [ ] Dropzone, options, result bölmələri görünür
- [ ] Mobile (375px) və desktop (1440px) işləyir
- [ ] Dark mode işləyir
- [ ] Git commit push edilib
- [ ] `docs/strategy.md`-də həftəlik qeyd var

### ⚠️ Həftə 1 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| Placeholder unudulur | Yüksək | `grep -n "{{" public/tools/csv-merger/index.html` — sıfır nəticə |
| PapaParse CDN 404 | Aşağı | `curl -I https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js` |
| Şablonun inline CSS-i konflikt yaradır | Orta | `style.css`-dəki sinif adlarını yoxla |

---

## 📅 HƏFTƏ 2 — CSV Merger Məntiq

**Tarix:** 25–31 Oktyabr 2026
**Hədəf:** CSV faylları real olaraq birləşir, download işləyir.
**Risk:** `worker: true` unudulur → 100 MB+ fayl brauzeri dondurur.

### Gündəlik Task-lar

**Bazar ertəsi (26 Okt):**
- [ ] `processFiles()` funksiyasını tam yaz:
  ```javascript
  async function processFiles(files, options) {
    const results = [];
    for (const file of files) {
      const text = await file.text();
      const parsed = Papa.parse(text, {
        header: options.headers,
        skipEmptyLines: true,
        worker: true  // ⚠️ MÜTLƏQ
      });
      results.push(parsed.data);
    }
    return mergeRows(results, options.mode);
  }
  ```
- [ ] `mergeRows()` funksiyasını yaz (append + interleave)

**Çərşənbə axşamı (27 Okt):**
- [ ] `renderResult()` funksiyasını yaz:
  ```javascript
  function renderResult(merged, fileCount) {
    document.getElementById('result-count').textContent = merged.length;
    document.getElementById('result-files').textContent = fileCount;
    document.getElementById('result').hidden = false;
  }
  ```
- [ ] Download düyməsini işə sal:
  ```javascript
  document.getElementById('download-btn').addEventListener('click', () => {
    const csv = Papa.unparse(mergedData);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged.csv';
    a.click();
    URL.revokeObjectURL(url);  // ⚠️ MÜTLƏQ
  });
  ```

**Çərşənbə (28 Okt):**
- [ ] Test faylları hazırla: `test1.csv` (10 sətir), `test2.csv` (5 sətir), `test3.csv` (1000 sətir)
- [ ] Append rejimi test et
- [ ] Interleave rejimi test et
- [ ] Header on/off test et
- [ ] Səhv CSV (broken quotes) test et — xəta mesajı göstərməlidir

**Cümə axşamı (29 Okt):**
- [ ] 100 MB CSV ilə stress test (`worker: true` işlədiyini yoxla)
- [ ] DevTools → Network → **Upload: 0 B** yoxla
- [ ] DevTools → Memory → 10 dəfə ardıcıl emal → memory leak yoxdur?

**Cümə (30 Okt):**
- [ ] `license.js` premium gate əlavə et (stub rejimdə):
  ```javascript
  if (!(await window.nosendLicense.checkPremium()).premium) {
    if (!window.nosendLicense.canUseFree()) {
      showUpgradePrompt();
      return;
    }
  }
  ```
- [ ] `incrementUsage()` çağırışı əlavə et

**Şənbə (31 Okt):**
- [ ] `git commit -m "feat(csv-merger): working merge logic with PapaParse worker"`
- [ ] `git push`
- [ ] Həftəlik review

**Bazar (1 Noy):** **İSTİRAHƏT**

### ✅ Həftə 2 — Definition of Done

- [ ] 3 test faylı uğurla birləşir
- [ ] Append və interleave rejimləri işləyir
- [ ] Header on/off işləyir
- [ ] Broken CSV xəta mesajı göstərir
- [ ] 100 MB CSV 5 saniyə ərzində emal olunur
- [ ] Network tab-da **upload: 0 B**
- [ ] `URL.revokeObjectURL()` çağırılır (20+ emaldan sonra memory artmır)
- [ ] Premium gate stub rejimdə işləyir
- [ ] Git commit push edilib

### ⚠️ Həftə 2 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| `worker: true` unudulub | Orta | Kod review-da yoxla: `grep "worker: true" public/tools/csv-merger/index.html` |
| `URL.revokeObjectURL()` unudulub | Orta | `chrome://memory` ilə 20 emaldan sonra yaddaşı yoxla |
| 100 MB CSV brauzeri dondurur | Orta | `worker: true` + progress göstərici |

---

## 📅 HƏFTƏ 3 — Cloudflare Pages Deploy + Domen

**Tarix:** 1–7 Noyabr 2026
**Hədəf:** `https://nosend.dev` canlı, HTTPS işləyir, ilk deploy.
**Risk:** `_headers` və `_redirects` səhv yazılır → security header-lər itir.

### Gündəlik Task-lar

**Bazar ertəsi (2 Noy):**
- [ ] `nosend.dev` domenini Cloudflare Registrar-dan al ($15–$20)
- [ ] Cloudflare hesabı yarat (pulsuz)
- [ ] DNS-i Cloudflare-ə yönləndir

**Çərşənbə axşamı (3 Noy):**
- [ ] GitHub-da **private** repo yarat: `nosend.dev`
- [ ] `.gitignore` faylını yoxla (`.env`, `.dev.vars`, `node_modules/`, `.wrangler/` — hamısı var?)
- [ ] `git remote add origin git@github.com:<username>/nosend.dev.git`
- [ ] `git push -u origin main`

**Çərşənbə (4 Noy):**
- [ ] Cloudflare Pages → Create project → connect GitHub repo
- [ ] Build command: *(boş)*
- [ ] Build output directory: `public`
- [ ] Deploy başlat
- [ ] İlk deploy uğurlu? `https://nosend-dev.pages.dev` açılır?

**Cümə axşamı (5 Noy):**
- [ ] Custom domain əlavə et: `nosend.dev`
- [ ] HTTPS avtomatik aktivləşir (Cloudflare SSL)
- [ ] `https://nosend.dev` yoxla — `index.html` görünür?
- [ ] `_headers` işləyir? `curl -I https://nosend.dev` → `Content-Security-Policy` başlığı var?
- [ ] `_redirects` işləyir? `curl -I https://nosend.dev/index.html` → 301 `https://nosend.dev/`?

**Cümə (6 Noy):**
- [ ] `https://nosend.dev/tools/csv-merger/` açılır?
- [ ] Mobile-də test et (real telefon)
- [ ] SSL Labs test: `https://www.ssllabs.com/ssltest/analyze.html?d=nosend.dev` → **A+** olmalıdır

**Şənbə (7 Noy):**
- [ ] `git commit -m "chore: initial Cloudflare Pages deployment"`
- [ ] Həftəlik review

**Bazar (8 Noy):** **İSTİRAHƏT**

### ✅ Həftə 3 — Definition of Done

- [ ] `https://nosend.dev` canlı, HTTPS işləyir
- [ ] `https://nosend.dev/tools/csv-merger/` işləyir
- [ ] `_headers` tətbiq olunur (`curl -I` ilə yoxlanılıb)
- [ ] `_redirects` tətbiq olunur (`curl -I` ilə yoxlanılıb)
- [ ] SSL Labs grade: **A+**
- [ ] Mobile-də real telefon test keçib
- [ ] GitHub repo **private**-dir
- [ ] `.gitignore` sızma yoxlaması: `git log --all --full-history -- .env` → boş

### ⚠️ Həftə 3 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| `.env` sızıb | Aşağı | `git log --all --full-history -- "*.env"` → sıfır nəticə |
| `_headers` səhv sintaksis | Orta | Cloudflare docs ilə müqayisə et |
| DNS propagasiyası gecikir | Orta | 24 saat gözlə, sonra yoxla |

---

## 📅 HƏFTƏ 4 — JSON Formatter + Image Compressor

**Tarix:** 8–14 Noyabr 2026
**Hədəf:** 3 alət işlək vəziyyətdə (CSV Merger, JSON Formatter, Image Compressor).
**Risk:** 2 aləti 1 həftədə bitirmək — səthə çıxma riski.

### Gündəlik Task-lar

**Bazar ertəsi (9 Noy) — JSON Formatter:**
- [ ] `_template/tool.html` → `public/tools/json-formatter/index.html`
- [ ] **Dropzone-u SİL** — textarea ilə əvəz et:
  ```html
  <textarea id="json-input" rows="15" placeholder='{"paste":"json here"}'></textarea>
  <div class="btn-group">
    <button data-action="format" class="btn btn-primary">Format</button>
    <button data-action="minify" class="btn btn-secondary">Minify</button>
    <button data-action="validate" class="btn btn-secondary">Validate</button>
  </div>
  <textarea id="json-output" rows="15" readonly></textarea>
  ```
- [ ] `{{TOOL_LIBRARY}}` → **boş** (native JSON.parse)

**Çərşənbə axşamı (10 Noy) — JSON Formatter məntiq:**
- [ ] Format funksiyası:
  ```javascript
  function formatJSON() {
    try {
      const input = document.getElementById('json-input').value;
      const parsed = JSON.parse(input);
      document.getElementById('json-output').value = JSON.stringify(parsed, null, 2);
      showSuccess('Valid JSON');
    } catch (e) {
      showError(e.message);
    }
  }
  ```
- [ ] Minify, Validate funksiyaları
- [ ] Test: valid JSON, broken JSON, empty input, huge JSON (1 MB)

**Çərşənbə (11 Noy) — Image Compressor:**
- [ ] `_template/tool.html` → `public/tools/image-compressor/index.html`
- [ ] Options UI:
  ```html
  <label>Quality: <input type="range" id="quality" min="10" max="100" value="80"></label>
  <label>Max width (px): <input type="number" id="max-width" value="1920" min="100" max="8000"></label>
  ```
- [ ] `compressImage()` funksiyası:
  ```javascript
  async function compressImage(file, quality, maxWidth) {
    const img = await loadImage(file);
    const scale = Math.min(1, maxWidth / img.width);
    const canvas = document.createElement('canvas');
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return new Promise((resolve) => {
      canvas.toBlob(resolve, 'image/jpeg', quality / 100);
    });
  }
  ```

**Cümə axşamı (12 Noy) — Image Compressor test:**
- [ ] 5 MB JPEG, 10 MB PNG, 2 MB WebP test et
- [ ] `URL.revokeObjectURL()` çağırışını yoxla
- [ ] 20 şəkil ardıcıl emal → memory artmır?
- [ ] Mobile-də test

**Cümə (13 Noy) — 3 alət integration:**
- [ ] `index.html`-də 3 alət kartı **"Available"** badge, digər 3 **"Coming soon"**
- [ ] Hər 3 alətə link işləyir?
- [ ] Hər 3 alət mobile-də işləyir?

**Şənbə (14 Noy):**
- [ ] `git commit -m "feat: add JSON Formatter and Image Compressor tools"`
- [ ] Həftəlik review

**Bazar (15 Noy):** **İSTİRAHƏT**

### ✅ Həftə 4 — Definition of Done

**JSON Formatter:**
- [ ] Format, minify, validate işləyir
- [ ] Broken JSON xəta göstərir
- [ ] 1 MB JSON problemsiz emal olunur
- [ ] Network tab: **0 upload**

**Image Compressor:**
- [ ] Quality slider işləyir (10–100)
- [ ] Max width işləyir
- [ ] 10 MB PNG → < 2 MB JPEG
- [ ] 20 şəkil ardıcıl → memory leak yoxdur
- [ ] Network tab: **0 upload**

**Integration:**
- [ ] `index.html`-də 3 alət "Available", 3 alət "Coming soon"
- [ ] Bütün linklər işləyir
- [ ] Bütün alətlər mobile-də işləyir

### ⚠️ Həftə 4 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| 2 alət 1 həftədə bitmir | Yüksək | Image Compressor-u Həftə 6-ya keçir — JSON Formatter prioritet |
| JSON Formatter-də dropzone qalır | Orta | `grep dropzone public/tools/json-formatter/index.html` → sıfır |
| Image Compressor yaddaş sızdırır | Orta | `URL.revokeObjectURL()` hər `loadImage()` sonrası |

---

## 📅 HƏFTƏ 5 — SEO Təməli

**Tarix:** 15–21 Noyabr 2026
**Hədəf:** Google Search Console qeydiyyatı, `sitemap.xml` hazır, bütün səhifələrdə meta tam.
**Risk:** `sitemap.xml` səhv URL → Google indeksləşdirmir.

### Gündəlik Task-lar

**Bazar ertəsi (16 Noy):**
- [ ] `public/sitemap.xml` yarat (31 fayl siyahısına uyğun)
- [ ] Bütün `<loc>` URL-ləri **absolute** və **HTTPS** olmalıdır
- [ ] `lastmod` tarixləri düzgün (v2 planına uyğun)

**Çərşənbə axşamı (17 Noy):**
- [ ] `robots.txt`-i yoxla: `Sitemap: https://nosend.dev/sitemap.xml` var?
- [ ] Google Search Console → property əlavə et: `https://nosend.dev`
- [ ] DNS TXT record ilə verify et
- [ ] `sitemap.xml` submit et

**Çərşənbə (18 Noy):**
- [ ] Bing Webmaster Tools qeydiyyat
- [ ] Yandex Webmaster qeydiyyat (Azərbaycan üçün)
- [ ] `sitemap.xml` submit (Bing + Yandex)

**Cümə axşamı (19 Noy):**
- [ ] Bütün səhifələrdə `<title>` uzunluğu 50–60 simvol?
- [ ] Bütün `<meta description>` 140–160 simvol?
- [ ] Bütün səhifələrdə `canonical` var?
- [ ] Bütün OG/Twitter meta-ları var?

**Cümə (20 Noy):**
- [ ] JSON-LD schema yoxla: `https://validator.schema.org/`
  - `index.html` → WebSite + Organization + ItemList
  - `tools/*` → WebApplication + BreadcrumbList
  - `privacy.html`, `terms.html` → WebPage + BreadcrumbList
- [ ] Rich Results Test: `https://search.google.com/test/rich-results`

**Şənbə (21 Noy):**
- [ ] `git commit -m "seo: add sitemap, verify Search Console, audit meta tags"`
- [ ] Həftəlik review

**Bazar (22 Noy):** **İSTİRAHƏT**

### ✅ Həftə 5 — Definition of Done

- [ ] `sitemap.xml` mövcuddur, bütün URL-lər HTTPS
- [ ] Google Search Console verify olunub
- [ ] Bing Webmaster verify olunub
- [ ] Yandex Webmaster verify olunub
- [ ] Sitemap hər 3 platformaya submit edilib
- [ ] Bütün `<title>` 50–60 simvol
- [ ] Bütün `<meta description>` 140–160 simvol
- [ ] Bütün JSON-LD schema valid (Schema.org validator)
- [ ] Rich Results Test: **0 xəta**

### ⚠️ Həftə 5 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| Sitemap-da səhv URL | Orta | `xmllint --noout public/sitemap.xml` + əl ilə yoxla |
| JSON-LD schema xətası | Orta | Schema.org validator ilə yoxla |
| Search Console verify fail | Aşağı | DNS TXT record 24 saat gözlə |

---

## 📅 HƏFTƏ 6 — Image Compressor Refinement + 5 pSEO Səhifə

**Tarix:** 22–28 Noyabr 2026
**Hədəf:** Image Compressor production-ready + 5 pSEO bloq səhifəsi.
**Risk:** pSEO səhifələri "thin content" olur → Google penalty.

### Gündəlik Task-lar

**Bazar ertəsi (23 Noy) — Image Compressor:**
- [ ] Progress bar əlavə et (böyük şəkillər üçün)
- [ ] Batch emal əlavə et (çoxlu şəkil)
- [ ] Xəta halları: corrupted file, unsupported format
- [ ] 50 MB limit yoxla: `if (file.size > 50 * 1024 * 1024) showError(...)`

**Çərşənbə axşamı (24 Noy) — pSEO #1:**
- [ ] `public/blog/how-to-merge-csv-files.html`
- [ ] 800–1,200 söz
- [ ] H1, H2, H3 struktur
- [ ] CTA: `Try CSV Merger` (link)
- [ ] Internal link: `index.html`, `tools/csv-merger/`
- [ ] JSON-LD: BlogPosting

**Çərşənbə (25 Noy) — pSEO #2:**
- [ ] `public/blog/why-privacy-matters-for-developers.html`
- [ ] 1,000–1,500 söz
- [ ] Real statistika (mənbə ilə)

**Cümə axşamı (26 Noy) — pSEO #3:**
- [ ] `public/blog/json-formatter-guide.html`
- [ ] 800 söz
- [ ] Kod nümunələri

**Cümə (27 Noy) — pSEO #4 + #5:**
- [ ] `public/blog/image-compression-explained.html`
- [ ] `public/blog/browser-based-file-processing.html`
- [ ] Hər biri 800+ söz

**Şənbə (28 Noy):**
- [ ] Bütün pSEO səhifələrini `sitemap.xml`-ə əlavə et
- [ ] Search Console → URL inspection → hər səhifə üçün index tələb et
- [ ] `git commit -m "feat: refine image compressor, add 5 pSEO pages"`
- [ ] Həftəlik review

**Bazar (29 Noy):** **İSTİRAHƏT**

### ✅ Həftə 6 — Definition of Done

**Image Compressor:**
- [ ] Progress bar işləyir
- [ ] Batch emal işləyir (10+ şəkil)
- [ ] Corrupted file xəta göstərir
- [ ] 50 MB+ limit xəbərdarlığı

**pSEO:**
- [ ] 5 səhifə mövcuddur, hər biri 800+ söz
- [ ] Hər səhifədə H1, H2, H3 düzgün
- [ ] Hər səhifədə JSON-LD BlogPosting
- [ ] Hər səhifədə internal link
- [ ] `sitemap.xml`-də 5 yeni URL
- [ ] Search Console-da index tələbi göndərilib

### ⚠️ Həftə 6 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| pSEO "thin content" | Orta | Hər səhifə 800+ söz, real dəyər |
| Duplicate content | Orta | Hər səhifədə unikal mövzu |
| Image Compressor batch xətası | Orta | `Promise.all` deyil, ardıcıl emal |

---

## 📅 HƏFTƏ 7 — Səssiz Lansman (Reddit / HN)

**Tarix:** 29 Noyabr – 5 Dekabr 2026
**Hədəf:** İlk 100 ziyarətçi, ilk real istifadəçi feedback-i.
**Risk:** Spam kimi qəbul edilmək → Reddit/HN-də ban.

### Gündəlik Task-lar

**Bazar ertəsi (30 Noy):**
- [ ] HN üçün texniki post hazırla (Show HN **DEYİL** — `Show HN: WIP` də **DEYİL**)
- [ ] Başlıq: `A browser-only CSV merger (no upload, no server)` — səmimi, texniki
- [ ] Post: texniki detallar (PapaParse worker, memory limit, səbəb)

**Çərşənbə axşamı (1 Dek):**
- [ ] Reddit → `r/webdev` post hazırla
- [ ] Başlıq: `I built 3 file tools that run 100% in your browser — feedback welcome`
- [ ] Post: texniki qərar (vanilla JS, nə üçün framework yox), demo link

**Çərşənbə (2 Dek):**
- [ ] Reddit → `r/privacy` post hazırla
- [ ] Başlıq: `Browser-only CSV/JSON/image tools — verify with Network tab`
- [ ] Xüsusi vurğu: "Network tab açın, upload görməyəcəksiniz"

**Cümə axşamı (3 Dek):**
- [ ] Reddit → `r/selfhosted` post
- [ ] Xüsusi vurğu: privacy, offline capability

**Cümə (4 Dek):**
- [ ] Bütün postların cavablarını izləy (ilk 24 saat kritikdir)
- [ ] Bug report-ları qeyd et (`docs/strategy.md`)
- [ ] Hər postun performansını yaz: upvote, comment, click

**Şənbə (5 Dek):**
- [ ] Analytics yoxla: Cloudflare Analytics → neçə ziyarətçi?
- [ ] Hədəf: 100+ unikal ziyarətçi
- [ ] Feedback-i kateqoriyalaşdır: bug / feature request / şikayət
- [ ] `git commit -m "docs: log silent launch results"`
- [ ] Həftəlik review

**Bazar (6 Dek):** **İSTİRAHƏT**

### ✅ Həftə 7 — Definition of Done

- [ ] 4 post paylaşılıb (HN + 3 subreddit)
- [ ] İlk 24 saat cavablar izlənib
- [ ] **100+ unikal ziyarətçi** (hədəf)
- [ ] Feedback kateqoriyalaşdırılıb
- [ ] Heç bir ban/spam warning yoxdur
- [ ] Bug-lar `docs/strategy.md`-də qeyd olunub

### ⚠️ Həftə 7 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| Reddit ban | Orta | Post səmimi, spam deyil, hər subreddit qaydalarına bax |
| HN post sıfır upvote | Orta | Başlıq texniki, səmimi; "Show HN" deyil |
| 100 ziyarətçi hədəfə çatmır | Orta | Həftə 8-ə keç, trafik sonra gələcək |

---

## 📅 HƏFTƏ 8 — B2B White-Label Səhifəsi

**Tarix:** 6–12 Dekabr 2026
**Hədəf:** `public/business.html` canlı, embed nümunəsi işləyir.
**Risk:** B2B səhifəsi "satış dili" ilə yazılır → developer-lər inanmır, hüquq firmaları inanmır.

### Gündəlik Task-lar

**Bazar ertəsi (7 Dek):**
- [ ] `public/business.html` yarat (v2 strukturuna uyğun)
- [ ] Hero: `Privacy-first document processing for your business`
- [ ] 3 kart: Zero data transfer, Compliance-ready, Embed in minutes

**Çərşənbə axşamı (8 Dek):**
- [ ] Pricing table: Starter $299, Professional $999, Enterprise $2,000+
- [ ] `pricing-featured` sinfi Professional üçün
- [ ] `pricing.html`-dəki CSS ilə uyğunlaşdır

**Çərşənbə (9 Dek):**
- [ ] Embed nümunəsi:
  ```html
  <pre><code>&lt;script src="https://cdn.nosend.dev/v1/nosend.js" defer&gt;&lt;/script&gt;
  &lt;div data-nosend-tool="csv-merger"&gt;&lt;/div&gt;</code></pre>
  ```

**Cümə axşamı (10 Dek):**
- [ ] Əlaqə formu: `action="mailto:business@nosend.dev"`
- [ ] Form field-ləri: name, company, email, message
- [ ] `required` atributları

**Cümə (11 Dek):**
- [ ] `_redirects`-ə əlavə et: `/business → /business.html`
- [ ] `_redirects`-ə əlavə et: `/enterprise → /business.html`
- [ ] `sitemap.xml`-ə əlavə et: `<priority>0.9</priority>`
- [ ] Mobile-də test

**Şənbə (12 Dek):**
- [ ] `git commit -m "feat(b2b): add business.html with pricing and embed demo"`
- [ ] Həftəlik review

**Bazar (13 Dek):** **İSTİRAHƏT**

### ✅ Həftə 8 — Definition of Done

- [ ] `https://nosend.dev/business.html` canlı
- [ ] Hero, 3 kart, pricing table, embed nümunəsi, əlaqə formu — hamısı görünür
- [ ] `/business` və `/enterprise` redirect işləyir
- [ ] `sitemap.xml`-də `business.html` priority 0.9
- [ ] Mobile-də test keçib
- [ ] `business@nosend.dev` e-poçt işləyir (test e-poçt göndər)
- [ ] "GDPR Article 28 elimination" ifadəsi var

### ⚠️ Həftə 8 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| B2B dil "satış"dan çox "marketinq" | Orta | Texniki dəqiqlik: "files never leave the browser" |
| Əlaqə formu işləmir | Orta | Test e-poçt göndər, `mailto:` linkini yoxla |
| Pricing table CSS-i sınıq | Orta | `business.html` üçün yeni CSS komponentləri əlavə et |

---

## 📅 HƏFTƏ 9 — İlk 20 B2B E-poçt

**Tarix:** 13–19 Dekabr 2026
**Hədəf:** 20 B2B e-poçt göndər, 2–5 cavab al.
**Risk:** E-poçtlar generic olur → cavab dərəcəsi 0.2%.

### Gündəlik Task-lar

**Bazar ertəsi (14 Dek):**
- [ ] `docs/b2b-emails.md` yarat (4 şablon: hüquq, mühasibat, agentlik, SaaS)
- [ ] Hər şablon 150–200 söz
- [ ] Hər şablonda "15 dəqiqəlik demo" təklifi

**Çərşənbə axşamı (15 Dek):**
- [ ] 20 hədəf müəssisə siyahısı hazırla:
  - 5 hüquq firması (Bakı, remote)
  - 5 mühasibat şirkəti
  - 5 kiçik agentlik
  - 5 SaaS startup
- [ ] Hər müəssisə üçün qərar qəbul edən şəxsin adı + e-poçt

**Çərşənbə (16 Dek):**
- [ ] İlk 10 e-poçt göndər (şəxsi e-poçtdan: `cavidan56@proton.me`)
- [ ] BCC **YOX** — hər biri fərdi
- [ ] Hər e-poçtda fərdiləşdirmə: şirkət adı, konkret istifadə halı

**Cümə axşamı (17 Dek):**
- [ ] Növbəti 10 e-poçt göndər
- [ ] `docs/b2b-emails.md`-də jurnal: kimə, nə vaxt, hansı şablon

**Cümə (18 Dek):**
- [ ] Cavabları izlə
- [ ] Cavab verənlərə 15 dəqiqəlik demo təklif et
- [ ] Demo üçün ekran paylaşımı hazırla (Google Meet / Zoom)

**Şənbə (19 Dek):**
- [ ] Nəticələri yaz: neçə göndərildi, neçə açıldı, neçə cavab verdi
- [ ] Hədəf: **2–5 cavab**
- [ ] `git commit -m "docs: B2B outreach log week 9"`
- [ ] Həftəlik review

**Bazar (20 Dek):** **İSTİRAHƏT**

### ✅ Həftə 9 — Definition of Done

- [ ] `docs/b2b-emails.md` 4 şablonla hazırdır
- [ ] 20 hədəf müəssisə müəyyən edilib
- [ ] 20 e-poçt göndərilib
- [ ] Hər e-poçt fərdiləşdirilib
- [ ] Jurnal aparılır (kimə, nə vaxt, hansı şablon)
- [ ] **2–5 cavab** alınıb (hədəf)
- [ ] Ən azı 1 demo planlaşdırılıb

### ⚠️ Həftə 9 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| Cavab dərəcəsi < 2% | Orta | Şablonu dəyiş, "15 dəqiqə" təklifini vurğula |
| E-poçt spam-a düşür | Orta | Şəxsi e-poçt, BCC yox, HTML yox, plain text |
| Demo baş tutmur | Orta | 3 fərqli vaxt təklif et |

---

## 📅 HƏFTƏ 10 — Cloudflare Worker + Lemon Squeezy Hazırlıq

**Tarix:** 20–26 Dekabr 2026
**Hədəf:** Worker production-a hazır (deploy yox, hazır), Lemon Squeezy hesab sənədləri hazır.
**Risk:** Worker-də secret sızır → Lemon Squeezy hesabı oğurlanır.

### Gündəlik Task-lar

**Bazar ertəsi (21 Dek):**
- [ ] `worker/package.json` yarat (v2 strukturuna uyğun)
- [ ] `npm install` işləyir?
- [ ] `worker/src/index.js` yarat (v2 strukturuna uyğun)
- [ ] `wrangler dev` lokal işləyir?

**Çərşənbə axşamı (22 Dek):**
- [ ] `handleValidate()` funksiyasını yaz
- [ ] CORS headers düzgün?
- [ ] `OPTIONS` preflight işləyir?
- [ ] `AbortController` timeout 8 saniyə?

**Çərşənbə (23 Dek):**
- [ ] `wrangler.toml`-u yoxla:
  - `name = "nosend-license"`
  - `main = "src/index.js"`
  - `compatibility_date = "2026-10-01"`
  - `[env.production.vars]` → `ALLOWED_ORIGIN = "https://nosend.dev"`
- [ ] `wrangler secret put LS_API_KEY` (test dəyəri ilə)
- [ ] `curl -X POST http://localhost:8787/validate -d '{"licenseKey":"test"}'` işləyir?

**Cümə axşamı (24 Dek):**
- [ ] Lemon Squeezy hesab sənədləri hazırla:
  - Şəxsiyyət vəsiqəsi skanı
  - Valideyn razılığı (lazım olsa)
  - Bank hesabı məlumatları (18 Yanvarda açılacaq)
- [ ] `pricing.html`-i v2 qiymətlərinə yenilə:
  - Free: 30 ops/ay, 25 MB
  - Premium: $3/ay
  - Lifetime: $19 (ilk 100)
- [ ] `license.js` free tier dəyərlərini yenilə:
  - `monthlyLimit: 30` (əvvəl 10)
  - `maxFileSizeMB: 25` (əvvəl 10)

**Cümə (25 Dek):**
- [ ] `worker/src/index.js` test coverage: `npm test` işləyir?
- [ ] `wrangler deploy` (dev environment) işləyir?
- [ ] Worker URL yoxla: `curl https://nosend-license.<username>.workers.dev/health`

**Şənbə (26 Dek):**
- [ ] `git commit -m "feat(worker): add license validation endpoint, update v2 pricing"`
- [ ] Həftəlik review

**Bazar (27 Dek):** **İSTİRAHƏT**

### ✅ Həftə 10 — Definition of Done

- [ ] `worker/package.json` mövcuddur, `npm install` işləyir
- [ ] `worker/src/index.js` mövcuddur
- [ ] `wrangler dev` lokal işləyir
- [ ] `POST /validate` işləyir (test key ilə)
- [ ] `OPTIONS /validate` (CORS preflight) işləyir
- [ ] `GET /health` işləyir
- [ ] `wrangler deploy` (dev) işləyir
- [ ] `pricing.html` v2 qiymətləri göstərir ($3/$19)
- [ ] `license.js` v2 free tier ($30 ops, 25 MB)
- [ ] Lemon Squeezy sənədləri hazır (18 Yanvarda submit üçün)
- [ ] `LS_API_KEY` **heç bir** faylda hardcode deyil

### ⚠️ Həftə 10 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| `LS_API_KEY` hardcode | Orta | `grep -r "LS_API_KEY" worker/src/` → yalnız `env.LS_API_KEY` |
| `pricing.html` yenilənmir | Orta | Vizual yoxla: $3/$19 görünür? |
| `license.js` free tier yenilənmir | Orta | `grep "monthlyLimit" public/assets/js/license.js` → 30 |
| Lemon Squeezy KYC rədd | Orta | Sənədləri 2 dəfə yoxla, dəstək ilə əlaqə saxla |

---

## 📅 HƏFTƏ 11 — Premium Məntiq (Test Rejimində)

**Tarix:** 27 Dekabr 2026 – 2 Yanvar 2027
**Hədəf:** 1 alətdə premium gate işləyir (stub rejimdə), worker mock ilə.
**Risk:** Premium bypass mümkündür → gəlir modeli çökür.

### Gündəlik Task-lar

**Bazar ertəsi (28 Dek):**
- [ ] `license.js` yoxla: `mode: 'stub'` hələ də?
- [ ] `checkPremium()` mock worker ilə işləyir?
- [ ] `incrementUsage()` işləyir?
- [ ] `canUseFree()` 30 limitini yoxlayır?

**Çərşənbə axşamı (29 Dek):**
- [ ] `csv-merger`-də premium gate test et:
  - 30 əməliyyat et → 31-ci bloklanır
  - Upgrade prompt göstərilir
- [ ] `json-formatter`-də premium gate test et
- [ ] `image-compressor`-də premium gate test et

**Çərşənbə (30 Dek):**
- [ ] `localStorage.clear()` ilə bypass test et
- [ ] Worker hər dəfə yoxlayır? (cache 1 saat, sonra yenidən)
- [ ] `F12` ilə `window.nosendLicense` dəyişdirilə bilir?
  - `Object.freeze` işləyir?

**Cümə axşamı (31 Dek):**
- [ ] Real Lemon Squeezy test key ilə worker-i test et (stub rejimdə)
- [ ] Valid key → `premium: true`
- [ ] Invalid key → `premium: false`
- [ ] Expired key → `premium: false`

**Cümə (1 Yan):**
- [ ] **Yeni il istirahəti** — kod yoxdur, sadəcə plan

**Şənbə (2 Yan):**
- [ ] `git commit -m "feat(license): premium gating live in test mode for 3 tools"`
- [ ] Həftəlik review

**Bazar (3 Yan):** **İSTİRAHƏT**

### ✅ Həftə 11 — Definition of Done

- [ ] 3 alətdə premium gate stub rejimdə işləyir
- [ ] 30 əməliyyat limiti işləyir
- [ ] `localStorage.clear()` bypass etmir (worker yoxlaması)
- [ ] `Object.freeze` bypass etmir
- [ ] Valid/invalid/expired key-lər düzgün cavab verir
- [ ] Upgrade prompt göstərilir
- [ ] Heç bir alət **həqiqi** ödəniş almır (stub rejim)

### ⚠️ Həftə 11 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| Premium bypass mümkündür | Orta | Worker hər dəfə yoxlayır, `localStorage` etibar edilmir |
| Stub rejimdə səhvən production | Aşağı | `grep "mode:" public/assets/js/license.js` → `'stub'` |
| 30 limit çox aşağı | Orta | Real istifadəyə bax, lazım olsa artır |

---

## 📅 HƏFTƏ 12 — SEO Genişlənmə + Lansman Materialları

**Tarix:** 3–9 Yanvar 2027
**Hədəf:** 20+ səhifə, lansman materialları hazır.
**Risk:** Lansman materiallarını son günə saxlayır → keyfiyyət aşağı.

### Gündəlik Task-lar

**Bazar ertəsi (4 Yan):**
- [ ] Daha 10 pSEO səhifəsi yaz:
  - `csv-to-json-guide.html`
  - `image-compression-tips.html`
  - `pdf-merging-privacy.html`
  - `gdpr-article-28-explained.html`
  - `browser-file-processing-2027.html`
  - `csv-format-explained.html`
  - `json-validation-guide.html`
  - `webp-vs-jpeg-2027.html`
  - `law-firm-document-workflow.html`
  - `accounting-csv-automation.html`
- [ ] Hər biri 800+ söz, H1/H2/H3, CTA, internal link

**Çərşənbə axşamı (5 Yan):**
- [ ] `sitemap.xml`-i yenilə (bütün yeni səhifələr)
- [ ] Search Console → URL inspection → hər yeni səhifə üçün index tələb et
- [ ] Internal link audit: hər səhifədə ən azı 2 internal link

**Çərşənbə (6 Yan):**
- [ ] Product Hunt lansman materialları:
  - Tagline: `Privacy-first file tools. No upload. No server.`
  - Description: 260 simvol
  - 3 şəkil (1200×630, 1270×760, 600×600)
  - First comment: 150–200 söz, texniki detallar
- [ ] OG image hazırla (`public/assets/img/og-image.png`)
  - 1200×630, < 300 KB
  - Fon: `#0f172a`, başlıq: `nosend.dev`

**Cümə axşamı (7 Yan):**
- [ ] Hacker News "Show HN" postu hazırla:
  - Başlıq: `Show HN: Browser-only file tools — no upload, no server`
  - Body: texniki detallar, demo link, səmimi ton
- [ ] Twitter/X thread hazırla (5–7 tvit)
- [ ] LinkedIn post hazırla (B2B fokus)

**Cümə (8 Yan):**
- [ ] Bütün lansman materiallarını `docs/launch-assets/` qovluğuna yığ
- [ ] `docs/strategy.md`-yə lansman planı yaz
- [ ] Bütün şəkilləri optimallaşdır (TinyPNG ilə)

**Şənbə (9 Yan):**
- [ ] `git commit -m "seo: expand to 20+ pages, prepare launch assets"`
- [ ] Həftəlik review

**Bazar (10 Yan):** **İSTİRAHƏT**

### ✅ Həftə 12 — Definition of Done

- [ ] 20+ səhifə mövcuddur (tools + blog + legal + pricing + business)
- [ ] `sitemap.xml`-də bütün URL-lər var
- [ ] Search Console-da index tələbi göndərilib
- [ ] `og-image.png` hazırdır (1200×630, < 300 KB)
- [ ] Product Hunt materialları hazır (tagline, description, şəkillər, first comment)
- [ ] HN post hazır
- [ ] Twitter thread hazır
- [ ] LinkedIn post hazır
- [ ] Bütün materiallar `docs/launch-assets/`-də

### ⚠️ Həftə 12 — Risk və Azaltma

| Risk | Ehtimal | Azaltma |
|---|---|---|
| 10 pSEO səhifə keyfiyyətsiz | Orta | Hər biri 800+ söz, real dəyər |
| OG image çox böyük | Orta | TinyPNG ilə optimallaşdır |
| Product Hunt materialları son günə qalır | Orta | Həftə 12-nin ilk 3 günü bitir |

---

## 📅 HƏFTƏ 13 — Son Hazırlıq + Bank Sənədləşmə

**Tarix:** 10–17 Yanvar 2027
**Hədəf:** Hər şey 18 Yanvara hazır — sıfır sürpriz.
**Risk:** Son günə çox iş qalır → keyfiyyət aşağı düşür.

### Gündəlik Task-lar

**Bazar ertəsi (11 Yan) — QA:**
- [ ] Bütün 3 alət Chrome, Firefox, Safari-də işləyir?
- [ ] Bütün 3 alət mobile-də (375px) işləyir?
- [ ] Bütün 3 alət **0 upload** (Network tab)?
- [ ] Bütün 3 alətdə premium gate işləyir?

**Çərşənbə axşamı (12 Yan) — Security audit:**
- [ ] `grep -r "LS_API_KEY" .` → yalnız `env.LS_API_KEY`
- [ ] `git log --all --full-history -- "*.env"` → sıfır nəticə
- [ ] `git log --all --full-history -- "*.dev.vars"` → sıfır nəticə
- [ ] `.gitignore` düzgün?
- [ ] `curl -I https://nosend.dev` → bütün security headers var?

**Çərşənbə (13 Yan) — Hüquqi:**
- [ ] `privacy.html` v2 qiymətləri istinad edir? ($3/$19)
- [ ] `terms.html` v2 qiymətləri istinad edir?
- [ ] `pricing.html` v2 qiymətləri göstərir?
- [ ] `license.js` v2 free tier?
- [ ] B2B müqavilə şablonu hazır? (sadə 1 səhifəlik)

**Cümə axşamı (14 Yan) — Bank sənədləşmə:**
- [ ] Şəxsiyyət vəsiqəsi skanı
- [ ] Valideyn razılığı sənədi (lazım olsa)
- [ ] Ünvan sübutu (valideyn adına)
- [ ] Bank hesabı açmaq üçün randevu (18 Yan üçün)
- [ ] Lemon Squeezy KYC sənədləri tam

**Cümə (15 Yan) — Son test:**
- [ ] `worker` production deploy testi (dev environment)
- [ ] `license.js` `mode: 'stub'` → `'production'` **test** et (sonra geri qaytar)
- [ ] `wrangler deploy --env production` (test, sonra geri qaytar)
- [ ] Bütün `_redirects` işləyir?
- [ ] Bütün `_headers` işləyir?

**Şənbə (16 Yan) — Lansman planı:**
- [ ] 18 Yanvar üçün saat-saat plan yaz
- [ ] Product Hunt launch time: 12:01 AM PT (Amerika vaxtı)
- [ ] HN "Show HN" time: 6:00 AM PT
- [ ] Twitter thread: 7:00 AM PT
- [ ] LinkedIn: 8:00 AM PT
- [ ] Bütün materialları `docs/launch-day.md`-də yaz

**Bazar ertəsi (17 Yan) — İstirahət + final review:**
- [ ] **HEÇ BİR KOD YAZMA** — yalnız oxu
- [ ] `docs/launch-day.md`-i oxu
- [ ] 18 Yanvar üçün enerji topla
- [ ] Erkən yat (23:00)

### ✅ Həftə 13 — Definition of Done

- [ ] Bütün QA keçib (3 alət × 3 brauzer × mobile)
- [ ] Security audit təmizdir (heç bir secret sızmayıb)
- [ ] Hüquqi sənədlər v2 qiymətləri ilə
- [ ] Bank sənədləri hazır
- [ ] Lemon Squeezy KYC sənədləri hazır
- [ ] `mode: 'production'` test edilib (geri qaytarılıb)
- [ ] `docs/launch-day.md` hazır
- [ ] 17 Yanvar istirahət günü

---

## 🚀 LANSMan GÜNÜ — 18 YANVAR 2027

**Saat-saat plan (Bakı vaxtı, GMT+4):**

| Vaxt | Fəaliyyət | Məsuliyyət |
|---|---|---|
| 08:00 | Oyan, səhər yeməyi, su | Şəxsi |
| 08:30 | `license.js` `mode: 'stub'` → `'production'` | Kod |
| 08:35 | `git commit -m "release: enable production license validation"` | Kod |
| 08:40 | `wrangler deploy --env production` | Deploy |
| 08:45 | `curl https://api.nosend.dev/health` → `{"status":"ok"}` | Yoxlama |
| 09:00 | Bank hesabı açmaq (valideyn ilə) | Maliyyə |
| 11:00 | Lemon Squeezy KYC submit | Maliyyə |
| 12:00 | PayPal hesabı yarat | Maliyyə |
| 13:00 | **Product Hunt launch** (12:01 AM PT = 12:00 Bakı) | Marketinq |
| 13:30 | HN "Show HN" post | Marketinq |
| 14:00 | Twitter thread | Marketinq |
| 14:30 | LinkedIn post | Marketinq |
| 15:00 | Reddit postlar (r/webdev, r/privacy, r/selfhosted) | Marketinq |
| 16:00 | İlk 10 dost/ailə üzvünə paylaş | Şəxsi |
| 17:00 | Product Hunt kommentlərinə cavab | Marketinq |
| 18:00 | HN kommentlərinə cavab | Marketinq |
| 19:00 | Analytics yoxla (Cloudflare Analytics) | Monitorinq |
| 20:00 | İlk satış yoxla (Lemon Squeezy dashboard) | Maliyyə |
| 21:00 | Günün xülasəsi `docs/strategy.md`-yə | Sənədləşdirmə |
| 22:00 | Erkən yat | Şəxsi |

### Lansman Günü — DoD

- [ ] `license.js` `mode: 'production'`
- [ ] Worker production-a deploy olunub
- [ ] `https://api.nosend.dev/health` işləyir
- [ ] Bank hesabı açılıb
- [ ] Lemon Squeezy KYC submit edilib
- [ ] PayPal hesabı yaradılıb
- [ ] Product Hunt launch edilib
- [ ] HN post paylaşılıb
- [ ] Twitter thread paylaşılıb
- [ ] LinkedIn post paylaşılıb
- [ ] **İlk satış** (hədəf: 1+ lifetime)
- [ ] `docs/strategy.md`-də günün xülasəsi

---

## 📊 Lansman Sonrası — İlk 30 Gün

### Həftə 1 (19–25 Yanvar)

- [ ] Product Hunt/HN kommentlərinə cavab
- [ ] Bug report-ları fix et (kritik olanları)
- [ ] İlk 10 istifadəçi ilə söhbət (e-poçt)
- [ ] Analytics dərin analiz
- [ ] İlk həftənin gəlirini hesabla

### Həftə 2 (26 Yan – 1 Fev)

- [ ] SEO monitorinq (Search Console)
- [ ] İlk B2B cavabları izlə
- [ ] 1-2 B2B demo keçir
- [ ] Pricing optimallaşdır (lazım olsa)

### Həftə 3 (2–8 Fev)

- [ ] Google Analytics dərin analiz
- [ ] Conversion funnel optimallaşdır
- [ ] İlk ayın MRR hesabla
- [ ] Növbəti ayın planı

### Həftə 4 (9–15 Fev)

- [ ] İlk ayın xülasəsi
- [ ] `docs/strategy.md`-yə yaz
- [ ] Növbəti rübün planı
- [ ] İstirahət (1–2 gün)

---

## ⚠️ Risk Reyestri (Bütün 90 Gün)

| # | Risk | Ehtimal | Təsir | Azaltma | Eskalasiya |
|---|---|---|---|---|---|
| 1 | `.env` / `LS_API_KEY` sızır | Aşağı | Çox Yüksək | `.gitignore` + hər commit-dən əvvəl `git status` | Dərhal key rotate + Lemon Squeezy dəstək |
| 2 | 3 alət bitmir | Orta | Yüksək | Hər həftə DoD yoxla, gecikmə varsa prioritet dəyiş | Həftə 6-da qərar: hansı alət post-launch |
| 3 | Motivasiya itkisi (Ay 6–9) | Yüksək | Yüksək | Həftədə 5 gün, 1 istirahət, gündəlik 3 sətir jurnal | 1 həftə tam istirahət |
| 4 | PDF brauzer çökür | Yüksək | Yüksək | 50 MB limit + ardıcıl emal + xəbərdarlıq | PDF Merger post-launch |
| 5 | Premium bypass | Orta | Yüksək | Worker hər dəfə yoxlayır, `localStorage` etibar edilmir | Hər həftə bypass testi |
| 6 | B2B satış uğursuz | Orta | Yüksək | Fərdi satış yastığı, 20+ e-poçt | Şablonu dəyiş, yeni seqment |
| 7 | AdSense rədd | Orta | Orta | 20+ keyfiyyətli səhifə, Ezoic ehtiyat | 18 Yanvardan sonra yenidən müraciət |
| 8 | Lemon Squeezy hesab dondurulur | Aşağı | Orta | Paddle ehtiyat | Dərhal Paddle-a keç |
| 9 | Reddit ban | Orta | Orta | Səmimi post, hər subreddit qaydalarına bax | Yeni hesab deyil — dəstəyə müraciət |
| 10 | Rəqabət sürətli çoxalır | Yüksək | Orta | B2B seqmentə fokus, generic yanaşmadan çəkin | Hüquq vertikalında dərinləş |

---

## 📈 Həftəlik Review Şablonu

Hər Şənbə axşamı 15 dəqiqə:

```markdown
## Həftə X Review — [Tarix]

### Nə bitdi?
- [ ] Task 1
- [ ] Task 2

### Nə bitmədi?
- [ ] Task 3 (səbəb: ...)

### Növbəti həftəyə keçir?
- [ ] Task 3 → Həftə X+1

### Blocker var?
- [ ] Yox / Bəli (nə?)

### Metriklər:
- Ziyarətçi: X
- B2B cavab: X
- Commit sayı: X

### Enerji səviyyəsi (1-10): X
### Motivasiya (1-10): X
```

---

## 🆘 Eskalasiya Protokolu

**Aşağıdakı hallarda dərhal dayan və yenidən planlaşdır:**

1. **2 həftə ardıcıl DoD tamamlanmır** → prioritet yenidən bax
2. **Bir alət 1 həftədən çox gecikir** → post-launch-a keçir
3. **Motivasiya 3/10-dan aşağı** → 3 gün tam istirahət
4. **Secret sızır** → dərhal rotate, bütün commit-ləri yoxla
5. **Lemon Squeezy rədd** → Paddle-a keç
6. **Reddit/HN ban** → dəstəyə müraciət, yeni hesab açma

---

## 📎 Əlavə A — Hər Alət üçün QA Checklist

Hər aləti bitirdikdən sonra bu siyahını **əl ilə** yoxla:

### Funksionallıq
- [ ] Əsas funksiya işləyir (CSV birləşir, JSON formatlanır, şəkil sıxılır)
- [ ] Edge case-lər işləyir (boş fayl, broken fayl, böyük fayl)
- [ ] Xəta mesajları aydın və ingilis dilində
- [ ] Download işləyir
- [ ] Progress/loading göstərici var

### Privacy
- [ ] DevTools → Network → **upload: 0 B**
- [ ] Heç bir analytics/tracking script yoxdur
- [ ] Heç bir cookie yoxdur (localStorage istisna)

### Performance
- [ ] 1 MB fayl < 1 saniyə
- [ ] 100 MB CSV < 10 saniyə
- [ ] 10 MB şəkil < 3 saniyə
- [ ] 20 ardıcıl emal → memory leak yoxdur (`chrome://memory`)

### Accessibility
- [ ] Tab ilə bütün elementlərə çatmaq mümkün
- [ ] `aria-label` düymələrdə
- [ ] Kontrast nisbəti 4.5:1+
- [ ] `prefers-reduced-motion` dəstəklənir

### Cross-browser
- [ ] Chrome (son versiya)
- [ ] Firefox (son versiya)
- [ ] Safari (son versiya)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

### SEO
- [ ] `<title>` 50–60 simvol
- [ ] `<meta description>` 140–160 simvol
- [ ] `canonical` URL
- [ ] OG/Twitter meta
- [ ] JSON-LD WebApplication + BreadcrumbList

### Mobile
- [ ] 375px width-də işləyir
- [ ] Touch hədəflər 44×44px+
- [ ] Horizontal scroll yoxdur

---

## 📎 Əlavə B — Hər Səhifə üçün QA Checklist

### Bütün HTML səhifələri
- [ ] `<!DOCTYPE html>`
- [ ] `lang` atributu
- [ ] `<meta charset="utf-8">`
- [ ] `<meta name="viewport">`
- [ ] `<title>` unikal
- [ ] `<meta description>` unikal
- [ ] `canonical` URL
- [ ] OG meta (title, description, image, url)
- [ ] Twitter card meta
- [ ] `favicon.svg` link
- [ ] `style.css` link
- [ ] `common.js` defer
- [ ] `license.js` defer
- [ ] `<noscript>` xəbərdarlıq
- [ ] Header inline (və ya common.js)
- [ ] Footer inline (və ya common.js)
- [ ] Bütün linklər işləyir
- [ ] Heç bir `href="#"` yoxdur (real link olmalıdır)

### Hüquqi səhifələr (`privacy.html`, `terms.html`)
- [ ] Table of Contents
- [ ] Bütün bölmələr nömrəli
- [ ] Son yenilənmə tarixi
- [ ] Əlaqə e-poçtu
- [ ] GDPR uyğunluq
- [ ] v2 qiymətləri ($3/$19)

---

## 📎 Əlavə C — Git Commit Konvensiyası

```
<tip>(<əhatə>): <qısa təsvir>

<ətraflı təsvir (lazım olsa)>
```

**Tiplər:**
- `feat` — yeni funksiya
- `fix` — bug fix
- `docs` — sənədləşdirmə
- `style` — CSS/format
- `refactor` — kod yenidən qurulması
- `test` — test əlavə
- `chore` — konfiq, deploy, asılılıq
- `seo` — SEO dəyişikliyi
- `release` — versiya buraxılışı

**Nümunələr:**
```
feat(csv-merger): add PapaParse worker for 100MB+ files
fix(license): prevent localStorage bypass
docs(strategy): log week 4 decisions
seo(sitemap): add business.html with priority 0.9
release: enable production license validation
```

---

## 📎 Əlavə D — Fayl Status Cədvəli (v2)

| # | Fayl | Status | Həftə | Kritiklik |
|---|---|---|---|---|
| 1 | `.gitignore` | ⚠️ Yoxla | 0 | 🔴 |
| 2 | `README.md` | ✅ (v2 yenilə) | 0 | 🟡 |
| 3 | `docs/launch-checklist.md` | ✅ (bu fayl) | 0 | 🟡 |
| 4 | `docs/strategy.md` | ⏳ | 1 | 🟡 |
| 5 | `style.css` | ✅ | 1 | 🔴 |
| 6 | `common.js` | ✅ | 1 | 🔴 |
| 7 | `license.js` | ✅ (v2 yenilə) | 1 | 🟡 |
| 8 | `sdk.js` | ⏳ | 8 | 🟢 |
| 9 | `favicon.svg` | ✅ | 1 | 🟢 |
| 10 | `og-image.png` | ⏳ | 12 | 🟡 |
| 11 | `_template/tool.html` | ✅ | 1 | 🔴 |
| 12 | `index.html` | ✅ (v2 yenilə) | 1 | 🔴 |
| 13 | `privacy.html` | ✅ (v2 yenilə) | 1 | 🔴 |
| 14 | `terms.html` | ✅ (v2 yenilə) | 1 | 🔴 |
| 15 | `pricing.html` | ⚠️ Yenilə | 10 | 🔴 |
| 16 | `business.html` | ⏳ | 8 | 🔴 |
| 17 | `404.html` | ✅ | 1 | 🟢 |
| 18 | `robots.txt` | ✅ | 1 | 🟡 |
| 19 | `_headers` | ✅ | 1 | 🟡 |
| 20 | `_redirects` | ✅ (v2 yenilə) | 8 | 🟢 |
| 21 | `sitemap.xml` | ⏳ | 5 | 🟡 |
| 22 | `wrangler.toml` | ✅ | 1 | 🔴 |
| 23 | `worker/package.json` | ⏳ | 10 | 🟡 |
| 24 | `worker/src/index.js` | ⏳ | 10 | 🔴 |
| 25 | `csv-merger/index.html` | ⏳ P1 | 1-2 | 🔴 |
| 26 | `json-formatter/index.html` | ⏳ P2 | 4 | 🟡 |
| 27 | `image-compressor/index.html` | ⏳ P3 | 4-6 | 🟡 |
| 28 | `csv-to-json/index.html` | ⏳ P4 | Post-launch | 🟡 |
| 29 | `image-converter/index.html` | ⏳ P5 | Post-launch | 🟢 |
| 30 | `pdf-merger/index.html` | ⏳ P6 | Post-launch | 🔴 B2B |
| 31 | `docs/b2b-emails.md` | ⏳ | 9 | 🟡 |

---

## 🧭 Son Söz

> *"Hazırlıq dövründə hədəf 6–8 işlək alət deyil — 3 mükəmməl alət, 20 B2B əlaqə və 500–1,000 ziyarətçidir. 18 Yanvarda hər şey hazır olacaq — sənə yalnız 'aktivləşdirmək' qalacaq."*

**Bu sənədi hər Şənbə axşamı yenilə. Hər həftə 15 dəqiqə → 2 il yaddaş.**

**18 Yanvar 2027-də görüşərik.** 🚀

---

**Son yenilənmə:** 24 Oktyabr 2026
**Növbəti yenilənmə:** Hər həftə Şənbə axşamı (Həftə 1-dən başlayaraq)
**Sənəd sahibi:** Javidan Hasanov
**Əlaqə:** `cavidan56@proton.me`
```

---

## ✅ Xülasə — Bu Faylda Nə Var?

| Bölmə | Məzmun |
|---|---|
| **Preamble** | Versiya, tarix, mənbə |
| **Məqsəd** | Sənədin nə olduğu / olmadığı |
| **Uğur meyarları** | 18 Yanvar üçün 9 metrik |
| **Qızıl qaydalar** | 8 əsas prinsip |
| **13 həftə** | Hər həftə üçün gündəlik task + DoD + risk |
| **Lansman günü** | Saat-saat plan (08:00–22:00) |
| **Lansman sonrası** | İlk 30 gün (4 həftə) |
| **Risk reyestri** | 10 risk + azaltma + eskalasiya |
| **Review şablonu** | Həftəlik 15 dəqiqəlik review formatı |
| **Eskalasiya** | 6 halda dayan və yenidən planlaşdır |
| **Əlavələr** | QA checklist (alət + səhifə), git konvensiya, fayl statusu |
| **Son söz** | Motivasiya + növbəti addım |

**Fayl 100% v2 strategiyasına uyğundur:**
- ✅ 3 alət prioriteti (CSV, JSON, Image)
- ✅ B2B white-label Həftə 8-9
- ✅ Səssiz lansman (Product Hunt YOX)
- ✅ v2 qiymətləri ($3/$19) Həftə 10
- ✅ `license.js` v2 free tier (30/25) Həftə 10
- ✅ `business.html` Həftə 8
- ✅ `sdk.js` Həftə 8 (skeleton)
- ✅ `strategy.md` Həftə 1 (jurnal)
- ✅ PDF Merger post-launch
- ✅ 18 Yanvar 2027 lansman

**Faylı birbaşa kopyala → `docs/launch-checklist.md` → commit → push.** 🚀