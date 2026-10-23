# nosend.dev

> **Privacy-first developer tools that run 100% in your browser.**
> Your files never leave your device. No upload. No server. No tracking.

---

## 📖 Overview

**nosend.dev** is a collection of browser-based file processing tools built for developers, lawyers, accountants, and privacy-conscious professionals. Every tool runs entirely client-side using modern browser APIs — `WebAssembly`, `Canvas`, `PapaParse`, and `pdf-lib`. No file is ever transmitted to a server, which means zero data collection, zero third-party exposure, and zero compliance headaches.

The project was born from a simple observation: traditional file-processing tools (Smallpdf, iLovePDF, Convertio) require you to upload sensitive documents to someone else's server. For legal contracts, financial spreadsheets, or medical records, this is an unacceptable trade-off. **nosend.dev eliminates that trade-off entirely.**

> **Status:** Active development · Pre-monetization phase · Public launch scheduled for **18 January 2027**.

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
| **Backend (license only)** | [Cloudflare Workers](https://workers.cloudflare.com/) | ~20-line license validation endpoint |
| **Payments** | [Lemon Squeezy](https://www.lemonsqueezy.com/) (Merchant of Record) | Subscription + lifetime license |
| **Hosting** | [Cloudflare Pages](https://pages.cloudflare.com/) | Global edge, free tier, `_headers` + `_redirects` support |
| **Domain** | Cloudflare Registrar | `nosend.dev` |
| **Version control** | Git + GitHub | Private repo |

---

## 📂 File Structure

```
nosend.dev/                          ← GitHub repo root
│
├── README.md                        This file (project brain — not deployed)
├── .gitignore                       node_modules, .env, .wrangler, build artifacts
│
├── public/                          ← CLOUDFLARE PAGES DEPLOY ROOT
│   │
│   ├── index.html                   Homepage (tool catalog)
│   ├── privacy.html                 Privacy policy
│   ├── terms.html                   Terms of service
│   ├── 404.html                     Custom 404 page
│   ├── robots.txt                   Google bot directives
│   ├── sitemap.xml                  Full URL inventory
│   ├── _headers                     Cache + security headers (Cloudflare)
│   ├── _redirects                   URL redirects (Cloudflare)
│   ├── favicon.svg                  Site icon (SVG, retina-ready)
│   │
│   ├── assets/                      ← SHARED RESOURCES
│   │   ├── css/
│   │   │   └── style.css            Design system (tokens, components, layout)
│   │   ├── js/
│   │   │   ├── common.js            Header, footer, nav, active-link highlighting
│   │   │   └── license.js           Premium gating (stub → production)
│   │   └── img/
│   │       └── og-image.png         Social media preview (1200×630)
│   │
│   └── tools/                       ← ALL TOOLS (each in its own directory)
│       ├── csv-merger/index.html    ① CSV Merger
│       ├── csv-to-json/index.html   ② CSV → JSON
│       ├── json-formatter/index.html ③ JSON Formatter
│       ├── image-compressor/index.html ④ Image Compressor
│       ├── pdf-merger/index.html    ⑤ PDF Merger
│       └── image-converter/index.html ⑥ Image Converter
│
├── worker/                          ← CLOUDFLARE WORKER (separate deploy)
│   ├── src/
│   │   └── index.js                 License validation endpoint
│   ├── wrangler.toml                Worker configuration
│   └── package.json                 Worker dependencies
│
├── _template/
│   └── tool.html                    Master template (not deployed — copy to create new tools)
│
└── docs/                            ← PERSONAL NOTES (not deployed)
    ├── launch-checklist.md          90-day launch plan
    └── b2b-emails.md                B2B outreach templates
```

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

| # | Tool | Status | Library | Notes |
|---|---|---|---|---|
| ① | **CSV Merger** | 🚧 In progress | PapaParse | `worker: true` mode — handles 300–500 MB safely |
| ② | **CSV → JSON** | 📋 Planned | PapaParse | Header detection, pretty-print, preview |
| ③ | **JSON Formatter** | 📋 Planned | *(none)* | Format, minify, validate — no dependency |
| ④ | **Image Compressor** | 📋 Planned | Canvas API | Quality slider, before/after comparison |
| ⑤ | **PDF Merger** | 📋 Planned | pdf-lib | ⚠️ 50 MB limit — sequential processing required |
| ⑥ | **Image Converter** | 📋 Planned | Canvas API | PNG ↔ JPG ↔ WebP |

### Third-phase tools (post-monetization)

- Batch Image Resizer (`JSZip`)
- CSV/Excel Cleaner (`SheetJS`, `readAsReadOnly: true`)
- Base64 Encoder / Decoder

---

## 💰 Monetization Model

Three layers, applied after **18 January 2027** (see [Constraints](#-constraints--realities)).

### Layer 1 — Programmatic Ads

Google AdSense or Ezoic. Developer tools niche has theoretical RPM of $15–$30; realistic RPM after adblock is $8–$15. At 50,000 monthly pageviews, expected $150–$400/month.

### Layer 2 — Premium Subscription

| Feature | Free | Premium |
|---|---|---|
| Core tools | ✅ | ✅ |
| Monthly operations | 10 | Unlimited |
| Max file size | 10 MB | 50 MB (PDF) / 500 MB (CSV) |
| Batch processing | ❌ | ✅ |
| Ad-free experience | ❌ | ✅ |
| Early access to new tools | ❌ | ✅ |

**Pricing:** $9/month · $79/year · **Lifetime: $49–$99 (launch window only)**

### Layer 3 — B2B White-Label

Annual license for agencies, SaaS companies, law firms, and accounting firms: **$299–$999/year**. Sales cycle: 6–12 months. Becomes the dominant revenue source from month 12 onward.

**Payments:** Lemon Squeezy (Merchant of Record). Fees: 5% + $0.50 per transaction, +1.5% for international cards, +1.5% for PayPal, +0.5% for subscriptions.

---

## 📈 Realistic Revenue Projection

> All projections account for the **age constraint** (see below). Real sales begin **18 January 2027**, not before.

| Project Month | Calendar | Phase | Monthly Revenue (100% owner) |
|---|---|---|---|
| 1 | Oct 2026 | Preparation | $0 |
| 2 | Nov 2026 | Preparation | $0 |
| 3 | Dec 2026 | Preparation | $0 |
| 4 | Jan 2027 | Monetization begins | $50–$300 |
| 5 | Feb 2027 | Monetization | $150–$400 |
| 6 | Mar 2027 | Monetization | $250–$550 |
| 7 | Apr 2027 | Monetization | $350–$650 |
| 8 | May 2027 | Monetization | $450–$800 |
| 9 | Jun 2027 | Monetization | $550–$950 |
| 10 | Jul 2027 | Scale | $650–$1,100 |
| 11 | Aug 2027 | Scale | $750–$1,300 |
| 12 | Sep 2027 | Scale | $850–$1,500 |

**12-month total (realistic):** ~$4,550–$8,550 (first 3 months at $0 included).

**Break-even:** Domain cost (~$15) recovered with the first lifetime deal. Full time-value break-even in **April 2027** (month 3 of monetization).

---

## ⚠️ Constraints & Realities

This project is **not** a get-rich-quick scheme. Three constraints shape every decision:

### 1. Age Constraint

The project owner turns **18 on 18 January 2027**. Before that date:

| Not possible | Why |
|---|---|
| Opening a payment processor account | Lemon Squeezy / Paddle require KYC with age ≥ 18 |
| Independent bank account | Azerbaijani law requires guardian consent for 14–18 |
| PayPal account | Global ToS requires account holder ≥ 18 |
| Using a parent's account | **Forbidden** — violates platform ToS, results in account termination |

| Possible | Why |
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

---

## 📅 90-Day Launch Plan

**Goal:** Ship a fully working product by 18 January 2027, with zero revenue during the prep phase.

| Week | Dates | Focus | Concrete Output |
|---|---|---|---|
| 1 | 18–24 Oct | CSV Merger — HTML/CSS skeleton | Visible interface in browser |
| 2 | 25–31 Oct | CSV Merger — JS logic (`PapaParse`) | Working merge |
| 3 | 1–7 Nov | Deploy to Cloudflare Pages + domain | Live URL |
| 4 | 8–14 Nov | CSV→JSON + JSON Formatter | 2 new tools |
| 5 | 15–21 Nov | SEO: `<title>`, `<meta>`, JSON-LD, `sitemap.xml` | Google Search Console registration |
| 6 | 22–28 Nov | Image Compressor (`Canvas` API) | Working compressor |
| 7 | 29 Nov – 5 Dec | PDF Merger (50 MB limit) | Working PDF tool |
| 8 | 6–12 Dec | Image Converter + first 10 pSEO pages | 6+ tools done |
| 9 | 13–19 Dec | B2B email campaign — 20 firms | First replies |
| 10 | 20–26 Dec | Lemon Squeezy setup + Cloudflare Worker endpoint | Payment system ready |
| 11 | 27 Dec – 2 Jan | Premium logic (test mode) | Premium ready in 1 tool |
| 12 | 3–9 Jan | SEO content expansion + Product Hunt prep | 20+ pages, launch assets |
| 13 | 10–17 Jan | Final prep + bank account documentation | Fully ready for 18 Jan |

**18 January 2027 — Formalization & Launch Day:**

- Open bank account
- Complete Lemon Squeezy KYC
- Create PayPal account
- Product Hunt launch
- Hacker News "Show HN"
- First sale 🎉

See [`docs/launch-checklist.md`](docs/launch-checklist.md) for the atomic weekly breakdown.

---

## 📊 Project Status

- [x] **Day 1 — Foundation:** `.gitignore`, `README.md`, `style.css`, `common.js`
- [X] **Day 2 — Template & shared resources:** `_template/tool.html`, `license.js`, `favicon.svg`, `launch-checklist.md`
- [X] **Day 3 — Core pages:** `index.html`, `privacy.html`, `terms.html`, `404.html`
- [X] **Day 4 — SEO & Cloudflare config:** `robots.txt`, `_headers`, `_redirects`, `wrangler.toml`
- [ ] **Day 5 — Backend & docs:** `worker/package.json`, `worker/src/index.js`, `b2b-emails.md`, `sitemap.xml`
- [ ] **Day 6 — First tools:** `csv-merger`, `csv-to-json`, `json-formatter`, `image-compressor`
- [ ] **Day 7+ — Remaining tools:** `pdf-merger`, `image-converter`
- [ ] **Assets:** `og-image.png`
- [ ] **Monetization:** Lemon Squeezy KYC, Worker deployment, premium gating live
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
- **Security:** security@nosend.dev
- **Website:** [https://nosend.dev](https://nosend.dev)
- **Launch:** 18 January 2027

---

## 🧭 Final Note

> *"The first month's success is not $500. It's finding the first 10 users. During the prep phase, the goal is 6–8 working tools + 500–1,000 visitors + 20 B2B relationships. On 18 January, everything will be ready — all you have to do is flip the switch."*

**$50 of revenue is better than $0 — and from month 2 of monetization, that number starts to grow.**

---

**Last updated:** 20 October 2026 · **Next milestone:** Day 4 (SEO & Cloudflare config)
