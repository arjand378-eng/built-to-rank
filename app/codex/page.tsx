import type { Metadata } from "next";
import { ArrowRight, Check, Lightbulb, ShieldCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Codex | Built to Rank — Trades Website Best Practices",
  description:
    "The Built to Rank Codex for trades websites. Practical notes on local search, website strategy, and conversion-focused design for contractors.",
  alternates: { canonical: "https://builttorank.ca/codex" },
};

const codexItems = [
  {
    icon: <Lightbulb size={20} weight="duotone" />,
    title: "Local search matters first",
    points: [
      "Google Business Profile is the most valuable free listing for trades.",
      "Service-area pages should match the neighborhoods your customers search for.",
      "Reviews, citations, and NAP consistency make local SEO work.",
    ],
  },
  {
    icon: <Sparkle size={20} weight="duotone" />,
    title: "Website essentials",
    points: [
      "Clear phone + contact form above the fold.",
      "Simple service pages written for the trade and the local area.",
      "Fast mobile speed and easy navigation for busy customers.",
    ],
  },
  {
    icon: <ShieldCheck size={20} weight="duotone" />,
    title: "Conversion checklist",
    points: [
      "Use a strong value statement, not vague agency copy.",
      "Show real service steps, not just generic bullet lists.",
      "Keep the contact path short: call, form, or WhatsApp link.",
    ],
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
        <section
          className="relative pt-40 pb-12 px-6 overflow-hidden"
          style={{ background: "linear-gradient(160deg,#0A0A14 0%,#0D0A1E 55%,#080810 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at top right, rgba(109,40,217,0.14), transparent 35%)" }}
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
              Practical Website Notes for
              <br />
              Trades Businesses.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-[56ch]">
              The Built to Rank Codex collects the essentials every contractor needs on a website: local search, trust, and conversion-focused clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }),
                  "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-11 px-6")}
              >
                Get a Free Audit <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#codex-items"
                className={cn(buttonVariants({ variant: "outline" }),
                  "text-white/90 border-white/15 hover:border-violet-400/40 hover:text-white h-11 px-6")}
              >
                Read the Codex
              </a>
            </div>
          </div>
        </section>

        <section id="codex-items" className="py-24 px-6" style={{ background: "#080810" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <p className="section-eyebrow mb-3">What&apos;s inside</p>
              <h2
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
              >
                Three practical rules for trades websites.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {codexItems.map((item) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border-white/8 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <CardContent className="p-8 flex flex-col gap-5 h-full">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center text-violet-300"
                        style={{ background: "rgba(109,40,217,0.14)", border: "1px solid rgba(109,40,217,0.2)" }}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <ul className="grid gap-3 text-sm text-white/80">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1 text-violet-300">
                            <Check size={14} weight="bold" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, rgba(10,10,18,0.96) 0%, rgba(10,10,18,0.99) 100%)" }}>
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-card p-10">
              <Badge className="mb-4 bg-violet-900/50 text-violet-200 border-violet-700/40">Rule 1</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">Keep trust simple</h2>
              <p className="text-white/80 leading-relaxed">
                Trades customers decide fast. Your site should answer three questions in the first screen: who you are, where you work, and how to book you. If that is unclear, they leave.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-card p-10">
              <Badge className="mb-4 bg-violet-900/50 text-violet-200 border-violet-700/40">Rule 2</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">Make local search obvious</h2>
              <p className="text-white/80 leading-relaxed">
                Your site needs clear local targets, not just service names. Add the neighborhoods and towns you service, mention nearby cities, and keep your GBP profile aligned with the same service area.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6" style={{ background: "#080810" }}>
          <div className="max-w-6xl mx-auto text-center">
            <p className="section-eyebrow mb-4">Next step</p>
            <h2
              className="text-4xl font-bold text-foreground max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
            >
              Turn the Codex into your next website project.
            </h2>
            <p className="mt-6 text-base text-white/75 max-w-2xl mx-auto">
              If you want the same rules applied to your business, I can build the site and set up the local SEO foundation. The audit starts with your current website or GBP profile.
            </p>
            <a
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }),
                "mt-8 inline-flex items-center justify-center bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-95 gap-2 h-12 px-6")}
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
