# Built to Rank — Next Steps Action Plan

Saved 2026-04-21. Execute top-to-bottom, one step at a time. Do not skip ahead.

---

## The core insight

The site is **visually done**. More animations, redesigns, or polish will not convert plumbers. The bottleneck is **proof, pricing clarity, and trades-specific persuasion**. Every step below moves the site from "beautiful portfolio piece" to "credible local trades operator."

---

## Step 1 — Text the Peel Excavation owner (DO THIS FIRST)

This unblocks the biggest trust lift on the whole site and costs you nothing but one text message.

Send this message today:

> Hey, hope business is going well. Quick ask — I'm putting the excavation site on my own portfolio to try to pick up more trades clients. Three quick things if you have a sec:
> 1. Roughly how many calls or leads has the site brought in since launch?
> 2. Any keywords you've noticed yourself showing up for on Google?
> 3. Mind if I use a 1–2 sentence quote from you on my site?
> Whatever you can share helps a ton. Thanks!

**While you wait for a reply, move to Step 2.**

---

## Step 2 — Reframe the copy (do this WHILE waiting on Peel)

Strip designer-speak. Replace with plumber-speak.

Files:
- `app/components/Hero.tsx` — kill "cinematic," "production-quality," "animated," "premium feel" in body copy. Keep the H1.
- `app/components/Services.tsx` — every card leads with outcome, not feature. Example: instead of "Schema markup, sitemap, GBP guidance" → "Show up when someone Googles 'plumber near me' in your city."
- `app/components/HowItWorks.tsx` — translate technical steps into plain trades language.
- `app/components/Statement.tsx` — leave it, already strong.

The "plumber test": read every headline out loud. If it's about YOU (the designer), rewrite it to be about HIM (his phone, his calendar, his jobs).

**Effort:** 2–3 hours. **Biggest single tone shift on the site.**

---

## Step 3 — Fix pricing

Current $500–$800 reads as placeholder and undersells you. Trades owners will assume either the scope is tiny or you're a beginner.

Recommended update (in `app/components/FAQ.tsx` and anywhere else pricing appears):
- Website Design: **$1,500** starting
- Website + SEO bundle: **$1,800** starting
- Monthly Retainer: **$299/mo**

Add one line: *"Every quote is locked in writing before I start. No surprise charges."*

**Effort:** 30 minutes.

---

## Step 4 — Rebuild the Portfolio section as a real case study

Once you hear back from Peel (or decide you've waited long enough), rebuild `app/components/Portfolio.tsx` as:

1. **Problem** — "New excavation contractor in Peel Region. Zero online presence. Competing against established companies with 10+ years of Google history."
2. **What was built** — Next.js site, schema, GBP optimization, sitemap, on-page SEO.
3. **Result** — whatever real numbers/keywords the owner gives you. If none, use what you can verify yourself in Google (incognito, Brampton search).
4. **Quote** — 1–2 sentences from the owner if you got one.

If the owner won't cooperate at all, pivot to a long-form `/proof/peel-excavation` page documenting what YOU built and measured (Lighthouse scores, schema coverage, real rankings you verified yourself). Still works as proof.

**Effort:** 1–2 hours of writing.

---

## Step 5 — Build ONE trades-specific page

NOT four. Pick one trade. Recommended: `/plumbers` (high search volume, clear local intent).

New file: `app/plumbers/page.tsx`

Structure:
- H1: "Websites + Google Rankings for Plumbers in the GTA"
- 3 pain points plumbers have online (hard to find on Google, no after-hours calls, poor mobile site, losing jobs to Yelp/HomeStars)
- 3 things you include for plumber sites (emergency-call button that's always visible, service area map, Google reviews widget, booking form)
- Pricing specific to plumbers
- Reuse the Peel Excavation case study block
- CTA to free audit

**Effort:** 3–4 hours. Ship it, watch how it converts, then expand to /roofers, /hvac.

---

## Step 6 — Seed the blog with 3 posts

Slowest payoff (3–6 months) but compounds. Start now so you have ranking content when outreach picks up.

Write in this order:
1. **"How Plumbers in Brampton Get Found on Google (2026)"** — targets local long-tail, doubles as a sales asset you can link in outreach emails.
2. **"What Every Trades Website Needs to Convert Visitors into Calls"** — demonstrates expertise.
3. **"Peel Excavation Case Study: Ranking a New Contractor on Page 1"** — long-form proof asset.

Each post: 1,200–1,800 words, real examples, internal links to Services + Contact.

**Effort:** 4–6 hours per post. Ship one per week.

---

## Step 7 — Start outreach (the REAL bottleneck)

You do not need the site to be "finished" before outreach. Once Steps 1–3 are done, start sending messages. The site is already better than 90% of trades-contractor sites it competes with.

Target list:
- 20 plumbers in Brampton/Mississauga without a modern website
- 20 roofers in Peel Region with slow or mobile-broken sites
- 20 HVAC companies with no Google Business Profile optimization

Pitch (short version):
> "Hey, I build websites for trades businesses in the GTA and get them found on Google. I built one for [Peel Excavation Services] — here's the link. If you want, I can send you a free written audit of your current site or Google listing and tell you exactly what's costing you calls. Takes me ~20 min, no obligation."

---

## Hard rules (do NOT break)

- Do NOT redesign the visual system. Dark aesthetic, violet/indigo, Bebas Neue — all locked.
- Do NOT add more animations or effects. Zero persuasion impact.
- Do NOT push to Netlify until May 16 when credits reset. Work locally.
- Do NOT fake testimonials, clients, or numbers. Peel Region is small. Trades owners verify.
- Do NOT build all 4 trades pages. One. Validate. Then expand.

---

## Weekly rhythm (suggested)

| Week | Focus |
|------|-------|
| Week 1 (now) | Step 1 (text Peel) + Step 2 (copy reframe) + Step 3 (pricing) |
| Week 2 | Step 4 (case study) + Step 5 (plumbers page) |
| Week 3 | Step 6 post #1 + start Step 7 outreach |
| Week 4 | Step 6 post #2 + keep outreach going |
| Week 5 | Step 6 post #3 + first real conversations with prospects |
| Week 6 (May 16) | Push everything to Netlify, go live |

---

## My top recommendation

If you do nothing else this week, do **Step 1 (text Peel today) + Step 2 (copy reframe)**. Those two alone move the needle more than everything else combined. Pricing and the plumbers page matter, but the copy reframe is the single biggest tone shift on the site and it's free.
