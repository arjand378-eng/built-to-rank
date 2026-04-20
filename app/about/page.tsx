import type { Metadata } from "next";
import { ArrowRight, Check, Code, MagnifyingGlass, Rocket, ChatCircle } from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About | Built to Rank — Web Design & SEO, GTA",
  description: "Meet Arjan Dhillon, the GTA developer behind Built to Rank. Custom websites and local SEO for trades businesses across the GTA.",
  alternates: { canonical: "https://builttorank.ca/about" },
};

const process = [
  {
    icon: <ChatCircle size={20} weight="duotone" />,
    step: "01",
    title: "Discovery Call",
    time: "Day 1",
    desc: "A free 15-minute call. No presentation, no pitch. I learn your business, your market, and your competition so the site is built around what actually matters.",
  },
  {
    icon: <Code size={20} weight="duotone" />,
    step: "02",
    title: "Design & Build",
    time: "Day 2–35",
    desc: "Custom Next.js site built mobile-first. You review at key checkpoints. No templates, no stock photography, no shortcuts.",
  },
  {
    icon: <MagnifyingGlass size={20} weight="duotone" />,
    step: "03",
    title: "SEO Setup",
    time: "Day 35–42",
    desc: "Schema markup, sitemap, robots.txt, Google Business Profile guidance, and on-page optimization. Built to rank from day one, not added as an afterthought.",
  },
  {
    icon: <Rocket size={20} weight="duotone" />,
    step: "04",
    title: "Launch",
    time: "Day 42–47",
    desc: "Deployed, live, and tested on every device. You get a site that works — and support from there if you need it.",
  },
];

const guarantees = [
  "30–47 day delivery",
  "100% custom — no templates",
  "SEO included, not extra",
  "Free revisions until you're satisfied",
  "No long-term contracts",
  "Direct access to your developer",
];

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative flex items-end pb-12 px-6 pt-40 overflow-hidden"
          style={{ background: "linear-gradient(160deg,#0A0A14 0%,#0D0A1E 60%,#080810 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 20% 40%, rgba(109,40,217,0.12) 0%, transparent 65%)" }}
          />
          <div className="relative max-w-6xl mx-auto w-full">
            <p className="section-eyebrow mb-5">About</p>
            <h1
              className="text-foreground leading-none max-w-3xl"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem,7vw,5.5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Hi. I&apos;m Arjan Dhillon.<br />
              <span className="text-muted-foreground">I Build Websites That</span><br />
              Work For Trades.
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="pt-14 pb-20 px-6" style={{ background: "#080810" }}>
          <ScrollReveal animation="fadeUp">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <p className="section-eyebrow">The Story</p>
              <p className="text-base leading-relaxed text-white/85">
                I got into web design through a simple door: a friend&apos;s uncle who runs an
                excavation company in Brampton needed a website. He&apos;d been in business for
                years but had zero digital presence. No site, not ranking on Google, losing
                jobs to competitors who showed up online.
              </p>
              <p className="text-base leading-relaxed text-white/85">
                I built him a full custom website from scratch. Video hero, scroll animations,
                contact form, full SEO setup. Launched in 47 days. A few months later, he was
                getting calls from people who found him on Google. That had never happened before.
              </p>
              <p className="text-base leading-relaxed text-white/85">
                That project showed me two things: trades businesses in the GTA desperately need
                quality websites, and most of them are getting ripped off by cheap template shops
                or ignored by big agencies.
              </p>
              <p className="text-base leading-relaxed text-white/85">
                Built to Rank is my answer to that.
              </p>
            </div>

            {/* Guarantees card */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "linear-gradient(145deg,rgba(109,40,217,0.08),rgba(79,70,229,0.05))",
                border: "1px solid rgba(109,40,217,0.25)",
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-violet-400">
                Our Guarantee
              </p>
              <ul className="flex flex-col gap-3">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-center gap-3 text-sm text-foreground/75">
                    <Check size={14} weight="bold" className="text-violet-500 shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
              <Separator className="opacity-20" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                No agency fees. No middlemen. You work directly with the developer
                building your site from day one.
              </p>
            </div>
          </div>
          </ScrollReveal>
        </section>

        {/* Process */}
        <section
          className="py-24 px-6 services-gradient-bg relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,40,217,0.06) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="section-eyebrow mb-4">How It Works</p>
              <h2
                className="text-foreground leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(2.4rem,5vw,3.8rem)",
                  letterSpacing: "0.02em",
                }}
              >
                From First Call to<br />
                <span className="text-muted-foreground">Live on Google.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map(({ icon, step, title, time, desc }) => (
                <Card
                  key={step}
                  className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-violet-300"
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
                        {step}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-violet-400 font-semibold mb-1">{time}</p>
                      <h3 className="font-bold text-foreground mb-2">{title}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trades */}
        <section className="py-24 px-6" style={{ background: "#08080F" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <p className="section-eyebrow">Why Trades</p>
              <h2
                className="text-foreground leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(2.4rem,5vw,3.8rem)",
                  letterSpacing: "0.02em",
                }}
              >
                Niche Expertise Beats<br />
                <span className="text-muted-foreground">General Knowledge.</span>
              </h2>
              <p className="text-base leading-relaxed text-white/85">
                I focus exclusively on trades businesses across the GTA for one reason:
                specialization beats generalization every time. I know what Brampton
                homeowners type into Google when they need a plumber. I know what converts
                a roofing inquiry into a booked job.
              </p>
              <p className="text-base leading-relaxed text-white/85">
                A general web agency has to learn your industry from scratch every time.
                I already know it. That means faster builds, better copy, and a site
                that actually speaks to your customers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Plumbers","Roofers","Landscapers","Excavators","HVAC Contractors","Painters","General Contractors","Electricians"].map((trade) => (
                <div
                  key={trade}
                  className="rounded-xl px-4 py-3 text-sm text-foreground/70 font-medium"
                  style={{ background: "#0F0F1C", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {trade}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-24 px-6"
          style={{ background: "linear-gradient(135deg,rgba(109,40,217,0.1) 0%,rgba(79,70,229,0.06) 100%)" }}
        >
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <h2
              className="text-foreground leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.4rem,5vw,3.8rem)",
                letterSpacing: "0.02em",
              }}
            >
              Let&apos;s Work Together.
            </h2>
            <p className="text-base text-white/80 max-w-[48ch]">
              Free 15-minute call. No pitch, no pressure. Just a real conversation about your business and what a website could do for it.
            </p>
            <a
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-11 px-6 active:scale-[0.98]")}
            >
              Start the Conversation <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
