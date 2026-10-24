# nosend.dev

> **Privacy-first developer tools that run 100% in your browser.**
> Your files never leave your device. No upload. No server. No tracking.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [What Changed in v2](#-what-changed-in-v2)
- [Key Principles](#-key-principles)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [File Structure](#-file-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Tools Catalog](#-tools-catalog)
- [Monetization Model](#-monetization-model)
- [Realistic Revenue Projection](#-realistic-revenue-projection)
- [Constraints & Realities](#%EF%B8%8F-constraints--realities)
- [Team & Scaling Strategy](#-team--scaling-strategy)
- [90-Day Launch Plan](#-90-day-launch-plan)
- [Project Status](#-project-status)
- [Testing](#-testing)
- [Security Notes](#-security-notes)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Final Note](#-final-note)

---

## 📖 Overview

**nosend.dev** is a collection of browser-based file processing tools built for developers, lawyers, accountants, and privacy-conscious professionals. Every tool runs entirely client-side using modern browser APIs — `WebAssembly`, `Canvas`, `PapaParse`, and `pdf-lib`. No file is ever transmitted to a server, which means zero data collection, zero third-party exposure, and zero compliance headaches.

The project was born from a simple observation: traditional file-processing tools (Smallpdf, iLovePDF, Convertio) require you to upload sensitive documents to someone else's server. For legal contracts, financial spreadsheets, or medical records, this is an unacceptable trade-off. **nosend.dev eliminates that trade-off entirely.**

> **Status:** Active development · Pre-monetization phase · Public launch scheduled for **18 January 2027**.

---

## 🔄 What Changed in v2

> **Document version:** 2.0 · **Last updated:** 24 October 2026
> **Source:** `fikir_meqale_v2.md`

The v2 strategy represents a deliberate pivot from the original v1 plan. The most significant changes:

| Area | v1 (Old) | v2 (New) |
|---|---|---|
| **File count** | 27 | **31** (4 new files) |
| **Tool priority** | 6 tools, all before launch | **3-4 tools perfect**, rest post-launch |
| **Individual pricing** | $9/mo + $49 lifetime | **$3/mo + $19 lifetime** |
| **Free tier** | 10 ops/mo, 10 MB | **30 ops/mo, 25 MB** |
| **Primary revenue** | Individual subscriptions | **B2B white-label** (`business.html`) |
| **Architecture** | Static tool pages | **API-first** (`sdk.js`) |
| **Vertical focus** | Horizontal tools | **Legal document processing** (deep vertical) |
| **12-month revenue** | $4,550–$8,550 | **$1,880–$3,820** (realistic) |
| **Team** | Solo-only | **Solo → trigger-based team** |
| **New files** | — | `business.html`, `sdk.js`, `strategy.md`, `pricing.html` (needs update) |

**Key rationale:**
- **$9/month is absurd** for a user who processes files 2–3 times per year. $3/month converts; $9/month churns.
- **B2B sales cycles are long** (6–12 months) but ARPU is high ($299–$999/year). Starting early is essential.
- **Privacy alone isn't a sales argument.** Compliance documentation, UX simplicity, and zero-install are what actually close deals.
- **Horizontal tools are commodities.** Vertical focus on legal documents creates differentiation.
- **Quality > quantity.** 3 perfect tools beat 6 half-finished ones every time.

> ⚠️ **Important:** `pricing.html` currently displays v1 prices ($9/$49). It must be updated to v2 prices ($3/$19) **before 18 January 2027**.

---

## 🎯 Key Principles

| Principle | What it means |
|---|---|
| **Zero upload** | Files are processed in the browser using `FileReader`, `Canvas`, `WebAssembly`. Nothing is transmitted. |
| **Zero backend (for tools)** | All tool logic is client-side. A single Cloudflare Worker handles **only** license validation — nothing else. |
| **Zero tracking** | No analytics scripts, no fingerprinting, no third-party cookies. Cloudflare's anonymous edge logs only. |
| **Zero framework** | Vanilla JavaScript + small CDN libraries. No React, no Vue, no build step for tools. Fast, auditable, maintainable. |
| **Verifiable** | Every tool's claim can be verified by opening DevTools → Network tab. The absence of upload traffic is the proof. |

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | Vanilla HTML/CSS/JS | Static, no framework, instant load |
| **CSV/JSON processing** | [PapaParse](https://www.papaparse.com/) (CDN, `worker: true`) | Streaming parse of 300–500 MB files |
| **PDF processing** | [pdf-lib](https://pdf-lib.js.org/) (CDN) | Merge, split, manipulate PDFs locally |
| **Image processing** | `Canvas` API (native) | Compress, convert, resize without libraries |
| **Excel processing** | [SheetJS](https://sheetjs.com/) (CDN) | `readAsReadOnly: true` for memory safety |
| **Backend (license only)** | [Cloudflare Workers](https://workers.cloudflare.com/) | License validation endpoint |
| **Payments** | [Lemon Squeezy](https://www.lemonsqueezy.com/) (Merchant of Record) | Subscription + lifetime license |
| **Hosting** | [Cloudflare Pages](https://pages.cloudflare.com/) | Global edge, free tier, `_headers` + `_redirects` support |
| **Domain** | Cloudflare Registrar | `nosend.dev` |
| **Version control** | Git + GitHub | Private repo |

---

## 📂 File Structure

**Total:** 31 files · 16 ready (52%) · 14 pending (45%) · 1 needs verification (3%)

```
nosend.dev/                          ← GitHub repo root
│
├── README.md                        ✅ This file (project brain — not deployed)
├── .gitignore                       ⚠️  VERIFY (not in code dump — create if missing)
│
├── public/                          ← CLOUDFLARE PAGES DEPLOY ROOT
│   │
│   ├── index.html                   ✅ Homepage (tool catalog)
│   ├── privacy.html                 ✅ Privacy policy
│   ├── terms.html                   ✅ Terms of service
│   ├── pricing.html                 ⚠️  UPDATE to v2 prices ($3/$19)
│   ├── business.html                ⏳ B2B white-label page (v2 NEW)
│   ├── 404.html                     ✅ Custom 404 page
│   ├── robots.txt                   ✅ Google bot directives
│   ├── sitemap.xml                  ⏳ Full URL inventory
│   ├── _headers                     ✅ Cache + security headers
│   ├── _redirects                   ✅ URL redirects
│   ├── favicon.svg                  ✅ Site icon (SVG, retina-ready)
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css            ✅ Design system (2099 lines)
│   │   ├── js/
│   │   │   ├── common.js            ✅ Header, footer, nav
│   │   │   ├── license.js           ✅ Premium gating (stub → production)
│   │   │   └── sdk.js               ⏳ Client SDK (v2 NEW)
│   │   └── img/
│   │       └── og-image.png         ⏳ Social media preview (1200×630)
│   │
│   └── tools/                       ← ALL TOOLS
│       ├── csv-merger/index.html    ⏳ Priority 1
│       ├── json-formatter/index.html ⏳ Priority 2
│       ├── image-compressor/index.html ⏳ Priority 3
│       ├── csv-to-json/index.html   ⏳ Priority 4
│       ├── image-converter/index.html ⏳ Post-launch
│       └── pdf-merger/index.html    ⏳ Post-launch
│
├── worker/                          ← CLOUDFLARE WORKER (separate deploy)
│   ├── src/
│   │   └── index.js                 ⏳ License validation endpoint
│   ├── wrangler.toml                ✅ Worker configuration
│   └── package.json                 ⏳ Worker dependencies
│
├── _template/
│   └── tool.html                    ✅ Master template (895 lines)
│
└── docs/                            ← PERSONAL NOTES (not deployed)
    ├── launch-checklist.md          ✅ 90-day launch plan (needs v2 update)
    ├── strategy.md                  ⏳ Strategy journal (v2 NEW)
    └── b2b-emails.md                ⏳ B2B outreach templates
```

### Status Legend

- ✅ **YAZILDI** — In the codebase, deploy-ready
- ⏳ **GÖZLƏYİR** — To be written
- ⚠️ **YENİLƏNMƏLİDİR** — Written but needs v2 update

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18 (only for the Worker; tools need nothing)
- **Wrangler CLI** ≥ 3.90 (`npm install -g wrangler`)
- A **Cloudflare account** (free tier is sufficient)
- A **Lemon Squeezy account** (required for production license validation)

### Clone the Repository

```bash
git clone git@github.com:<your-username>/nosend.dev.git
cd nosend.dev
```

### Local Development

**Frontend (static tools):**

The `public/` directory is fully static. Any HTTP server works:

```bash
npx serve public
# or
python3 -m http.server 8080 --directory public
```

Open `http://localhost:3000` (or `8080`) — all tools should work immediately.

**Backend (Cloudflare Worker):**

```bash
cd worker
npm install
wrangler dev
```

This starts the Worker locally at `http://localhost:8787`. In stub mode, `license.js` bypasses the Worker entirely, so you don't need it running for local tool development.

---

## 🌐 Deployment

### Frontend — Cloudflare Pages

**Option A: Automatic (recommended)**

1. Push the `public/` directory to GitHub.
2. In Cloudflare Pages dashboard → **Create project** → connect repo.
3. Build command: *(none)* · Build output directory: `public`.
4. Every push to `main` triggers a new deploy.

**Option B: Manual**

```bash
wrangler pages deploy public --project-name=nosend
```

### Backend — Cloudflare Worker

```bash
cd worker
wrangler deploy
```

Add secrets (never commit these):

```bash
wrangler secret put LS_API_KEY
```

Then attach the Worker to a custom domain route (`api.nosend.dev`) from the Cloudflare dashboard.

### Domain — Cloudflare Registrar

- Register `nosend.dev` at [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/).
- Point `nosend.dev` → Cloudflare Pages project.
- Point `api.nosend.dev` → Cloudflare Worker route.

---

## 🔐 Environment Variables

All secrets live **only** in Cloudflare (Worker secrets). The frontend has zero secrets.

| Variable | Where | Purpose |
|---|---|---|
| `LS_API_KEY` | Cloudflare Worker secret | Lemon Squeezy API key for license validation |
| `ALLOWED_ORIGIN` | `wrangler.toml` (`[env.production]`) | CORS allowlist (`https://nosend.dev`) |
| `ENVIRONMENT` | `wrangler.toml` | `"production"` / `"development"` |

**Local development:** create `worker/.dev.vars` (already in `.gitignore`):

```
LS_API_KEY=your_lemonsqueezy_api_key_here
ALLOWED_ORIGIN=http://localhost:8787
```

> ⚠️ **Never** commit `.env`, `.dev.vars`, or any file containing `LS_API_KEY`. If a secret leaks, rotate it immediately in the Lemon Squeezy dashboard and re-run `wrangler secret put LS_API_KEY`.

---

## 🧰 Tools Catalog

### v2 Priority Order

| # | Tool | Status | Library | Launch Phase |
|---|---|---|---|---|
| ① | **CSV Merger** | 🚧 In progress | PapaParse (`worker: true`) | **Priority 1** — Week 1-2 |
| ② | **JSON Formatter** | 📋 Planned | *(native)* | **Priority 2** — Week 4 |
| ③ | **Image Compressor** | 📋 Planned | Canvas API | **Priority 3** — Week 6 |
| ④ | **CSV → JSON** | 📋 Planned | PapaParse | **Priority 4** — Week 4 |
| ⑤ | **Image Converter** | 📋 Planned | Canvas API | Post-launch (Month 4-6) |
| ⑥ | **PDF Merger** | 📋 Planned | pdf-lib | Post-launch (Month 6-9) |

### Why 3 Tools Perfect > 6 Tools Half-Finished

The v2 strategy prioritizes **quality over quantity**:

- **3 tools can be 100% complete in 12 weeks.** 6 tools cannot.
- **Each tool gets real user feedback** before the next one starts.
- **PDF Merger is the hardest tool** (no streaming in `pdf-lib`, 50 MB practical limit) and is **not a differentiator**. It ships post-launch.
- **B2B customers buy the platform, not the tool count.** A polished CSV Merger + JSON Formatter + Image Compressor is enough for the first 50 B2B conversations.

### Coming Soon (Post-Launch)

- **Excel/CSV Cleaner** (SheetJS, `readAsReadOnly: true`) — Month 6
- **Batch Image Resizer** (JSZip) — Month 4-6
- **Base64 Encoder / Decoder** — Month 4-6

---

## 💰 Monetization Model

v2 **completely restructures** the revenue model. The primary source of income is **B2B white-label**, not individual subscriptions.

### Layer 1: B2B White-Label (PRIMARY — 70% of revenue by Month 12)

**Target customers:**
- Law firms (document processing)
- Accounting platforms (CSV/Excel)
- SaaS companies (embed file processing in their product)
- Education platforms (student documents)

**Pricing tiers:**

| Tier | Price | Limits |
|---|---|---|
| **Starter** | **$299/year** | 1 domain, 5,000 ops/month, 3 tools |
| **Professional** | **$999/year** | 3 domains, 50,000 ops/month, 6 tools, white-label branding |
| **Enterprise** | **$2,000–$10,000/year** | Unlimited domains, SLA, dedicated support, SOC 2 (roadmap) |

**Sales cycle:** 6–12 months. First B2B revenue expected **Month 12+**, but by Month 18-24 it becomes the dominant revenue source.

**Why this works:** "GDPR Article 28 elimination" is a powerful compliance argument. When a law firm can tell its clients "your files never leave your browser," they gain a competitive advantage. That's worth paying for.

### Layer 2: Individual Premium (SECONDARY — 25% of revenue by Month 12)

**v2 pricing (replaces v1 $9/$49):**

| Plan | Price | Limits |
|---|---|---|
| **Free** | $0 | **30 operations/month, 25 MB per file** |
| **Premium** | **$3/month** | Unlimited, 50 MB PDF / 500 MB CSV / 100 MB image |
| **Lifetime** | **$19** (first 100 buyers), then **$39** | One-time payment, all future tools included |

**Rationale for the price drop:**

- **$9/month is absurd** for a user who processes 2–3 files per year.
- **$3/month is an impulse purchase** — the user just uses the tool without expecting support.
- **$9/month implies support obligations** the solo founder cannot fulfill.
- **$19 lifetime** creates urgency and cash flow during the launch window.

**Rationale for raising free limits (10 → 30 ops, 10 → 25 MB):**

- **10 ops/month is too low** — users hit the limit on day one and leave.
- **30 ops/month** lets a user genuinely evaluate the tools before deciding whether to pay.
- **25 MB** covers the majority of real-world files (a typical PDF contract is 2–10 MB).

### Layer 3: Programmatic Advertising (TERTIARY — 5% of revenue)

Google AdSense or Ezoic. Developer audience uses adblock heavily — realistic RPM is $8–$15. At 50,000 monthly pageviews, expected $150–$400/month.

**Note:** AdSense requires 18+ age verification. Cannot be activated before **18 January 2027**.

### Payment Infrastructure

**Lemon Squeezy** (Merchant of Record):
- Per transaction: **5% + $0.50**
- International card: **+1.5%**
- PayPal: **+1.5%**
- Subscription: **+0.5%**

**Backup option:** Paddle (similar MoR model)

> ⚠️ **Important:** Stripe does not operate in Azerbaijan. Lemon Squeezy or Paddle is mandatory.

---

## 📈 Realistic Revenue Projection

> All projections account for the **age constraint** (see [Constraints & Realities](#%EF%B8%8F-constraints--realities)). Real sales begin **18 January 2027**, not before.

### v2 12-Month Projection (Replaces v1 $4,550–$8,550)

| Project Month | Calendar | Phase | Monthly Revenue (100% owner) |
|---|---|---|---|
| 1 | Oct 2026 | Preparation | $0 |
| 2 | Nov 2026 | Preparation | $0 |
| 3 | Dec 2026 | Preparation | $0 |
| 4 | Jan 2027 | Monetization begins | **$0–$80** |
| 5 | Feb 2027 | Monetization | **$50–$150** |
| 6 | Mar 2027 | Monetization | **$80–$200** |
| 7 | Apr 2027 | Monetization | **$120–$280** |
| 8 | May 2027 | Monetization | **$180–$380** |
| 9 | Jun 2027 | Monetization | **$250–$480** |
| 10 | Jul 2027 | Scale | **$300–$600** |
| 11 | Aug 2027 | Scale | **$400–$750** |
| 12 | Sep 2027 | Scale | **$500–$900** |

**12-month total (realistic):** **$1,880–$3,820** (first 3 months at $0 included).

**Why this is lower than v1's $4,550–$8,550:**

1. **Age constraint:** No real sales possible before 18 January 2027. The first 3 months are pure preparation.
2. **Free tier fix:** Raising free limits from 10/10 to 30/25 reduces conversion pressure — good for users, lower for early revenue.
3. **Price reduction:** $3/month vs. $9/month means 67% lower individual revenue per paying user.
4. **B2B sales cycle:** 6–12 months. First B2B revenue arrives Month 12+, not Month 4.
5. **SEO lag:** Indexing takes 6–9 months. Traffic builds slowly.

### 24-Month and 36-Month Projection

| Period | Focus | Monthly Revenue |
|---|---|---|
| Month 13–18 | B2B white-label pilots | **$800–$2,000** |
| Month 19–24 | API/SDK sales, 5–10 B2B customers | **$2,000–$5,000** |
| Month 25–36 | Enterprise contracts, team scaling | **$5,000–$12,000** |

**End of Month 36:** **$60,000–$150,000 ARR.** This is not a "big company," but it is a **sustainable, growing business**.

### Break-even

- **Domain cost (~$15):** Recovered with the first lifetime deal.
- **Full time-value break-even:** **April 2027** (Month 3 of monetization).

---

## ⚠️ Constraints & Realities

This project is **not** a get-rich-quick scheme. Three constraints shape every decision:

### 1. Age Constraint

The project owner turns **18 on 18 January 2027**. Before that date:

**Not possible:**

| Blocked | Why |
|---|---|
| Opening a payment processor account | Lemon Squeezy / Paddle require KYC with age ≥ 18 |
| Independent bank account | Azerbaijani law requires guardian consent for 14–18 |
| PayPal account | Global ToS requires account holder ≥ 18 |
| Google AdSense | 18+ requirement |
| Using a parent's account | **Forbidden** — violates platform ToS, results in account termination |

**Possible:**

| Allowed | Why |
|---|---|
| Building and publishing tools | Cloudflare Pages has no age restriction |
| SEO and traffic building | Google Search Console is free and unrestricted |
| B2B relationship building | Email outreach has no age restriction |
| Learning and improving skills | The 3-month prep phase is for this |

### 2. Technical Constraints

- **CSV/JSON:** Browser is fully mature — up to ~500 MB works reliably (RAM-dependent).
- **Images:** `Canvas` API has no practical limit.
- **PDF:** `pdf-lib` has **no streaming support**. Real limit is **50–100 MB**. A 5 MB PDF can consume 80 MB RAM during parse. **"Gigabyte" claims are marketing fiction.**
- **Excel:** `SheetJS` with `readAsReadOnly: true` handles ~100 MB; beyond that, risk.

### 3. Solo-Operator Constraints

- **Single point of failure:** illness, competing priorities → project stops.
  - *Mitigation:* Push every commit to Git. Document each tool in `docs/`. Keep the codebase recoverable within 1–2 weeks.
- **Burnout:** Single-operator projects fail here most often.
  - *Mitigation:* 2–3 hours/day, 5 days/week. One full rest day after each completed tool. Weekly 15-minute personal retro.
- **Focus loss (ADHD):** Half-finished tools are the biggest trap.
  - *Mitigation:* Do not start tool B until tool A is fully shipped. Daily 3-line journal (what I did / what's unfinished / tomorrow).

### Special Risk: The Privacy-Conscious Buyer's Behavior

Users with high privacy sensitivity (lawyers, law firms) prefer **free alternatives**: Stirling PDF (open-source), LibreOffice (offline), command-line utilities. For them, "no upload" is not a feature — it is the **default expectation**.

**Conclusion:** Privacy **alone is not a sales argument.** It only works in combination with other values (UX, speed, compliance documentation).

---

## 👥 Team & Scaling Strategy

v2 introduces an explicit plan for transitioning from **solo founder** to **small team** based on revenue triggers — not a fixed calendar.

### The Solo Founder's Ceiling

With a single founder, the maximum achievable is:

| Metric | Ceiling |
|---|---|
| Monthly recurring revenue (MRR) | **$3,000–$5,000** |
| B2B customers | 5–15 |
| Weekly support tickets | 20–30 |
| Tool count | 6–8 |

This ceiling is physical. Beyond $5,000 MRR, every additional dollar requires human resources.

### Hiring Financial Rule

**Core principle:** A new hire is only made when their salary can be covered by **existing revenue for 3 months**.

| Role | Minimum MRR (trigger) | Monthly Cost (Azerbaijan) | Remaining |
|---|---|---|---|
| Marketing/SEO (part-time) | **$1,500** | $500 | $1,000 |
| Support (part-time) | **$2,000** | $400 | $1,600 |
| Developer (full-time) | **$4,000** | $1,200 | $2,800 |
| B2B Sales (commission) | **$8,000** | $3,000 | $5,000 |

**Azerbaijan advantage:** Local developer salaries are 3–5x lower than Western salaries. With the same $1,000, you can hire a mid-level developer in Baku, but only an intern in Berlin. This is a structural advantage and must be used.

### Hire Priority Order

**Hire #1 — Marketing/SEO (Month 12–15, at $1,500 MRR)**
- Does: SEO content, Reddit/HN posts, newsletter
- Why first: The biggest bottleneck is traffic, not code
- Pay: $400–$800/month (part-time, remote)

**Hire #2 — Support/Operations (parallel, at $2,000 MRR)**
- Does: Email replies, documentation, testing
- Why: Returns the founder's time to code
- Pay: $300–$500/month

**Hire #3 — Developer (Month 18–30, at $4,000 MRR)**
- Does: New tools, bug fixes, API development
- Why: When product backlog exceeds 3 months
- Pay: $800–$1,500/month

**Hire #4 — B2B Sales (Month 30–48, at $8,000 MRR)**
- Does: White-label contracts, enterprise customers
- Pay: Base $1,000/month + 10–15% commission

### The Two Death Traps of a Solo Founder

**Trap 1: "I will never hire anyone."** Result: Freeze at $3–5k MRR, lose to competitors.

**Trap 2: "I am hiring too fast."** Result: $1,500 in costs at $500 MRR, bankruptcy in 3 months.

**The right way:** Each hire must solve a **specific bottleneck** — not a generic "helper."

### 3–5 Year Target

| Metric | Target |
|---|---|
| Team | 5–10 people |
| ARR | **$300,000–$800,000** |
| B2B customers | 50–200 |
| Enterprise customers | 2–5 |
| SOC 2 certification | Type I |

---

## 📅 90-Day Launch Plan (v2)

**Goal:** Ship a fully working product by 18 January 2027, with zero revenue during the prep phase.

| Week | Dates | Focus | Concrete Output |
|---|---|---|---|
| 1 | 18–24 Oct | CSV Merger — HTML/CSS skeleton | Visible interface in browser |
| 2 | 25–31 Oct | CSV Merger — JS logic (`PapaParse worker:true`) | Working merge |
| 3 | 1–7 Nov | Deploy to Cloudflare Pages + domain | Live URL |
| 4 | 8–14 Nov | **JSON Formatter + Image Compressor** (v2 priority swap) | 3 tools done |
| 5 | 15–21 Nov | SEO: `<title>`, `<meta>`, JSON-LD, `sitemap.xml` | Google Search Console registration |
| 6 | 22–28 Nov | **Image Compressor refinement** + 5 pSEO pages | 5 blog pages |
| 7 | 29 Nov – 5 Dec | **Silent launch** — Reddit/HN (NOT Product Hunt) | First 100 visitors |
| 8 | 6–12 Dec | **B2B white-label page** (`business.html`) | `/business` page live |
| 9 | 13–19 Dec | **First 20 B2B emails** | 2–5 replies |
| 10 | 20–26 Dec | Cloudflare Worker + Lemon Squeezy prep | Payment system ready |
| 11 | 27 Dec – 2 Jan | Premium logic (test mode, stub) | Premium ready in 1 tool |
| 12 | 3–9 Jan | SEO expansion + launch assets | 20+ pages, launch materials |
| 13 | 10–17 Jan | Final prep + bank documentation | Fully ready for 18 Jan |

### Key Changes from v1

- **Week 4:** JSON Formatter + Image Compressor replace CSV→JSON + PDF Merger
- **Week 7:** Silent launch (Reddit/HN) replaces PDF Merger work
- **Week 8:** B2B white-label page replaces Image Converter + pSEO
- **Week 9-13:** B2B outreach focus replaces tool-building focus

### 18 January 2027 — Formalization & Launch Day

- Open bank account (with parent present)
- Complete Lemon Squeezy KYC
- Create PayPal account
- Product Hunt launch
- Hacker News "Show HN"
- LinkedIn B2B campaign
- **First sale** 🎉

See [`docs/launch-checklist.md`](docs/launch-checklist.md) for the atomic weekly breakdown.

---

## 📊 Project Status

- [x] **Day 1 — Foundation:** `.gitignore`, `README.md`, `style.css`, `common.js`
- [x] **Day 2 — Template & shared resources:** `_template/tool.html`, `license.js`, `favicon.svg`, `launch-checklist.md`
- [x] **Day 3 — Core pages:** `index.html`, `privacy.html`, `terms.html`, `404.html`
- [x] **Day 4 — SEO & Cloudflare config:** `robots.txt`, `_headers`, `_redirects`, `wrangler.toml`
- [x] **Day 5 — Pricing page (v1 prices):** `pricing.html` ⚠️ **Needs v2 update**
- [ ] **Day 6 — Backend & docs:** `worker/package.json`, `worker/src/index.js`, `b2b-emails.md`, `sitemap.xml`
- [ ] **Day 7 — First tool:** `csv-merger` (Priority 1)
- [ ] **Day 8 — Second + third tools:** `json-formatter`, `image-compressor` (Priorities 2, 3)
- [ ] **Day 9 — B2B page:** `business.html`
- [ ] **Day 10 — Client SDK skeleton:** `sdk.js`
- [ ] **Day 11 — Strategy journal:** `docs/strategy.md`
- [ ] **Day 12 — Post-launch tools:** `csv-to-json`, `pdf-merger`, `image-converter`
- [ ] **Assets:** `og-image.png`
- [ ] **Monetization:** Lemon Squeezy KYC, Worker deployment, premium gating live
- [ ] **Price update:** `pricing.html` ($9/$49 → $3/$19)
- [ ] **Free tier update:** `license.js` (10/10 → 30/25)
- [ ] **18 January 2027 — Public launch** 🚀

Update this checklist at the end of every working day. In 6 months, this file is the fastest way to remember where you left off.

---

## 🧪 Testing

**Manual testing checklist** (run after every tool):

1. Open the tool in Chrome, Firefox, and Safari.
2. Drop a sample file → verify output.
3. Open DevTools → **Network tab** → confirm **zero upload requests**.
4. Verify the file downloads correctly.
5. Test on mobile (responsive viewport ≤ 640px).
6. Confirm `URL.revokeObjectURL()` is called (no memory leak — check `chrome://memory` after 20+ operations).

**Worker testing:**

```bash
cd worker
npm test   # vitest
```

---

## 🔒 Security Notes

- **Secrets:** `LS_API_KEY` lives only in Cloudflare Worker secrets. It is never exposed to the frontend.
- **CORS:** `ALLOWED_ORIGIN` is restricted to `https://nosend.dev` in production.
- **Content Security Policy:** enforced via `public/_headers` — no inline scripts except tool-specific blocks with explicit allowlists.
- **License bypass prevention:** License status is validated server-side (Cloudflare Worker → Lemon Squeezy), never trusted from `localStorage`. The usage counter uses `localStorage` for stats only — losing it resets nothing critical.
- **File size guards:** PDF Merger refuses files >50 MB **before** parsing. Sequential processing prevents RAM exhaustion.

If you discover a vulnerability, email **security@nosend.dev** (do not open a public issue).

---

## 🤝 Contributing

This is a **solo project** by design. External contributions are not accepted at this time — all files are written and maintained by the project owner. Pull requests will be closed without review.

If you want to support the project:

- ⭐ Star the repo (once public)
- 🐛 Report bugs via GitHub Issues
- 💬 Share feedback on Product Hunt / Hacker News
- 💳 Purchase a lifetime license (after 18 Jan 2027)

---

## 📜 License

**Proprietary.** All code, design, and content © 2026–2027 nosend.dev.

The tool **logic** is inspired by open-source libraries (PapaParse, pdf-lib, SheetJS) but the integration, UI, and product are original work. No part of this repository may be copied, redistributed, or used to build a competing product without written permission.

For licensing inquiries: **hello@nosend.dev**

---

## 📬 Contact

- **Email:** cavidan56@proton.me
- **Business inquiries:** business@nosend.dev
- **Security:** security@nosend.dev
- **Website:** [https://nosend.dev](https://nosend.dev)
- **Launch:** 18 January 2027

---

## 🧭 Final Note

> *"The first month's success is not $500. It's finding the first 10 users. During the prep phase, the goal is 3 perfect tools + 500–1,000 visitors + 20 B2B relationships. On 18 January, everything will be ready — all you have to do is flip the switch."*

**v2 reality check:** This project will **not** make you rich in 1–2 years. But:

- **Portfolio value:** A professionally-written, documented, deployed project on GitHub will be worth 10x more than the average junior developer's portfolio. That's a $40,000–$60,000/year job offer (remote, junior level).
- **Learning value:** Cloudflare Workers, Pages, CSP, SEO, licensing, payment flow, accessibility — these skills cost $5,000–$15,000 in bootcamps.
- **Discipline proof:** Staying consistent for 6+ months is a strong signal to investors and employers.
- **Long-term potential:** In 3–5 years, this can grow into a **sustainable, profitable, small-team business** at $300,000–$800,000 ARR.

**Biggest risk:** Motivation loss (Month 6–9). **Biggest opportunity:** Early pivot to B2B white-label / API model.

**Focus right now:** Write code, find the first 10 users, build B2B relationships. **Execute** — don't perfect the business plan.

---

**Last updated:** 24 October 2026 · **Next milestone:** Week 1 — CSV Merger HTML skeleton
**Next scheduled review:** 18 January 2027 (post-launch)