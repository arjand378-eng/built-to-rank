"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, Code, MagnifyingGlass } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const btnPrimary = cn(
  buttonVariants({ size: "lg" }),
  "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-11 px-6 active:scale-[0.98]"
);

const btnGhost = cn(
  buttonVariants({ variant: "ghost", size: "lg" }),
  "text-white/80 hover:text-white hover:bg-white/5 gap-2 h-11 px-5"
);

const proofPoints = [
  {
    icon: Rocket,
    label: "Shipped as a real site",
    note: "Discovery, custom build, and launch. No templates.",
  },
  {
    icon: Code,
    label: "Built on Next.js",
    note: "GSAP scroll, Framer Motion, custom components.",
  },
  {
    icon: MagnifyingGlass,
    label: "Local SEO Setup",
    note: "Schema, sitemap, GBP guidance, on-page keywords.",
  },
];

const clientQuote =
  "The new website made our excavation company look a lot more professional and credible. It gave customers a clear place to see our services, learn about our work, and contact us easily. Since getting the site live and improving our Google presence with SEO, we've seen more traffic and better visibility online. It's helped us stand out as a serious business and has brought more attention to our company.";

export default function Testimonials() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg,#0A0A14 0%,#080810 60%,#0B0A16 100%)" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,40,217,0.07) 0%, transparent 70%)",
        }}
      />
      <Separator className="max-w-6xl mx-auto mb-16 opacity-30" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow justify-center mb-4">Proof</p>
          <h2
            className="text-foreground leading-none mb-5"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem,6vw,4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Built. Shipped.<br />
            <span className="text-muted-foreground">Search Ready.</span>
          </h2>
          <p className="text-lg font-light leading-relaxed text-white/90 max-w-2xl mx-auto tracking-wide">
            One live project in the trades space. Full Next.js build, SEO-ready from
            day one, deployed and running. The work speaks for itself.
          </p>
        </motion.div>

        {/* Proof points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {proofPoints.map(({ icon: Icon, label, note }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 90, damping: 20 }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: "rgba(109,40,217,0.08)",
                border: "1px solid rgba(109,40,217,0.25)",
              }}
            >
              <Icon size={22} weight="duotone" className="text-violet-300" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">{label}</p>
                <p className="text-sm text-white/85 leading-relaxed">{note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Builder statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="rounded-2xl p-8 md:p-10 mb-10"
          style={{
            background: "#0F0F1C",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <p className="text-sm font-semibold text-violet-400 tracking-widest uppercase mb-5">
            From the builder
          </p>
          <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            &ldquo;I built peelexcavationservices.netlify.app for an excavation
            crew. Cinematic video hero, GSAP scroll animations, full SEO
            setup, deployed as a static site. It&apos;s live, mobile-optimized, and ready for local search.
            That&apos;s the quality I bring to every trades business I work with.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
              A
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Arjan Dhillon</p>
              <p className="text-xs text-white/60">Founder, Built to Rank</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="rounded-2xl p-8 md:p-10 mb-10"
          style={{
            background: "rgba(109,40,217,0.06)",
            border: "1px solid rgba(109,40,217,0.25)",
          }}
        >
          <p className="text-sm font-semibold text-violet-400 tracking-widest uppercase mb-5">
            What the client said
          </p>
          <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            &ldquo;{clientQuote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-sm">
              PE
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Peel Excavation Services</p>
              <p className="text-xs text-white/60">Excavation & demolition contractor</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <a
            href="https://peelexcavationservices.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
          >
            See the live project <ArrowRight size={16} weight="bold" />
          </a>
          <a href="#contact" className={btnGhost}>
            Start your project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
