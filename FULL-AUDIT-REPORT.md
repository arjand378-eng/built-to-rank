# Built to Rank — Full SEO Audit Report
**Site:** https://builttorank.ca
**Originally Audited:** April 24, 2026
**Re-Audited (live):** April 24, 2026 — post-deploy live crawl
**Pages crawled:** 11 (homepage + 4 standalone + 1 proof + 4 blog posts + privacy)

---

## Overall SEO Health Score

### Live Score (re-audit): 62 / 100

| Category | Weight | Original Baseline | Post-Fix Estimate | Live Score | Weighted |
|---|---|---|---|---|---|
| Technical SEO | 22% | 65/100 | 85/100 | 72/100 | 15.8 |
| Content Quality | 23% | 60/100 | 65/100 | 58/100 | 13.3 |
| On-Page SEO | 20% | 80/100 | 83/100 | 76/100 | 15.2 |
| Schema / Structured Data | 10% | 60/100 | 82/100 | 80/100 | 8.0 |
| Performance (CWV) | 10% | 45/100 | 75/100 | 35/100 | 3.5 |
| AI Search Readiness | 10% | 50/100 | 78/100 | 42/100 | 4.2 |
| Images | 5% | 40/100 | 55/100 | 40/100 | 2.0 |
| **Total** | 100% | **62** | **~84** | **62** | **62** |

**Why estimated 84 did not materialize:**
All code-level fixes from the April 24 implementation session deployed correctly. But three things happened during deploy that wiped out the gains:
1. Google-Extended and GPTBot are **still blocked** in the live robots.txt — the Cloudflare fix did not persist
2. Two new AI-generated homepage images deployed at uncompressed sizes (732KB + 1.2MB) — destroying mobile LCP
3. og-image.jpg referenced in all OG/Twitter/schema tags but the file was never deployed (returns 404)

---

## Executive Summary

The site has a clean crawlable foundation: all 11 pages return 200, sitemap complete, canonicals correct, security headers all present, schema well-structured. Three new critical issues emerged on the live crawl that need resolving before the score can move.

**New Critical Issues Found (post-deploy):**
1. **robots.txt still blocks Google-Extended and GPTBot** — Cloudflare AI Scrapers setting reverted or conflicts with custom rules. Google AI Overviews and ChatGPT cannot crawl the site.
2. **og-image.jpg is 404** — every social share, OG preview, Twitter card, and LocalBusiness schema image reference is broken.
3. **Two massive unoptimized images deployed** — mobile-website-preview.webp (732KB) and builder-workspace.webp (1.2MB). Estimated mobile LCP: 4.5–7s (should be under 2.5s).

**Carried Over from Previous Session (still open):**
- peel-excavation-preview.jpg still serving as JPEG (WebP conversion not deployed to live server)
- [INTERNAL-LINK:] literal text rendering in the Google Maps blog post
- 3 of 4 blog posts are thin content (430–530 words each)

---

## Issues Resolved in Previous Session (Confirmed Live)

| # | Fix | Status |
|---|---|---|
| 1 | logo.png 1.8MB → 3KB WebP | Confirmed live — 2.6KB ✓ |
| 2 | lang="en-CA" | Confirmed live ✓ |
| 3 | HSTS header | Confirmed live ✓ |
| 4 | Permissions-Policy header | Confirmed live ✓ |
| 5 | OpeningHoursSpecification in schema | Confirmed live ✓ |
| 6 | Postal code + geo coordinates in schema | Confirmed live ✓ |
| 7 | WebSite schema + SearchAction | Confirmed live ✓ |
| 8 | BreadcrumbList on all inner pages | Confirmed live ✓ |
| 9 | Blog title shortened (was 88 chars → 57) | Confirmed live ✓ |
| 10 | Internal cross-links between all 4 blog posts | Confirmed live ✓ |
| 11 | llms.txt expanded with all page URLs | Confirmed live ✓ |
| 12 | H2 spacing bug fixed | Confirmed live ✓ |
| 13 | Canonical trailing slash aligned | Confirmed live ✓ |
| 14 | Unused 1MB seedream image deleted | Confirmed live ✓ |
| 15 | tel: links confirmed correct on all pages | Confirmed live ✓ |
| 16 | Homepage images added (now 4 total, was 2) | Confirmed live ✓ |

---

## 1. Technical SEO — Live: 72/100

### Crawlability
| Check | Status | Notes |
|---|---|---|
| Sitemap present | Pass | https://builttorank.ca/sitemap.xml — all 11 URLs |
| All sitemap URLs return 200 | Pass | 11/11 URLs accessible |
| robots.txt present | Pass | Present but conflicts (see below) |
| Googlebot allowed | Pass | Allow: / |
| HTTP/2 | Pass | Confirmed in response headers |
| Redirects | Pass | No unnecessary redirect chains |

### CRITICAL — robots.txt AI Crawler Blocks (REGRESSION)

The live robots.txt at https://builttorank.ca/robots.txt has a two-section conflict:

**Cloudflare Managed section (lines 1–40 approx):**
```
User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /
```

**Custom section (below the Cloudflare block):**
```
User-Agent: GPTBot
Disallow: /

User-Agent: Google-Extended
Disallow: /
```

Both sections are active. The previous session's Cloudflare Dashboard fix (Security → Bots → AI Scrapers) did not hold. Fix requires two steps: (1) re-apply the Cloudflare Dashboard change, AND (2) explicitly allow these bots in `public/robots.txt` to override Cloudflare's managed rules.

| Crawler | Status | Impact |
|---|---|---|
| Google-Extended (Gemini / AI Overviews) | **BLOCKED** | Prevents Google AI Overview appearances |
| GPTBot (OpenAI training) | **BLOCKED** | Blocks OpenAI from training on site |
| ClaudeBot (Anthropic) | **BLOCKED** | Blocks Anthropic crawler |
| PerplexityBot | Allowed ✓ | Fine |
| ChatGPT-User (browsing) | Allowed ✓ | Fine |

### Indexability
| Check | Status | Notes |
|---|---|---|
| No noindex on live pages | Pass | All 11 pages indexable |
| Canonical tags present | Pass | All 11 pages |
| Canonical consistency | Pass | Homepage: https://builttorank.ca matches sitemap ✓ |

### Security Headers
| Header | Status | Notes |
|---|---|---|
| Content-Security-Policy | Pass | Present |
| X-Content-Type-Options | Pass | nosniff |
| X-Frame-Options | Pass | SAMEORIGIN |
| Referrer-Policy | Pass | strict-origin-when-cross-origin |
| Strict-Transport-Security (HSTS) | Pass | max-age=31536000; includeSubDomains; preload |
| Permissions-Policy | Pass | camera=(), microphone=(), geolocation=() |

---

## 2. Content Quality — Live: 58/100

### E-E-A-T Score: 61/100

| Signal | Score | Notes |
|---|---|---|
| Experience | 14/20 | 1 real portfolio project; no process photos or timeline evidence |
| Expertise | 17/25 | Correct vocabulary; blog posts inconsistent in depth |
| Authoritativeness | 9/25 | Zero external recognition; client site on netlify.app subdomain |
| Trustworthiness | 21/30 | Real contact info, live HTTPS, honest FAQ copy |

### Content Issues

**CRITICAL:**
- `[INTERNAL-LINK:]` is rendering as **literal visible text** in the published Google Maps blog post. An unresolved Markdown placeholder was pushed to production. Fix: check `content/blog/how-to-show-up-on-google-maps-brampton.md` for the raw placeholder and replace it with the actual link.

**HIGH:**
- No LinkedIn link anywhere on the site. It is the cheapest available external authority signal.
- Peel Excavation client site is on `netlify.app` (free subdomain) — a quality rater will notice the client is not on a purchased domain. This actively weakens the portfolio authority claim.
- No named person in the Peel Excavation testimonial (only the company name). Self-attribution ("From the builder") adds no trust signal.

**HIGH — Thin Blog Posts:**
| Post | Est. Word Count | Problem |
|---|---|---|
| local-seo-contractors-brampton | ~480 words | Claims to be "complete, no-fluff" — frontmatter says 7-min read, actual read time is 3 min. No Brampton-specific data, no stats. |
| why-trades-businesses-need-a-website | ~430 words | Generic opinion piece with no sourced numbers. Geographic angle in title but not in body. |
| what-trades-website-must-have-2026 | ~530 words | Hedged language ("significant portion may leave"), nothing 2026-specific. Title implies recency; content does not deliver. |

Only the Google Maps post (5,262 words, sourced stats, Brampton-specific context) meets competitive quality standards.

### AI Citation Readiness: 52/100

The Google Maps blog post is citation-ready. The other three are not — they use vague qualitative language where AI would need specific numbers to cite.

---

## 3. On-Page SEO — Live: 76/100

### Title Tags
| Page | Title | Length | Status |
|---|---|---|---|
| Homepage | Web Design & SEO for Trades \| Built to Rank | 46 | Good |
| About | About \| Built to Rank — Web Design & SEO for Trades | 55 | Good |
| Services | Services \| Built to Rank — Web Design & SEO for Trades | 58 | Good |
| Contact | Contact \| Built to Rank — Free Website Audit | 44 | Good |
| Blog index | Blog \| Built to Rank — Web Design & SEO Tips for Trades | 59 | Good |
| Blog: Google Maps | How to Show Up on Google Maps in Brampton \| Built to Rank | 57 | Good ✓ |
| Blog: Why Website | Why Every Trades Business Needs a Website in 2026 \| Built to Rank | 65 | Good |
| Blog: Local SEO | Local SEO for Contractors: How to Build a Stronger Google Presence \| Built to Rank | **82** | FAIL — over 60 |
| Blog: Must Have | 5 Things Your Trades Business Website Must Have (And Most Don't) \| Built to Rank | **85** | FAIL — over 60 |
| Proof page | Peel Excavation Services — Case Study \| Built to Rank | 54 | Good |

### OG / Social Tags
| Tag | Status | Notes |
|---|---|---|
| og:title | Pass | All pages |
| og:description | Pass | All pages |
| og:url | Pass | All pages |
| og:image | **FAIL — 404** | /og-image.jpg does not exist on live server |
| og:locale | Pass | en_CA |
| og:type | Pass | website / article as appropriate |
| twitter:card | Pass | summary_large_image |
| twitter:image | **FAIL — 404** | Same /og-image.jpg reference |

### Internal Linking
- Blog cross-links: all 4 posts link to 2 others ✓
- [INTERNAL-LINK:] literal text in Google Maps post is a broken link

---

## 4. Schema / Structured Data — Live: 80/100

### Present Schemas (confirmed live)
| Schema | Pages | Status |
|---|---|---|
| LocalBusiness + ProfessionalService | All pages | Valid ✓ |
| WebSite + SearchAction | All pages | Valid ✓ |
| FAQPage | Homepage | Valid ✓ |
| BlogPosting + BreadcrumbList | All 4 blog posts | Valid ✓ |
| BreadcrumbList | /about, /services, /contact, /blog | Valid ✓ |

### Schema Issue
The `image` property in LocalBusiness schema references `/og-image.jpg` (returns 404). This also breaks the Google Knowledge Panel image. Fixing the OG image file also fixes this.

### Still Missing
| Schema | Priority |
|---|---|
| Service schema on /services page | Medium |
| Person schema for Arjan Dhillon | Medium |

---

## 5. Performance — Live: 35/100

### Estimated Core Web Vitals (Mobile — lab estimate, no CrUX field data yet)
| Metric | Estimate | Threshold | Status |
|---|---|---|---|
| LCP | 4.5–7s | < 2.5s good | **FAIL — Poor** |
| INP | 150–280ms | < 200ms good | Borderline |
| CLS | 0.05–0.12 | < 0.1 good | Borderline |

### Image Assets — Current Live State
| Asset | Size | Format | Status |
|---|---|---|---|
| /logo.webp | 2.6KB | WebP | Good ✓ |
| /mobile-website-preview.webp | **732KB** | WebP | CRITICAL — recompress to <60KB |
| /builder-workspace.webp | **1.2MB** | WebP | CRITICAL — recompress to <80KB |
| /peel-excavation-preview.jpg | 97KB | JPEG | HIGH — WebP not deployed |
| /og-image.jpg | **404** | — | CRITICAL — file missing |
| 3d-tech.mp4 | ~4.7MB | MP4 | CRITICAL — needs `preload="none"` |

### Root Cause of Poor LCP
1. Video `3d-tech.mp4` has no `preload="none"` — browser downloads the full MP4 on page load, saturating mobile bandwidth before LCP can render
2. `hero-poster.webp` is not preloaded in `<head>` with `fetchpriority="high"`
3. 732KB and 1.2MB images compete for bandwidth at page load

### Quick Fix for LCP
Add two things to code — no design changes needed:

**In `Hero.tsx`:** Add `preload="none"` to the video element
```tsx
<video autoPlay muted loop playsInline preload="none" poster="/hero-poster.webp">
```

**In `app/layout.tsx`:** Add preload for the hero poster after the logo preload
```html
<link rel="preload" as="image" href="/hero-poster.webp" fetchpriority="high" />
```

Then compress the two large images (squoosh.app or `cwebp` CLI):
- `mobile-website-preview.webp`: target <60KB at 800px wide, quality 75–80
- `builder-workspace.webp`: target <80KB at 800px wide, quality 75–80

This alone should bring estimated LCP from 5–7s down to 2–3s range.

### CLS Sources
- Bebas Neue loads with `display: swap` — causes visible layout shift on all H1, H2, StatsBar numbers when it swaps in from the fallback font
- 3 Google Font families (Inter, Plus Jakarta Sans, Bebas Neue) — audit and remove the one unused for body copy

---

## 6. AI Search Readiness — Live: 42/100

| Signal | Status | Notes |
|---|---|---|
| llms.txt present | Pass | Complete with all URLs ✓ |
| Google-Extended (Gemini) | **FAIL** | BLOCKED in robots.txt |
| GPTBot (OpenAI) | **FAIL** | BLOCKED in robots.txt |
| ClaudeBot | **FAIL** | BLOCKED by Cloudflare |
| PerplexityBot | Pass | Allowed ✓ |
| ChatGPT-User (browsing) | Pass | Allowed ✓ |
| FAQ section citable | Pass | FAQPage schema + answer-first structure ✓ |
| Google Maps blog post citable | Pass | Best content on site for AI citation ✓ |
| Other 3 blog posts citable | Fail | Vague language, no sourced stats |
| Brand mentions external | None | Expected at this stage |

---

## 7. Images — Live: 40/100

| Location | Image | Size | Format | Status |
|---|---|---|---|---|
| Homepage | logo.webp | 2.6KB | WebP | Good ✓ |
| Homepage (hero area) | mobile-website-preview.webp | 732KB | WebP | CRITICAL — recompress |
| About section | builder-workspace.webp | 1.2MB | WebP | CRITICAL — recompress |
| Portfolio section | peel-excavation-preview.jpg | 97KB | JPEG | HIGH — convert to WebP |
| OG / social / schema | og-image.jpg | 404 | — | CRITICAL — file missing |

---

## 8. Local SEO — Live Assessment

| Signal | Status | Notes |
|---|---|---|
| NAP in schema | Pass | Name, phone, email, address all present ✓ |
| Postal code | Pass | L6X 0R3 ✓ |
| Geo coordinates | Pass | 43.7315, -79.7624 ✓ |
| areaServed | Pass | 7 locations listed ✓ |
| GBP sameAs | Pass | Linked ✓ |
| OpeningHoursSpecification | Pass | Mon-Fri 09:00-18:00 ✓ |
| Reviews | None yet | GBP is new — expected |
| Phone clickable on mobile | Pass | tel:+16476578525 on all pages ✓ |
| Location keywords in content | Pass | Brampton, Peel Region, GTA throughout ✓ |
| Physical address visible in footer | Missing | In schema but not visible HTML |
| LinkedIn profile linked | Missing | No external profile link on site |
| Location-specific landing pages | Missing | No dedicated Mississauga/Caledon pages |
| schema image property | FAIL | Points to og-image.jpg (404) |

---

## 9. Full Issues Summary

### Previously Fixed — Confirmed Live ✓
All 17 items from the April 24 implementation session are confirmed fixed on the live site (see Section above).

### New / Open Issues from Live Audit

| # | Issue | Severity | Category |
|---|---|---|---|
| N1 | Google-Extended + GPTBot blocked in robots.txt | Critical | AI / Technical |
| N2 | og-image.jpg is 404 — all OG/social/schema image tags broken | Critical | On-Page / Images |
| N3 | mobile-website-preview.webp is 732KB | Critical | Performance |
| N4 | builder-workspace.webp is 1.2MB | Critical | Performance |
| N5 | Video hero has no preload="none" — LCP blocker | Critical | Performance |
| N6 | [INTERNAL-LINK:] literal text in Google Maps blog post | High | Content |
| N7 | peel-excavation-preview.webp missing from live server | High | Images |
| N8 | Blog title "local-seo-contractors" is 82 chars | High | On-Page |
| N9 | Blog title "what-trades-must-have" is 85 chars | High | On-Page |
| N10 | 3 thin blog posts (430–530 words, vague language) | High | Content |
| N11 | No LinkedIn link anywhere on site | Medium | E-E-A-T |
| N12 | Testimonial has no named person — only company name | Medium | E-E-A-T |
| N13 | No physical address visible in footer HTML | Medium | Local SEO |
| N14 | Bebas Neue font swap causing CLS on all headings | Medium | Performance |
| N15 | 3 Google Font families — reduce to 2 | Low | Performance |
| N16 | logo.webp missing fetchpriority="high" in Navbar | Low | Performance |
| N17 | hero-poster.webp not preloaded in <head> | Low | Performance |

---

## Session Notes — April 24, 2026 (Re-Audit)

**What worked:** All code-level fixes from the implementation session are confirmed live.

**What didn't:** The live score is still 62/100 because:
1. The Cloudflare AI crawler unblock did not persist — this needs to be re-done AND backed up with explicit Allow rules in `public/robots.txt`.
2. The OG image file was never created — `og-image.jpg` must be created and deployed.
3. The new homepage images went up without compression — 732KB and 1.2MB are breaking mobile LCP.

**Estimated score with N1–N5 fixed:** ~79/100 (recovers all the performance and AI categories).
**Estimated score with N1–N10 fixed:** ~85/100 (recovers content category too).
