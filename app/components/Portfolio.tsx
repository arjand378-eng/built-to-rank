"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GlobeSimple, Check } from "@phosphor-icons/react";

const tags = ["Next.js", "GSAP", "Framer Motion", "Nodemailer", "Netlify", "SEO"];

const results = [
  { value: "47", label: "Days to Launch" },
  { value: "Pg.1", label: "Google Ranking" },
  { value: "4.9★", label: "Client Rating" },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">Recent Work</p>
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
              Built to Rank.<br />
              <span style={{ color: "var(--muted)" }}>Proven in the Field.</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed md:text-right" style={{ color: "var(--muted-lt)" }}>
              One project. Zero templates.<br />
              Every detail built from scratch.
            </p>
          </div>
        </motion.div>

        {/* Case study card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="card overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Left: visual */}
            <div
              className="relative lg:w-[52%] min-h-[280px] lg:min-h-[480px] overflow-hidden"
              style={{ background: "linear-gradient(145deg, #0D0D20 0%, #1A0A30 100%)" }}
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(109,40,217,0.28) 0%, transparent 65%)",
                }}
              />

              {/* Grid */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Browser mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div
                  className="w-full max-w-[420px] rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 32px 64px -16px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Browser chrome */}
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
                      className="flex-1 mx-2 rounded-md px-3 py-1 flex items-center gap-1.5"
                      style={{ background: "#242436" }}
                    >
                      <GlobeSimple size={10} style={{ color: "#64748B" }} />
                      <span style={{ fontSize: "0.6rem", color: "var(--muted)" }}>
                        peelexcavationservices.netlify.app
                      </span>
                    </div>
                  </div>

                  {/* Site preview: fake excavation site */}
                  <div style={{ background: "#080810" }}>
                    {/* Video hero bar */}
                    <div
                      className="relative h-28 flex items-center px-4"
                      style={{ background: "linear-gradient(135deg,#0A0A14,#1A0820)" }}
                    >
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: "repeating-linear-gradient(45deg,rgba(139,92,246,0.05) 0,rgba(139,92,246,0.05) 2px,transparent 2px,transparent 12px)",
                        }}
                      />
                      <div className="relative z-10 flex flex-col gap-1.5">
                        <div className="h-2.5 w-32 rounded-full" style={{ background: "rgba(255,255,255,0.85)" }} />
                        <div className="h-1.5 w-20 rounded-full" style={{ background: "rgba(255,255,255,0.4)" }} />
                        <div className="mt-2 flex gap-1.5">
                          <div className="h-4 w-14 rounded" style={{ background: "linear-gradient(135deg,#6D28D9,#4F46E5)" }} />
                          <div className="h-4 w-12 rounded" style={{ background: "rgba(255,255,255,0.1)" }} />
                        </div>
                      </div>
                    </div>
                    {/* Services row */}
                    <div className="flex gap-2 p-3">
                      {["Excavation", "Demolition", "Grading"].map((s, i) => (
                        <div
                          key={s}
                          className="flex-1 rounded-lg p-2 flex flex-col gap-1"
                          style={{ background: i === 0 ? "rgba(109,40,217,0.2)" : "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          <div className="h-1.5 rounded-full w-full" style={{ background: "rgba(255,255,255,0.25)" }} />
                          <div className="h-1.5 rounded-full w-2/3" style={{ background: "rgba(255,255,255,0.1)" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Live link badge */}
              <a
                href="https://peelexcavationservices.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--text)",
                  backdropFilter: "blur(8px)",
                  transition: "background 0.2s",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#34D399", boxShadow: "0 0 6px #34D399" }}
                />
                Live Site
                <ArrowUpRight size={11} weight="bold" />
              </a>
            </div>

            {/* Right: details */}
            <div className="lg:w-[48%] p-8 lg:p-12 flex flex-col gap-6 justify-center">
              <div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "var(--violet-lt)" }}
                >
                  Case Study — 01
                </span>
                <h3
                  className="mt-2 text-2xl lg:text-3xl font-bold"
                  style={{ color: "var(--text)" }}
                >
                  Peel Excavation Services
                </h3>
                <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                  Excavation & Demolition — Brampton, Ontario
                </p>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-lt)" }}>
                A full custom Next.js website with cinematic video hero, GSAP
                word reveal animations, parallax scroll, and a Framer Motion
                entrance flow — deployed in under 47 days with full SEO setup
                from day one.
              </p>

              {/* Result stats */}
              <div className="grid grid-cols-3 gap-3">
                {results.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-xl p-3 text-center"
                    style={{ background: "var(--bg-raised)", border: "1px solid var(--border)" }}
                  >
                    <p
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        color: "var(--violet-lt)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{label}</p>
                  </div>
                ))}
              </div>

              {/* Feature checklist */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {[
                  "GSAP Scroll Animations",
                  "Cinematic Video Hero",
                  "Framer Motion Entrances",
                  "Contact Form + Nodemailer",
                  "Full SEO (schema, sitemap, OG)",
                  "Deployed on Netlify",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "var(--muted-lt)" }}>
                    <Check size={12} weight="bold" style={{ color: "#6D28D9", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: "var(--bg-raised)", border: "1px solid var(--border)", color: "var(--muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://peelexcavationservices.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary self-start"
              >
                View Live Site <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* "More coming" note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center text-sm"
          style={{ color: "var(--muted)" }}
        >
          More projects launching soon.{" "}
          <a href="#contact" style={{ color: "var(--violet-lt)" }} className="underline underline-offset-2">
            Yours could be next.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
