# Built to Rank — Agency Website

## About This Project

Personal agency website for **Built to Rank**, a web design + local SEO freelance business run by Arjan Dhillon in the GTA, Ontario, Canada.

Goal: attract local trades clients (plumbers, roofers, landscapers, HVAC, excavators) in Peel Region / GTA and convert them into paying customers for web design and SEO services.

---

## Current Status (as of April 2026)

- Domain **builttorank.ca** purchased on GoDaddy, pointed to Netlify via auto-DNS.
- **Netlify account currently SUSPENDED** — free-tier 300 credits exhausted from frequent deploys. Billing cycle resets **May 16, 2026**. Arjan chose to wait rather than upgrade to the $9/mo Personal plan (no clients yet, no pressure to be live).
- **Working mode: local-only.** All changes happen via `npm run dev` on localhost:3000 and are committed to git but NOT pushed. One batched deploy planned for May 16 when credits reset.
- **Zero clients converted yet.** Outreach has not started. Real bottleneck is the pitch/outreach, not the site.

---

## About Arjan

- Based in the GTA, Ontario
- Beginner-to-intermediate developer, this is his second real website
- First project: legal support site (WordPress)
- Second project: **Peel Excavation Services** — full Next.js site (GSAP scroll animations, Framer Motion, cinematic video hero, mobile-optimized, deployed on Netlify). Live at peelexcavationservices.netlify.app.
- Uses Claude Code heavily as a production partner. Arjan handles direction, judgment, client relationships. Claude handles code generation.
- Prefers direct, honest strategic advice. Will push back when something feels wrong (removed the "no upfront payment" guarantee and a "5-minute video audit" promise because neither matched how he actually wants to operate).

---

## Business Details

- **Business Name:** Built to Rank
- **Owner:** Arjan Dhillon
- **Location:** Brampton, Ontario (serving Brampton, Mississauga, Caledon, Bolton, Vaughan, Peel Region, GTA)
- **Phone:** 647-657-8525
- **Email:** builttorank@hotmail.com
- **Domain:** builttorank.ca (live once Netlify unsuspends May 16)
- **Contact form:** Web3Forms, live (access key wired in [app/components/Contact.tsx](app/components/Contact.tsx))

---

## Services Offered

1. **Website Design & Development** — custom Next.js websites, mobile-optimized, animated, production-quality. Starting from $500 CAD.
2. **SEO Setup & Optimization** — schema markup, sitemap, Google Business Profile guidance, on-page keyword optimization. Starting from $800 CAD (bundled with website).
3. **Monthly Retainer** — updates, SEO monitoring, priority support. Starting from $299/mo CAD.

Note: Opus suggested raising prices to $2,500 / $3,200. Claude pushed back and recommended $1,200 / $1,800 as a middle path once P1 work begins. Arjan has not committed to a pricing bump yet. Current pricing on site is still $500 / $800 / $299.

---

## Portfolio

1. **Peel Excavation Services** — peelexcavationservices.netlify.app
   - Full Next.js site, GSAP word reveal, parallax scroll, cinematic video hero
   - Services, Projects gallery, FAQ, Contact form with nodemailer
   - SEO: schema markup, sitemap, robots.txt, OG tags, security headers
   - Industry: Excavation / Demolition contractor, Peel Region Ontario

**Decision (April 2026):** Do NOT fake additional portfolio projects. Trades owners verify, Peel Region is small, and one fake kills every real claim. Plan is to either (a) add a long-form `/proof` case study for Peel Excavation, or (b) build labelled *concept* spec builds (e.g. "Roofer Demo — not a live client"), or (c) wait until real client #2 lands.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16+ (App Router, `output: "export"` static) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion + GSAP + ScrollTrigger |
| Fonts | Bebas Neue (headings) + Geist (body) |
| Forms | Web3Forms |
| Deployment | Netlify (static, `publish = "out"`) |
| Language | TypeScript |

---

## Design System

- Dark aesthetic, background `#0A0A12`, violet/indigo accents (`#6D28D9` → `#4F46E5`).
- Typography: Bebas Neue for display headings, Geist for body.
- Spacing rhythm: `py-28`, `max-w-6xl`, `rounded-2xl`, `border-white/7`.
- Animations: Framer Motion fadeUp + stagger for entrances, GSAP via ScrollReveal for scroll effects.
- Semrush-inspired StatsBar + Statement sections already in place.
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

Plus standalone routes: [/about](app/about/page.tsx), [/services](app/services/page.tsx), [/contact](app/contact/page.tsx), [/blog](app/blog/page.tsx), [/blog/[slug]](app/blog/[slug]/page.tsx).

---

## Recent Content / UX Decisions

- **Primary CTA** sitewide is "Get a Free Website Audit" (was "Get a Free Quote"). Audit framing > quote framing because it offers value, not a sales call.
- **Hero H1:** "We Get Trades Businesses Found on Google. So Your Phone Rings." (gradient on "Found on Google").
- **Contact header:** user submits site or GBP link, Arjan replies with a **free written audit** (not a video — Arjan declined the video idea).
- **Portfolio stats:** "47 Days to Launch / 0 Templates Used / 100% Custom Next.js". The unverifiable "Pg.1 Google Ranking" stat was removed.
- **Em dashes stripped** from all visible body copy per Arjan's preference. Title tags, OG alt text, and code comments still use them.
- **No risk-reversal "50% on delivery" pill** in Hero — Arjan wants a deposit up front.

---

## Opus Strategic Brief (reference only, not yet fully executed)

Arjan ran a strategic review with Opus. Full brief covers P0 (CTA, hero, contact, portfolio stats, About rewrite), P1 (new WhyUs section, About rewrite, pricing bump), P2 (proof case study page, 4 niche SEO landing pages, nav menu), P3 (sticky mobile CTA, exit modal, lead magnet PDF).

**Completed so far (P0, minus the two Arjan rejected):**
- Primary CTA → "Get a Free Website Audit" ✅
- Hero H1 + sub-copy + badge rewrite ✅
- Contact header + optional URL field ✅
- Portfolio stats fix ✅

**Explicitly rejected:**
- "Pay 50% on ranking" risk-reversal guarantee (can't back the promise yet)
- "Free 5-minute video audit" framing (Arjan won't do videos)

**Claude recommended NOT doing yet (too early / too costly):**
- P1 #9 pricing jump to $2,500 (no case studies to justify it)
- P2 #10-12 (proof hub, 4 niche pages, new nav) — 8+ hours, burns credits, niche pages rank in 3-6 months
- P3 #15-17 (sticky CTA, exit modal, PDF) — premature without traffic

**Still to consider when Arjan is ready:**
- P1 #6 WhyUs section (4-card "Why Trades Businesses Hire Built to Rank")
- P1 #7 About rewrite (sharper credibility framing)
- Optional: modest pricing bump to $1,200 / $1,800 / $299

---

## Key Instructions for Claude

- Arjan is a beginner developer — explain things clearly when he asks.
- Mobile-first on every component.
- Write complete, untruncated code.
- Do NOT strip em dashes from code comments or title tags, only body copy.
- **Do NOT push to Netlify without explicit permission** — every deploy burns credits and Arjan is on the free tier until May 16.
- Work locally via `npm run dev`. Commit to git freely, but do not `git push` unless told.
- Use GSAP for scroll effects, Framer Motion for entrance animations.
- Keep the violet/indigo dark aesthetic. Do not redesign.
- When Arjan asks strategy/business questions, give honest direct answers. Push back when a suggestion is premature, overpriced, or inauthentic.
- Never fake clients, testimonials, or portfolio projects.

---

## Context: Why This Site Exists

Arjan built the Peel Excavation Services site as a demo for a friend's uncle who runs an excavation company. That project proved he can build production-quality websites. Built to Rank is the next step: turning that skill into a real business targeting local trades companies across the GTA.

Pitch to prospects: *"I build websites for trades businesses in Peel Region and get them found on Google. Here's one I already built."* Then show peelexcavationservices.netlify.app.

Next step for Arjan is outreach (cold email / DM / call to 20 GTA trades), not more site tweaks.
