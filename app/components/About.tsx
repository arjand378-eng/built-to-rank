"use client";

import { motion } from "framer-motion";
import { MapPin, Code, TrendUp, ArrowRight } from "@phosphor-icons/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const skills = [
  { icon: <Code size={15} weight="duotone" />,    label: "Next.js & React"       },
  { icon: <TrendUp size={15} weight="duotone" />, label: "SEO & Google Rankings" },
  { icon: <MapPin size={15} weight="duotone" />,  label: "GTA & Ontario"        },
];
const stats = [
  { value: "1",    label: "Site Live"         },
  { value: "100%", label: "On-Time Delivery"  },
  { value: "GTA",  label: "Based & Available" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden" style={{ background: "linear-gradient(160deg, #0B0B14 0%, #090910 50%, #0A0C16 100%)" }}>
      {/* Left-side violet glow */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 40%, rgba(109,40,217,0.08) 0%, transparent 65%)" }} />
      <Separator className="max-w-6xl mx-auto mb-28 opacity-30" />
      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-4">About</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <ScrollReveal animation="slideLeft">
          <div className="flex flex-col gap-7">
            <h2
              className="text-foreground leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.8rem,5.5vw,4.2rem)",
                letterSpacing: "0.02em",
              }}
            >
              Hi. I&apos;m Arjan.<br />
              <span className="text-muted-foreground">I Build Websites That</span><br />
              Work For Trades.
            </h2>

            <p className="text-base leading-relaxed max-w-[52ch] text-white/85">
              I build production-quality websites for trades businesses across Peel
              Region and the GTA. My first client was a friend&apos;s uncle running an
              excavation company in Brampton. That project showed me how much a real
              website changes the game for local trades.
            </p>
            <p className="text-base leading-relaxed max-w-[52ch] text-white/85">
              No templates. No agencies with 20 middlemen. Just a developer who
              understands the local trades niche and builds sites that actually get
              found on Google.
            </p>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {skills.map(({ icon, label }) => (
                <Badge
                  key={label}
                  variant="outline"
                  className="border-white/10 bg-card text-muted-foreground text-xs gap-1.5 py-1.5 px-3"
                >
                  <span className="text-violet-400">{icon}</span>
                  {label}
                </Badge>
              ))}
            </div>

            <a
              href="#contact"
              className={cn(buttonVariants(), "self-start bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-9 px-4 active:scale-[0.98]")}
            >
              Work With Me <ArrowRight size={15} weight="bold" />
            </a>
          </div>
          </ScrollReveal>

          {/* Right: cards */}
          <ScrollReveal animation="slideRight" delay={0.12}>
          <div className="flex flex-col gap-5">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ value, label }) => (
                <Card key={label} className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <CardContent className="p-5 text-center">
                    <p
                      className="leading-none"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "2.2rem",
                        letterSpacing: "0.04em",
                        background: "linear-gradient(135deg,#A78BFA,#818CF8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {value}
                    </p>
                    <p className="text-xs mt-1.5 text-muted-foreground">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Who I work with */}
            <Card
              className="rounded-2xl border-violet-700/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              style={{ background: "linear-gradient(145deg,rgba(109,40,217,0.08),rgba(79,70,229,0.05))" }}
            >
              <CardContent className="p-7 flex flex-col gap-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-violet-400">
                  Who I Work With
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["Plumbers","Roofers","Landscapers","Excavators","HVAC Contractors","Painters"].map((trade) => (
                    <div key={trade} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={12} weight="fill" className="text-violet-400 shrink-0" />
                      {trade}
                    </div>
                  ))}
                </div>
                <Separator className="opacity-20" />
                <p className="text-xs text-muted-foreground">
                  Serving Brampton, Mississauga, Vaughan & the GTA.
                </p>
              </CardContent>
            </Card>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
