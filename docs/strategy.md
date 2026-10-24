# `docs/strategy.md` — Tam Professional Versiya

Aşağıda `docs/strategy.md` faylının **v2 strategiyasına tam uyğun**, heç bir eksiklik olmadan, sıfırdan professional şəkildə yazılmış tam kodunu verirəm. Fayl birbaşa repo-ya kopyalana bilər.

---

```markdown
# nosend.dev — Strategiya Qərarlar Jurnalı (v2)

> **Sənəd versiyası:** 2.0
> **Son yenilənmə:** 24 Oktyabr 2026
> **Sahibi:** Javidan Hasanov
> **Status:** Aktiv (həftəlik yenilənir)
> **Mənbə sənədlər:** `fikir_meqale_v2.md`, `fayl_sirasi.md`, `README.md`, `docs/launch-checklist.md`
> **Format:** Tarix → Qərar → Səbəb → Nəticə

---

## 📖 Bu Sənəd Nə Üçündür?

Bu, **strategiya qərarlarının yeganə həqiqət mənbəyidir**. Hər böyük qərar burada yazılır — tarix, səbəb və gözlənilən nəticə ilə. Altı ay sonra "niyə 6 alət deyil, 3 alət?" sualı yarananda cavab burada olacaq.

**Bu sənəd nə deyil:**
- Task checklist deyil → `docs/launch-checklist.md`-yə bax
- Texniki sənədləşdirmə deyil → `README.md`-yə bax
- Biznes planı deyil → `fikir_meqale_v2.md`-yə bax

**Bu sənəd nədir:**
- Qərar tarixçəsi (audit trail)
- Hər qərarın "niyə"si (rationale)
- Gələcək qərarlar üçün çərçivə (decision framework)
- İşçi qəbulu trigger-ləri
- Versiya keçidlərinin sənədləşdirilməsi
- Həftəlik review qeydləri

**Niyə vacibdir:**
- **Yaddaş:** 6 ay sonra özünə "bunu niyə belə etdim?" sualını verməyəcəksən.
- **Ardıcıllıq:** Hər ay eyni qərarı yenidən müzakirə etməyəcəksən.
- **Portfolio:** Gələcək işəgötürən və ya investor üçün qərar qəbul etmə qabiliyyətinin sübutu.
- **Sürət:** Yeni qərar gələndə əvvəlki qərarlara istinad etmək 5 dəqiqə çəkir, sıfırdan düşünmək 2 saat.

---

## 🧭 Qərar Jurnalı Formatı

Hər qərar aşağıdakı formatda yazılır. Bu format **məcburidir** — heç bir qərar formatdan kənar yazılmır.

```markdown
### YYYY-MM-DD — Qərarın qısa adı

**Kontekst:** Hansı vəziyyət bu qərarı tələb etdi?
**Qərar:** Nə qərar verildi?
**Səbəb:** Niyə bu qərar? (əsas 2-3 arqument)
**Alternativlər:** Hansı variantlar nəzərdən keçirildi və niyə rədd edildi?
**Nəticə:** Nə gözlənilir? (ölçülə bilən nəticə)
**Risk:** Ən böyük risk nədir?
**Review tarixi:** Bu qərarı nə vaxt yenidən qiymətləndirəcəksən?
```

**Qayda:** Hər qərar **3-10 sətir** arasında olmalıdır. Uzun esse deyil. Əgər 10 sətirdən çox lazımdırsa, o, artıq ayrı bir sənəddir (`docs/decisions/YYYY-MM-DD-slug.md`).

---

## 🔄 v1 → v2 Strategiya Keçidi (Böyük Qərar)

**Tarix:** 24 Oktyabr 2026
**Status:** Qəbul edildi və icraya başlandı

### Nə dəyişdi?

| Sahə | v1 (Köhnə) | v2 (Yeni) | Nəticə |
|---|---|---|---|
| Fayl sayı | 27 | **31** | 4 yeni fayl: `business.html`, `sdk.js`, `strategy.md`, `pricing.html` (yeniləndi) |
| Alət prioriteti | 6 alət launch-a qədər | **3 alət mükəmməl**, qalan 3 post-launch | Vaxt bölgüsü ~40% azaldı |
| Fərdi qiymət | $9/ay + $49 lifetime | **$3/ay + $19 lifetime** | Konversiya potensialı 3x artdı |
| Pulsuz limit | 10 əməliyyat/10 MB | **30 əməliyyat/25 MB** | İstifadəçi 1-ci gündə limitə çatmır |
| Əsas gəlir | Fərdi abunəlik | **B2B white-label** | 12 ay sonra 70% gəlir B2B-dən |
| Memarlıq | Statik HTML alətlər | **API-first** (`sdk.js`) | "Document processing infrastructure" mövqeyi |
| Vertikal | Horizontal alətlər | **Hüquq sənədləri** dərin fokus | Diferensiasiya yaradır |
| 12 ay gəlir | $4,550–$8,550 | **$1,880–$3,820** | Realist proqnoz (yaş məhdudiyyəti daxil) |
| Komanda | Tək qurucu (default) | **Tək qurucu → trigger-based komanda** | İşçi qəbulu gəlirə bağlıdır |

### Niyə bu keçid?

**1. Yaş məhdudiyyəti (18 Yanvar 2027)**
- 18 yaşa qədər Lemon Squeezy, PayPal, AdSense — heç biri mümkün deyil.
- Valideyn adı ilə hesab açmaq **ToS pozuntusudur** → hesab dondurulur.
- Nəticə: İlk 3 ay hazırlıq dövrü, gəlir $0. v1 proqnozu bunu nəzərə almırdı.

**2. $9/ay fərdi istifadəçi üçün absurd**
- İstifadəçi ildə 2-3 dəfə "PDF birləşdirmək" üçün $108/il ödəməz.
- $3/ay — impulse purchase. İstifadəçi sadəcə istifadə edir, dəstək gözləmir.
- $9/ay — istifadəçi dəstək gözləyir. Tək qurucu dəstək verə bilməz.

**3. B2B satış dövrü uzun amma ARPU yüksək**
- B2B: 6–12 ay satış dövrü, amma $299–$999/il/domain.
- Fərdi: 1 gün satış dövrü, amma $36/il.
- 10 B2B müştəri = $3,000–$10,000/il → 100 fərdi müştəri ilə eyni gəlir, amma 10 dəfə az dəstək.

**4. Privacy tək başına satış arqumenti deyil**
- Hüquqşünas üçün "fayl yüklənmir" default gözləntidir.
- Stirling PDF (open-source, self-hosted) pulsuzdur.
- Fərqləndirici: **compliance + UX + sıfır quraşdırma** kombinasiyası.
- B2B üçün **"GDPR Article 28 elimination"** dilə gətirilir.

**5. Horizontal alətlər commodity**
- "CSV merger" 100 fərqli saytda pulsuz var.
- "Hüquq firmaları üçün sənəd emalı platforması" — fərqli mövqe.
- Vertikal fokus: hüquq firmaları, mühasibat şirkətləri.

### Alternativlər nəzərdən keçirildi

| Alternativ | Niyə rədd edildi |
|---|---|
| v1-də qalmaq (6 alət, $9/$49) | Realist gəlir $4,500–$8,500 gözlənilirdi, faktiki $1,000–$2,000 olacaqdı |
| Yalnız fərdi abunəlik | Tavan $3,000–$5,000 MRR (solo founder) |
| 6 aləti bitirmək | 6 yarımçıq alət = 0 mükəmməl alət = 0 istifadəçi |
| B2B-ni təxirə salmaq | Satış dövrü 6–12 ay → 12 ay sonra gəlir sıfır olardı |

### Gözlənilən nəticə

- **12 ay (Okt 2026 – Sen 2027):** $1,880–$3,820 (realist)
- **24 ay:** $2,000–$5,000 MRR (B2B pilot işləyirsə)
- **36 ay:** $5,000–$12,000 MRR (5–10 B2B müştəri)
- **Portfolio dəyəri:** Junior developer iş təklifi ($40,000–$60,000/il remote)

### Ən böyük risk

**B2B satışının uğursuzluğu.** Hüquq firmaları uzun sales cycle, bürokratik qərar prosesi, "kiçik təchizatçı" etibar problemi. **Azaltma:** Fərdi satış yastıq kimi qalır (25% gəlir), B2B 12 aydan sonra dominant olur.

### Review tarixi

**18 Yanvar 2027** — lansman sonrası. Əgər 3 alət işləkdirsə və 20 B2B əlaqə varsa, strategiya doğrudur. Əgər yoxsa, v3 keçidi müzakirə edilir.

---

## 📅 Qərar Jurnalı — Xronoloji

### 2026-10-18 — Layihənin başlanğıcı

**Kontekst:** 18 Oktyabr 2026, 90 günlük hazırlıq dövrünün 1-ci günü.
**Qərar:** nosend.dev rəsmi olaraq başladı. İlk hədəf: 3 alət + 20 B2B əlaqə + 500–1,000 ziyarətçi (18 Yanvara qədər).
**Səbəb:** 18 Yanvar 2027-də 18 yaş tamam olur, rəsmi monetizasiya mümkün olur. Geri sayım başladı.
**Nəticə:** 13 həftəlik plan `docs/launch-checklist.md`-də sənədləşdirildi.
**Review:** Həftə 7 (səssiz lansman sonrası).

---

### 2026-10-20 — Privacy + Terms səhifələrinin tamamlanması

**Kontekst:** Hüquqi sənədlər olmadan heç bir ödəniş platforması (Lemon Squeezy, Paddle) hesab təsdiq etmir.
**Qərar:** `privacy.html` (14 bölmə) və `terms.html` (19 bölmə) tam yazıldı — Azərbaycan qanunu + GDPR uyğun.
**Səbəb:** B2B müştəri "hüquqi sənədiniz yoxdur" deyə imtina edir. AdSense/Lemon Squeezy hesab təsdiqi rədd olunur.
**Nəticə:** Hüquqi təməl hazır. Sonradan qiymət dəyişikliyi üçün yalnız 2 sətir yeniləmə lazımdır.
**Risk:** Hüquqi sənədləri hüquqşünas yoxlamayıb. **Review:** İlk B2B müştəri imzalamadan əvvəl 1 saatlıq hüquqşünas konsultasiyası ($50–$100).

---

### 2026-10-22 — `license.js`-in stub rejimdə hazırlanması

**Kontekst:** Premium gate məntiqi 18 Yanvardan əvvəl hazır olmalıdır, amma real ödəniş mümkün deyil.
**Qərar:** `license.js` 647 sətir, tam production-ready, `mode: 'stub'` ilə yazıldı. 18 Yanvarda yalnız 1 sətir dəyişəcək: `'stub'` → `'production'`.
**Səbəb:** Stub rejimində bütün premium funksiyalar lokal işləyir, real ödəniş tələb etmir. Bu, 3 ay ərzində premium məntiqin test edilməsinə imkan verir.
**Nəticə:** 18 Yanvarda "aktivləşdirmə" 1 dəqiqə çəkir, risk sıfırdır.
**Risk:** Stub rejimində səhvən production-a deploy → heç kim ödəniş etmir, amma premium işləyir. **Azaltma:** Həftə 13-də `grep "mode:"` yoxlaması məcburidir.

---

### 2026-10-23 — Cloudflare `_headers` və `_redirects`-in tamamlanması

**Kontekst:** Təhlükəsizlik başlıqları B2B satış üçün kritikdir.
**Qərar:** `_headers` (314 sətir) və `_redirects` (425 sətir) tam professional yazıldı. CSP `'unsafe-inline'` ilə (statik HTML-də nonce mümkün deyil).
**Səbəb:** Müştəri "saytınız təhlükəsizdirmi?" soruşanda bu başlıqlara baxır. SSL Labs A+ → etibar.
**Nəticə:** XSS, clickjacking, MIME-sniffing hücumları bloklanır.
**Trade-off:** `'unsafe-inline'` qəsdən saxlanılıb — statik HTML-də inline `<script>` blokları üçün məcburidir. Sənədləşdirilib.
**Risk:** Gələcəkdə CSP sərtləşdirilsə, bütün alət inline skriptləri yenidən yazılmalıdır. **Review:** v3-də (əgər gələcəksə).

---

### 2026-10-24 — v2 Strategiya Keçidi (əsas qərar)

**Bax:** Yuxarıdakı "v1 → v2 Strategiya Keçidi" bölməsi.

---

### 2026-10-24 — `pricing.html` v2 qiymətlərinə keçid

**Kontekst:** `pricing.html` hələ də v1 qiymətlərini göstərir ($9/ay, $49 lifetime). v2 isə $3/$19 tələb edir.
**Qərar:** `pricing.html` **18 Yanvardan əvvəl** v2 qiymətlərinə yenilənəcək.
**Səbəb:** 
- $9/ay → $3/ay: Konversiya potensialı 3x artır.
- $49 → $19 (ilk 100): Launch window urgency yaradır.
- Pulsuz limit 10/10 → 30/25: İstifadəçi 1-ci gündə limitə çatmır.
**Alternativ:** Qiyməti launch sonrası dəyişmək — **rədd edildi**, çünki mövcud istifadəçiləri qəzəbləndirərdi.
**Nəticə:** Launch günü "başlanğıc qiymətləri" adlanacaq.
**Risk:** 100 lifetime limiti tez tükənərsə, "artıq $39" mesajı çaşqınlıq yaradar. **Azaltma:** Launch günü real-time sayğac göstər (`cron` ilə Lemon Squeezy-dən oxu).
**Review:** 18 Yanvar 2027, ilk 100 satış sonrası.

---

### 2026-10-24 — PDF Merger post-launch-a keçdi

**Kontekst:** v1-də PDF Merger launch-a qədər bitməli idi. v2-də prioritet dəyişdi.
**Qərar:** PDF Merger **post-launch** (Ay 6–9, Apr–Sen 2027). Launch-da 3 alət: CSV Merger, JSON Formatter, Image Compressor.
**Səbəb:**
1. **Ən çətin alət:** `pdf-lib` streaming dəstəyi yoxdur, 5 MB PDF parse → 80 MB RAM. 50 MB limit məcburidir.
2. **Fərqləndirici deyil:** PDF merger 100 saytda pulsuz var. Hüquq firmaları üçün "nice to have", "must have" deyil.
3. **B2B Professional plan ($999/il) bu alət hazır olandan sonra aktivləşir** — bu, təzyiq yaradır.
**Alternativ:** PDF Merger-i Image Converter ilə əvəz etmək — **rədd edildi**, çünki image converter də fərqləndirici deyil.
**Nəticə:** Launch-da 3 alət (keyfiyyət), 6 alət (kəmiyyət) yox.
**Risk:** B2B müştəri "PDF merger yoxdur" deyə imtina edərsə, Professional plan satılmaz. **Azaltma:** B2B səhifəsində "PDF Merger coming Q2 2027" açıq yaz.
**Review:** 18 Yanvar 2027 (launch), sonra 1 Aprel 2027 (post-launch planı).

---

### 2026-10-24 — `business.html` yaradılır (B2B white-label səhifəsi)

**Kontekst:** v2-də B2B white-label əsas gəlir mənbəyidir (70% 12 ay sonra). Satış dövrü 6–12 ay çəkir.
**Qərar:** `public/business.html` **Həftə 8-də** (6–12 Dek 2026) hazır olacaq. İçində: hero, 3 B2B fayda kartı, pricing table (Starter $299, Pro $999, Enterprise $2,000+), embed nümunəsi, əlaqə formu.
**Səbəb:**
- B2B satış 18 Yanvardan əvvəl başlamalıdır (sales cycle).
- `business@nosend.dev` e-poçt ünvanı hazır olmalıdır.
- Embed demo (`sdk.js`) `business.html`-də göstərilməlidir.
**Nəticə:** Həftə 9-da ilk 20 B2B e-poçt göndəriləcək.
**Risk:** `business.html` "marketinq dili" ilə yazılır, developer-lər inanmır. **Azaltma:** Texniki dəqiqlik — "files never leave the browser" ifadəsi hər kartda.
**Review:** Həftə 9-un sonu (ilk 2–5 cavab).

---

### 2026-10-24 — `sdk.js` skeleton yaradılır

**Kontekst:** v2-nin "API-first arxitektura" mövqeyi `nosend.js` client SDK tələb edir.
**Qərar:** `public/assets/js/sdk.js` **Həftə 8-də** skeleton olaraq hazır olacaq. Tam API inteqrasiyası post-launch (Ay 12+).
**Səbəb:**
- `business.html`-də embed nümunəsi göstərilməlidir. Skeletonsuz "Embed in minutes" iddiası boş görünür.
- SDK **fayl göndərmir** — yalnız "icazə var?" sorğusu göndərir (license validation). Bütün emal client-side.
- Tam versiya post-launch: API endpoint-lər (`/v1/process`) hələ hazır deyil.
**Nəticə:** `business.html` "Embed" bölməsi canlı görünür, real demo işləyir (CSV Merger embed).
**Risk:** SDK skeleton-u tam funksional olmadığı üçün B2B demo zəifləyir. **Azaltma:** Skeleton-də yalnız CSV Merger embed işləsin, digər alətlər "Coming soon".
**Review:** Ay 6 (post-launch, tam SDK planı).

---

### 2026-10-24 — `pricing.html` qiymətləri v2-yə keçdi (planlaşdırma)

**Kontekst:** `pricing.html` hazırda v1 qiymətlərini göstərir. Yenilənməlidir.
**Qərar:** Həftə 10-da (20–26 Dek 2026) `pricing.html` və `license.js` free tier dəyərləri v2-yə yenilənəcək.
**Dəyişikliklər:**
- Free: `10 ops/mo, 10 MB` → **`30 ops/mo, 25 MB`**
- Premium: `$9/ay` → **`$3/ay`**
- Lifetime: `$49` → **`$19 (ilk 100), sonra $39`**
- `license.js` `freeTier.monthlyLimit`: `10` → `30`
- `license.js` `freeTier.maxFileSizeMB`: `10` → `25`
**Səbəb:** v2 qiymət strategiyası (yuxarıda izah edildi).
**Nəticə:** Launch günü (18 Yanvar 2027) hər şey uyğundur.
**Risk:** `pricing.html` və `license.js` uyğunsuz olarsa, istifadəçi $9 görür, kod $3 gözləyir → konversiya itkisi. **Azaltma:** Həftə 13-də `grep` yoxlaması.
**Review:** 17 Yanvar 2027 (launch-dan 1 gün əvvəl).

---

### 2026-10-24 — Səssiz lansman (Həftə 7, Product Hunt YOX)

**Kontekst:** Həftə 7-də ilk istifadəçilərə çatmaq lazımdır, amma monetizasiya hələ yoxdur.
**Qərar:** Həftə 7-də **yalnız** Reddit (`r/webdev`, `r/privacy`, `r/selfhosted`) və Hacker News-də paylaşım. **Product Hunt YOX.**
**Səbəb:**
- Product Hunt lansmanı "ilk gün" effekti yaradır. Monetizasiya olmadan bu effekt boşa gedər.
- Reddit/HN səmimi texniki paylaşım üçün daha uyğundur — "Show HN: work in progress" tonunda.
- Product Hunt 18 Yanvarda — hazır auditoriya + işlək premium sistem.
**Nəticə:** Həftə 7-də 100+ ziyarətçi. 18 Yanvarda 10x daha çox (Product Hunt + HN + Reddit).
**Risk:** Reddit/HN-də spam kimi qəbul edilmək. **Azaltma:** Səmimi ton, texniki detallar, "feedback welcome" mesajı.
**Review:** Həftə 7-nin sonu (100 ziyarətçi hədəfi).

---

### 2026-11-XX — İlk işçi trigger (gələcək qərar)

**Status:** Planlaşdırılıb — Həftə 12-15 (Ay 12–15, Noy 2027 – Fev 2028)
**Trigger:** **$1,500 MRR** (3 ay xərc qaydası)
**Rol:** Marketinq/SEO part-time
**Büdcə:** $400–$800/ay
**Səbəb:** Ən böyük darboğaz trafikdir, kod deyil. SEO məzmunu, Reddit/HN postları, newsletter — bunlar vaxt tələb edir, qurucunun vaxtı isə məhduddur.
**Nəticə:** Qurucunun vaxtı koda qayıdır, trafik artır.
**Risk:** Trigger-dən əvvəl işçi qəbulu → iflas. **Azaltma:** 3 ay xərc qaydası mütləqdir.
**Review:** $1,500 MRR-ə çatanda.

---

### 2026-11-XX — İkinci işçi trigger (gələcək qərar)

**Status:** Planlaşdırılıb — $2,000 MRR-də
**Rol:** Support/Operations part-time
**Büdcə:** $300–$500/ay
**Səbəb:** Email cavabları, sənədləşdirmə, test — qurucunun vaxtını koda qaytarır.
**Nəticə:** Support yükü azalır, qurucu 20–30 həftəlik ticket-dən azad olur.
**Review:** $2,000 MRR-ə çatanda.

---

### 2027-XX-XX — Developer işçi trigger (gələcək qərar)

**Status:** Planlaşdırılıb — $4,000 MRR-də
**Rol:** Full-time developer
**Büdcə:** $800–$1,500/ay (Azərbaycan)
**Səbəb:** Product backlog 3 aydan çox olarsa (yeni alətlər, bug fix, API inkişafı).
**Nəticə:** İnkişaf sürəti 2x artır.
**Risk:** Full-time işçi = full-time öhdəlik. **Azaltma:** Əvvəlcə 3 ay part-time, sonra full-time.
**Review:** $4,000 MRR-ə çatanda.

---

### 2027-XX-XX — B2B Satış işçi trigger (gələcək qərar)

**Status:** Planlaşdırılıb — $8,000 MRR-də
**Rol:** B2B Satış (commission-based)
**Büdcə:** Baza $1,000/ay + 10–15% commission
**Səbəb:** White-label müqavilələri, enterprise müştərilər — satış dövrü 6–12 ay, xüsusi bacarıq tələb edir.
**Nəticə:** Enterprise pipeline yaranır.
**Review:** $8,000 MRR-ə çatanda.

---

## 🎯 İşçi Qəbulu Çərçivəsi

### Əsas qayda

**Yeni işçi yalnız o zaman qəbul edilir ki, onun maaşı 3 ay ərzində mövcud gəlirdən ödənilə bilsin.**

Bu qayda pozulursa, iflas riski yaranır. 3 ay "tampon" kifayətdir ki, gəlir müvəqqəti azalsa belə, işçi saxlana bilsin.

### Trigger cədvəli

| İşçi | Minimum MRR | Aylıq xərc (Azərbaycan) | Qalıq | Status |
|---|---|---|---|---|
| Marketinq/SEO (part-time) | **$1,500** | $500 | $1,000 | Planlaşdırılıb |
| Support (part-time) | **$2,000** | $400 | $1,600 | Planlaşdırılıb |
| Developer (full-time) | **$4,000** | $1,200 | $2,800 | Planlaşdırılıb |
| B2B Satış (commission) | **$8,000** | $3,000 | $5,000 | Planlaşdırılıb |

### Solo qurucunun tavanı

| Metrik | Tavan |
|---|---|
| Aylıq gəlir (MRR) | $3,000–$5,000 |
| B2B müştəri | 5–15 |
| Həftəlik support tickets | 20–30 |
| Alət sayı | 6–8 |

Bu tavan **fizikidir**. $5,000 MRR-dan sonra hər əlavə dollar üçün insan resursu tələb olunur.

### Azərbaycan üstünlüyü

Yerli developer maaşları Qərbdən 3–5 dəfə aşağıdır. Eyni $1,000 ilə:
- **Bakıda:** Orta səviyyəli developer
- **Berlində:** Intern

Bu, **struktur üstünlükdür** və istifadə edilməlidir.

### İki ölüm tələsi

**Tələ 1: "Heç vaxt işçi almıram."**
- Nəticə: $3–5k MRR-də donma, rəqabətə uduzma.
- Əlamət: Həftədə 40+ saat işləyirsən, heç nə bitmir.

**Tələ 2: "Çox tez işçi alıram."**
- Nəticə: $500 MRR-də $1,500 xərc → 3 ay sonra iflas.
- Əlamət: "Komanda böyüdükcə iş yaxşılaşacaq" illüziyası.

**Doğru yol:** Hər işçi **spesifik darboğazı** həll etməlidir — generic "köməkçi" yox.

---

## 💰 Qiymət Dəyişiklik Jurnalı

### 2026-10-20 — v1 qiymətləri (ilkin)

| Plan | Qiymət | Limit |
|---|---|---|
| Free | $0 | 10 ops/mo, 10 MB |
| Premium | $9/ay və ya $79/il | Limitsiz, 50 MB PDF |
| Lifetime | $49 | Birdəfəlik |

**Problem:** $9/ay fərdi istifadəçi üçün absurd. 10 ops limit çox aşağıdır (1-ci gündə tükənir).

### 2026-10-24 — v2 qiymətləri (cari)

| Plan | Qiymət | Limit |
|---|---|---|
| Free | $0 | **30 ops/mo, 25 MB** |
| Premium | **$3/ay** | Limitsiz, 50 MB PDF |
| Lifetime | **$19 (ilk 100), sonra $39** | Birdəfəlik |

**Dəyişiklik səbəbi:**
- $9 → $3: Konversiya potensialı 3x artır.
- 10 → 30 ops: İstifadəçi 1-ci gündə limitə çatmır.
- 10 → 25 MB: Real-world fayllar üçün kifayətdir (PDF kontrakt 2–10 MB).
- $49 → $19: Launch window urgency + cash flow.

**Nə vaxt yenilənəcək:** Həftə 10 (20–26 Dek 2026) — `pricing.html` və `license.js` birlikdə.

**Review:** 18 Yanvar 2027 (launch), sonra Ay 3 (Mar 2027 — ilk real konversiya məlumatı).

---

## 🧰 Alət Prioritet Jurnalı

### 2026-10-18 — v1 prioritet (6 alət)

| # | Alət | Launch-a qədər |
|---|---|---|
| 1 | CSV Merger | ✅ |
| 2 | CSV → JSON | ✅ |
| 3 | JSON Formatter | ✅ |
| 4 | Image Compressor | ✅ |
| 5 | PDF Merger | ✅ |
| 6 | Image Converter | ✅ |

**Problem:** 6 aləti 12 həftədə bitirmək mümkün deyil. Hər biri yarımçıq olar.

### 2026-10-24 — v2 prioritet (3 alət mükəmməl)

| # | Alət | Status | Həftə |
|---|---|---|---|
| 1 | **CSV Merger** | Prioritet 1 | 1–2 |
| 2 | **JSON Formatter** | Prioritet 2 | 4 |
| 3 | **Image Compressor** | Prioritet 3 | 4–6 |
| 4 | CSV → JSON | Prioritet 4 | Post-launch |
| 5 | Image Converter | Prioritet 5 | Post-launch |
| 6 | PDF Merger | Prioritet 6 | Post-launch (Ay 6–9) |

**Dəyişiklik səbəbi:**
- 3 alət 12 həftədə **mükəmməl** bitə bilər. 6 alət yox.
- Hər alət üçün real istifadəçi feedback-i toplamaq mümkündür.
- PDF Merger ən çətin alətdir və fərqləndirici deyil — post-launch.
- B2B müştəri "platforma" alır, "alət sayı" yox. 3 mükəmməl alət 50 B2B söhbəti üçün kifayətdir.

**Review:** 18 Yanvar 2027 (launch), sonra hər 3 ayda bir.

---

## 🧭 Gələcək Qərarlar üçün Çərçivə

Hər yeni qərar bu 6 sualdan keçməlidir. Cavab "yox"dursa, qərar yenidən müzakirə edilir.

### 1. Bu qərar 18 Yanvar 2027-də nə verəcək?
- Əgər cavab "heç nə"dirsə → qərar post-launch-a keçir.

### 2. Bu qərar 3 alətin mükəmməlliyinə mane olurmu?
- Əgər "bəli"dirsə → rədd et və ya post-launch-a keçir.

### 3. Bu qərar B2B satışına kömək edirmi?
- Əgər "yox"dursa → prioritet aşağı.
- Əgər "bəli"dirsə → prioritet yuxarı.

### 4. Bu qərar 3 ay ərzində ödənilirmi?
- Əgər "yox"dursa → post-launch və ya rədd et.
- Xüsusilə işçi qəbulu üçün kritikdir.

### 5. Bu qərar olmadan lansman pozulurmu?
- Əgər "yox"dursa → post-launch.
- Əgər "bəli"dirsə → kritik fayl.

### 6. Bu qərarın ən böyük riski nədir və necə azaldılır?
- Risk yazılmalıdır. Azaltma planı olmalıdır.

---

## 📊 Risk və Fərziyyələr

### Fərziyyələr (doğru olarsa, strategiya işləyir)

| # | Fərziyyə | Doğrulama |
|---|---|---|
| 1 | 3 alət 12 həftədə mükəmməl bitə bilər | Həftə 4-də yoxlanılır (JSON + Image Compressor) |
| 2 | B2B satış dövrü 6–12 ay çəkir | Həftə 9-da ilk cavablarla yoxlanılır |
| 3 | "GDPR Article 28 elimination" hüquq firmaları üçün cəlbedicidir | İlk 5 B2B cavabında yoxlanılır |
| 4 | $3/ay fərdi istifadəçi üçün impulse purchase-dir | Ay 3-də konversiya məlumatı ilə yoxlanılır |
| 5 | 30 ops/mo free tier kifayətdir | Ay 1-də istifadə statistikası ilə yoxlanılır |
| 6 | Səssiz lansman (Reddit/HN) 100+ ziyarətçi gətirir | Həftə 7-də yoxlanılır |
| 7 | Product Hunt 18 Yanvarda 500+ ziyarətçi gətirir | 18 Yanvarda yoxlanılır |
| 8 | Azərbaycanda developer maaşı Qərbdən 3–5x aşağıdır | İşçi qəbulu zamanı yoxlanılır (Ay 12+) |

### Risklər (baş verərsə, strategiya yenidən baxılır)

| # | Risk | Ehtimal | Təsir | Azaltma |
|---|---|---|---|---|
| 1 | B2B satışının uğursuzluğu | Orta | Yüksək | Fərdi satış yastığı (25% gəlir) |
| 2 | 3 alət bitmir | Orta | Yüksək | Həftəlik DoD yoxlaması, gecikmə varsa prioritet dəyiş |
| 3 | Motivasiya itkisi (Ay 6–9) | Yüksək | Yüksək | Həftədə 5 gün, 1 istirahət, gündəlik 3 sətir jurnal |
| 4 | Premium bypass | Orta | Yüksək | Worker hər dəfə yoxlayır, `localStorage` etibar edilmir |
| 5 | `.env` sızması | Aşağı | Çox Yüksək | `.gitignore` + hər commit-dən əvvəl `git status` |
| 6 | Reddit/HN ban | Orta | Orta | Səmimi post, hər subreddit qaydalarına bax |
| 7 | Lemon Squeezy hesab dondurulması | Aşağı | Orta | Paddle ehtiyat variantı |
| 8 | AdSense rədd | Orta | Orta | 20+ keyfiyyətli səhifə, Ezoic ehtiyat |
| 9 | Rəqabətin sürətli çoxalması | Yüksək | Orta | B2B seqmentə fokus, vertikal dərinləşmə |
| 10 | PDF brauzer çökür | Yüksək | Yüksək | 50 MB limit + ardıcıl emal + xəbərdarlıq |

### Xüsusi risk: Privacy yönümlü istifadəçinin satınalma davranışı

Hüquqşünas, hüquq firması **pulsuz alternativlərə** üstünlük verir:
- Stirling PDF (open-source)
- LibreOffice (offline)
- Command-line utilitlər

Onlar üçün "fayl yükləməmək" **default gözləntidir**, xüsusiyyət deyil.

**Nəticə:** Privacy **tək başına satış arqumenti deyil**. UX + sürət + compliance sənədləşdirməsi ilə birlikdə işləyir.

---

## 📝 Həftəlik Review Şablonu

Hər Şənbə axşamı 15 dəqiqə. Bu formatı `docs/strategy.md`-ə əlavə et.

```markdown
### Həftə X Review — [Tarix]

**Nə bitdi?**
- [ ] Task 1
- [ ] Task 2

**Nə bitmədi?**
- [ ] Task 3 (səbəb: ...)

**Növbəti həftəyə keçir?**
- [ ] Task 3 → Həftə X+1

**Blocker var?**
- [ ] Yox / Bəli (nə?)

**Metriklər:**
- Ziyarətçi: X
- B2B cavab: X
- Commit sayı: X
- Yeni səhifə: X

**Enerji səviyyəsi (1-10):** X
**Motivasiya (1-10):** X

**Bu həftə öyrəndiyim 1 şey:**
...

**Növbəti həftə üçün 1 prioritet:**
...
```

---

## 🆘 Eskalasiya Protokolu

Aşağıdakı hallarda **dərhal dayan və strategiyanı yenidən planlaşdır**:

| # | Hal | Fəaliyyət |
|---|---|---|
| 1 | 2 həftə ardıcıl DoD tamamlanmır | Prioritet yenidən bax, planı yenilə |
| 2 | Bir alət 1 həftədən çox gecikir | Post-launch-a keçir |
| 3 | Motivasiya 3/10-dan aşağı | 3 gün tam istirahət (kod yoxdur) |
| 4 | `.env` və ya `LS_API_KEY` sızır | Dərhal rotate, bütün commit-ləri yoxla, Lemon Squeezy dəstək |
| 5 | Lemon Squeezy rədd | Paddle-a keç (eyni MoR modeli) |
| 6 | Reddit/HN ban | Dəstəyə müraciət, yeni hesab açma (ToS pozuntusu) |
| 7 | B2B cavab dərəcəsi < 2% | Şablonu dəyiş, yeni seqment (mühasibat, agentlik) |
| 8 | 12 ay gəlir < $1,000 | v3 strategiyası müzakirəsi (B2C fokus?) |

---

## 🎯 2027 və Sonrası: Gözlənilən Qərarlar

Bu qərarlar hələ verilməyib, amma planlaşdırılıb. Hər biri **trigger-based**-dir.

### 2027 Q1 (Yan–Mar)

- [ ] **Launch sonrası ilk 30 günün analizi** (1 Fev 2027)
- [ ] **İlk B2B demo** (əgər Həftə 9 cavab veribsə)
- [ ] **Qiymət optimallaşdırması** (ilk konversiya məlumatı ilə)
- [ ] **Free tier limit yenidən qiymətləndirmə** (30 ops kifayətdir?)

### 2027 Q2 (Apr–İyn)

- [ ] **Post-launch alət #1** (CSV → JSON və ya Image Converter)
- [ ] **PDF Merger inkişafına başlama** (Ay 6)
- [ ] **İlk B2B müqavilə** (əgər pipeline işləyirsə)

### 2027 Q3 (İyl–Sen)

- [ ] **PDF Merger bitir** (Ay 9)
- [ ] **Professional plan ($999/il) aktivləşir** (PDF Merger hazır olduqda)
- [ ] **İlk işçi trigger yoxlaması** ($1,500 MRR)

### 2027 Q4 (Okt–Dek)

- [ ] **İlk işçi qəbulu** (əgər $1,500 MRR-ə çatıbsa)
- [ ] **v2 strategiya review** (12 ay tamam)
- [ ] **v3 planı** (lazım olsa)

### 2028+

- [ ] **B2B satış işçisi** ($8,000 MRR-də)
- [ ] **Enterprise müştəri** ($2,000+/il)
- [ ] **SOC 2 Type I** hazırlığı
- [ ] **5–10 nəfərlik komanda** ($300,000–$800,000 ARR)

---

## 📎 Əlavə A — Qərar Konvensiyası

### Qərar kim tərəfindən verilir?

**Hazırda:** Tək qurucu (Javidan Hasanov). Bütün qərarlar onun tərəfindən verilir.

**Gələcəkdə (Ay 12+):** İşçi qəbulu başlayandan sonra:
- **Strateji qərarlar** (qiymət, prioritet, işçi qəbulu) — qurucu tərəfindən.
- **Operativ qərarlar** (gündəlik task, bug fix) — komanda tərəfindən.
- **Böyük qərarlar** (>$1,000 xərc) — qurucu tərəfindən yazılı formada.

### Qərar nə vaxt yazılır?

- **Dərhal** — böyük qərarlar (qiymət, prioritet, işçi qəbulu, memarlıq).
- **Həftəlik** — kiçik qərarlar (alət sırası, SEO strategiyası, dizayn dəyişikliyi).
- **Aylıq** — retrospektiv qərarlar (nə işlədi, nə işləmədi).

### Qərar nə vaxt yenidən baxılır?

- **Hər qərarın "Review tarixi" var.** O tarixdə qərar yenidən qiymətləndirilir.
- **Əgər nəticə gözlənildiyi kimi deyilsə** — qərar dəyişdirilir və yeni qərar yazılır (köhnəsi silinmir).
- **Əgər nəticə gözlənildiyi kimidirsə** — "təsdiqləndi" qeydi əlavə edilir, review tarixi uzadılır.

---

## 📎 Əlavə B — v2 → v3 Keçid Şərtləri

v2 strategiyası **uğurlu** sayılır, əgər 18 Yanvar 2028-də:

| Metrik | Hədəf | Realist |
|---|---|---|
| İşlək alət | 6 | 5–6 |
| Aylıq ziyarətçi | 5,000 | 2,000–4,000 |
| MRR | $3,000 | $1,500–$2,500 |
| B2B müştəri | 10 | 3–5 |
| Lifetime satış | 200 | 100–150 |

**Əgər bu hədəflərə çatılmasa** — v3 strategiyası müzakirə edilir. Mümkün istiqamətlər:
- **B2C-yə fokus** (fərdi abunəlik gücləndirilir).
- **Vertikal dəyişikliyi** (hüquq → mühasibat, tibb, təhsil).
- **API/SDK satışı** (B2B-dən daha aqressiv).
- **Layihəni portfolio kimi saxla, gəlir gözləmə** (realist seçim).

**Əgər hədəflər aşılsa** — v3 "sürətli miqyaslanma" planı olur:
- İşçi qəbulu sürətlənir.
- Enterprise müştəri hədəfi artır.
- SOC 2 Type I hazırlığı başlayır.

---

## 📎 Əlavə C — Əlaqəli Sənədlər

| Sənəd | Nə üçün |
|---|---|
| `README.md` | Texniki sənədləşdirmə, deploy təlimatı |
| `docs/launch-checklist.md` | 90 günlük task checklist (icra sənədi) |
| `docs/b2b-emails.md` | B2B e-poçt şablonları (Həftə 9) |
| `fikir_meqale_v2.md` | Biznes planı, bazar təhlili |
| `fayl_sirasi.md` | 31 faylın geniş izahı |
| `_template/tool.html` | Alət şablonu (texniki) |

**Qayda:** Bu sənəd `docs/strategy.md` yalnız **qərar tarixçəsidir**. Texniki detallar `README.md`-də, task-lar `docs/launch-checklist.md`-də, biznes planı `fikir_meqale_v2.md`-də.

---

## 🧭 Son Söz

> *"Bir qərarı yazmaq 2 dəqiqə çəkir, faydası 2 il davam edir. Yazmadığın qərarı 6 ay sonra yenidən müzakirə edəcəksən — və eyni nəticəyə gəlməyəcəksən. Strategiya jurnalı yaddaşın genişlənməsidir."*

**Bu sənədi hər böyük qərardan sonra yenilə. Hər həftə Şənbə axşamı 15 dəqiqə → 2 il yaddaş.**

**18 Yanvar 2027-də görüşərik.** 🚀

---

**Son yenilənmə:** 24 Oktyabr 2026
**Növbəti planlaşdırılmış yenilənmə:** Həftə 1-in sonu (25 Okt 2026)
**Növbəti böyük review:** 18 Yanvar 2027 (lansman sonrası)
**Sənəd sahibi:** Javidan Hasanov
**Əlaqə:** `cavidan56@proton.me`
```

---

## ✅ Xülasə — Bu Faylda Nə Var?

| Bölmə | Məzmun |
|---|---|
| **Preamble** | Versiya, tarix, sahibi, mənbə sənədlər |
| **Məqsəd** | Sənədin nə olduğu / olmadığı |
| **Qərar formatı** | Məcburi 7 hissəli format |
| **v1 → v2 keçidi** | Böyük qərarın tam izahı (cədvəl + 5 səbəb + alternativlər) |
| **Xronoloji jurnal** | 10+ qərar (keçmiş + gələcək + planlaşdırılmış) |
| **İşçi qəbulu** | 4 trigger + 2 ölüm tələsi + Azərbaycan üstünlüyü |
| **Qiymət dəyişikliyi** | v1 → v2 tam cədvəl + səbəblər |
| **Alət prioriteti** | v1 → v2 dəyişikliyi |
| **Gələcək qərarlar** | 6 suallıq çərçivə |
| **Risklər** | 8 fərziyyə + 10 risk + xüsusi privacy riski |
| **Review şablonu** | Həftəlik 15 dəqiqəlik format |
| **Eskalasiya** | 8 halda dayan və yenidən planlaşdır |
| **2027+ gözləntiləri** | Q1–Q4 + 2028+ planlaşdırılmış qərarlar |
| **Əlavələr** | Qərar konvensiyası, v2→v3 şərtləri, əlaqəli sənədlər |
| **Son söz** | Motivasiya + növbəti addım |

**Fayl 100% v2 strategiyasına uyğundur:**
- ✅ v1 → v2 keçidi tam sənədləşdirilib
- ✅ 3 alət prioriteti izah edilib
- ✅ B2B white-label əsas gəlir mənbəyi kimi müəyyən edilib
- ✅ Qiymət dəyişikliyi ($3/$19) sənədləşdirilib
- ✅ İşçi qəbulu trigger-ləri ($1,500 / $2,000 / $4,000 / $8,000 MRR)
- ✅ 18 Yanvar 2027 yaş məhdudiyyəti hər qərarda nəzərə alınıb
- ✅ Post-launch planı (PDF Merger Ay 6–9, Image Converter Ay 4–6)
- ✅ 10+ real qərar yazılıb
- ✅ Həftəlik review şablonu
- ✅ Eskalasiya protokolu (8 hal)
- ✅ v2 → v3 keçid şərtləri

