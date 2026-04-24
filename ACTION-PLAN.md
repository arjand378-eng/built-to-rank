# Built to Rank — SEO Action Plan
**Generated:** April 24, 2026
**Last Updated:** April 24, 2026 (post second audit)
**Baseline Score:** 62/100
**Current Live Score:** 69/100
**Target Score:** 85+/100

---

## COMPLETED — Confirmed Live

### C1. DONE — Compress logo.png to WebP
logo.png (1,797KB) → logo.webp (2.6KB) — confirmed live.

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
mobile-website-preview.webp and builder-workspace.webp added to homepage.

### C16. DONE — Compress mobile-website-preview.webp
732KB → **15.8KB** (46x reduction), confirmed live at 16,226 bytes.

### C17. DONE — Compress builder-workspace.webp
1.2MB → **28.8KB** (42x reduction), confirmed live at 29,542 bytes.

### C18. DONE — Create og-image.jpg
File was 404. Now created, resized to 1200x630px, 33KB, confirmed 200 OK live.

### C19. DONE — Fix robots.ts (all AI crawlers allowed)
GPTBot and Google-Extended were Disallow. Now all bots explicitly allowed.

### C20. DONE — Disable Cloudflare Managed robots.txt block
Cloudflare Directives → Managed robots.txt toggled OFF. Was prepending Disallow rules for ClaudeBot, GPTBot, Google-Extended regardless of our code.

### C21. DONE — Add preload="none" to hero video
**File:** app/components/Hero.tsx — confirmed live.

### C22. DONE — Add hero-poster preload to layout.tsx
`<link rel="preload" as="image" href="/hero-poster.webp" fetchPriority="high" />` — confirmed live.

### C23. DONE — Fix [INTERNAL-LINK:] placeholders in Google Maps post
Both placeholders replaced with proper markdown links to related posts.

### C24. DONE — Shorten local-seo blog title (was 82 chars)
Now: "Local SEO for Contractors in Brampton" — 54 chars with brand suffix.

### C25. DONE — Shorten must-have blog title (was 85 chars)
Now: "5 Things Every Trades Website Must Have" — 56 chars with brand suffix.

### C26. DONE — Shorten why-website blog title (was 66 chars)
Now: "Why Trades Businesses Need a Website in 2026" — 60 chars with brand suffix.

### C27. DONE — Convert peel-excavation-preview.jpg to WebP
95KB JPEG → 31.4KB WebP, confirmed live.

### C28. DONE — Add fetchpriority="high" to Navbar logo
**File:** app/components/Navbar.tsx

### C29. DONE — Add physical address to Footer HTML
"Brampton, ON / Serving Peel Region & GTA" in semantic `<address>` tag.

### C30. DONE — Add og:image + Twitter Card to all blog posts
**File:** app/blog/[slug]/page.tsx — was missing on all 4 posts. Fixed.

### C31. DONE — Add page-level OG tags + correct og:url to inner pages
**Files:** app/about/page.tsx, app/services/page.tsx, app/contact/page.tsx, app/blog/page.tsx — all were inheriting homepage og:url. Fixed.

### C32. DONE — Add image + publisher.logo to BlogPosting schema
**File:** app/blog/[slug]/page.tsx — BlogPosting now has image and publisher.logo properties.

### C33. DONE — Add logo to LocalBusiness schema
**File:** app/layout.tsx — ImageObject added for Google Knowledge Panel.

### C34. DONE — Add /codex to sitemap
**File:** app/sitemap.ts — /codex was publicly linked but not in sitemap.

### C35. DONE — Add OAI-SearchBot to robots.ts
OpenAI's newer crawler token now explicitly allowed.

---

## CRITICAL — Must Do Before 80 Score Is Achievable

### P1. REWRITE 3 THIN BLOG POSTS
**Priority: #1 — 23% category weight, dragging entire score**

Three posts are stubs that will be flagged by any quality assessment:

| Post | Current Words | Target | Problem |
|---|---|---|---|
| local-seo-contractors-brampton | ~480 | 1,400+ | No stats, no Brampton content, no citations |
| what-trades-website-must-have-2026 | ~520 | 1,400+ | No stats, no external links |
| why-trades-businesses-need-a-website-peel-region | ~460 | 1,400+ | No 2026 data despite year in title |

Each rewrite needs:
- At least 5 sourced statistics (BrightLocal, Think with Google, Google Consumer Insights)
- Brampton/Peel Region specific observations
- At least 2 external citation links per post
- Question-format H2 headings for AI citability
- Key Takeaways block (like the Google Maps post)
- Minimum 1,400 words

The Google Maps post (78/100 content score, 70/100 AI citability) is the template to follow. Run `/blog-rewrite` on each post when ready.

---

### P2. VERIFY AND OPTIMIZE GOOGLE BUSINESS PROFILE
**Priority: #2 — prerequisite for local search visibility and AI citations**

Without a confirmed active GBP:
- Site cannot appear in Google Maps local pack for "web design Brampton"
- Google AI Overviews for local queries will not surface the site
- aggregateRating schema has nothing to draw from

Steps:
1. Log into business.google.com and verify the listing is live and verified
2. Set to SAB mode (hide street address, declare service area: Brampton, Mississauga, Caledon, Bolton, Vaughan, Peel Region, GTA)
3. Primary category: "Web Designer" or "Internet Marketing Service"
4. Add all services with descriptions
5. Upload 5+ photos
6. Add the verified GBP URL to the `sameAs` array in `app/layout.tsx`

---

### P3. GET FIRST GOOGLE REVIEW
**Priority: #3 — starts the review velocity clock**

Ask the Peel Excavation client for a Google review immediately after GBP is verified. One genuine review:
- Creates velocity data (Google tracks review recency)
- Enables `aggregateRating` schema to be added to LocalBusiness
- Strengthens AI citation signals for local queries

Once first review exists, add to `app/layout.tsx`:
```ts
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "1",
  "bestRating": "5",
},
```

---

## HIGH — Fix This Week

### H1. SUBMIT TO TIER 1 DIRECTORIES
Free submissions that directly affect citation-based AI visibility:
- Yelp Canada (yelp.ca) — free business listing
- YellowPages.ca — free listing
- Canada411 — free listing
- BBB (bbb.org) — free basic listing

NAP to use: Built to Rank / Brampton, ON / 647-657-8525 / info@builttorank.ca — must be identical everywhere.

### H2. CREATE LINKEDIN PROFILE
No LinkedIn anywhere on the site is a clear E-E-A-T gap. Once created:
- Add link to About page and Footer
- Add LinkedIn URL to `sameAs` array in LocalBusiness schema in `app/layout.tsx`

### H3. FIX META DESCRIPTIONS ON 4 PAGES
All below the 150-char floor:
- /about: 120 chars → add value prop sentence
- /services: 116 chars → add pricing anchor ("from $599 CAD")
- /contact: 133 chars → add specific timeframe
- /blog: 88 chars (worst) → add author + purpose

---

## MEDIUM — Fix Within 2 Weeks

### M1. FIX datePublished TO ISO 8601 FORMAT
Blog post frontmatter dates are "March 15, 2026" format. Google's structured data validator requires "2026-03-15". Affects BlogPosting rich result eligibility.

Add `dateISO` field to each post's frontmatter and update `app/blog/[slug]/page.tsx` to use it for the schema.

### M2. ADD PERSON SCHEMA TO /ABOUT PAGE
**File:** app/about/page.tsx
```ts
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Arjan Dhillon",
  "url": "https://builttorank.ca/about",
  "jobTitle": "Web Designer & Local SEO Specialist",
  "worksFor": { "@type": "Organization", "name": "Built to Rank", "url": "https://builttorank.ca" },
};
```

### M3. ADD SERVICE SCHEMA TO /SERVICES PAGE
Individual `Service` schema with `Offer` pricing nodes for each of the 3 tiers. Strengthens entity graph and Local SEO signals.

### M4. FIX BREADCRUMB BUG ON /proof/peel-excavation
Position 2 "Case Studies" item URL points to /proof/peel-excavation (same as position 3). Should point to https://builttorank.ca or a valid parent URL.
**File:** app/proof/peel-excavation/page.tsx

### M5. ADD GOOGLE MAPS EMBED TO CONTACT SECTION
Add an iframe or Maps link pointing to the GBP listing in the Contact section. Creates on-page GBP cross-reference signal.

### M6. REDUCE GOOGLE FONT FAMILIES (3 → 2)
Inter and Plus Jakarta Sans serve overlapping body copy roles. Remove one.
**File:** app/layout.tsx

---

## LOW — Backlog

### L1. MOVE FAQ SCHEMA TO SERVER COMPONENT
The FAQPage JSON-LD is injected inside a `"use client"` component. Move it to `app/page.tsx` as a server-side `<script>` tag so it renders in static HTML, not just after JS hydration.

### L2. FIX HERO H1 OPACITY ANIMATION
Framer Motion `initial={{ opacity: 0 }}` on the hero means the H1 is invisible in the raw HTML until JavaScript runs. Consider a CSS fallback or `initial={{ opacity: 1 }}` with CSS-only animation.

### L3. ADD GEO-MODIFIED KEYWORDS TO TITLE TAGS
Homepage title has no city name. Consider "Web Design & Local SEO for Trades in Brampton | Built to Rank" (57 chars) once the site has more authority.

### L4. LOCATION-SPECIFIC LANDING PAGES
Dedicated pages for "web design Mississauga", "web design Caledon" etc. Low priority now — these take 3-6 months to rank and require content input.

### L5. PEEL EXCAVATION ON CUSTOM DOMAIN
When the client moves to a custom domain, update the portfolio URL. A site on a purchased domain is stronger portfolio evidence than netlify.app.

---

## Score Projections

| Phase | Tasks | Est. Score | Status |
|---|---|---|---|
| Session 1 (April 24) | lang, headers, schema x4, blog title, llms.txt, cross-links, images | +8 potential | Done |
| Session 2 (April 24) | og-image, compress images, fix robots, video LCP, OG tags, schema fixes | +7 actual | Done — **69/100** |
| Phase 3 — Blog Rewrites | Rewrite 3 thin posts to 1,400+ words | +8 pts | Open |
| Phase 4 — GBP + Review | Verify GBP, get first review, add aggregateRating | +4 pts | Open |
| Phase 5 — Schema + Meta | Person schema, Service schema, ISO dates, meta descriptions | +4 pts | Open |

**Current live score:** 69/100
**After Phase 3 (blog rewrites only):** ~77/100
**After Phases 3-4 (blogs + GBP + review):** ~81/100
**After Phases 3-5 (everything):** ~85/100

---

## Immediate Next Steps (In Order)

1. **Run `git add -A && git commit -m "..." && git push`** — deploy today's code fixes (OG tags, schema, sitemap, robots)
2. **Rewrite "Local SEO for Contractors in Brampton"** — highest priority thin post, use `/blog-rewrite` skill
3. **Rewrite the other 2 thin posts** — must-have and why-website
4. **Verify GBP** — log into business.google.com, confirm active and optimized
5. **Request Peel Excavation review** — first review starts the velocity clock
6. **Submit to Yelp, YellowPages.ca, Canada411** — free, 30 min total
7. **Create LinkedIn** — cheapest external authority signal
8. **Re-run `/seo-audit`** after blog rewrites + GBP — expected score 78-82/100
