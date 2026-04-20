"use client";

import { motion, type Variants } from "framer-motion";
import { Monitor, MagnifyingGlass, ArrowCircleRight, Check } from "@phosphor-icons/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ScrollReveal from "./ScrollReveal";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Services() {
  return (
    <section id="services" className="services-gradient-bg relative py-28 px-6 overflow-hidden">
      {/* Drifting violet glow — reinforces the gradient movement */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(109,40,217,0.07) 0%, transparent 70%)",
          animation: "pulse-glow 8s ease-in-out infinite",
        }}
      />
      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">What We Build</p>
          <h2
            className="text-foreground leading-none mb-5"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem,6vw,4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Everything a Trades<br />Business Needs Online.
          </h2>
          <p className="text-xl font-light leading-relaxed text-white/75 max-w-2xl tracking-wide">
            Custom websites. Local SEO. Ongoing support. A complete digital
            presence for trades businesses across the GTA.
          </p>
        </motion.div>

        <Separator className="mb-12 opacity-30" />

        {/* Asymmetric grid: row 1 */}
        <ScrollReveal animation="fadeUp" className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5">
          {/* Web Design — 3 cols */}
          <motion.div
            className="md:col-span-3"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <Card
              className="h-full rounded-2xl border-white/7 bg-card hover:border-violet-700/40 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[border-color,box-shadow] duration-200"
            >
              <CardContent className="p-8 flex flex-col gap-6 h-full">
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                  >
                    <Monitor size={22} weight="duotone" className="text-violet-300" />
                  </div>
                  <Badge
                    variant="outline"
                    className="border-violet-700/40 bg-violet-900/20 text-violet-300 text-[0.68rem] tracking-widest uppercase"
                  >
                    Most Popular
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Website Design & Development</h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    Custom Next.js sites built mobile-first. Fast, animated,
                    production-quality. Designed to turn visitors into booked jobs.
                  </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Mobile-first, looks great on any phone",
                    "Smooth animations — premium feel",
                    "Contact form that emails you directly",
                    "Live and fast in 30–47 days",
                    "SEO-ready from day one",
                    "Free revisions until you're happy",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <Check size={14} weight="bold" className="text-violet-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(buttonVariants(), "self-start mt-auto bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-9 px-4 active:scale-[0.98]")}
                >
                  Start a Project <ArrowCircleRight size={16} weight="bold" />
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* SEO — 2 cols */}
          <motion.div
            className="md:col-span-2"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <Card
              className="h-full rounded-2xl border-white/7 bg-card hover:border-violet-700/40 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[border-color,box-shadow] duration-200"
            >
              <CardContent className="p-8 flex flex-col gap-6 h-full">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                >
                  <MagnifyingGlass size={22} weight="duotone" className="text-violet-300" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">SEO Setup & Optimization</h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    Get found when locals search for your trade. We handle the
                    technical side so you rank on Google.
                  </p>
                </div>

                <ul className="flex flex-col gap-2">
                  {[
                    "Google Business Profile guidance",
                    "Schema markup & sitemap",
                    "On-page keyword optimization",
                    "robots.txt & meta tags",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <Check size={14} weight="bold" className="text-violet-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(buttonVariants({ variant: "outline" }), "self-start mt-auto bg-transparent text-foreground border-white/10 hover:bg-violet-900/20 hover:border-violet-500/40 h-9 px-4 active:scale-[0.98]")}
                >
                  Boost My Rankings
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>

        {/* Row 2: full-width retainer */}
        <ScrollReveal animation="slideLeft" delay={0.1}>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
          <Card
            className="rounded-2xl border-white/7 bg-card hover:border-violet-700/40 hover:shadow-[0_20px_40px_-15px_rgba(109,40,217,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[border-color,box-shadow] duration-200"
          >
            <CardContent className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                >
                  <ArrowCircleRight size={22} weight="duotone" className="text-violet-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">Monthly Retainer</h3>
                  <p className="text-sm leading-relaxed max-w-xl text-muted-foreground">
                    Your site stays fast, fresh, and climbing the rankings. Monthly
                    updates, SEO monitoring, speed checks, and priority support. All handled.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                {["Monthly Updates", "SEO Monitoring", "Priority Support"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-white/10 bg-white/4 text-muted-foreground text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "outline" }), "shrink-0 bg-transparent text-foreground border-white/10 hover:bg-violet-900/20 hover:border-violet-500/40 h-9 px-4 active:scale-[0.98]")}
              >
                Learn More
              </a>
            </CardContent>
          </Card>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>

  );
}
