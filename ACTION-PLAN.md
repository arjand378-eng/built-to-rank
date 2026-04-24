# Built to Rank — SEO Action Plan
**Generated:** April 24, 2026
**Re-Audited (live):** April 24, 2026
**Baseline Score:** 62/100
**Live Score (post-deploy audit):** 62/100
**Target Score:** 85+/100

---

## COMPLETED — Confirmed Live

### C1. DONE — Compress logo.png to WebP
logo.png (1,797KB) → logo.webp (2.6KB live) — 600x reduction.

### C2. DONE — Fix lang attribute: `en` → `en-CA`
**File:** app/layout.tsx — confirmed live.

### C3. DONE — Add HSTS Header
**File:** public/_headers — confirmed live.

### C4. DONE — Add Permissions-Policy Header
**File:** public/_headers — confirmed live.

### C5. DONE — Add OpeningHoursSpecification to LocalBusiness Schema
**File:** app/layout.tsx — Mon-Fri 09:00-18:00, confirmed live.

### C6. DONE — Add Postal Code + Geo Coordinates to LocalBusiness Schema
**File:** app/layout.tsx — postalCode: L6X 0R3, geo: 43.7315/-79.7624, confirmed live.

### C7. DONE — Add WebSite Schema
**File:** app/layout.tsx — second JSON-LD block with WebSite + SearchAction, confirmed live.

### C8. DONE — Add BreadcrumbList to all inner pages
**Files:** /about, /services, /contact, /blog — confirmed live.

### C9. DONE — Shorten Google Maps blog title
Before (88 chars) → After: "How to Show Up on Google Maps in Brampton" (57 chars), confirmed live.

### C10. DONE — Add Internal Links Between All Blog Posts
All 4 posts link to 2 others, confirmed live.

### C11. DONE — Expand llms.txt with Page URLs
**File:** public/llms.txt — all pages + blog articles listed, confirmed live.

### C12. DONE — Fix H2 Text Spacing Bug
**File:** app/components/WhyHire.tsx — "Searches Into" spacing confirmed live.

### C13. DONE — Align Canonical Trailing Slash
**File:** app/sitemap.ts — homepage no trailing slash, matches canonical, confirmed live.

### C14. DONE — Delete Unused 1MB Seedream Image
public/seedream-v4-...jpg deleted, confirmed live.

### C15. DONE — Add Homepage Images (4 total, was 2)
mobile-website-preview.webp and builder-workspace.webp added to homepage. Confirmed live. (Size optimization still needed — see P2, P3 below.)

---

## CRITICAL — Fix Immediately

### P1. FIX OG IMAGE (og-image.jpg is 404)
**Priority: #1 — blocks all outreach**

Every social share, Twitter card, Facebook preview, Google Business Profile link, and LocalBusiness schema `image` property is broken. The OG tags reference `/og-image.jpg` but the file does not exist on the live server.

**What to do:**
- Create an OG image at 1200×630px (PNG or JPG)
- Name it `og-image.jpg` and place in `/public/`
- Rebuild and deploy

Simplest approach: Screenshot a branded 1200×630 tile in Canva with the logo and tagline, export as JPG, drop into `/public/og-image.jpg`.

**Files affected:** `app/layout.tsx` (og:image, twitter:image, LocalBusiness schema image property all point here — no code change needed, just the file).

---

### P2. COMPRESS mobile-website-preview.webp (732KB → target <60KB)
**Priority: #2 — killing mobile LCP**

This image is loading at 732KB. At mobile 4G speeds, this alone takes ~580ms to download. Target: under 60KB at 800px wide.

**How to fix:**
```bash
cwebp -q 78 -resize 800 0 public/mobile-website-preview.webp -o public/mobile-website-preview.webp
```
Or use squoosh.app: open the file, set WebP quality to 75–80, resize to 800px max width, save. Expected result: 40–65KB.

---

### P3. COMPRESS builder-workspace.webp (1.2MB → target <80KB)
**Priority: #3 — also killing LCP**

This 1.2MB image is in the About section. Even with `loading="lazy"`, any mobile user who scrolls triggers a 1.2MB download mid-scroll.

**How to fix:**
```bash
cwebp -q 78 -resize 800 0 public/builder-workspace.webp -o public/builder-workspace.webp
```
Target: under 80KB at 800px wide.

---

### P4. FIX ROBOTS.TXT — Re-unblock Google-Extended and GPTBot
**Priority: #4 — blocking AI crawlers**

The live robots.txt has two sets of blocks:
1. **Cloudflare Managed section** (auto-generated): blocks Google-Extended, GPTBot, ClaudeBot
2. **Custom section** (`public/robots.txt`): also has GPTBot Disallow and Google-Extended Disallow

**Two-step fix:**

**Step 1:** Go to Cloudflare Dashboard → Security → Bots → AI Scrapers & Crawlers. Toggle Google-Extended and GPTBot to "Allow". (This fixes the Cloudflare Managed section.)

**Step 2:** Update `public/robots.txt` to explicitly allow these bots in the custom section to override if Cloudflare reverts:

```
User-Agent: *
Allow: /

User-Agent: PerplexityBot
Allow: /

User-Agent: ChatGPT-User
Allow: /

User-Agent: GPTBot
Allow: /

User-Agent: Google-Extended
Allow: /

Sitemap: https://builttorank.ca/sitemap.xml
```

Remove the `GPTBot: Disallow` and `Google-Extended: Disallow` lines from the custom section. This makes the custom section explicitly allow them, providing a second layer of coverage even if Cloudflare's managed block regenerates.

---

### P5. FIX VIDEO LCP — Add `preload="none"` to hero video
**Priority: #5 — quick code fix, major LCP impact**

The `3d-tech.mp4` video has no `preload` attribute, so the browser immediately begins downloading the full MP4 on page load, saturating mobile bandwidth.

**File:** `app/components/Hero.tsx`

Add `preload="none"` to the video element:
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  preload="none"
  poster="/hero-poster.webp"
  ...
>
```

Then in `app/layout.tsx`, add a preload for the hero poster in the `<head>` section (after the logo preload):
```html
<link rel="preload" as="image" href="/hero-poster.webp" fetchpriority="high" />
```

---

## HIGH — Fix This Week

### H1. FIX [INTERNAL-LINK:] LITERAL TEXT IN GOOGLE MAPS POST
An unresolved placeholder is rendering as visible text in the published page.

**File:** `content/blog/how-to-show-up-on-google-maps-brampton.md`

Search for `[INTERNAL-LINK:]` in the file and replace it with the actual markdown link it was supposed to be.

---

### H2. DEPLOY peel-excavation-preview.webp TO LIVE SERVER
The Portfolio section code already has `<source srcSet="/peel-excavation-preview.webp">` wired up, but the WebP file was never deployed. The browser falls back to the 97KB JPEG.

**What to do:** Convert the existing JPG to WebP and redeploy:
```bash
cwebp -q 80 public/peel-excavation-preview.jpg -o public/peel-excavation-preview.webp
```
No code change needed — the `<picture>` element already references it.

---

### H3. SHORTEN TWO BLOG TITLES OVER LIMIT

Both are well over the 60-char target:
- `local-seo-contractors-brampton`: 82 chars — "Local SEO for Contractors: How to Build a Stronger Google Presence | Built to Rank"
- `what-trades-website-must-have-2026`: 85 chars — "5 Things Your Trades Business Website Must Have (And Most Don't) | Built to Rank"

**Suggested fixes:**
- Local SEO post → "Local SEO for Contractors in Brampton | Built to Rank" (54 chars)
- Must Have post → "5 Things Every Trades Website Must Have | Built to Rank" (55 chars)

**Files:** Update `title` in frontmatter of each `.md` file under `content/blog/`.

---

### H4. ADD LINKEDIN LINK TO ABOUT PAGE AND FOOTER
The cheapest external authority signal available. When Arjan's LinkedIn profile is set up, add the URL to:
- `app/about/page.tsx` — in the bio section
- `app/components/Footer.tsx` — in the social links area

Also add the LinkedIn URL to the `sameAs` array in the LocalBusiness schema in `app/layout.tsx`.

---

## MEDIUM — Fix Within 2 Weeks

### M1. EXPAND 3 THIN BLOG POSTS

All three need to be rewritten to at least 900–1,200 words with sourced statistics and local specificity. The Google Maps post is the standard to match.

Priority order:
1. **local-seo-contractors-brampton** (highest priority — oldest post, sets quality expectations)
2. **why-trades-businesses-need-a-website-peel-region**
3. **what-trades-website-must-have-2026**

Each rewrite should add:
- At least 2 sourced statistics with citation links
- At least 1 Brampton/GTA-specific observation
- Increase read time from ~3 min to genuine 6–8 min

---

### M2. ADD PERSON NAMED TO PEEL EXCAVATION TESTIMONIAL
Replace "Peel Excavation Services" attribution with a named owner or manager (if permission is given). A named person ("John S., Peel Excavation Services") is significantly more credible than a company name.

**File:** `app/components/Testimonials.tsx`

---

### M3. ADD PHYSICAL ADDRESS TO FOOTER HTML
The Brampton address is in schema but not visible in the HTML footer. Adding it as visible text strengthens local SEO signals.

**File:** `app/components/Footer.tsx` — add "Brampton, ON" in the contact/footer area.

---

### M4. REDUCE GOOGLE FONT FAMILIES (3 → 2)
Three font families load on every page: Inter, Plus Jakarta Sans, Bebas Neue. Inter and Plus Jakarta Sans likely serve overlapping roles. Audit which one is actually used in body copy and remove the unused one.

**File:** `app/layout.tsx` — remove one of the `next/font/google` imports.

Expected CLS improvement: reduces number of font swap events on headings.

---

## LOW — Backlog

### L1. ADD `fetchpriority="high"` TO LOGO IN NAVBAR
**File:** `app/components/Navbar.tsx` — add `fetchpriority="high"` to the logo `<img>` tag.
Trivial change, small LCP improvement.

---

### L2. ADD SERVICE SCHEMA TO /SERVICES PAGE
Individual `Service` schema types on the /services page would improve schema depth.
**File:** `app/services/page.tsx`

---

### L3. ADD PERSON SCHEMA FOR ARJAN DHILLON
A `Person` schema on the About page strengthens E-E-A-T signals.
**File:** `app/about/page.tsx`

---

### L4. LOCATION-SPECIFIC LANDING PAGES
Create dedicated pages targeting "web design Mississauga", "web design Caledon" etc. Low priority now — these take 3–6 months to rank and require Arjan's content input to avoid being thin.

---

### L5. PEEL EXCAVATION ON CUSTOM DOMAIN
If/when the Peel Excavation client moves to a custom domain, update the portfolio URL. A site on a purchased domain is stronger portfolio evidence than netlify.app.

---

## Score Projections

| Phase | Tasks | Est. Gain | Status |
|---|---|---|---|
| Phase 1 (April 24 session) | lang, headers, schema x4, blog title, llms.txt, cross-links, images added | +8 pts potential | Done — but negated by new deploy issues |
| Phase 2 — Critical Fixes | og-image, compress 2 images, fix robots.txt, video LCP | +15 pts | Open |
| Phase 3 — High Fixes | [INTERNAL-LINK:], peel WebP, 2 title lengths, LinkedIn | +5 pts | Open |
| Phase 4 — Content | Expand 3 thin blog posts | +5 pts | Open |
| Phase 5 — Medium Fixes | Testimonial person, address in footer, font reduce | +3 pts | Open |

**Current live score:** 62/100
**After Phase 2 (Critical Fixes only):** ~77/100
**After Phases 2–3:** ~82/100
**After Phases 2–4:** ~87/100

---

## Immediate Next Steps (In Order)

1. **Create og-image.jpg** and deploy — 30 min. Unblocks all outreach.
2. **Compress mobile-website-preview.webp + builder-workspace.webp** — 30 min. Recovers LCP.
3. **Add `preload="none"` to video in Hero.tsx** + add poster preload to layout.tsx — 10 min code.
4. **Fix robots.txt** — Cloudflare Dashboard + update public/robots.txt — 15 min.
5. **Deploy** to Cloudflare Pages.
6. **Fix [INTERNAL-LINK:] in Google Maps post** — 5 min.
7. **Shorten 2 blog titles** — 5 min.
8. **Re-run /seo-audit** on live site to verify score improvement.
