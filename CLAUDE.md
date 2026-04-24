# Built to Rank — Agency Website

## About This Project

Personal agency website for **Built to Rank**, a web design + local SEO freelance business run by Arjan Dhillon in the GTA, Ontario, Canada.

Goal: attract local trades clients (plumbers, roofers, landscapers, HVAC, excavators) in Peel Region / GTA and convert them into paying customers for web design and SEO services.

---

## Current Status (as of April 23, 2026)

- Domain **builttorank.ca** is live on Cloudflare.
- **Deployment:** Cloudflare Pages serves the static Next.js export from the `out` folder.
- **Working mode:** Make changes locally, verify with `npm run lint` and `npm run build`, then deploy through Cloudflare only when Arjan explicitly asks.
- **Zero clients converted yet.** Outreach has not started. Real bottleneck is the pitch/outreach, not the site.
- **Branding work in progress:** Arjan is actively creating Google Business Profile assets (logo + cover image) using external AI image tools. Current priority is locking a usable brand image set, not redesigning the website.

---

## About Arjan

- Based in the GTA, Ontario
- Beginner-to-intermediate developer, this is his second real website
- First project: legal support site (WordPress)
- Second project: **Peel Excavation Services** — full Next.js site (GSAP scroll animations, Framer Motion, cinematic video hero, mobile-optimized, deployed as a static site). Live at peelexcavationservices.netlify.app.
- Uses Claude Code heavily as a production partner. Arjan handles direction, judgment, client relationships. Claude handles code generation.
- Prefers direct, honest strategic advice. Will push back when something feels wrong (removed the "no upfront payment" guarantee and a "5-minute video audit" promise because neither matched how he actually wants to operate).

---

## Business Details

- **Business Name:** Built to Rank
- **Owner:** Arjan Dhillon
- **Location:** Brampton, Ontario (serving Brampton, Mississauga, Caledon, Bolton, Vaughan, Peel Region, GTA)
- **Phone:** 647-657-8525
- **Email:** info@builttorank.ca
- **Domain:** builttorank.ca (live on Cloudflare)
- **Contact form:** Web3Forms, live (access key wired in [app/components/Contact.tsx](app/components/Contact.tsx))

---

## Services Offered

1. **Website Design & Development** — custom Next.js websites, mobile-optimized, animated, production-quality. Starting from $599 CAD.
2. **SEO Setup & Optimization** — schema markup, sitemap, Google Business Profile guidance, on-page keyword optimization. Starting from $799 CAD (bundled with website).
3. **Monthly Retainer** — updates, SEO monitoring, priority support. Starting from $299/mo CAD.

Note: Opus suggested raising prices to $2,500 / $3,200. Claude pushed back and recommended staying closer to the current proof level until more real case studies exist. Current pricing on site is $599 / $799 / $299.

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
| Fonts | Bebas Neue (display) + Manrope (body, current local test) + Geist (fallback / still used in some heading wiring) |
| Forms | Web3Forms |
| Deployment | Cloudflare Pages (static export, output directory `out`) |
| Language | TypeScript |

---

## Design System

- Dark aesthetic, background `#0A0A12`, violet/indigo accents (`#6D28D9` → `#4F46E5`).
- Typography: Bebas Neue for display headings. Manrope is currently being tested locally for body copy in place of Geist because it feels slightly more premium and readable for this brand.
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
- **Hero H1:** "I Build Trades Websites Built to Be Found. So Your Phone Rings." (gradient on "Built to Be Found").
- **Contact header:** user submits site or GBP link, Arjan replies with a **free written audit** (not a video — Arjan declined the video idea).
- **Portfolio stats:** "0 Templates Used / 5 Core Pages Built / 100% Custom Next.js". Unreliable timeline claims and the unverifiable "Pg.1 Google Ranking" stat were removed.
- **Em dashes stripped** from all visible body copy per Arjan's preference. Title tags, OG alt text, and code comments still use them.
- **No risk-reversal "50% on delivery" pill** in Hero — Arjan wants a deposit up front.

---

## Branding / GBP Status (April 23, 2026)

- Arjan spent this session working on **Google Business Profile branding assets**, especially:
  - profile/logo image
  - cover image
  - general brand consistency between GBP and the website
- Claude created local placeholder/reference assets in `/public`:
  - `public/gbp-logo.svg`
  - `public/gbp-logo.png`
  - `public/gbp-cover.svg`
  - `public/gbp-cover.png`
- These are **reference assets only**, not necessarily final approved business assets.
- Current local code also includes a **body font test** switching body copy toward `Manrope` while keeping `Bebas Neue` for the display voice.

### Logo Status

- Arjan generated an AI logo externally and, by the end of the session, considered the logo direction basically chosen.
- The selected logo direction is:
  - dark near-black rounded-square badge
  - bold white stacked `Built to Rank` wordmark
  - violet upward arrow / growth motif
- Important recurring issue during generation:
  - AI image tools often duplicated or mangled text (`Built to Rank 2`, doubled `to`, gibberish copy).
- Claude's guidance was:
  - use AI to get the **visual direction**
  - if exact text becomes unreliable, manually rebuild or clean the final text in Canva/Figma/Photoshop rather than trusting the AI output verbatim

### GBP Cover Status

- Cover image generation is **not finalized**.
- AI attempts for the cover produced common failures:
  - invented extra text
  - corrupted text/gibberish
  - accidental redesign of the logo
  - compositions that looked more like posters than clean GBP branding
- Current best strategic direction for the GBP cover:
  - keep it square-safe (`1:1`) because Google crops unpredictably
  - use the approved logo as the anchor
  - avoid extra wording if possible
  - avoid fake storefront scenes, fake offices, fake people, fake signage
  - use a dark premium branded background with subtle violet glow / abstract geometry
- If a future session resumes this work, the safest route is:
  1. treat the logo as final or near-final
  2. make the cover image simpler than the logo experiments
  3. strongly minimize text in the cover
  4. if AI keeps breaking the composition, compose the cover manually using the finalized logo over a controlled branded background

### Prompting Lessons From This Session

- For logos and GBP visuals, **less text in the prompt usually worked better**.
- AI image tools handled:
  - mood
  - color
  - glow
  - composition
  better than they handled exact typography.
- When exact wording matters, prompts should explicitly say:
  - exact text only
  - no duplicate words
  - no extra numbers
  - no subtitle
  - no slogan
- Even with strict prompting, exact text may still fail. Manual cleanup is normal and expected.

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
- **Do NOT deploy without explicit permission.** The site now runs on Cloudflare Pages.
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
