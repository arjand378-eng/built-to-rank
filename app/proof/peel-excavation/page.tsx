import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, GlobeSimple } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Peel Excavation Services — Case Study | Built to Rank",
  description:
    "How I built a full custom Next.js website for a new excavation contractor in Brampton, Ontario, from zero online presence to a live, SEO-ready site.",
  alternates: { canonical: "https://builttorank.ca/proof/peel-excavation" },
  openGraph: {
    title: "Peel Excavation Services — Case Study | Built to Rank",
    description:
      "Full custom Next.js site for a Brampton excavation contractor. Zero online presence to live and SEO-ready.",
    type: "article",
    url: "https://builttorank.ca/proof/peel-excavation",
    images: [{ url: "https://builttorank.ca/og-image.jpg", width: 1200, height: 675 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://builttorank.ca" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://builttorank.ca/#work" },
    { "@type": "ListItem", position: 3, name: "Peel Excavation Services", item: "https://builttorank.ca/proof/peel-excavation" },
  ],
};

const stack = [
  { label: "Framework", value: "Next.js (App Router, static export)" },
  { label: "Styling",   value: "Tailwind CSS" },
  { label: "Animation", value: "GSAP + ScrollTrigger, Framer Motion" },
  { label: "Forms",     value: "Nodemailer (email direct to client)" },
  { label: "Hosting",   value: "Static hosting with optimized production build" },
  { label: "SEO",       value: "Schema markup, sitemap, robots.txt, OG tags" },
];

const proofStats = [
  { value: "0", label: "Templates Used" },
  { value: "5", label: "Core Pages Built" },
  { value: "SEO", label: "Foundation Setup" },
  { value: "Next.js", label: "Custom Build" },
];

const deliverables = [
  "Full custom homepage with cinematic video hero",
  "Services, Projects gallery, FAQ, and Contact pages",
  "Scroll-triggered animations with GSAP + ScrollTrigger",
  "Contact form that emails the client directly via Nodemailer",
  "Mobile-optimized across all pages and breakpoints",
  "LocalBusiness schema markup for Google",
  "XML sitemap + robots.txt",
  "Open Graph tags for social sharing",
  "Google Business Profile setup guidance",
  "On-page keyword optimization for Peel Region excavation searches",
];

const proofStory = [
  {
    title: "Before",
    items: [
      "No website customers could visit",
      "No clear place to show services or project credibility",
      "No Google Business Profile presence when the build started",
      "No SEO foundation, sitemap, schema, or indexed service pages",
    ],
  },
  {
    title: "Build",
    items: [
      "Custom Next.js website with no templates or page builders",
      "Mobile-first service pages for excavation and demolition work",
      "Cinematic homepage, project gallery, FAQ, and contact flow",
      "Schema, sitemap, metadata, and Google Business Profile guidance",
    ],
  },
  {
    title: "After",
    items: [
      "Live professional website the company can send customers to",
      "Clear service information, project proof, and contact path",
      "Stronger Google presence supported by technical SEO foundations",
      "Client-reported increase in traffic, visibility, and attention online",
    ],
  },
];

const clientQuote =
  "The new website made our excavation company look a lot more professional and credible. It gave customers a clear place to see our services, learn about our work, and contact us easily. Since getting the site live and improving our Google presence with SEO, we've seen more traffic and better visibility online. It's helped us stand out as a serious business and has brought more attention to our company.";

export default function PeelExcavationCaseStudy() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">

        {/* Hero */}
        <section
          className="relative pt-40 pb-20 px-6 overflow-hidden"
          style={{ background: "linear-gradient(160deg,#0A0A14 0%,#0D0A1E 60%,#080810 100%)" }}
        >
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(109,40,217,0.12) 0%, transparent 65%)" }} />

          <div className="relative max-w-4xl mx-auto">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft size={14} /> Back to Work
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="outline" className="border-violet-700/30 bg-violet-900/15 text-violet-400 text-[0.68rem] tracking-widest uppercase">
                Case Study
              </Badge>
              <Badge variant="outline" className="border-white/10 bg-white/5 text-white/60 text-[0.68rem] tracking-widest uppercase">
                Excavation & Demolition
              </Badge>
              <Badge variant="outline" className="border-white/10 bg-white/5 text-white/60 text-[0.68rem] tracking-widest uppercase">
                Brampton, Ontario
              </Badge>
            </div>

            <h1
              className="text-foreground leading-none mb-5"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.8rem,7vw,5.5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Peel Excavation<br />
              <span className="text-muted-foreground">Services.</span>
            </h1>

            <p className="text-xl font-light leading-relaxed text-white/90 max-w-2xl mb-10">
              A new excavation contractor in Brampton with zero online presence. No website,
              no clear place to show services, and no SEO foundation. Here is what I built,
              how I built it, and what the client said after launch.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://peelexcavationservices.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-11 px-6")}
              >
                View Live Site <ArrowUpRight size={16} weight="bold" />
              </a>
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-transparent text-foreground border-white/10 hover:bg-violet-900/20 hover:border-violet-500/40 h-11 px-6")}
              >
                Want This for Your Business?
              </a>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="px-6 py-0" style={{ background: "#080810" }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-6">
              {proofStats.map(({ value, label }) => (
                <Card key={label} className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <CardContent className="p-5 md:p-7 text-center">
                    <p
                      className="leading-none mb-1"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(2rem,5vw,3.5rem)",
                        letterSpacing: "0.04em",
                        background: "linear-gradient(135deg,#A78BFA,#818CF8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {value}
                    </p>
                    <p className="text-xs text-white/60 tracking-wide">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Site preview */}
        <section className="py-20 px-6" style={{ background: "#080810" }}>
          <div className="max-w-4xl mx-auto">
            <Separator className="mb-16 opacity-30" />

            {/* Browser mockup */}
            <div
              className="rounded-2xl overflow-hidden mb-4"
              style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 64px -16px rgba(0,0,0,0.6)" }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "#1A1A2E", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div
                  className="flex-1 mx-2 rounded-md px-3 py-1.5 flex items-center gap-2"
                  style={{ background: "#242436" }}
                >
                  <GlobeSimple size={11} className="text-muted-foreground shrink-0" />
                  <span className="text-xs text-muted-foreground">peelexcavationservices.netlify.app</span>
                </div>
              </div>
              <picture>
                <source srcSet="/peel-excavation-preview.webp" type="image/webp" />
                <source srcSet="/peel-excavation-preview.jpg" type="image/jpeg" />
                <img
                  src="/peel-excavation-preview.jpg"
                  alt="Peel Excavation Services website — homepage screenshot"
                  width={1200}
                  height={630}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "480px" }}
                />
              </picture>
            </div>
            <p className="text-xs text-center text-white/60 mb-16">
              peelexcavationservices.netlify.app — live and running
            </p>

            {/* Before / build / after */}
            <div className="mb-16">
              <p className="section-eyebrow mb-8">Before, Build, After</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {proofStory.map(({ title, items }) => (
                  <Card
                    key={title}
                    className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    <CardContent className="p-6">
                      <h2
                        className="text-foreground leading-none mb-5"
                        style={{ fontFamily: "var(--font-bebas)", fontSize: "2.4rem", letterSpacing: "0.02em" }}
                      >
                        {title}
                      </h2>
                      <ul className="flex flex-col gap-3">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80">
                            <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-violet-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="mb-16 opacity-30" />

            {/* The Challenge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div>
                <p className="section-eyebrow mb-4">The Challenge</p>
                <h2
                  className="text-foreground leading-tight mb-5"
                  style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.4rem,5vw,4rem)", letterSpacing: "0.02em" }}
                >
                  Starting from Zero.
                </h2>
                <div className="flex flex-col gap-4 text-sm leading-relaxed text-white">
                  <p>
                    Peel Excavation Services is a contractor serving Brampton and the
                    surrounding Peel Region. When I started this build, they had no website,
                    no Google Business Profile, and no digital presence of any kind.
                  </p>
                  <p>
                    Their competitors already had websites, established search history, and
                    more ways for potential customers to check them out online. The job was to
                    give Peel Excavation a credible foundation without pretending a new site
                    would instantly outrank established companies.
                  </p>
                  <p>
                    The goal: a fast, professional website that looked credible, explained the
                    services clearly, supported local search, and made it easy for customers to
                    get in touch.
                  </p>
                </div>
              </div>

              <div>
                <p className="section-eyebrow mb-4">The Approach</p>
                <h2
                  className="text-foreground leading-tight mb-5"
                  style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.4rem,5vw,4rem)", letterSpacing: "0.02em" }}
                >
                  Built to Rank.
                </h2>
                <div className="flex flex-col gap-4 text-sm leading-relaxed text-white">
                  <p>
                    I chose Next.js with static export for speed and SEO control. Every page
                    was built mobile-first, with structured data and on-page keywords baked in
                    from the start rather than bolted on after.
                  </p>
                  <p>
                    GSAP ScrollTrigger handles the scroll animations. Framer Motion handles
                    page entrances. The video hero was compressed and optimized so it loads
                    fast even on slower mobile connections.
                  </p>
                  <p>
                    The contact form emails the client directly via Nodemailer so no lead
                    slips through a third-party service.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="mb-16 opacity-30" />

            {/* Stack */}
            <div className="mb-16">
              <p className="section-eyebrow mb-8">Tech Stack</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stack.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl px-5 py-4 flex items-start gap-4"
                    style={{ background: "#0F0F1C", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span className="text-xs font-semibold text-violet-400 tracking-widest uppercase w-24 shrink-0 pt-0.5">
                      {label}
                    </span>
                    <span className="text-sm text-white/85">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="mb-16 opacity-30" />

            {/* Deliverables */}
            <div className="mb-16">
              <p className="section-eyebrow mb-8">What Was Delivered</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <Check size={15} weight="bold" className="text-violet-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="mb-16 opacity-30" />

            {/* Client quote */}
            <div
              className="rounded-2xl p-8 md:p-10 mb-16"
              style={{
                background: "linear-gradient(145deg,rgba(109,40,217,0.1),rgba(79,70,229,0.05))",
                border: "1px solid rgba(109,40,217,0.28)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <p className="section-eyebrow mb-5">Client Feedback</p>
              <blockquote className="text-lg md:text-xl leading-relaxed font-light text-white/90">
                &ldquo;{clientQuote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  PE
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Peel Excavation Services</p>
                  <p className="text-xs text-white/60">Excavation & demolition contractor</p>
                </div>
              </div>
            </div>

            <Separator className="mb-16 opacity-30" />

            {/* Timeline */}
            <div className="mb-16">
              <p className="section-eyebrow mb-8">Timeline</p>
              <div className="flex flex-col gap-4">
                {[
                  { phase: "Discovery",    detail: "Scope, structure, and content plan agreed." },
                  { phase: "Design + Dev", detail: "Full build from scratch. No templates, no page builders." },
                  { phase: "Review",       detail: "Client review, revisions, and final sign-off." },
                  { phase: "Launch",       detail: "Deployed as a static site. Schema, sitemap, and GBP guidance handed over." },
                ].map(({ phase, detail }, i) => (
                  <div key={phase} className="flex items-start gap-5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-violet-300"
                      style={{ background: "rgba(109,40,217,0.15)", border: "1px solid rgba(109,40,217,0.3)" }}
                    >
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-white mb-0.5">{phase}</p>
                      <p className="text-sm text-white/85">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="py-24 px-6"
          style={{ background: "linear-gradient(135deg,rgba(109,40,217,0.1) 0%,rgba(79,70,229,0.05) 100%)" }}
        >
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <p className="section-eyebrow justify-center">Your Business</p>
            <h2
              className="text-foreground leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.5rem,6vw,4.5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Want a Site<br />
              <span className="text-muted-foreground">Built Like This?</span>
            </h2>
            <p className="text-lg font-light text-white/85 max-w-xl">
              Send me your current site or Google Business Profile link. I will send back a
              free written audit showing what is helping, what is hurting, and what I would fix first.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className={cn(buttonVariants({ size: "lg" }), "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 gap-2 h-11 px-6")}
              >
                Get a Free Audit <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/#work"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-transparent text-foreground border-white/10 hover:bg-violet-900/20 hover:border-violet-500/40 h-11 px-6")}
              >
                <ArrowLeft size={15} /> Back to Work
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
