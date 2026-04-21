import type { Metadata } from "next";
import { Monitor, MagnifyingGlass, ArrowCircleRight, Check, ArrowRight, Star } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services | Built to Rank — Web Design & SEO for Trades, GTA",
  description: "Custom website design, local SEO setup, and monthly retainer services for trades businesses across the GTA. Built to rank on Google.",
  alternates: { canonical: "https://builttorank.ca/services" },
};

const webFeatures = [
  "Mobile-first, looks great on any phone",
  "Smooth animations, premium feel",
  "Contact form that emails you directly",
  "Live and fast in 30–47 days",
  "SEO-ready from day one",
  "Free revisions until you're happy",
  "Fast load times on all devices",
  "Copy written around your trade",
];

const seoFeatures = [
  "Google Business Profile guidance",
  "Schema markup & XML sitemap",
  "On-page keyword optimization",
  "robots.txt & meta tags",
  "Title & description tags",
  "Local citation recommendations",
];

const retainerFeatures = [
  "Monthly content & page updates",
  "Core Web Vitals monitoring",
  "SEO performance tracking",
  "Priority email support",
  "New page builds on request",
  "Annual SEO review",
];

const pricing = [
  {
    name: "Website Design",
    from: "$500",
    desc: "A full custom website built around your trade. No templates.",
    features: ["Up to 5 pages", "Mobile-first design", "Contact form", "Basic SEO setup", "Free revisions"],
    highlight: false,
  },
  {
    name: "Website + SEO Bundle",
    from: "$800",
    desc: "The full package. Custom site and complete SEO setup from day one.",
    features: ["Everything in Website Design", "Schema markup & sitemap", "Google Business Profile guidance", "On-page keyword optimization", "Page 1 strategy"],
    highlight: true,
  },
  {
    name: "Monthly Retainer",
    from: "$299/mo",
    desc: "Keep your site fast, fresh, and climbing Google after launch.",
    features: ["Monthly updates", "SEO monitoring", "Priority support", "Performance reports", "New pages on request"],
    highlight: false,
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative pt-40 pb-12 px-6 overflow-hidden"
          style={{ background: "linear-gradient(160deg,#0A0A14 0%,#0D0A1E 60%,#080810 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(109,40,217,0.1) 0%, transparent 65%)" }}
          />
          <div className="relative max-w-6xl mx-auto">
            <p className="section-eyebrow mb-5">Services</p>
            <h1
              className="text-foreground leading-none max-w-2xl"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem,7vw,5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Everything Your Trades<br />
              <span className="text-muted-foreground">Business Needs Online.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-[56ch]">
              Custom websites. Local SEO. Ongoing support. A complete digital presence
              built for trades businesses across the GTA.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20 px-6 services-gradient-bg relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(109,40,217,0.06) 0%, transparent 70%)" }}
          />
          <ScrollReveal animation="fadeUp">
          <div className="relative max-w-6xl mx-auto flex flex-col gap-6">

            {/* Web Design */}
            <Card className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-violet-300"
                        style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                      >
                        <Monitor size={22} weight="duotone" />
                      </div>
                      <Badge variant="outline" className="border-violet-700/40 bg-violet-900/20 text-violet-300 text-[0.68rem] tracking-widest uppercase">
                        Most Popular
                      </Badge>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-3">Website Design & Development</h2>
                      <p className="text-base leading-relaxed text-white/85">
                        A fully custom website built mobile-first and designed to convert
                        visitors into booked jobs. Every detail, from the layout and copy to the
                        animations, is built around your specific trade and your local market.
                      </p>
                    </div>
                    <a
                      href="/contact"
                      className={cn(buttonVariants({ size: "lg" }), "self-start bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-11 px-6")}
                    >
                      Start a Project <ArrowRight size={15} weight="bold" />
                    </a>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {webFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/80">
                        <Check size={13} weight="bold" className="text-violet-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SEO */}
              <Card className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <CardContent className="p-8 flex flex-col gap-5 h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-violet-300"
                    style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                  >
                    <MagnifyingGlass size={22} weight="duotone" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">SEO Setup & Optimization</h2>
                    <p className="text-sm leading-relaxed text-white/80">
                      Get found when locals search for your trade. Full technical SEO setup
                      so you rank on Google from the day your site goes live.
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {seoFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                        <Check size={13} weight="bold" className="text-violet-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={cn(buttonVariants({ variant: "outline" }), "self-start mt-auto bg-transparent text-foreground border-white/10 hover:bg-violet-900/20 hover:border-violet-500/40 h-9 px-4")}
                  >
                    Boost My Rankings
                  </a>
                </CardContent>
              </Card>

              {/* Retainer */}
              <Card className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <CardContent className="p-8 flex flex-col gap-5 h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-violet-300"
                    style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                  >
                    <ArrowCircleRight size={22} weight="duotone" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">Monthly Retainer</h2>
                    <p className="text-sm leading-relaxed text-white/80">
                      Your site stays fast, fresh, and climbing the rankings. Monthly
                      updates, SEO monitoring, and priority support. All handled.
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {retainerFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                        <Check size={13} weight="bold" className="text-violet-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={cn(buttonVariants({ variant: "outline" }), "self-start mt-auto bg-transparent text-foreground border-white/10 hover:bg-violet-900/20 hover:border-violet-500/40 h-9 px-4")}
                  >
                    Learn More
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
          </ScrollReveal>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6" style={{ background: "#08080F" }}>
          <div className="max-w-6xl mx-auto">
            <p className="section-eyebrow mb-5">Pricing</p>
            <h2
              className="text-foreground leading-none mb-4"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.2rem,4vw,3rem)", letterSpacing: "0.02em" }}
            >
              Straightforward Pricing.<br />
              <span className="text-muted-foreground">No Hidden Fees.</span>
            </h2>
            <p className="text-base text-white/70 mb-12 max-w-[50ch]">
              Every project gets a custom quote. These are starting points. Your final price is scoped to exactly what you need, nothing more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pricing.map(({ name, from, desc, features, highlight }) => (
                <Card
                  key={name}
                  className="rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  style={{
                    background: highlight ? "linear-gradient(145deg,rgba(109,40,217,0.12),rgba(79,70,229,0.08))" : "#0F0F1C",
                    border: highlight ? "1px solid rgba(109,40,217,0.4)" : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <CardContent className="p-7 flex flex-col gap-5 h-full">
                    {highlight && (
                      <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-violet-300 flex items-center gap-1.5">
                        <Star size={10} weight="fill" /> Most Popular
                      </span>
                    )}
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">{name}</p>
                      <p
                        className="text-violet-300 leading-none mb-2"
                        style={{ fontFamily: "var(--font-bebas)", fontSize: "2.4rem", letterSpacing: "0.04em" }}
                      >
                        From {from}
                      </p>
                      <p className="text-sm text-white/70">{desc}</p>
                    </div>
                    <ul className="flex flex-col gap-2 flex-1">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                          <Check size={12} weight="bold" className="text-violet-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={cn(
                        buttonVariants({ variant: highlight ? "default" : "outline" }),
                        highlight
                          ? "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 h-9 px-4"
                          : "bg-transparent text-foreground border-white/10 hover:bg-violet-900/20 hover:border-violet-500/40 h-9 px-4"
                      )}
                    >
                      Get a Quote
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground text-center">
              All prices in CAD. Final quote provided after a free discovery call. No obligation.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-24 px-6"
          style={{ background: "linear-gradient(135deg,rgba(109,40,217,0.1) 0%,rgba(79,70,229,0.06) 100%)" }}
        >
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <h2
              className="text-foreground leading-none"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.4rem,5vw,3.8rem)", letterSpacing: "0.02em" }}
            >
              Ready to Start?
            </h2>
            <p className="text-base text-white/80 max-w-[42ch]">
              Free 15-minute call. Clear quote. No surprises.
            </p>
            <a
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-11 px-6")}
            >
              Get a Free Quote <ArrowRight size={15} weight="bold" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
