# Built to Rank — Full SEO Audit Report
**Site:** https://builttorank.ca
**Originally Audited:** April 24, 2026
**Re-Audited (live):** April 24, 2026 — post-deploy live crawl (7 parallel subagents)
**Pages crawled:** 12 (homepage + 5 standalone + 4 blog posts + privacy + codex)

---

## Overall SEO Health Score

### Live Score (April 24, 2026 second re-audit): 69 / 100

| Category | Weight | Previous Score | New Score | Weighted |
|---|---|---|---|---|
| Technical SEO | 22% | 72/100 | 83/100 | 18.3 |
| Content Quality | 23% | 58/100 | 51/100 | 11.7 |
| On-Page SEO | 20% | 76/100 | 68/100 | 13.6 |
| Schema / Structured Data | 10% | 80/100 | 72/100 | 7.2 |
| Performance (CWV) | 10% | 35/100 | 70/100 | 7.0 |
| AI Search Readiness | 10% | 42/100 | 71/100 | 7.1 |
| Images | 5% | 40/100 | 78/100 | 3.9 |
| **Total** | 100% | **62** | **69** | **68.8** |

**Net change: +7 points (62 → 69)**

---

## What Moved and Why

### Big Gains
- **Performance: 35 → 70 (+35)** — mobile-website-preview.webp 732KB → 15.8KB, builder-workspace.webp 1.2MB → 28.8KB, video preload="none" added, hero poster preloaded with fetchpriority="high"
- **AI Search Readiness: 42 → 71 (+29)** — all AI crawlers explicitly allowed, Cloudflare Managed robots.txt block disabled, robots.ts corrected
- **Technical SEO: 72 → 83 (+11)** — robots.txt clean, all crawlers allowed, security headers confirmed live
- **Images: 40 → 78 (+38)** — og-image.jpg now 200 OK (was 404), all images compressed and live

### Why Overall Score Only Rose 7 Points
- **Content Quality: 58 → 51 (-7)** — three blog posts at 460-520 words each with no statistics. This category has 23% weight and is actively dragging the total score
- **On-Page SEO: 76 → 68 (-8)** — audit found new issues not caught before: blog posts had no og:image or Twitter Card, inner pages had wrong og:url. All fixed this session
- **Schema: 80 → 72 (-8)** — BlogPosting was missing image property and publisher.logo. All fixed this session

---

## Executive Summary

The site has a solid technical foundation. All 12 pages return 200, sitemap complete, canonicals correct, security headers confirmed live, AI crawlers all unblocked. The three critical issues from the previous audit — og-image 404, uncompressed images, blocked AI bots — are all resolved and confirmed live.

The remaining ceiling on this score is content. Three of four blog posts are stubs (460-520 words with no statistics or local specificity). Fixing those three posts is the single highest-impact action available and cannot be done with code changes alone.

---

## 1. Technical SEO — 83/100

### Crawlability
| Check | Status | Notes |
|---|---|---|
| Sitemap present | Pass | /sitemap.xml — all 12 URLs |
| All sitemap URLs return 200 | Pass | Confirmed |
| robots.txt clean | Pass | All AI bots explicitly allowed, no Disallow rules |
| Google-Extended | Pass | Explicitly allowed ✓ |
| GPTBot | Pass | Explicitly allowed ✓ |
| ClaudeBot | Pass | Explicitly allowed ✓ |
| OAI-SearchBot | Pass | Explicitly allowed ✓ |
| Cloudflare Managed robots.txt | Pass | Disabled — no longer prepending block rules |
| HTTP/2 | Pass | Confirmed via response headers |
| HTTPS | Pass | Enforced by Cloudflare |

### Security Headers (all confirmed live)
| Header | Status |
|---|---|
| Content-Security-Policy | Pass |
| X-Content-Type-Options: nosniff | Pass |
| X-Frame-Options: SAMEORIGIN | Pass |
| Referrer-Policy: strict-origin-when-cross-origin | Pass |
| Strict-Transport-Security: max-age=31536000 | Pass |
| Permissions-Policy | Pass |

### Remaining Technical Issues
| Issue | Severity |
|---|---|
| Breadcrumb schema bug on /proof/peel-excavation — position 2 item URL wrong | Medium |
| Hero H1 uses Framer Motion opacity:0 — text invisible until JS hydrates | Medium |
| FAQ schema in "use client" component — not in raw static HTML | Medium |

---

## 2. Content Quality — 51/100

### E-E-A-T Score: 62/100

| Signal | Score | Notes |
|---|---|---|
| Experience | 13/20 | One real portfolio project with verifiable URL |
| Expertise | 16/25 | Strong in Google Maps post; thin in 3 other posts |
| Authoritativeness | 9/25 | Zero external recognition, no LinkedIn, no citations in 3 of 4 posts |
| Trustworthiness | 24/30 | Real contact info, HTTPS, honest pricing, FAQ |

### Page-by-Page Content Scores
| Page | Word Count | Min | Status | Content Score |
|---|---|---|---|---|
| Homepage | ~1,280 | 500 | Pass | 64/100 |
| About | ~450 | 500 | Fail (short ~50 words) | 55/100 |
| Services | ~620 | 800 | Borderline | 58/100 |
| Blog: Google Maps | ~1,450 | 1,500 | Borderline | 78/100 |
| Blog: Local SEO | ~480 | 1,500 | **Fail — critical** | 32/100 |
| Blog: Must Have | ~520 | 1,500 | **Fail — critical** | 38/100 |
| Blog: Why Website | ~460 | 1,500 | **Fail — critical** | 34/100 |

### AI Citation Readiness: 52/100
- Google Maps post: 70/100 — strong, 17 sourced statistics, question-format H2s
- Other 3 blog posts: 10-15/100 — nothing quotable, no statistics, no answer-first structure

---

## 3. On-Page SEO — 68/100

### Title Tags (all now within range)
| Page | Title | Length | Status |
|---|---|---|---|
| Homepage | Web Design & SEO for Trades \| Built to Rank | 44 | Good |
| About | About \| Built to Rank — Web Design & SEO for Trades | 52 | Good |
| Services | Services \| Built to Rank — Web Design & SEO for Trades | 55 | Good |
| Contact | Contact \| Built to Rank — Free Website Audit | 45 | Good |
| Blog | Blog \| Built to Rank — Web Design & SEO Tips for Trades | 56 | Good |
| Blog: Google Maps | How to Show Up on Google Maps in Brampton \| Built to Rank | 58 | Good |
| Blog: Local SEO | Local SEO for Contractors in Brampton \| Built to Rank | 54 | Good ✓ |
| Blog: Must Have | 5 Things Every Trades Website Must Have \| Built to Rank | 56 | Good ✓ |
| Blog: Why Website | Why Trades Businesses Need a Website in 2026 \| Built to Rank | 60 | Good ✓ |

### OG / Social Tags
| Tag | Status | Notes |
|---|---|---|
| og:image — homepage | Pass | /og-image.jpg 200 OK ✓ |
| og:image — blog posts | Pass | Added this session ✓ |
| og:image — inner pages | Pass | Added this session ✓ |
| og:url — all pages | Pass | Each page now has correct URL ✓ |
| Twitter Card — all pages | Pass | Added this session ✓ |

### Remaining On-Page Issues
| Issue | Severity |
|---|---|
| Meta descriptions short: /about (120), /services (116), /contact (133), /blog (88) | Medium |
| Blog: local-seo meta description 165 chars (5 over limit) | Low |
| No external citations in 3 of 4 blog posts | High |

---

## 4. Schema / Structured Data — 72/100

### Present Schemas
| Schema | Pages | Status |
|---|---|---|
| LocalBusiness + ProfessionalService | All pages | Valid ✓ — logo added this session |
| WebSite + SearchAction | All pages | Valid ✓ |
| FAQPage | Homepage | Valid ✓ |
| BlogPosting + BreadcrumbList | All 4 blog posts | Valid ✓ — image + publisher.logo added this session |
| BreadcrumbList | /about, /services, /contact, /blog | Valid ✓ |

### Remaining Schema Issues
| Issue | Severity |
|---|---|
| datePublished not in ISO 8601 format ("March 15, 2026" vs "2026-03-15") | Medium |
| Person schema missing on /about | Medium |
| Service schema missing on /services | Medium |
| Breadcrumb position 2 bug on /proof/peel-excavation | Medium |

---

## 5. Performance — 70/100

### Image Assets — Confirmed Live
| Asset | Size | Status |
|---|---|---|
| /logo.webp | 2.6KB | Good ✓ |
| /hero-poster.webp | ~20KB | Good ✓ |
| /mobile-website-preview.webp | **15.8KB** | Excellent ✓ (was 732KB) |
| /builder-workspace.webp | **28.8KB** | Excellent ✓ (was 1.2MB) |
| /peel-excavation-preview.webp | 31.4KB | Good ✓ |
| /og-image.jpg | 33KB | Good ✓ (was 404) |

### Core Web Vitals Estimate (Mobile)
| Metric | Estimate | Threshold | Status |
|---|---|---|---|
| LCP | 1.8–2.8s | < 2.5s | Borderline Good |
| INP | 150–200ms | < 200ms | Borderline |
| CLS | 0.05–0.08 | < 0.1 | Good |

---

## 6. AI Search Readiness — 71/100

| Signal | Status | Notes |
|---|---|---|
| llms.txt | Pass | All pages listed ✓ |
| Google-Extended | Pass | Allowed ✓ (was BLOCKED) |
| GPTBot | Pass | Allowed ✓ (was BLOCKED) |
| ClaudeBot | Pass | Allowed ✓ (was BLOCKED) |
| Cloudflare Managed block | Resolved | Disabled in dashboard ✓ |
| Google Maps post citable | Pass | 70/100 citability |
| Other 3 posts citable | Fail | 10-15/100 |

---

## 7. Local SEO — 58/100

| Signal | Status | Notes |
|---|---|---|
| NAP in schema | Pass | All fields present ✓ |
| Physical address in footer HTML | Pass | "Brampton, ON" in address tag ✓ (added this session) |
| Phone clickable | Pass | tel: link ✓ |
| GBP sameAs | Pass | Linked ✓ |
| OpeningHoursSpecification | Pass | Mon-Fri 09:00-18:00 ✓ |
| GBP verified/active | Unknown | No on-page evidence |
| Reviews / aggregateRating | Missing | New business — expected |
| LinkedIn | Missing | No profile linked |
| Tier 1 citations | Missing | Yelp, YellowPages.ca, Canada411 not submitted |

---

## 8. All Open Issues

| # | Issue | Severity | Category |
|---|---|---|---|
| O1 | 3 thin blog posts (460-520 words, no stats, no citations) | **Critical** | Content |
| O2 | GBP not confirmed active/verified | High | Local SEO |
| O3 | No reviews / aggregateRating | High | Local SEO |
| O4 | No LinkedIn or external profile for Arjan | High | E-E-A-T |
| O5 | No Tier 1 directory citations (Yelp, YellowPages.ca, Canada411) | High | Local SEO |
| O6 | Meta descriptions short: /about (120), /services (116), /contact (133), /blog (88) | Medium | On-Page |
| O7 | datePublished not ISO 8601 on blog posts | Medium | Schema |
| O8 | Person schema missing on /about | Medium | Schema |
| O9 | Service schema missing on /services | Medium | Schema |
| O10 | Breadcrumb position 2 bug on /proof/peel-excavation | Medium | Schema |
| O11 | FAQ schema in "use client" component | Medium | Technical |
| O12 | Hero H1 invisible until JS hydrates | Medium | Technical |
| O13 | No Google Maps embed in Contact section | Medium | Local SEO |
| O14 | 3 Google Font families — reduce to 2 | Low | Performance |
| O15 | "Most Popular" badge unsubstantiated | Low | Content |

---

## Score Projections

| Phase | Action | Est. Score |
|---|---|---|
| Now (post this session) | All code fixes done | **69/100** |
| + Blog rewrites (3 posts) | O1 | ~77/100 |
| + GBP verified + first review + LinkedIn | O2, O3, O4 | ~81/100 |
| + Schema fixes (Person, Service, ISO dates) | O7, O8, O9 | ~83/100 |
| + Meta descriptions + citations | O5, O6 | ~85/100 |

**Path to 80+:** Blog post rewrites + GBP verification + first Google review. No additional code changes needed for the jump from 69 to 80+.
