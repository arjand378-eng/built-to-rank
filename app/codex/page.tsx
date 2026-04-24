import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  X,
  MapPin,
  DeviceMobile,
  MagnifyingGlass,
  Warning,
  Phone,
  Star,
  Globe,
  ListChecks,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Codex | Built to Rank — Trades Website Best Practices",
  description:
    "Practical notes on local search, website essentials, and conversion for trades businesses in Peel Region and the GTA. The Built to Rank Codex.",
  alternates: { canonical: "https://builttorank.ca/codex" },
};

const rules = [
  {
    number: "01",
    icon: <MapPin size={20} weight="duotone" />,
    title: "Local Search Comes First",
    summary:
      "Most trades customers search with a city or neighbourhood in mind. If your website does not mention where you work, Google has no reason to show you.",
    points: [
      "Google Business Profile is the most valuable free listing a trades business has — fill it out completely",
      "Your website needs to name the cities and neighbourhoods you actually service",
      "NAP consistency (Name, Address, Phone) across your site, GBP, and directory listings matters",
      "Local reviews on Google are a direct ranking factor — ask for them after every job",
      "Service-area pages for your top cities outperform a single homepage trying to rank everywhere",
    ],
  },
  {
    number: "02",
    icon: <DeviceMobile size={20} weight="duotone" />,
    title: "Your Website Needs to Work on a Phone",
    summary:
      "Over 70% of local service searches happen on mobile. If your site is slow, hard to tap, or buries the phone number, you are losing jobs before anyone reads a word.",
    points: [
      "Phone number and contact button must be visible without scrolling on mobile",
      "Buttons need to be large enough to tap with a thumb — at minimum 44px height",
      "Page load time under 3 seconds on a phone connection",
      "Text that is readable without zooming in",
      "No horizontal scrolling, no elements that break the layout on small screens",
    ],
  },
  {
    number: "03",
    icon: <MagnifyingGlass size={20} weight="duotone" />,
    title: "Conversion Clarity Beats Design Impressiveness",
    summary:
      "Trades customers are not browsing — they have a problem and need it solved. Your site should answer three questions in the first screen: who you are, where you work, and how to reach you.",
    points: [
      "Your headline should say what you do and where, not a vague tagline",
      "Show real service steps, not just bullet lists of what you offer",
      "Testimonials from local customers with first names and cities build more trust than generic reviews",
      "Keep the contact path short: one tap to call, one short form to fill",
      "Explain your process so customers know what to expect — uncertainty kills conversions",
    ],
  },
];

const checklist = [
  { pass: true, item: "Business name, phone, and city visible in the header" },
  { pass: true, item: "Each service has its own dedicated page or section" },
  { pass: true, item: "Google Business Profile is fully filled out and verified" },
  { pass: true, item: "Site loads in under 3 seconds on mobile" },
  { pass: true, item: "Schema markup tells Google your business category and location" },
  { pass: false, item: "Still using a template built for a generic business type" },
  { pass: false, item: "Phone number only in the footer" },
  { pass: false, item: "No mention of the cities or regions you serve" },
  { pass: false, item: "No reviews or testimonials anywhere on the site" },
  { pass: false, item: "Contact form buried on a separate page with no visible CTA" },
];

const mistakes = [
  {
    icon: <Globe size={20} weight="duotone" />,
    title: "No Local Targeting",
    desc: "A site that says 'serving the Greater Toronto Area' is too vague. Google needs specific city names, neighbourhoods, and service areas to rank you for local searches.",
  },
  {
    icon: <Warning size={20} weight="duotone" />,
    title: "Generic Template Copy",
    desc: "Copy like 'We are a leading provider of quality services' tells customers nothing. Real trades customers want to know your trade, your area, and why you specifically.",
  },
  {
    icon: <Phone size={20} weight="duotone" />,
    title: "Hard-to-Find Contact Info",
    desc: "If a customer has to scroll, click, or search to find your phone number, most will leave. Phone number and a clear CTA button belong above the fold.",
  },
  {
    icon: <Star size={20} weight="duotone" />,
    title: "No Social Proof",
    desc: "Trades work is trust-based. Without reviews, customer names, or photos of real jobs, visitors have no reason to choose you over the next result on Google.",
  },
];

export default function CodexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://builttorank.ca" },
      { "@type": "ListItem", position: 2, name: "Codex", item: "https://builttorank.ca/codex" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          className="relative pt-40 pb-14 px-6 overflow-hidden"
          style={{ background: "linear-gradient(160deg,#0A0A14 0%,#0D0A1E 60%,#080810 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(109,40,217,0.11) 0%, transparent 65%)" }}
          />
          <div className="relative max-w-6xl mx-auto">
            <p className="section-eyebrow mb-5">Codex</p>
            <h1
              className="text-foreground leading-none max-w-3xl"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem,7vw,5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Practical Website Notes<br />
              <span className="text-muted-foreground">For Trades Businesses.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-[56ch]">
              Three rules every contractor in Peel Region and the GTA needs to follow online. Local search, mobile performance, and conversion clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-11 px-6"
                )}
              >
                Get a Free Audit <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#rules"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "text-white/90 border-white/15 hover:border-violet-400/40 hover:text-white h-11 px-6"
                )}
              >
                Read the Codex
              </a>
            </div>
          </div>
        </section>

        {/* Three Rules */}
        <section id="rules" className="py-24 px-6 services-gradient-bg relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(109,40,217,0.06) 0%, transparent 70%)" }}
          />
          <ScrollReveal animation="fadeUp">
            <div className="relative max-w-6xl mx-auto">
              <div className="mb-14 max-w-2xl">
                <p className="section-eyebrow mb-4">The Rules</p>
                <h2
                  className="text-foreground leading-none"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(2.4rem,5vw,3.8rem)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Three Things Every<br />
                  <span className="text-muted-foreground">Trades Site Must Get Right.</span>
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {rules.map(({ number, icon, title, summary, points }) => (
                  <Card
                    key={number}
                    className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    <CardContent className="p-8 md:p-10">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="flex flex-col gap-5">
                          <div className="flex items-center gap-4">
                            <div
                              className="w-11 h-11 rounded-xl flex items-center justify-center text-violet-300 shrink-0"
                              style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                            >
                              {icon}
                            </div>
                            <span
                              style={{
                                fontFamily: "var(--font-bebas)",
                                fontSize: "2rem",
                                letterSpacing: "0.06em",
                                background: "linear-gradient(135deg,rgba(167,139,250,0.3),rgba(129,140,248,0.15))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {number}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                            <p className="text-sm leading-relaxed text-white/80">{summary}</p>
                          </div>
                        </div>
                        <ul className="flex flex-col gap-3">
                          {points.map((point) => (
                            <li key={point} className="flex items-start gap-3 text-sm text-white/80">
                              <Check size={13} weight="bold" className="text-violet-400 shrink-0 mt-[3px]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Checklist */}
        <section className="py-24 px-6" style={{ background: "#08080F" }}>
          <ScrollReveal animation="fadeUp">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="section-eyebrow mb-4">Self-Assessment</p>
                    <h2
                      className="text-foreground leading-none mb-5"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(2.4rem,5vw,3.8rem)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Does Your Website<br />
                      <span className="text-muted-foreground">Pass the Test?</span>
                    </h2>
                    <p className="text-base leading-relaxed text-white/80">
                      Run through this checklist against your current site. Green means you are in good shape. Red means a customer is probably leaving before they call you.
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "self-start bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-11 px-6"
                    )}
                  >
                    Get a Free Audit <ArrowRight size={16} weight="bold" />
                  </a>
                </div>

                <div
                  className="rounded-2xl p-8 flex flex-col gap-3"
                  style={{
                    background: "linear-gradient(145deg,rgba(109,40,217,0.07),rgba(79,70,229,0.04))",
                    border: "1px solid rgba(109,40,217,0.2)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ListChecks size={18} className="text-violet-400" weight="duotone" />
                    <p className="text-xs font-semibold tracking-widest uppercase text-violet-400">Website Checklist</p>
                  </div>
                  {checklist.map(({ pass, item }) => (
                    <div key={item} className="flex items-start gap-3 text-sm">
                      <span className={cn("shrink-0 mt-[2px]", pass ? "text-violet-400" : "text-red-400/80")}>
                        {pass ? <Check size={14} weight="bold" /> : <X size={14} weight="bold" />}
                      </span>
                      <span className={pass ? "text-white/80" : "text-white/55 line-through decoration-red-400/40"}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Common Mistakes */}
        <section className="py-24 px-6 services-gradient-bg relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(109,40,217,0.05) 0%, transparent 70%)" }}
          />
          <ScrollReveal animation="fadeUp">
            <div className="relative max-w-6xl mx-auto">
              <div className="mb-14 max-w-2xl">
                <p className="section-eyebrow mb-4">Common Mistakes</p>
                <h2
                  className="text-foreground leading-none"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(2.4rem,5vw,3.8rem)",
                    letterSpacing: "0.02em",
                  }}
                >
                  What Most Trades<br />
                  <span className="text-muted-foreground">Websites Get Wrong.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {mistakes.map(({ icon, title, desc }) => (
                  <Card
                    key={title}
                    className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    <CardContent className="p-8 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center text-violet-300 shrink-0"
                          style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                        >
                          {icon}
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-white/75">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA */}
        <section
          className="py-24 px-6"
          style={{ background: "linear-gradient(135deg,rgba(109,40,217,0.1) 0%,rgba(79,70,229,0.06) 100%)" }}
        >
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <Badge className="bg-violet-900/50 text-violet-200 border-violet-700/40">Free Written Audit</Badge>
            <h2
              className="text-foreground leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.4rem,5vw,3.8rem)",
                letterSpacing: "0.02em",
              }}
            >
              Apply the Codex to<br />
              <span className="text-muted-foreground">Your Business.</span>
            </h2>
            <p className="text-base text-white/80 max-w-[44ch]">
              Send me your current website or Google Business Profile link. I will send back a written audit with exactly what is costing you jobs online.
            </p>
            <a
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-12 px-7"
              )}
            >
              Request a Free Audit <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
