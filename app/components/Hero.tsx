"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, GoogleLogo } from "@phosphor-icons/react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

const btnPrimary = cn(
  buttonVariants({ size: "lg" }),
  "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-11 px-6 active:scale-[0.98]"
);
const btnOutline = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "bg-transparent text-foreground border-white/10 hover:bg-violet-900/20 hover:border-violet-500/40 h-11 px-6 active:scale-[0.98]"
);

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.55 }}
      >
        <source src="/3d-tech.mp4" type="video/mp4" />
      </video>

      {/* Inward vignette mask — fades video into page bg on all edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 85% 80% at 50% 50%,
              transparent 20%,
              rgba(10,10,18,0.55) 60%,
              rgba(10,10,18,0.92) 80%,
              #0A0A12 100%
            )
          `,
        }}
      />

      {/* Hard edge fade at top and bottom so section blends into navbar/next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0A0A12 0%, transparent 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0A0A12 0%, transparent 100%)" }}
      />

      {/* Subtle violet centre glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 48%, rgba(109,40,217,0.14) 0%, transparent 70%)" }}
      />

      {/* Content — centred */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl px-6 pt-24 pb-16"
      >
        <motion.div variants={fadeUp}>
          <Badge
            variant="outline"
            className="border-violet-700/40 bg-violet-900/20 text-violet-300 text-[0.68rem] tracking-[0.14em] uppercase px-3 py-1 rounded-full"
          >
            Web Design + SEO &middot; Peel Region &amp; GTA
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="leading-none text-foreground"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3.4rem,8vw,6.5rem)",
            letterSpacing: "0.02em",
          }}
        >
          Websites That{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#A78BFA 0%,#818CF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Rank.
          </span>
          <br />Clients That Call.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg leading-relaxed max-w-[50ch] text-white/80"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
        >
          We build custom, fast websites for plumbers, roofers, landscapers, and
          contractors in Peel Region. Then we rank them on Google so the phone rings.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-1">
          <motion.a
            href="#contact"
            className={btnPrimary}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Get a Free Quote <ArrowRight size={16} weight="bold" />
          </motion.a>
          <motion.a
            href="#work"
            className={btnOutline}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            See Our Work
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center items-center gap-3 pt-2 px-5 py-3 rounded-full"
          style={{
            background: "rgba(10,10,18,0.55)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <div className="flex">{[0,1,2,3,4].map((i) => <Star key={i} size={12} weight="fill" color="#FBBF24" />)}</div>
            <span className="text-xs font-semibold text-white/75">5.0 Google Rating</span>
          </div>
          <Separator orientation="vertical" className="h-3.5 opacity-25" />
          <div className="flex items-center gap-1.5">
            <GoogleLogo size={13} weight="bold" style={{ color: "#4285F4" }} />
            <span className="text-xs font-semibold text-white/75">Page 1 Ranked, GTA</span>
          </div>
          <Separator orientation="vertical" className="h-3.5 opacity-25" />
          <span className="text-xs font-semibold text-white/75">Serving Peel Region</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom,var(--violet),transparent)" }}
        />
        <span className="text-[0.62rem] tracking-[0.15em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
