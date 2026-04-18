"use client";

import { motion, type Variants } from "framer-motion";
import { Monitor, MagnifyingGlass, ArrowCircleRight, Check } from "@phosphor-icons/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">What We Build</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                color: "var(--text)",
              }}
            >
              Everything a Trades<br />Business Needs Online.
            </h2>
            <p className="max-w-xs text-sm leading-relaxed md:text-right" style={{ color: "var(--muted-lt)" }}>
              Website. SEO. Ongoing support.<br />We handle the digital side so you can handle the job.
            </p>
          </div>
        </motion.div>

        {/* ── Asymmetric grid ─────────────────────────────────── */}
        {/* Row 1: large card (web design) + smaller card (SEO) */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5"
        >
          {/* Web Design — spans 3 cols */}
          <motion.div
            variants={fadeUp}
            className="card card-hover md:col-span-3 p-8 flex flex-col gap-6"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <div className="flex items-start justify-between">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
              >
                <Monitor size={22} weight="duotone" style={{ color: "#A78BFA" }} />
              </div>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(109,40,217,0.12)", color: "#A78BFA", border: "1px solid var(--border-accent)" }}
              >
                Most Popular
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
                Website Design & Development
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-lt)" }}>
                Custom Next.js sites built mobile-first. Fast, animated,
                production-quality — designed to turn visitors into booked jobs.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Mobile-first, fully responsive",
                "GSAP & Framer Motion animations",
                "Contact form with email delivery",
                "Deployed & live in days",
                "SEO-ready from day one",
                "Free revisions included",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-lt)" }}>
                  <Check size={14} weight="bold" style={{ color: "#6D28D9", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary self-start mt-auto">
              Start a Project <ArrowCircleRight size={18} weight="bold" />
            </a>
          </motion.div>

          {/* SEO — spans 2 cols */}
          <motion.div
            variants={fadeUp}
            className="card card-hover md:col-span-2 p-8 flex flex-col gap-6"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
            >
              <MagnifyingGlass size={22} weight="duotone" style={{ color: "#A78BFA" }} />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
                SEO Setup & Optimization
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-lt)" }}>
                Get found when locals search for your trade. We handle the technical side so you rank on Google.
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {[
                "Google Business Profile guidance",
                "Schema markup & sitemap",
                "On-page keyword optimization",
                "robots.txt & meta tags",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-lt)" }}>
                  <Check size={14} weight="bold" style={{ color: "#6D28D9", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-ghost self-start mt-auto">
              Boost My Rankings
            </a>
          </motion.div>
        </motion.div>

        {/* Row 2: Full-width retainer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="card card-hover p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <div className="flex items-start gap-5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
            >
              <ArrowCircleRight size={22} weight="duotone" style={{ color: "#A78BFA" }} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
                Monthly Retainer
              </h3>
              <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted-lt)" }}>
                Your site stays fast, fresh, and climbing the rankings. Monthly updates, SEO monitoring,
                speed checks, and priority support — all handled.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            {["Monthly Updates", "SEO Monitoring", "Priority Support"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--muted-lt)" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <a href="#contact" className="btn btn-ghost shrink-0">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
