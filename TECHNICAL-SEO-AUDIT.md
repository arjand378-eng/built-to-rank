# Technical SEO Audit — Built to Rank
**URL:** https://builttorankk.netlify.app/
**Date:** 2026-04-20
**Audited by:** Claude SEO Agent

---

## Technical Score: 71 / 100

| Category | Status | Score |
|---|---|---|
| Crawlability | ✅ Pass | 85/100 |
| Indexability | ✅ Pass | 82/100 |
| Security | ⚠️ Warn | 72/100 |
| URL Structure | ✅ Pass | 95/100 |
| Mobile Optimization | ✅ Pass | 90/100 |
| Core Web Vitals | ⚠️ Warn | 45/100 |
| Structured Data | ⚠️ Warn | 70/100 |
| JavaScript Rendering | ✅ Pass | 88/100 |
| IndexNow | ❌ Fail | 0/100 |

---

## Critical Issues

### 1. `og:image` missing on every page
All 5 pages (`/`, `/about`, `/services`, `/contact`, `/blog`) have `twitter:card: summary_large_image` set, but no `og:image` or `twitter:image` URL is defined anywhere. When the site is shared on Twitter/X, LinkedIn, iMessage, or WhatsApp, the preview shows as a blank card. For a web design agency this is the single most damaging missing element.

**Fix:** Create a 1200×630px image at `/public/og-image.jpg`, then add to `app/layout.tsx`:
```ts
openGraph: {
  images: [{ url: "https://builttorank.com/og-image.jpg", width: 1200, height: 630 }],
},
twitter: {
  card: "summary_large_image",
  images: ["https://builttorank.com/og-image.jpg"],
},
```

---

### 2. `/public/hero-poster.jpg` referenced but doesn't exist
`app/components/Hero.tsx` line 42 sets `poster="/hero-poster.jpg"` on the background video. The file doesn't exist in `/public/`. On slow connections or before the video decodes, the hero area appears black. This directly hurts LCP and perceived performance.

**Fix:** Extract a frame from the video:
```bash
ffmpeg -i public/3d-tech.mp4 -ss 00:00:01 -vframes 1 public/hero-poster.jpg
```
The file already has the correct `poster` attribute in the code — it just needs the actual image.

---

## High Priority

### 3. Portfolio image is 1.7 MB PNG
`/public/peel-excavation-preview.png` at 1.7MB is the only content image on the site. Converting to WebP brings it under 200KB (~88% reduction).

**Fix:**
```bash
cwebp public/peel-excavation-preview.png -o public/peel-excavation-preview.webp -q 82
```
Then update `app/components/Portfolio.tsx` to reference the `.webp` file and use the Next.js `<Image>` component with `width` and `height` props.

---

### 4. Hero video is 4.7 MB
`/public/3d-tech.mp4` loads on every page visit. Combined with the missing poster, this is the #1 LCP bottleneck.

**Fix options:**
- Compress: `ffmpeg -i 3d-tech.mp4 -vcodec libx264 -crf 28 -preset slow 3d-tech-opt.mp4` (targets ~1–1.5MB)
- Or convert to WebM: `ffmpeg -i 3d-tech.mp4 -vcodec libvpx-vp9 3d-tech.webm` (~40% smaller than MP4)

---

### 5. Content-Security-Policy header missing
`X-Frame-Options`, `X-Content-Type-Options`, and `Referrer-Policy` are all present, but CSP is missing. It's the most important security header for a modern site.

**Fix — add to `netlify.toml`:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com data:; img-src 'self' data: https:; media-src 'self'; connect-src 'self' api.web3forms.com;"
```
> `unsafe-inline` and `unsafe-eval` are required for Next.js static export — this is a known framework constraint.

---

## Medium Priority

### 6. AI crawler directives absent from robots.txt
Current `robots.txt` only has `User-Agent: * Allow: /`. For a web design agency, being cited by ChatGPT and Perplexity when someone searches "who builds websites for trades in Brampton" is a net positive. The current setup allows all crawlers, which is fine. Optionally, be explicit about your intent:

```
User-Agent: *
Allow: /

# Allow AI search/citation crawlers (good for brand visibility)
User-Agent: PerplexityBot
Allow: /

User-Agent: ChatGPT-User
Allow: /

# Block model training only (optional)
User-Agent: GPTBot
Disallow: /

User-Agent: Google-Extended
Disallow: /

Sitemap: https://builttorankk.netlify.app/sitemap.xml
```

> `Google-Extended` blocks Gemini training only — it does NOT affect Google Search or AI Overviews (those use `Googlebot`, which stays allowed).

---

### 7. Canonical URLs and sitemap need domain update
All pages have correct self-referencing canonicals pointing to `builttorankk.netlify.app`. When `builttorank.com` is purchased:
- Update `alternates.canonical` in `app/layout.tsx` and each sub-page's metadata
- Update sitemap URLs in `app/sitemap.ts`
- Update `robots.txt` sitemap reference
- Update schema `"url"` field in `app/layout.tsx`

This is a single pass through 3–4 files when the time comes.

---

### 8. Font preloads — verify both fonts are preloaded
Only 1 `rel="preload"` was detected in the static HTML. Both Bebas Neue and Geist are used. Next.js handles this automatically for active font variants, but verify in browser DevTools (Network tab, filter by "Font") that both `.woff2` files show as `(preload)` and load before First Contentful Paint.

---

## Low Priority

### 9. IndexNow not implemented
IndexNow lets Bing, Yandex, and Seznam index new/updated content within minutes rather than waiting for a crawl.

**Fix:**
1. Generate a key at bing.com/indexnow
2. Drop the key file at `/public/<your-key>.txt`
3. Add a post-deploy ping (Netlify build plugin or simple `curl` in build script)

---

### 10. `x-xss-protection: 1; mode=block` is legacy
Modern browsers (Chrome 78+) removed XSS auditor support. The header is harmless but unnecessary. Can be removed from `netlify.toml` without any security impact.

---

## What's Already Working

| Check | Result |
|---|---|
| HTTPS enforcement | ✅ HTTP → HTTPS 301 at Netlify edge |
| HSTS with preload | ✅ `max-age=31536000; includeSubDomains; preload` |
| X-Content-Type-Options | ✅ `nosniff` |
| X-Frame-Options | ✅ `SAMEORIGIN` |
| Referrer-Policy | ✅ `strict-origin-when-cross-origin` |
| robots.txt | ✅ Exists, valid, sitemap referenced |
| XML sitemap | ✅ Valid, all 5 pages listed |
| noindex on live pages | ✅ None set — 404 page correctly noindexes itself |
| Canonical tags | ✅ Self-referencing on all 5 pages |
| Trailing slash | ✅ `/about/` 301 redirects to `/about` |
| 404 HTTP status | ✅ Unknown URLs return real HTTP 404 |
| Title tags | ✅ Unique on all 5 pages |
| Meta descriptions | ✅ Unique on all 5 pages |
| Viewport meta | ✅ `width=device-width, initial-scale=1` |
| HTML `lang` attribute | ✅ `lang="en"` |
| Static export rendering | ✅ All content in initial HTML — no JS-required rendering |
| Schema in static HTML | ✅ JSON-LD embedded at build time, not injected via JS |
| llms.txt | ✅ Present with full business entity data |
| Twitter card type | ✅ `summary_large_image` |
| LocalBusiness schema | ✅ With areaServed, telephone, email, founder |
| FAQPage schema | ✅ 6 questions on homepage |

---

## Top 3 Actions — Do These First

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Create `og-image.jpg` + add to `layout.tsx` | 30 min | High — fixes all social sharing |
| 2 | Create `hero-poster.jpg` from video frame | 5 min | High — fixes black hero flash + LCP |
| 3 | Convert PNG → WebP for portfolio image | 5 min | Medium — 1.7MB → ~200KB |

---

*Audit produced by Claude SEO Agent — Built to Rank, April 2026*
