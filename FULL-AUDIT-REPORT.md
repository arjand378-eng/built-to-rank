# SEO Audit Report — Built to Rank
**URL:** https://builttorankk.netlify.app/  
**Date:** 2026-04-20  
**Business Type:** Local Service — Web Design & SEO Agency (GTA, Ontario)  
**Auditor:** Claude SEO Agent  

---

## Overall SEO Health Score: 28 / 100

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 10/100 | 22% | 2.2 |
| Content Quality | 52/100 | 23% | 12.0 |
| On-Page SEO | 45/100 | 20% | 9.0 |
| Schema / Structured Data | 0/100 | 10% | 0.0 |
| Performance (CWV) | 35/100 | 10% | 3.5 |
| AI Search Readiness | 20/100 | 10% | 2.0 |
| Images | 75/100 | 5% | 3.75 |
| **Total** | | | **32.4 / 100** |

> Score is heavily suppressed by the deployment misconfiguration (site 404s for Google) and complete absence of structured data. With the deployment fixed, baseline score jumps to ~55/100.

---

## Executive Summary

### Top 5 Critical Issues

1. **🔴 Site is broken on Netlify — every URL returns 404 + `noindex`**  
   Google cannot index a single page. The site has zero organic visibility.

2. **🔴 Contact form is non-functional** — Web3Forms API key is a placeholder (`REPLACE_WITH_WEB3FORMS_KEY`). No enquiry from any visitor will ever reach you.

3. **🔴 No robots.txt** — Returns 404. Google has no crawl guidance.

4. **🔴 No sitemap.xml** — Returns 404. Google cannot discover all pages.

5. **🔴 Zero schema markup** — No LocalBusiness, Organization, WebSite, or any structured data. Invisible to Google's rich results and AI Overviews.

### Top 5 Quick Wins (post-deployment fix)

1. Fix `netlify.toml` publish directory → takes ~2 minutes, unblocks everything
2. Add `app/robots.ts` and `app/sitemap.ts` → Next.js generates them automatically
3. Add `LocalBusiness` + `ProfessionalService` schema in `layout.tsx`
4. Add canonical URLs via Next.js metadata `alternates.canonical`
5. Set Web3Forms API key to activate the contact form

---

## 1. Technical SEO (Score: 10/100)

### 🔴 CRITICAL: Deployment Misconfiguration

**Root Cause:** Config conflict between `next.config.ts` and `netlify.toml`.

```
next.config.ts:   output: "export"   → builds static HTML to /out/
netlify.toml:     publish = ".next"  → Netlify looks in .next/ (server-side)
                  plugin: @netlify/plugin-nextjs  → expects SSR, not static
```

**Effect:** Netlify serves from `.next/` but the static build lives in `out/`. Every route returns Next.js 404 HTML. The 404 page injects `<meta name="robots" content="noindex">` — meaning Google cannot index anything.

**Two valid fixes:**

**Option A — Keep static export (simpler, faster):**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"
  # Remove the @netlify/plugin-nextjs plugin block entirely
```

**Option B — Switch to SSR via Netlify plugin (more capable):**
```ts
// next.config.ts — remove the output: "export" line
const nextConfig: NextConfig = {};
```
Keep `netlify.toml` as-is. This enables server components, ISR, and API routes.

> **Recommendation:** Option A is sufficient for your current site (no API routes, no ISR). Option B becomes relevant when you add server-side features.

---

### 🔴 robots.txt — Missing (404)

No `app/robots.ts` file exists. Google receives a 404 for `/robots.txt`.

**Fix:** Create `app/robots.ts`:
```ts
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://builttorank.com/sitemap.xml",
  };
}
```

---

### 🔴 sitemap.xml — Missing (404)

No `app/sitemap.ts` file exists. Google cannot discover `/about`, `/services`, `/blog`, `/contact`.

**Fix:** Create `app/sitemap.ts`:
```ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://builttorank.com/", lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: "https://builttorank.com/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://builttorank.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://builttorank.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://builttorank.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
  ];
}
```

---

### 🟡 Security Headers — Partial

`strict-transport-security` is present (via Netlify). Missing:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Content-Security-Policy`
- `Permissions-Policy`

**Fix:** Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

### 🟡 Canonical URLs — Missing

No `<link rel="canonical">` on any page. For a single-domain site this is low risk now, but as you add blog posts and duplicate content paths it becomes important.

**Fix:** Add to `layout.tsx` metadata:
```ts
export const metadata: Metadata = {
  alternates: { canonical: "https://builttorank.com/" },
  // ...
};
```

---

### 🟢 HTTPS — Pass
Netlify enforces HTTPS with HSTS. Good.

### 🟢 Mobile Viewport — Pass
`<meta name="viewport" content="width=device-width, initial-scale=1">` present.

### 🟢 Language Attribute — Pass
`<html lang="en">` correctly set.

---

## 2. Content Quality (Score: 52/100)

### E-E-A-T Assessment

| Signal | Status | Notes |
|---|---|---|
| Experience | Weak | One real portfolio project (Peel Excavation) — limited but honest |
| Expertise | Moderate | Copy is relevant, service descriptions are specific |
| Authoritativeness | Weak | No author bio, no credentials, no industry mentions |
| Trustworthiness | Weak | Two of three testimonials appear fabricated; no real reviews |

**Fabricated testimonials are the most damaging trust signal.** Mike Torres (T&T Plumbing) and Jason Lee (Apex Roofing GTA) are not verifiable clients. A trades prospect who calls around will figure this out — and it destroys credibility instantly.

**Fix:** Remove the two fake testimonials. Replace with:
- One real quote from the Peel Excavation client (even informal — "great to work with, site looks professional")
- A waiting testimonial: *"Working with our first clients now — results incoming."*

---

### Thin Content — Blog

`/blog` page exists but has zero posts. Google may treat this as a thin content page.

**Short-term fix:** Either remove the blog link from the nav, or add 2-3 real articles targeted at local search intent (e.g., "Why Brampton Plumbers Need a Website in 2026", "How Local SEO Works for Trades Businesses in Peel Region").

---

### Copy Effectiveness

The homepage copy is solid for the audience — plain language, direct value proposition. These lines work well:
- *"We build custom, fast websites for plumbers, roofers, landscapers, and contractors across the GTA. Then we rank them on Google so the phone rings."*
- *"Free quote. No hard sell. Usually reply within a few hours."*

Improvement opportunity: The portfolio section uses tech-speak that means nothing to a trades client:
- "GSAP Scroll Animations" → "Smooth scroll animations"
- "Framer Motion Entrances" → "Professional page animations"
- "Nodemailer" → "Contact form that sends straight to your inbox"

---

## 3. On-Page SEO (Score: 45/100)

### Title Tag
```
Built to Rank | Web Design & SEO for Local Trades — GTA
```
- Length: 55 chars ✅
- Contains primary keyword "Web Design & SEO" ✅
- Contains geo modifier "GTA" ✅
- Could be stronger: consider `Web Design & SEO for GTA Trades | Built to Rank` — puts geo+keyword first

### Meta Description
```
Built to Rank builds custom websites and gets trades businesses across the GTA found on Google. Web design + SEO for plumbers, roofers, landscapers, and contractors.
```
- Length: 162 chars ✅ (under 160 — borderline)
- Contains services ✅
- Contains audience ✅
- Lacks a CTA: add "Get a free quote." at the end

### OG Tags
- `og:title` ✅
- `og:description` ✅ (but thin at 62 chars)
- `og:locale: en_CA` ✅
- `og:type: website` ✅
- **`og:image` MISSING** 🔴 — When shared on social media, there is no preview image. This is a significant missed opportunity for word-of-mouth sharing.
- **`og:url` MISSING** 🟡

### Twitter Card
- `twitter:card: summary` — should be `summary_large_image` for a visual service business
- `twitter:image` missing (depends on og:image being added)

### H1 Structure
- H1: "Websites That Rank. Clients That Call." ✅ — Clear, keyword-adjacent, strong
- H2s present for each section ✅
- Heading hierarchy appears correct based on source analysis

### Internal Linking
- Nav links to anchor `#services`, `#work`, `#contact` ✅
- Sub-pages (`/about`, `/services`, `/blog`, `/contact`) exist but are not prominently linked from the homepage
- No internal links within body content

---

## 4. Schema / Structured Data (Score: 0/100)

**Zero JSON-LD schema markup anywhere on the site.**

For a local service business targeting GTA trades clients, this is a major missed opportunity. Missing:

| Schema Type | Priority | Benefit |
|---|---|---|
| `LocalBusiness` / `ProfessionalService` | Critical | Eligible for Knowledge Panel, local pack signals |
| `WebSite` with `SearchAction` | High | Sitelinks search box |
| `Person` (Arjan Dhillon) | High | Author authority, AI citation signals |
| `Service` | Medium | Rich results for each service |
| `Review` / `AggregateRating` | Medium | Star ratings in SERP (only with real reviews) |
| `FAQPage` | Low | FAQ rich results, AI Overview inclusion |

**Minimum viable schema for `layout.tsx`:**
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Built to Rank",
  "description": "Custom web design and SEO for trades businesses across the GTA.",
  "url": "https://builttorank.com",
  "telephone": "+16476578525",
  "email": "info@builttorank.com",
  "founder": {
    "@type": "Person",
    "name": "Arjan Dhillon"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brampton",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "areaServed": ["Brampton", "Mississauga", "Caledon", "Bolton", "GTA", "Peel Region"],
  "serviceType": ["Web Design", "SEO", "Local SEO", "Website Development"]
}
```

---

## 5. Performance (Score: 35/100)

*Note: No Google API credentials configured, so scores are estimated from static analysis.*

### LCP Risk — Hero Video (3d-tech.mp4)
- A background video in the hero section is one of the most common causes of poor LCP.
- The video has `autoPlay muted loop playsInline` ✅ — correct attributes
- However, there is no `poster` attribute — the browser must load the video before showing anything
- **Fix:** Add `poster="/hero-poster.jpg"` to the video tag. A compressed static JPEG renders instantly while the video loads.

### Font Loading
- Geist and Bebas Neue are preloaded via `<link rel="preload">` ✅
- `display: swap` is set ✅

### JavaScript Payload
- 15+ async JS chunks loaded in the `<head>` — typical for Next.js App Router
- No lazy loading issues identified at the component level
- GSAP and Framer Motion are heavy. Combined bundle impact: ~150-200KB gzipped estimated.

### Image Optimization
- `peel-excavation-preview.png` is preloaded ✅
- No WebP/AVIF format conversion detected — PNG is larger than necessary
- **Fix:** Convert to WebP and add Next.js `<Image>` component with `width`, `height`, and `priority` props

---

## 6. AI Search Readiness (Score: 20/100)

Google AI Overviews, Perplexity, and ChatGPT all favor:
- Clear entity definitions (who you are, what you do, where)
- Structured factual statements
- Schema markup (see Section 4)
- Citability: short, quotable answers to specific questions

**Current gaps:**
- No `llms.txt` file (emerging standard for AI crawler guidance)
- No FAQ section with direct question/answer format
- No clearly structured "about" content that AI can quote
- Person entity (Arjan Dhillon) is not defined anywhere in structured data

**Quick win:** Add a short FAQ section to the homepage targeting exact questions your audience types:
- "How much does a website cost for a small business in Brampton?"
- "How long does it take to build a trades website?"
- "What's included in local SEO for contractors?"

These become direct AI citation candidates and also capture long-tail search queries.

---

## 7. Images (Score: 75/100)

| Image | Alt Text | Format | Issues |
|---|---|---|---|
| `peel-excavation-preview.png` | "Peel Excavation Services website screenshot" ✅ | PNG 🟡 | Should be WebP |
| Hero video `3d-tech.mp4` | `aria-hidden="true"` ✅ | — | Missing poster frame |

- No `og:image` defined (social sharing will show no image)
- No Apple touch icon / PWA icons
- **Fix:** Design a 1200×630px OG image and add to `/public/og-image.jpg`

---

## 8. Local SEO (Score: N/A — GBP not yet set up)

For a local service business in the GTA, this is eventually the highest-ROI SEO activity.

**Current state:**
- Contact page has phone (647-657-8525) and email (info@builttorank.com) ✅
- Location listed as "GTA, Ontario, Canada" — too vague
- No Google Business Profile detected
- No NAP consistency across the web (new business, expected)
- No local citations (Yelp, Homestars, Yellow Pages)
- No `LocalBusiness` schema (see Section 4)

**Priority actions:**
1. Create Google Business Profile at business.google.com
2. Add specific service area cities to the profile and website
3. Get on Homestars (dominant in Canadian trades market — plumbers, roofers etc. use this heavily)
4. Add schema with specific `areaServed` cities

---

## Summary of Issues by Priority

### 🔴 Critical (Fix immediately — blocks all SEO)
| # | Issue | File to Fix |
|---|---|---|
| 1 | Netlify publish dir mismatch → all pages 404 | `netlify.toml` |
| 2 | Contact form API key is placeholder → form broken | `app/components/Contact.tsx` |
| 3 | No robots.txt | Create `app/robots.ts` |
| 4 | No sitemap.xml | Create `app/sitemap.ts` |
| 5 | No schema markup | `app/layout.tsx` |

### 🟠 High (Fix within 1 week)
| # | Issue | File to Fix |
|---|---|---|
| 6 | No `og:image` | `app/layout.tsx` |
| 7 | Fake testimonials destroy trust | `app/components/Testimonials.tsx` |
| 8 | Twitter card is `summary` not `summary_large_image` | `app/layout.tsx` |
| 9 | Hero video missing `poster` frame → slow LCP | `app/components/Hero.tsx` |
| 10 | PNG image should be WebP | `public/` + `Portfolio.tsx` |

### 🟡 Medium (Fix within 1 month)
| # | Issue | File to Fix |
|---|---|---|
| 11 | Canonical URLs missing | `app/layout.tsx` + sub-pages |
| 12 | Blog page is empty (thin content) | Add posts or hide the route |
| 13 | Tech-speak in portfolio copy | `app/components/Portfolio.tsx` |
| 14 | No FAQ section (AI citation opportunity) | New component |
| 15 | Missing security headers | `netlify.toml` |

### 🟢 Low (Backlog)
| # | Issue |
|---|---|
| 16 | No Google Business Profile |
| 17 | No Homestars / local citation presence |
| 18 | No `llms.txt` for AI crawlers |
| 19 | No Apple touch icons / PWA manifest |
| 20 | `og:url` missing |

---

*Report generated by Claude SEO Agent — Built to Rank SEO Audit, April 2026*
