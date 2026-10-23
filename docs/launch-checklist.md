# nosend.dev — 90 Günlük Launch Checklist

> **Versiya:** 1.0 · **Yaradıldı:** 20 Oktyabr 2026
> **Sahib:** Layihə müəllifi (təkbaşına, 100% mülkiyyət)
> **Hazırlıq dövrü:** 18 Oktyabr 2026 → 17 Yanvar 2027 (90 gün)
> **Rəsmi lansman:** **18 Yanvar 2027** (18 yaş günü)
> **Gündəlik yük:** 2–3 saat · Həftədə 5 gün · Cəmi ~130–195 saat

---

## ⚠️ Bu Sənədi Necə Oxumalı

Bu **canlı sənəddir**. Hər gün işin sonunda açıb 3 dəqiqəyə yenilə:
- Bitən task-ları `[x]` et
- Yaranan maneələri "Bloklar" bölməsinə yaz
- Növbəti günün 1 prioritetini "Sabah" sətrinə yaz

**6 ay sonra bu sənəd sənin yaddaşının əvəzi olacaq.** Yazmağa tənbəllik etmə — sən bunu özün üçün yazırsan, başqası üçün deyil.

---

## 📌 Əsas Prinsiplər (Bible)

Bu layihə boyu **toxunulmaz** qaydalar:

### 1. Keyfiyyət > Sürət
- 1 işlək alət, 3 yarımçıq alətdən **10 dəfə dəyərlidir**.
- Alət "bitdi" sayılır yalnız `Definition of Done` (aşağıda) tam keçəndə.

### 2. Sıfır Sızma
- Heç bir fayl serverə getmir. `Network` tabında upload görünməlidir **0**.
- Hər alət bunu öz üzərində yoxlayır (QA checklist).

### 3. Yaş Məhdudiyyətinə Hörmət
- 18 Yanvar 2027-dən əvvəl **heç bir** ödəniş platforması hesabı açılmır.
- Valideyn adı ilə hesab açmaq — **QADAĞANDIR** (ToS pozuntusu, hesab dondurulur, pul itir).
- Pul qazanmağa cəhd yoxdur, **hazırlıq** var. Bu, 3 aylıq hazırlıq dövrüdür.

### 4. Bir Alət = Bir Bitmiş Məhsul
- Alət A bitmədən Alət B-yə **başlama**.
- Yarımçıq alət = texniki borç = motivasiya itkisi = layihə ölümü.

### 5. Sənədləşdirmə İşin Bir Parçasıdır
- Hər commit-də `README.md` və ya `docs/*` yenilənir.
- "Sonra yazaram" = heç vaxt yazılmaz.

### 6. Həftədə 5 gün, gündə 2-3 saat
- 6-cı gün işləmək = yanma riski (burnout) = layihənin dayanması.
- İstirahət də işin bir hissəsidir.

---

## 🎯 Uğur Metrikləri (Yanvar 17, 2027 sübut)

Aşağıdakıların **hamısı** doğru olmalıdır ki, lansman baş versin:

| # | Metrik | Hədəf | Yoxlama üsulu |
|---|---|---|---|
| 1 | İşlək alət sayı | **6+** | Hər biri canlı URL-də əl ilə test |
| 2 | Cloudflare Pages deploy | ✅ canlı | `https://nosend.dev` açılır |
| 3 | Worker deploy | ✅ canlı | `https://api.nosend.dev/validate` cavab verir |
| 4 | Lemon Squeezy hesab | ✅ KYC bitib | Dashboard-da "Verified" statusu |
| 5 | Bank hesabı | ✅ açılıb | İlk test köçürmə uğurlu |
| 6 | PayPal hesabı | ✅ açılıb | Verifikasiya bitib |
| 7 | Google Search Console | ✅ indeksləşdirib | 20+ səhifə indeksdə |
| 8 | Sitemap | ✅ göndərilib | Xətasız oxunur |
| 9 | B2B əlaqə | **20+ firma** | `docs/b2b-emails.md` jurnalı |
| 10 | Ziyarətçi (ümumi) | **500–1.000** | Cloudflare Analytics |
| 11 | Trafik mənbələri | 3+ kanal | Reddit + HN + Google |

### ⚠️ Uğursuzluq Metrikləri (bu baş verərsə, plan dəyişdir)

- 3 həftə ardıcıl heç bir alət bitmirsə → **plan həddindən artıq iddialıdır**, həftəlik yükü azalt.
- 2 həftə ardıcıl iş görmürsənsə → **motivasiya yoxdur, səbəbini yaz**, istirahət ver.
- PDF Merger-də 8 saatdan çox ilişibsənsə → **50 MB limit kifayətdir**, daha mürəkkəbləşdirmə.

---

## 🗓 Gündəlik / Həftəlik / Aylıq Ritm

### Gündəlik (hər iş günü, 2-3 saat)

**Başlanğıc (5 dəq):**
- Dünənki `docs/launch-checklist.md` sətrini oxu
- Bugünkü 1 prioritet task-ı seç (2-3 saatlıq)

**Son (5 dəq):**
- 3 sətirlik şəxsi jurnal yaz:
  - **Nə etdim:** (1 cümlə)
  - **Nə qaldı:** (1 cümlə)
  - **Sabah nə edəcəm:** (1 cümlə)
- `git add . && git commit -m "Day N: <qısa təsvir>"`

### Həftəlik (hər Cümə, 15 dəq)

- Bu həftənin checklist-ini **yuxarıdan aşağı** oxu, `[x]` et
- 3 sual ver özünə:
  1. Nə bitirdim?
  2. Nə ilişdim? (texniki maneə?)
  3. Növbəti həftə 1 prioritet nədir?
- `git push` et
- Növbəti həftənin cədvəlini planlaşdır

### Aylıq (hər ayın son günü, 30 dəq)

- Aylıq milestone-a çatdım?
- Xərc gəlir? (bu dövrdə $0)
- Plan revizyonu lazımdır?
- Özünə **1 tam gün istirahət** ver (layihəsiz)

---

## 🔒 VACİB KONTEKST: Yaş Məhdudiyyəti

18 Yanvar 2027-dən **əvvəl** edilə bilməz:

| ❌ Qadağan | Səbəb |
|---|---|
| Lemon Squeezy hesabı | KYC → 18+ tələbi |
| Paddle hesabı | KYC → 18+ tələbi |
| PayPal hesabı | Global ToS → 18+ tələbi |
| AdSense hesabı | 18+ tələbi |
| Müstəqil bank hesabı | AZ qanunu → valideyn razılığı |
| Valideyn adı ilə hər hansı hesab | **ToS pozuntusu = hesab bağlanır** |

18 Yanvardan **əvvəl** edilə bilər (və edilməlidir):

| ✅ İcazəli | Nə üçün |
|---|---|
| Alət qurmaq və yayımlamaq | Cloudflare Pages: yaş məhdudiyyəti yoxdur |
| Domen almaq | Valideyn kartı + adı ilə (qanuni) |
| SEO qurmaq | Search Console pulsuz, yaş məhdudiyyəti yoxdur |
| B2B e-poçt yazmaq | Yaş məhdudiyyəti yoxdur |
| Reddit/HN/PH-da hesab | Yaş məhdudiyyəti yoxdur |
| Lemon Squeezy hesabı **hazırlamaq** (KYC xaric) | Yalnız draft, real satış yoxdur |

---

## 📅 HƏFTƏLİK DETALLI PLAN (Həftə 1–13)

---

### 🟦 HƏFTƏ 1 — CSV Merger Skeleti
**Tarix:** 18–24 Oktyabr 2026
**Hədəf:** CSV Merger-in HTML/CSS skeleti brauzerdə görünür
**Vaxt büdcəsi:** 10–12 saat
**Fayl:** `public/tools/csv-merger/index.html` (yaradılır)

#### Task-lar
- [ ] `_template/tool.html`-i `public/tools/csv-merger/index.html`-ə kopyala
- [ ] `{{TOOL_NAME}}` → `CSV Merger`
- [ ] `{{TOOL_SLUG}}` → `csv-merger`
- [ ] `{{TOOL_DESCRIPTION}}` → `Merge multiple CSV files directly in your browser`
- [ ] `{{TOOL_TECH}}` → `PapaParse and Web Workers`
- [ ] `{{TOOL_LIBRARY}}` → PapaParse CDN script
- [ ] `file-input`-a `multiple accept=".csv"` əlavə et
- [ ] `{{TOOL_OPTIONS}}` doldur: "First row is header" checkbox
- [ ] `{{TOOL_RESULT}}` doldur: "Download merged CSV" düyməsi
- [ ] `{{RELATED_TOOLS}}` doldur: 3 digər alət kartı
- [ ] Brauzerdə aç (`npx serve public`), görünüşü yoxla
- [ ] Mobile görünüş (DevTools, 375px) yoxla
- [ ] Console-da xəta **yoxdur** yoxla
- [ ] `git commit -m "Week 1: CSV Merger HTML skeleton"`

#### Definition of Done
- Fayl brauzerdə açılır
- Dropzone görünür, kliklənə bilir
- Header və footer `common.js` tərəfindən inject olunur
- Console **təmizdir**
- Responsive görünür

---

### 🟦 HƏFTƏ 2 — CSV Merger Məntiqi
**Tarix:** 25–31 Oktyabr 2026
**Hədəf:** CSV fayllarını həqiqətən birləşdirən işlək alət
**Vaxt büdcəsi:** 10–12 saat
**Fayl:** `public/tools/csv-merger/index.html` (davam)

#### Task-lar
- [ ] `processFiles()` funksiyasını yaz (template-dəki skeleton-u doldur)
- [ ] `collectOptions()` — `opt-headers` checkbox dəyərini oxu
- [ ] PapaParse-ı `{ worker: true, header: hasHeader }` ilə çağır
- [ ] Hər fayl üçün `FileReader.readAsText` (və ya `file.text()`)
- [ ] Başlıqları düzgün birləşdir (ilk faylın başlıqları saxlanılır)
- [ ] Nəticəni `Blob` kimi yarat, `URL.createObjectURL` ilə endir
- [ ] `URL.revokeObjectURL` çağır (memory leak qarşısı)
- [ ] 5 MB CSV ilə test
- [ ] 50 MB CSV ilə test
- [ ] 200 MB CSV ilə test (brauzer donmamalıdır — `worker: true` sayəsində)
- [ ] Yanlış fayl (`.txt`) seç → xəta mesajı görünür
- [ ] Boş fayl seç → xəta mesajı görünür
- [ ] `git commit -m "Week 2: CSV Merger working logic"`

#### Definition of Done
- 2 CSV faylı birləşir
- Başlıqlar düzgün işlənir (checkbox ilə)
- 200 MB CSV brauzer çökmədən keçir
- Xəta halları gözlənilən mesaj verir
- `Network` tabında upload **yoxdur**

#### ⚠️ Risk
PapaParse `worker: false` ilə 100 MB-dan sonra brauzer donur. **Mütləq `worker: true`**.

---

### 🟦 HƏFTƏ 3 — Deploy + Domen
**Tarix:** 1–7 Noyabr 2026
**Hədəf:** Sayt canlı URL-də, domen işləyir
**Vaxt büdcəsi:** 6–8 saat
**Fayllar:** `public/_headers`, `public/_redirects` (yaradılır)

#### Task-lar
- [ ] GitHub repo **private** olaraq yarat
- [ ] İlk `git push origin main`
- [ ] Cloudflare Pages-də **Create project** → repo-ya qoş
- [ ] Build output directory: `public`, build command: **boş**
- [ ] İlk deploy tamamlanır (2-3 dəq)
- [ ] `pages.dev` subdomeni açılır (`nosend.pages.dev`)
- [ ] `nosend.dev` domeni Cloudflare Registrar-dan al (valideyn kartı)
- [ ] DNS: `nosend.dev` → Pages project
- [ ] HTTPS aktivləşdir (avtomatik)
- [ ] `public/_headers` faylını yaz (style.css-dən sonra security headers)
- [ ] `public/_redirects` faylını yaz (boş, hazır)
- [ ] Canlı saytda `https://nosend.dev` açılır yoxla
- [ ] `curl -I https://nosend.dev` → security headers görünür
- [ ] `git commit -m "Week 3: deploy + domain live"`

#### Definition of Done
- `https://nosend.dev` açılır
- HTTPS işləyir, "Not Secure" yoxdur
- Security headers (`X-Frame-Options` və s.) görünür
- Sitemap sonra əlavə olunacaq

---

### 🟦 HƏFTƏ 4 — CSV→JSON + JSON Formatter
**Tarix:** 8–14 Noyabr 2026
**Hədəf:** 2 alət daha tam işlək
**Vaxt büdcəsi:** 10–12 saat
**Fayllar:**
- `public/tools/csv-to-json/index.html` (yeni)
- `public/tools/json-formatter/index.html` (yeni)

#### Task-lar (CSV→JSON)
- [ ] `_template/tool.html`-dən kopyala
- [ ] `{{TOOL_NAME}}` → `CSV to JSON`
- [ ] `file-input` → `accept=".csv"` (tək fayl, `multiple` yoxdur)
- [ ] PapaParse `header: true` ilə parse et
- [ ] `JSON.stringify(data, null, 2)` (pretty print)
- [ ] Preview `<pre>` ilə göstər (ilk 50 sətir)
- [ ] Download `.json` düyməsi
- [ ] 100 sətirlik test CSV ilə yoxla
- [ ] `Network` tabında upload **yoxdur** yoxla

#### Task-lar (JSON Formatter)
- [ ] `_template/tool.html`-dən kopyala (amma dropzone **yoxdur** — textarea)
- [ ] 2 textarea: input + output
- [ ] 3 düymə: Format / Minify / Validate
- [ ] `JSON.parse` + `JSON.stringify`
- [ ] Xəta mesajı `try/catch` ilə
- [ ] `{{TOOL_LIBRARY}}` **boş** (kitabxana lazım deyil)
- [ ] 10 fərqli JSON testi (valid + invalid)
- [ ] `git commit -m "Week 4: CSV→JSON + JSON Formatter done"`

#### Definition of Done
- Hər 2 alət də tam işləyir
- CSV→JSON: header düzgün, preview düzgün, download düzgün
- JSON Formatter: 3 düymə düzgün, xəta düzgün
- Hər 2 alətdə `Network` **təmizdir**

---

### 🟦 HƏFTƏ 5 — SEO Təməli
**Tarix:** 15–21 Noyabr 2026
**Hədəf:** Google Search Console-a qeydiyyat + sitemap
**Vaxt büdcəsi:** 8–10 saat
**Fayllar:**
- `public/index.html` (yaradılır)
- `public/robots.txt` (yaradılır)
- `public/sitemap.xml` (yaradılır)
- `public/privacy.html` (yaradılır)
- `public/terms.html` (yaradılır)
- `public/404.html` (yaradılır)

#### Task-lar (Ana səhifə)
- [ ] `index.html` yaz (hero + 6 alət kartı + privacy bölməsi)
- [ ] Hero başlığı: "Your files never leave your browser."
- [ ] 6 alət kartı (hələ ki boş linklər)
- [ ] OG meta tags (title, description, image placeholder)
- [ ] JSON-LD WebSite schema

#### Task-lar (Hüquqi)
- [ ] `privacy.html` — yuxarıdakı fayl strukturuna uyğun
- [ ] `terms.html` — yuxarıdakı fayl strukturuna uyğun
- [ ] Hər ikisində "Last updated: 15 November 2026"
- [ ] Contact: `hello@nosend.dev`

#### Task-lar (SEO)
- [ ] `404.html` sadə səhifə
- [ ] `robots.txt` yaz (`Sitemap: https://nosend.dev/sitemap.xml`)
- [ ] `sitemap.xml` — 6 alət + ana + privacy + terms
- [ ] Google Search Console-a `nosend.dev` əlavə et
- [ ] `sitemap.xml` göndər
- [ ] Domain ownership yoxla (DNS TXT record)
- [ ] `git commit -m "Week 5: SEO foundation + legal pages"`

#### Definition of Done
- Ana səhifə 6 alət kartı göstərir
- Privacy + Terms düzgün yazılıb, hüquqi cəhətdən kifayətdir
- `robots.txt` + `sitemap.xml` canlıda əlçatandır
- Search Console sitemap-ı qəbul edib ("Success" statusu)

---

### 🟦 HƏFTƏ 6 — Image Compressor
**Tarix:** 22–28 Noyabr 2026
**Hədəf:** Şəkil sıxışdırıcı tam işlək
**Vaxt büdcəsi:** 10–12 saat
**Fayl:** `public/tools/image-compressor/index.html` (yeni)

#### Task-lar
- [ ] Template-dən kopyala
- [ ] `file-input` → `multiple accept="image/*"`
- [ ] `{{TOOL_LIBRARY}}` → **boş** (Canvas API native)
- [ ] Options: quality slider (10-100), max-width input
- [ ] `loadImage(file)` → `Promise<HTMLImageElement>`
- [ ] `compressImage(file, quality, maxWidth)` → `Promise<Blob>`
- [ ] Canvas `toBlob(resolve, 'image/jpeg', quality/100)`
- [ ] Nəticə: before/after ölçü + download düyməsi
- [ ] `URL.revokeObjectURL` hər emaldan sonra
- [ ] 5 MB JPEG test
- [ ] 20 MB PNG test
- [ ] 50 şəkil ardıcıl emal (memory leak yoxla — `chrome://memory`)
- [ ] `git commit -m "Week 6: Image Compressor done"`

#### Definition of Done
- JPEG/PNG/WebP qəbul edilir
- Quality slider işləyir (fayl ölçüsü dəyişir)
- Max-width işləyir (böyük şəkil kiçilir)
- 50 şəkildən sonra brauzer donmur
- `Network` tabında upload **yoxdur**

---

### 🟦 HƏFTƏ 7 — PDF Merger ⚠️ ƏN ÇƏTİN
**Tarix:** 29 Noyabr – 5 Dekabr 2026
**Hədəf:** PDF birləşdirici 50 MB limit ilə işləyir
**Vaxt büdcəsi:** 12–15 saat (**2 qat ayır**)
**Fayl:** `public/tools/pdf-merger/index.html` (yeni)

#### Task-lar
- [ ] Template-dən kopyala
- [ ] `file-input` → `multiple accept=".pdf" data-max-size="52428800"` (50 MB)
- [ ] `{{TOOL_LIBRARY}}` → pdf-lib CDN
- [ ] `processFiles()` **ardıcıl** (for loop) — **`Promise.all` YOX**
- [ ] Hər fayl üçün `assertMaxSize(file, 50 * 1024 * 1024)`
- [ ] `PDFDocument.load(arrayBuffer)` → `merged.copyPages()`
- [ ] Hər fayl bitəndə `URL.revokeObjectURL` çağır
- [ ] Progress bar (`Processing 2/5: file2.pdf`)
- [ ] Nəticədə `merged.save()` → Blob → download
- [ ] 3 PDF, hər biri 5 MB → birləşir
- [ ] 10 PDF, hər biri 10 MB → birləşir
- [ ] 60 MB tək PDF → xəta "exceeds 50 MB limit"
- [ ] `Network` tabında upload **yoxdur** yoxla
- [ ] `git commit -m "Week 7: PDF Merger with 50MB guard"`

#### Definition of Done
- 3+ PDF birləşir
- 50 MB-dan böyük fayl rədd edilir **parse-dan əvvəl**
- Ardıcıl emal (brauzer çökmür, yaddaş sızmır)
- Səhifə sırası düzgün saxlanılır
- Progress göstərilir

#### ⚠️ Risk
- `Promise.all` istifadə etsən, brauzer 3-cü PDF-də çökür.
- `URL.revokeObjectURL` unutsan, 5-ci PDF-də yaddaş dolar.
- 100 MB+ PDF-də "uğursuz ola bilər" xəbərdarlığı **mütləqdir**.

---

### 🟦 HƏFTƏ 8 — Image Converter + pSEO Səhifələri
**Tarix:** 6–12 Dekabr 2026
**Hədəf:** 6-cı alət + 10 pSEO səhifəsi
**Vaxt büdcəsi:** 10–12 saat
**Fayl:** `public/tools/image-converter/index.html` (yeni)

#### Task-lar (Image Converter)
- [ ] Template-dən kopyala
- [ ] Image Compressor məntiqinin 90%-i
- [ ] Fərq: format dropdown (JPG / PNG / WebP)
- [ ] Quality slider
- [ ] `canvas.toBlob(resolve, format, quality/100)`
- [ ] Safari-də WebP `null` qaytarırsa → JPEG fallback
- [ ] 5 PNG → 5 JPG test
- [ ] 5 JPG → 5 WebP test

#### Task-lar (pSEO)
- [ ] 5 "How to" səhifə: `blog/merge-csv-without-upload.html` və s.
- [ ] 5 "vs" səhifə: `blog/nosend-vs-smallpdf.html` və s.
- [ ] Hər səhifədə 300+ söz, alət linki, JSON-LD Article schema
- [ ] Sitemap yenilə (16 səhifə)
- [ ] `git commit -m "Week 8: Image Converter + 10 pSEO pages"`

#### Definition of Done
- Image Converter tam işləyir
- 10 pSEO səhifə canlıda
- Sitemap-da 16+ URL
- Search Console-da yeni səhifələr "Discovered"

---

### 🟦 HƏFTƏ 9 — B2B E-poçt Kampaniyası
**Tarix:** 13–19 Dekabr 2026
**Hədəf:** 20 firmaya e-poçt göndər
**Vaxt büdcəsi:** 6–8 saat
**Fayl:** `docs/b2b-emails.md` (yaradılır)

#### Task-lar
- [ ] `b2b-emails.md` yaz — 3 şablon (hüquq, mühasib, agentlik)
- [ ] 20 hüquq firması siyahısı hazırla (Google Maps + LinkedIn)
- [ ] 10 mühasibat şirkəti siyahısı
- [ ] Şəxsi e-poçt istifadə et (`cavidan56@proton.me`)
- [ ] **Ayrı-ayrı** göndər (BCC yox — spam sayılır)
- [ ] Hər e-poçtda alət linki (`nosend.dev/tools/pdf-merger/`)
- [ ] Hər e-poçtda "15 dəqiqəlik demo" təklifi
- [ ] Göndərilənləri `b2b-emails.md`-də qeyd et
- [ ] Cavabları izlə (Gmail label: "nosend-b2b")

#### Definition of Done
- 30 e-poçt göndərildi
- Hər biri şəxsiləşdirilib (firma adı + şəxs adı)
- 3-5 cavab gəlir (5-10% gözlənilir)
- 1-2 demo təklifi qəbul olunur

#### ⚠️ Risk
Generic e-poçt = 0.2% cavab. Şəxsiləşdirmə = 5-10% cavab.

---

### 🟦 HƏFTƏ 10 — Premium Backend (Hazırlıq)
**Tarix:** 20–26 Dekabr 2026
**Hədəf:** Worker + Lemon Squeezy hazır (aktiv deyil)
**Vaxt büdcəsi:** 10–12 saat
**Fayllar:**
- `worker/wrangler.toml` (yeni)
- `worker/package.json` (yeni)
- `worker/src/index.js` (yeni)

#### Task-lar
- [ ] `worker/` qovluğu yarat
- [ ] `package.json` (wrangler + vitest)
- [ ] `wrangler.toml` (name, compatibility_date, env.production)
- [ ] `src/index.js` yaz (~20 sətir license validation)
- [ ] Cloudflare Worker deploy: `cd worker && npm install && wrangler deploy`
- [ ] `api.nosend.dev` route əlavə et
- [ ] Test endpoint `curl -X POST https://api.nosend.dev/validate -d '{"licenseKey":"test"}'`
- [ ] `license.js`-də `CONFIG.endpoint` düzgün yoxla
- [ ] `CONFIG.mode` hələ də `'stub'` (production-a keçmə!)
- [ ] `git commit -m "Week 10: Worker + license endpoint ready (stub mode)"`

#### Definition of Done
- Worker deploy olub
- `api.nosend.dev/validate` 200 cavab verir (test key ilə `premium: false`)
- `license.js` stub modunda qalır (real satış yoxdur)
- 18 Yanvarda yalnız `CONFIG.mode = 'production'` dəyişmək lazım olacaq

---

### 🟦 HƏFTƏ 11 — Premium Test + Pricing Səhifəsi
**Tarix:** 27 Dekabr – 2 Yanvar 2027
**Hədəf:** Premium məntiq test rejimində + pricing səhifəsi
**Vaxt büdcəsi:** 8–10 saat
**Fayl:** `public/pricing.html` (yeni)

#### Task-lar
- [ ] `pricing.html` yaz — Free / Premium / Lifetime cədvəli
- [ ] Qiymətlər: Free $0, Premium $9/ay, Lifetime $49 (launch)
- [ ] FAQ bölməsi (5 sual)
- [ ] "Buy" düymələri hələ **disabled** (18 yanvara qədər)
- [ ] 1 alətdə (csv-merger) `nosendLicense.checkPremium()` çağırışı test et
- [ ] Stub mode-da həmişə `premium: true` qaytarır yoxla
- [ ] 18 Yanvardan sonra `CONFIG.mode = 'production'` edəndə işləyəcək yoxla
- [ ] `getUsageCount()` localStorage-da işləyir yoxla
- [ ] `incrementUsage()` sayğacı artırır yoxla
- [ ] `git commit -m "Week 11: pricing page + premium gating test"`

#### Definition of Done
- Pricing səhifəsi canlıda
- Premium məntiq stub-da işləyir
- `localStorage.clear()` premium-u sıfırlamır (worker yoxlayır)
- 18 Yanvarda "flip switch" hazırdır

---

### 🟦 HƏFTƏ 12 — SEO Genişlənmə + Product Hunt Hazırlığı
**Tarix:** 3–9 Yanvar 2027
**Hədəf:** 20+ səhifə + lansman materialları
**Vaxt büdcəsi:** 10–12 saat

#### Task-lar
- [ ] 10 pSEO səhifə daha (cəmi 20+)
- [ ] OG image dizayn et (`public/assets/img/og-image.png`, 1200×630)
- [ ] Hər HTML-də `og:image` meta tags yoxla
- [ ] Product Hunt üçün: tagline (60 simvol), description (260 simvol)
- [ ] 5 screenshot hazırla (hər alət üçün 1)
- [ ] 30 saniyəlik demo video (ekran yazısı, səs yoxdur)
- [ ] Hacker News "Show HN" post draft yaz
- [ ] Reddit post draft (r/privacy, r/webdev, r/selfhosted)
- [ ] LinkedIn post draft
- [ ] `git commit -m "Week 12: 20+ pages, OG image, launch assets"`

#### Definition of Done
- 20+ səhifə indeksdə
- OG image hazır (Figma/Canva)
- Sosial media post-ları hazır
- Demo video hazır

---

### 🟦 HƏFTƏ 13 — Final Hazırlıq + Bank Sənədləşmə
**Tarix:** 10–17 Yanvar 2027
**Hədəf:** 18 Yanvara tam hazır
**Vaxt büdcəsi:** 10–12 saat

#### Task-lar (texniki)
- [ ] Bütün 6 alətdə son QA (aşağıdakı QA checklist)
- [ ] `chrome://memory` yoxla hər alətdə
- [ ] Bütün linklər işləyir yoxla (404 yoxdur)
- [ ] `sitemap.xml` bütün URL-ləri əhatə edir yoxla
- [ ] `robots.txt` düzgün yoxla
- [ ] `_headers` security headers canlıda yoxla (`curl -I`)
- [ ] `_redirects` test et
- [ ] `favicon.svg` bütün tab-larda görünür yoxla
- [ ] Mobile (iPhone/Android) hər alət test et

#### Task-lar (sənəd)
- [ ] Bank hesabı sənədləri hazırla (valideyn müşayiəti ilə)
- [ ] Lemon Squeezy KYC sənədləri hazırla (pasport/ID)
- [ ] PayPal üçün email + password hazırla
- [ ] B2B pipeline yoxla (neçə cavab, neçə demo)
- [ ] `README.md` son yenilə

#### Task-lar (lansman)
- [ ] Product Hunt draft son yoxla
- [ ] HN post son yoxla
- [ ] Reddit post son yoxla
- [ ] Bütün post-larda `https://nosend.dev` link var yoxla
- [ ] 18 Yanvar səhər planı yaz (aşağıda)

#### Definition of Done
- Hər şey hazır
- "Flip switch" planı aydın
- 18 Yanvara 1 gün qalmış **heç nə etmə** (istirahət)

---

## 🚀 LANSMA GÜNÜ — 18 YANVAR 2027

### Saat-saat plan (Bakı vaxtı, GMT+4)

| Saat | Fəaliyyət | Vaxt | Prioritet |
|---|---|---|---|
| **07:00** | Yuxudan dur, səhər yeməyi | 30 dəq | — |
| **07:30** | `README.md` son yoxla, `git status` təmiz yoxla | 15 dəq | 🔴 |
| **07:45** | Bank hesabı üçün sənədləri yoxla (valideyn ilə) | 15 dəq | 🔴 |
| **08:00** | Banka get (və ya online aç) | 2 saat | 🔴 |
| **10:00** | Bankdan qayıt, Lemon Squeezy KYC başlat | 30 dəq | 🔴 |
| **10:30** | KYC gözləyərkən: PayPal hesabı yarat | 30 dəq | 🟡 |
| **11:00** | `license.js`-də `CONFIG.mode` → `'production'` | 5 dəq | 🔴 |
| **11:05** | `git commit -m "Launch: production mode"` + push | 5 dəq | 🔴 |
| **11:10** | Cloudflare Pages avtomatik deploy gözlə (2-3 dəq) | 5 dəq | 🔴 |
| **11:15** | Canlıda test et: 1 alət işləyir? License check işləyir? | 15 dəq | 🔴 |
| **11:30** | Lemon Squeezy-də 1 test məhsulu yarat (dummy) | 15 dəq | 🔴 |
| **11:45** | Test ödənişi (öz kartınla $1) → refund | 15 dəq | 🔴 |
| **12:00** | Nahara fasilə | 1 saat | — |
| **13:00** | Product Hunt lansman (planlaşdırılmış vaxt) | 15 dəq | 🔴 |
| **13:15** | Hacker News "Show HN" post | 10 dəq | 🔴 |
| **13:25** | Reddit post (r/privacy) | 10 dəq | 🟡 |
| **13:35** | Reddit post (r/webdev) | 10 dəq | 🟡 |
| **13:45** | LinkedIn post | 10 dəq | 🟡 |
| **14:00** | B2B əlaqələrə "launch" e-poçtu (əvvəlki 30 firmaya) | 30 dəq | 🟡 |
| **14:30** | Product Hunt kommentlərinə cavab ver | davamlı | 🔴 |
| **16:00** | HN kommentlərinə cavab ver | davamlı | 🔴 |
| **18:00** | Günün nəticələrini `docs/launch-checklist.md`-ə yaz | 15 dəq | 🟡 |
| **18:15** | İlk satış oldu? Yoxla | 5 dəq | 🔴 |
| **18:30** | İstifadəçi rəylərinə cavab ver | davamlı | 🟡 |
| **22:00** | Günü bağla: statistika yaz, ertəsi gün planı | 15 dəq | 🟡 |

### Rollback Planı (bir şey sınırsa)

| Problem | Həll |
|---|---|
| Sayt 500 qaytarır | Cloudflare Pages-də əvvəlki deploy-a rollback |
| License check işləmir | `CONFIG.mode = 'stub'`-a qaytar, sabah düzəlt |
| Ödəniş işləmir | Lifetime deal-i müvəqqəti söndür, yalnız subscription |
| Worker down | Frontend işləyir (yalnız premium sınır) — təcili deyil |

---

## 📆 LANSANDAN SONRA — İlk 30 Gün

### Gün 1–7: Launch Week
- [ ] Hər gün PH/HN/Reddit kommentlərinə cavab ver
- [ ] Hər gün 1 yeni pSEO səhifə yaz
- [ ] Hər satışı qeyd et (`docs/sales-log.md` yarat)
- [ ] Hər istifadəçi rəyini qeyd et (`docs/feedback-log.md` yarat)

### Gün 8–14: Feedback Week
- [ ] İlk 10 istifadəçi ilə söhbət (email/DM)
- [ ] 3 ən çox tələb olunan funksiyanı qeyd et
- [ ] 1 funksiya tətbiq et (ən kiçik, ən çox tələb olunan)
- [ ] İlk B2B demo (əgər cavab varsa)

### Gün 15–21: Optimization Week
- [ ] Google Analytics (və ya Cloudflare Analytics) dərin bax
- [ ] Ən çox trafik gətirən alət hansıdır?
- [ ] Ən çox dönüşüm gətirən səhifə hansıdır?
- [ ] SEO: 5 yeni "how-to" səhifə

### Gün 22–30: Growth Week
- [ ] İlk müştəri rəyini saytda göstər (icazə ilə)
- [ ] 1-ci ayın gəlirini hesabla
- [ ] Növbəti ayın planını yaz
- [ ] `docs/launch-checklist.md`-i ay 2 üçün yenilə

---

## 📊 12 AYLIQ MİLESTONE CƏDVƏLİ

| Ay | Tarix | Faza | Hədəf Gəlir | Hədəf Trafik |
|---|---|---|---|---|
| 1 | Okt 2026 | Hazırlıq | $0 | 0 |
| 2 | Noy 2026 | Hazırlıq | $0 | 100 |
| 3 | Dek 2026 | Hazırlıq | $0 | 300 |
| 4 | Yan 2027 | **Lansman** | **$50–$300** | 1.000 |
| 5 | Fev 2027 | Monetizasiya | $150–$400 | 2.000 |
| 6 | Mar 2027 | Monetizasiya | $250–$550 | 3.500 |
| 7 | Apr 2027 | Monetizasiya | $350–$650 | 5.000 |
| 8 | May 2027 | Monetizasiya | $450–$800 | 7.000 |
| 9 | İyn 2027 | Monetizasiya | $550–$950 | 10.000 |
| 10 | İyl 2027 | Miqyas | $650–$1.100 | 13.000 |
| 11 | Avq 2027 | Miqyas | $750–$1.300 | 16.000 |
| 12 | Sen 2027 | Miqyas | $850–$1.500 | 20.000 |

**12 aylıq cəm (realist):** ~$4.550–$8.550

---

## 📋 FAYL TAMAMLAMA TREKERİ (27 fayl)

| # | Fayl | Status | Həftə | Qeyd |
|---|---|---|---|---|
| 1 | `.gitignore` | ✅ | 1 | Bitib |
| 2 | `README.md` | ✅ | 1 | Bitib (davam yenilənir) |
| 3 | `assets/css/style.css` | ✅ | 1 | Bitib |
| 4 | `assets/js/common.js` | ✅ | 1 | Bitib |
| 5 | `_template/tool.html` | ✅ | 2 | Bitib |
| 6 | `assets/js/license.js` | ✅ | 2 | Bitib (stub) |
| 7 | `favicon.svg` | ✅ | 2 | Bitib |
| 8 | **`docs/launch-checklist.md`** | ✅ | 2 | **Bu fayl** |
| 9 | `index.html` ** | ✅ | 2 | bitib|
| 10 | `privacy.html` | ⏳ | 5 | Gözləyir |
| 11 | `terms.html` | ⏳ | 5 | Gözləyir |
| 12 | `404.html` | ⏳ | 5 | Gözləyir |
| 13 | `robots.txt` | ⏳ | 5 | Gözləyir |
| 14 | `_headers` | ⏳ | 3 | Gözləyir |
| 15 | `_redirects` | ⏳ | 3 | Gözləyir |
| 16 | `worker/wrangler.toml` | ⏳ | 10 | Gözləyir |
| 17 | `worker/package.json` | ⏳ | 10 | Gözləyir |
| 18 | `worker/src/index.js` | ⏳ | 10 | Gözləyir |
| 19 | `docs/b2b-emails.md` | ⏳ | 9 | Gözləyir |
| 20 | `sitemap.xml` | ⏳ | 5 | Gözləyir |
| 21 | `tools/csv-merger/index.html` | ⏳ | 1–2 | Gözləyir |
| 22 | `tools/csv-to-json/index.html` | ⏳ | 4 | Gözləyir |
| 23 | `tools/json-formatter/index.html` | ⏳ | 4 | Gözləyir |
| 24 | `tools/image-compressor/index.html` | ⏳ | 6 | Gözləyir |
| 25 | `tools/pdf-merger/index.html` | ⏳ | 7 | Gözləyir |
| 26 | `tools/image-converter/index.html` | ⏳ | 8 | Gözləyir |
| 27 | `assets/img/og-image.png` | ⏳ | 12 | Gözləyir |

**Cəmi:** 8/27 bitib (30%) · 19/27 qalır (70%)

---

## ✅ HƏR ALƏT ÜÇÜN QA CHECKLIST

Hər alət **bitdi** sayılmaz, bu 12 yoxlama keçməyəndə:

### Funksionallıq
- [ ] 1. Əsas funksiya işləyir (məsələn CSV birləşir)
- [ ] 2. Boş fayl → aydın xəta
- [ ] 3. Yanlış fayl növü → aydın xəta
- [ ] 4. Çox böyük fayl → limit xəbərdarlığı (əvvəl parse)
- [ ] 5. Nəticə düzgün endir (`download` atributu işləyir)

### Təhlükəsizlik
- [ ] 6. `Network` tab → **0 upload** sorğusu
- [ ] 7. `Console` → **0 xəta**, **0 xəbərdarlıq**
- [ ] 8. `application` tab → yalnız `localStorage` (usage counter)

### Performans
- [ ] 9. Brauzer 3 əsas versiyada işləyir (Chrome, Firefox, Safari)
- [ ] 10. 20+ fayl ardıcıl emal → brauzer donmur (`chrome://memory` yoxla)

### Görünüş
- [ ] 11. Mobile (375px) → düzgün görünür
- [ ] 12. Dark mode → düzgün görünür

---

## ⚠️ RİSK REYESTRİ

| # | Risk | Ehtimal | Təsir | Azaltma |
|---|---|---|---|---|
| 1 | 18 yaş məhdudiyyətini pozmaq | Yüksək | Çox Yüksək | Heç bir halda etmə. 18 yanvarı gözlə. |
| 2 | PDF-də brauzer çökməsi | Yüksək | Yüksək | 50 MB limit + ardıcıl emal + xəbərdarlıq |
| 3 | Premium bypass (`localStorage.clear`) | Yüksək | Yüksək | Worker hər dəfə yoxlayır, cache TTL 1 saat |
| 4 | Motivasiya itkisi (həftə 6-9) | Yüksək | Yüksək | Həftədə 5 gün, cümə retro, ay sonu istirahət |
| 5 | ADHD diqqət itkisi | Yüksək | Orta | Bir alət bitmədən digərinə keçmə |
| 6 | AdSense təsdiqlənməməsi | Orta | Orta | 10+ keyfiyyətli səhifə ilə müraciət |
| 7 | Lemon Squeezy hesab dondurulması | Aşağı | Orta | Paddle ehtiyat variant |
| 8 | B2B satışının uğursuzluğu | Orta | Yüksək | Affiliate gəliri ilə təhlükəsizlik yastığı |
| 9 | Cloudflare Pages deploy xətası | Aşağı | Yüksək | Əvvəlki deploy-a rollback |
| 10 | `.env` sızması | Aşağı | Çox Yüksək | `.gitignore` + `git secrets scan` + `LS_API_KEY` rotasiya |

---

## 📈 METRİKLƏR VƏ İZLƏMƏ

### Hər həftə Cümə (5 dəq) izlənəcək:

| Metrik | Harada | Nə üçün |
|---|---|---|
| Ümumi ziyarətçi | Cloudflare Analytics | Trafik artımı |
| Top 3 səhifə | Cloudflare Analytics | Hansı alət populyar |
| Search Console impressions | Google SC | SEO gücü |
| Yeni B2B cavab | `docs/b2b-emails.md` | Pipeline |
| Bitən fayl sayı | Bu sənəd (yuxarı) | İrəliləyiş |
| 1 prioritet sabah | Şəxsi jurnal | Fokus |

### Aylıq (30 dəq):

| Metrik | Hədəf (ay 1) | Hədəf (ay 3) | Hədəf (ay 12) |
|---|---|---|---|
| Ziyarətçi/ay | 100 | 300 | 20.000 |
| Alət sayı | 6 | 6 | 9 |
| B2B əlaqə | 20 | 50 | 200 |
| Gəlir | $0 | $0 | $850+ |
| Premium abunəçi | 0 | 0 | 50+ |

---

## 🚨 FÖVQƏLADƏ HALLAR (Emergency Procedures)

### Ssenari 1: Sayt 24 saat+ offline
**Səbəb:** Cloudflare Pages xətası, DNS problemi
**Həll:**
1. Cloudflare dashboard → Pages → "Deployments" → əvvəlki "production" seç
2. "Rollback" bas
3. DNS `dig nosend.dev` yoxla
4. Status: `cloudflarestatus.com`

### Ssenari 2: `.env` / `LS_API_KEY` GitHub-a düşdü
**Səbəb:** `.gitignore` səhv, ya əl ilə commit
**Həll:**
1. **Dərhal** Lemon Squeezy dashboard → API keys → rotate
2. Yeni key-i `wrangler secret put LS_API_KEY` ilə deploy et
3. Git history-dən sil: `git filter-repo --path .env --invert-paths`
4. Force push: `git push --force origin main`
5. Bütün açarları yenilə (Worker + Lemon Squeezy)

### Ssenari 3: PDF Merger istifadəçi brauzerini çökdürür
**Səbəb:** Yaddaş sızması, ardıcıllıq pozulub
**Həll:**
1. Fövqəladə 25 MB limitə endir (`data-max-size="26214400"`)
2. Bütün `Promise.all`-ları `for` loop-a çevir
3. Hər `URL.createObjectURL`-a uyğun `revokeObjectURL` əlavə et
4. 24 saat içində fix + deploy

### Ssenari 4: Motivasiya tamamilə itir
**Səbəb:** Yanma (burnout), uğursuzluq hissi
**Həll:**
1. **3 gün tam istirahət** (kompüterə toxunma)
2. `README.md` oxu — niyə başladın?
3. `docs/launch-checklist.md`-də "nə bitib?" bölməsinə bax — 30% bitib!
4. 4-cü gün **ən kiçik task**-dan başla (15 dəq iş)
5. Özünə **kiçik mükafat** ver (kino, yemək, oyun)

---

## 📚 RESURSLAR

### Rəsmi sənədlər
- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Cloudflare Workers: https://developers.cloudflare.com/workers/
- Lemon Squeezy API: https://docs.lemonsqueezy.com/
- PapaParse: https://www.papaparse.com/docs
- pdf-lib: https://pdf-lib.js.org/

### Öyrənmə
- MDN Web APIs: https://developer.mozilla.org/en-US/docs/Web/API
- Web.dev: https://web.dev/
- Google Search Central: https://developers.google.com/search

### Alətlər
- PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse (Chrome DevTools)
- Rich Results Test: https://search.google.com/test/rich-results
- Schema Validator: https://validator.schema.org/

---

## 📝 DƏYİŞİKLİK JURNALI

| Tarix | Versiya | Dəyişiklik |
|---|---|---|
| 20 Okt 2026 | 1.0 | İlk yaradılma. 8/27 fayl bitib. Həftə 1–13 planı hazır. |

### Gələcək yeniləmələr üçün qeyd
- Hər həftə Cümə: task-ları `[x]` et, "Növbəti həftə" yaz
- Hər ay sonu: milestone nəticələrini yaz
- Lansmandan sonra: 30 günlük planı yenilə
- Ay 3: retrospektiv yaz, ay 4–12 planı revize et

---

## 🎯 BUGÜNKÜ İLK ADDIM (20 Oktyabr 2026)

**Sən bu sənədi indicə oxudun.** İndi:

1. **5 dəqiqə** — `git status` yoxla, hər şey təmiz olsun
2. **5 dəqiqə** — `docs/launch-checklist.md`-i `git add` + `git commit -m "docs: launch checklist v1"`
3. **15 dəqiqə** — `_template/tool.html`-i `public/tools/csv-merger/index.html`-ə kopyala
4. **30 dəqiqə** — Həftə 1-in ilk 3 task-ını et (`{{TOOL_NAME}}` → `CSV Merger`)
5. **5 dəqiqə** — Şəxsi jurnal: "Bugün nə etdim, sabah nə edəcəm"

**Cəmi 1 saatlıq iş.** Bu, 90 günlük yolun ilk addımıdır.

**Unutma:** İlk ayın uğuru $500 deyil — **ilk 10 istifadəçini tapmaqdır**. Hazırlıq dövründə hədəf 6–8 işlək alət + 500–1.000 ziyarətçi + 20 B2B əlaqə.

**18 Yanvarda hər şey hazır olacaq. Sənə yalnız "aktivləşdirmək" qalacaq.**

---

> *"The first month's success is not $500. It's finding the first 10 users."*

**Uğurlar. İndi işə başla.** 🚀