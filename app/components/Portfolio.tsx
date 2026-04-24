"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GlobeSimple, Check } from "@phosphor-icons/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const tags = ["Custom Build", "Mobile-First", "SEO Setup", "Fast Load Times", "Direct Builder"];
const results = [
  { value: "0",    label: "Templates Used"     },
  { value: "5",    label: "Core Pages Built"   },
  { value: "SEO",  label: "Foundation Setup"   },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-28 px-6 overflow-hidden" style={{ background: "#08080F" }}>
      <Separator className="max-w-6xl mx-auto mb-28 opacity-30" />
      {/* Right-side glow */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 30%, rgba(79,70,229,0.09) 0%, transparent 65%)" }} />
      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">Recent Work</p>
          <h2
            className="text-foreground leading-none mb-5"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem,6vw,4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Built to Rank.<br />
            <span className="text-muted-foreground">Proven in the Field.</span>
          </h2>
          <p className="text-xl font-light leading-relaxed text-white/90 max-w-2xl tracking-wide">
            One project. Zero templates. Every detail built from scratch.
          </p>
        </motion.div>

        {/* Case study card — GSAP scale-up reveal + Framer Motion hover */}
        <ScrollReveal animation="scaleUp">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
          <Card className="rounded-2xl border-white/7 bg-card hover:border-violet-700/30 hover:shadow-[0_24px_48px_-16px_rgba(109,40,217,0.18)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden transition-[border-color,box-shadow] duration-300">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">

                {/* Visual panel */}
                <div
                  className="relative lg:w-[52%] min-h-[280px] lg:min-h-[480px] overflow-hidden"
                  style={{ background: "linear-gradient(145deg,#0D0D20 0%,#1A0A30 100%)" }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 80% 60% at 30% 40%,rgba(109,40,217,0.28) 0%,transparent 65%)" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Browser mockup */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div
                      className="w-full max-w-[420px] rounded-xl overflow-hidden"
                      style={{
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow: "0 32px 64px -16px rgba(0,0,0,0.8),inset 0 1px 0 rgba(255,255,255,0.08)",
                      }}
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
                          className="flex-1 mx-2 rounded-md px-3 py-1 flex items-center gap-1.5"
                          style={{ background: "#242436" }}
                        >
                          <GlobeSimple size={10} className="text-muted-foreground" />
                          <span className="text-[0.6rem] text-muted-foreground">peelexcavationservices.netlify.app</span>
                        </div>
                      </div>
                      <div style={{ background: "#080810" }}>
                        <picture>
                          <source srcSet="/peel-excavation-preview.avif" type="image/avif" />
                          <source srcSet="/peel-excavation-preview.jpg" type="image/jpeg" />
                          <img
                            src="/peel-excavation-preview.jpg"
                            alt="Peel Excavation Services website — custom Next.js site built for a Brampton excavation contractor"
                            width={840}
                            height={432}
                            loading="lazy"
                            decoding="async"
                            className="w-full object-cover object-top"
                            style={{ maxHeight: "220px" }}
                          />
                        </picture>
                      </div>
                    </div>
                  </div>

                  {/* Live badge */}
                  <a
                    href="https://peelexcavationservices.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-5 right-5"
                  >
                    <Badge
                      variant="outline"
                      className="border-white/12 bg-white/8 text-foreground backdrop-blur-sm gap-1.5 py-1 px-3 hover:bg-white/12 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                      Live Site
                      <ArrowUpRight size={11} weight="bold" />
                    </Badge>
                  </a>
                </div>

                {/* Details panel */}
                <div className="lg:w-[48%] p-8 lg:p-12 flex flex-col gap-6 justify-center">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-violet-400">
                      Case Study: 01
                    </span>
                    <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-foreground">
                      Peel Excavation Services
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Excavation & Demolition Website
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-white/90">
                    Full custom website for a new excavation contractor with zero online
                    presence. Built from scratch, SEO-ready from day one, and launched as
                    a custom static site. No templates. No shortcuts.
                  </p>

                  <blockquote className="rounded-xl border border-violet-500/20 bg-violet-950/15 px-4 py-3 text-sm leading-relaxed text-white/82">
                    &ldquo;The new website made our excavation company look a lot more
                    professional and credible.&rdquo;
                  </blockquote>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {results.map(({ value, label }) => (
                      <Card key={label} className="rounded-xl border-white/7 bg-[#141426] shadow-none">
                        <CardContent className="p-3 text-center">
                          <p
                            className="text-xl font-bold text-violet-300"
                            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em" }}
                          >
                            {value}
                          </p>
                          <p className="text-xs mt-0.5 text-muted-foreground">{label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Separator className="opacity-30" />

                  {/* Checklist */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {[
                      "Fast-loading on any phone",
                      "Video hero with scroll animations",
                      "Contact form emailing client directly",
                      "Google Business Profile guidance",
                      "Schema, sitemap, on-page SEO",
                      "Custom build, zero templates",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check size={12} weight="bold" className="text-violet-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/10 bg-white/4 text-muted-foreground text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://peelexcavationservices.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants(), "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-9 px-4 active:scale-[0.98]")}
                    >
                      View Live Site <ArrowUpRight size={15} weight="bold" />
                    </a>
                    <a
                      href="/proof/peel-excavation"
                      className={cn(buttonVariants({ variant: "outline" }), "bg-transparent text-foreground border-white/10 hover:bg-violet-900/20 hover:border-violet-500/40 gap-2 h-9 px-4 active:scale-[0.98]")}
                    >
                      Full Case Study <ArrowUpRight size={15} weight="bold" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </ScrollReveal>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          More projects launching soon.{" "}
          <a href="#contact" className="text-violet-400 underline underline-offset-2">
            Yours could be next.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
