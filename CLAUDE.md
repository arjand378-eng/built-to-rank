# Built to Rank — Agency Website

## About This Project

Personal agency website for **Built to Rank**, a web design + local SEO freelance business run by Arjan Dhillon in the GTA, Ontario, Canada.

Goal: attract local trades clients (plumbers, roofers, landscapers, HVAC, excavators) in Peel Region / GTA and convert them into paying customers for web design and SEO services.

---

## Current Status (as of April 24, 2026)

- Domain **builttorank.ca** is live on Cloudflare Pages.
- **Deployment:** git push to main triggers auto-deploy on Cloudflare Pages (static Next.js export from `out` folder).
- **SEO score:** ~75-77/100. Full audit completed April 24. Remaining gap is blog content.
- **GBP:** Verified and active. First Google review received.
- **Social media:** Facebook and Instagram live. LinkedIn pending (needs connections).
- **Directory citations:** Yelp, YellowPages.ca, Canada411, Bing Places submitted/pending verification.
- **Zero clients converted yet.** Outreach has not started. Site is ready — bottleneck is now the pitch.

---

## About Arjan

- Based in Brampton, GTA, Ontario
- Beginner-to-intermediate developer, this is his second real website
- First project: legal support site (WordPress)
- Second project: **Peel Excavation Services** — full Next.js site (GSAP scroll animations, Framer Motion, cinematic video hero, mobile-optimized, deployed as a static site). Live at peelexcavationservices.netlify.app.
- Uses Claude Code heavily as a production partner. Arjan handles direction, judgment, client relationships. Claude handles code generation.
- Prefers direct, honest strategic advice. Will push back when something feels wrong.

---

## Business Details

- **Business Name:** Built to Rank
- **Owner:** Arjan Dhillon
- **Location:** Brampton, Ontario (serving Brampton, Mississauga, Caledon, Bolton, Vaughan, Peel Region, GTA)
- **Phone:** 647-657-8525
- **Email:** info@builttorank.ca
- **Domain:** builttorank.ca (live on Cloudflare)
- **Contact form:** Web3Forms, live (access key wired in [app/components/Contact.tsx](app/components/Contact.tsx))
- **Facebook:** https://www.facebook.com/people/Built-to-Rank/61588887140478/
- **Instagram:** https://www.instagram.com/builttorank.ca/
- **LinkedIn:** Not created yet — needs 5+ personal connections first

---

## Services Offered

1. **Website Design & Development** — custom Next.js websites, mobile-optimized, animated, production-quality. Starting from $599 CAD.
2. **SEO Setup & Optimization** — schema markup, sitemap, Google Business Profile guidance, on-page keyword optimization. Starting from $799 CAD (bundled with website).
3. **Monthly Retainer** — updates, SEO monitoring, priority support. Starting from $299/mo CAD.

Pricing is intentionally conservative until more real case studies exist. Do not suggest raising prices without client evidence.

---

## Portfolio

1. **Peel Excavation Services** — peelexcavationservices.netlify.app
   - Full Next.js site, GSAP word reveal, parallax scroll, cinematic video hero
   - Services, Projects gallery, FAQ, Contact form with nodemailer
   - SEO: schema markup, sitemap, robots.txt, OG tags, security headers
   - Industry: Excavation / Demolition contractor, Peel Region Ontario
   - Full case study at /proof/peel-excavation

**Do NOT fake additional portfolio projects.** Trades owners verify, Peel Region is small, and one fake kills every real claim. Options for portfolio growth: (a) real client #2, or (b) labelled concept spec builds clearly marked as "not a live client."

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16+ (App Router, `output: "export"` static) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion + GSAP + ScrollTrigger |
| Fonts | Bebas Neue (display) + Inter + Plus Jakarta Sans (body) |
| Forms | Web3Forms |
| Deployment | Cloudflare Pages (static export, output directory `out`) |
| Language | TypeScript |

---

## Design System

- Dark aesthetic, background `#0A0A12`, violet/indigo accents (`#6D28D9` → `#4F46E5`).
- Typography: Bebas Neue for display headings, Inter/Plus Jakarta Sans for body.
- Spacing rhythm: `py-28`, `max-w-6xl`, `rounded-2xl`, `border-white/7`.
- Animations: Framer Motion fadeUp + stagger for entrances, GSAP via ScrollReveal for scroll effects.
- **Do not redesign the visual system. Only upgrade content within it.**

---

## Site Structure

Single landing page ([app/page.tsx](app/page.tsx)) composed of:
1. Navbar
2. Hero
3. StatsBar (4 big dark tiles, Bebas numbers)
4. Statement (bold two-line Semrush-style statement)
5. Services
6. HowItWorks
7. Portfolio (one case study, Peel Excavation)
8. Testimonials (3 founding spots framing, spot 1 = Peel Excavation)
9. About
10. FAQ (with FAQPage JSON-LD schema)
11. Contact (Web3Forms, email + phone + optional "current site/GBP URL" field)
12. Footer

Plus standalone routes: [/about](app/about/page.tsx), [/services](app/services/page.tsx), [/contact](app/contact/page.tsx), [/blog](app/blog/page.tsx), [/blog/[slug]](app/blog/[slug]/page.tsx), [/proof/peel-excavation](app/proof/peel-excavation/page.tsx), [/codex](app/codex/page.tsx).

---

## Content / UX Decisions

- **Primary CTA** sitewide is "Get a Free Website Audit" — audit framing over quote framing.
- **Hero H1:** "I Build Trades Websites Built to Be Found. So Your Phone Rings." (gradient on "Built to Be Found").
- **Contact:** user submits site or GBP link, Arjan replies with a free written audit (not a video).
- **Em dashes stripped** from all visible body copy. Title tags, OG alt text, and code comments still use them.
- **No risk-reversal guarantee** — Arjan wants a deposit up front.
- **No fake timeline claims** or unverifiable ranking stats in portfolio.

---

## SEO Status (April 24, 2026)

- **Live score:** ~75-77/100
- All technical fixes complete: security headers, schema (LocalBusiness, WebSite, BlogPosting, BreadcrumbList, Person, Service, aggregateRating), sitemap, robots.txt, OG tags, image compression, AI crawlers unblocked
- **Remaining gap:** blog content — 3 existing posts are thin (460-520 words). New properly-written posts (1,400+ words, sourced stats) will push score to 85+
- Full audit report: [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md)
- Full action plan: [ACTION-PLAN.md](ACTION-PLAN.md)

---

## Key Instructions for Claude

- Arjan is a beginner-to-intermediate developer — explain things clearly when he asks.
- Mobile-first on every component.
- Write complete, untruncated code.
- Do NOT strip em dashes from code comments or title tags, only body copy.
- **Commit freely. Push only when Arjan confirms.** The site auto-deploys on Cloudflare Pages on every push to main.
- Use GSAP for scroll effects, Framer Motion for entrance animations.
- Keep the violet/indigo dark aesthetic. Do not redesign.
- When Arjan asks strategy/business questions, give honest direct answers. Push back when a suggestion is premature, overpriced, or inauthentic.
- Never fake clients, testimonials, or portfolio projects.
- Blog posts going forward should be 1,400+ words with sourced statistics and question-format H2s.
