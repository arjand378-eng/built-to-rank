"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, GoogleLogo } from "@phosphor-icons/react";

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
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col md:flex-row overflow-hidden">

      {/* ── LEFT PANEL ─────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-16 md:py-0 md:w-[54%] lg:w-[52%]">

        {/* Background glow behind left panel */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 0% 50%, rgba(109,40,217,0.12) 0%, transparent 70%)",
          }}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative flex flex-col gap-6 max-w-xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <span className="label-chip">
              Web Design + SEO — Peel Region &amp; GTA
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3.2rem, 7vw, 5.8rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: "var(--text)",
            }}
          >
            Websites That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA 0%, #818CF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Rank.
            </span>
            <br />
            Clients That Call.
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-relaxed max-w-[52ch]"
            style={{ color: "var(--muted-lt)" }}
          >
            We build custom, fast websites for plumbers, roofers, landscapers,
            and contractors in Peel Region — then rank them on Google so the
            phone rings.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-1">
            <a href="#contact" className="btn btn-primary">
              Get a Free Quote <ArrowRight size={16} weight="bold" />
            </a>
            <a href="#work" className="btn btn-ghost">
              See Our Work
            </a>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-6 pt-2"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={14} weight="fill" color="#FBBF24" />
                ))}
              </div>
              <span className="text-xs font-medium" style={{ color: "var(--muted-lt)" }}>
                5.0 on Google
              </span>
            </div>
            <div
              className="h-4 w-px"
              style={{ background: "var(--border)" }}
            />
            <div className="flex items-center gap-2">
              <GoogleLogo size={16} weight="bold" style={{ color: "#4285F4" }} />
              <span className="text-xs font-medium" style={{ color: "var(--muted-lt)" }}>
                Ranked in Peel Region
              </span>
            </div>
            <div
              className="h-4 w-px"
              style={{ background: "var(--border)" }}
            />
            <span className="text-xs font-medium" style={{ color: "var(--muted-lt)" }}>
              GTA-based. Fast turnaround.
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL ────────────────────────────────── */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="relative md:w-[46%] lg:w-[48%] min-h-[380px] md:min-h-0 flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #0F0F20 0%, #0A0A16 50%, #12082A 100%)",
          borderLeft: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 60% 40%, rgba(109,40,217,0.22) 0%, transparent 70%)",
            animation: "pulse-glow 5s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
          style={{
            background: "rgba(79,70,229,0.18)",
            animation: "float-slow 8s ease-in-out infinite",
          }}
        />

        {/* Grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Browser mockup card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.5 }}
          className="relative z-10 w-[85%] max-w-[360px]"
          style={{ animation: "float-slow 7s ease-in-out infinite" }}
        >
          {/* Browser chrome */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow:
                "0 40px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Top bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: "#1A1A2E", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <div
                className="flex-1 mx-2 rounded-md px-3 py-1 text-xs"
                style={{ background: "#242436", color: "var(--muted)", fontSize: "0.65rem" }}
              >
                peelexcavationservices.netlify.app
              </div>
            </div>

            {/* Fake website layout */}
            <div
              className="p-4 flex flex-col gap-3"
              style={{ background: "#0D0D1A" }}
            >
              {/* Hero row */}
              <div className="flex gap-2">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="h-2 rounded-full w-3/4" style={{ background: "rgba(139,92,246,0.6)" }} />
                  <div className="h-1.5 rounded-full w-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <div className="h-1.5 rounded-full w-2/3" style={{ background: "rgba(255,255,255,0.07)" }} />
                  <div className="mt-1 flex gap-1.5">
                    <div className="h-5 w-16 rounded" style={{ background: "linear-gradient(135deg,#6D28D9,#4F46E5)" }} />
                    <div className="h-5 w-12 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
                  </div>
                </div>
                <div className="w-20 h-20 rounded-lg" style={{ background: "rgba(109,40,217,0.25)" }} />
              </div>

              {/* Stats bar */}
              <div
                className="flex gap-2 rounded-lg p-2"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {["47 Leads", "↑ Pg.1", "4.9★"].map((stat) => (
                  <div key={stat} className="flex-1 text-center">
                    <p className="text-xs font-bold" style={{ color: "#A78BFA", fontSize: "0.6rem" }}>{stat}</p>
                  </div>
                ))}
              </div>

              {/* Content rows */}
              {[0.9, 0.7, 0.5].map((opacity, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <div className="w-8 h-8 rounded" style={{ background: `rgba(109,40,217,${opacity * 0.3})`, flexShrink: 0 }} />
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="h-1.5 rounded-full" style={{ background: `rgba(255,255,255,${opacity * 0.12})`, width: `${70 + i * 10}%` }} />
                    <div className="h-1.5 rounded-full" style={{ background: `rgba(255,255,255,${opacity * 0.07})`, width: `${50 + i * 8}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating rank badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 1 }}
            className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
            style={{
              background: "linear-gradient(135deg, #6D28D9, #4F46E5)",
              boxShadow: "0 8px 24px -6px rgba(109,40,217,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
              color: "#fff",
              fontSize: "0.7rem",
            }}
          >
            <GoogleLogo size={12} weight="bold" />
            Ranked #1 · GTA
          </motion.div>

          {/* Floating "new lead" badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 1.3 }}
            className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
            style={{
              background: "#0F0F1C",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 24px -6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              color: "var(--muted-lt)",
              fontSize: "0.7rem",
            }}
          >
            <span style={{ color: "#34D399" }}>●</span> New lead — Brampton
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-8 md:left-16 lg:left-24 hidden md:flex flex-col items-start gap-2"
        style={{ color: "var(--muted)" }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--violet), transparent)" }}
        />
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
