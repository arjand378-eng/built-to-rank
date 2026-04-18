"use client";

import { motion } from "framer-motion";
import { MapPin, Code, TrendUp, ArrowRight } from "@phosphor-icons/react";

const skills = [
  { icon: <Code size={16} weight="duotone" />,   label: "Next.js & React"       },
  { icon: <TrendUp size={16} weight="duotone" />, label: "SEO & Google Rankings" },
  { icon: <MapPin size={16} weight="duotone" />,  label: "GTA & Peel Region"     },
];

const stats = [
  { value: "2",   label: "Sites Deployed"    },
  { value: "100%", label: "Client Satisfaction" },
  { value: "GTA", label: "Based & Available"  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-4">About</p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="flex flex-col gap-7"
          >
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                color: "var(--text)",
              }}
            >
              Hi. I&apos;m Arjan —<br />
              <span style={{ color: "var(--muted)" }}>I Build Websites That</span>
              <br />Work For Trades.
            </h2>

            <p className="text-sm leading-relaxed max-w-[52ch]" style={{ color: "var(--muted-lt)" }}>
              I&apos;m a GTA-based developer who builds production-quality websites for
              trades businesses in Peel Region. I got into this after building a
              full custom site for a friend&apos;s uncle who runs an excavation company in
              Brampton — and saw how much of a difference a real website makes.
            </p>
            <p className="text-sm leading-relaxed max-w-[52ch]" style={{ color: "var(--muted-lt)" }}>
              The pitch is simple: I build you a fast, modern website and set it
              up to rank on Google. No templates. No agencies with 20 middlemen.
              Just a developer who gets the local trades niche and delivers
              something you can be proud of.
            </p>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {skills.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-xl"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--muted-lt)",
                  }}
                >
                  <span style={{ color: "var(--violet-lt)" }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary self-start">
              Work With Me <ArrowRight size={16} weight="bold" />
            </a>
          </motion.div>

          {/* Right: card with stats + "who I work with" */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="card p-5 text-center"
                >
                  <p
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "2.2rem",
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                      background: "linear-gradient(135deg,#A78BFA,#818CF8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-xs mt-1.5" style={{ color: "var(--muted)" }}>{label}</p>
                </div>
              ))}
            </div>

            {/* "Who I work with" card */}
            <div
              className="card p-7 flex flex-col gap-4"
              style={{
                background: "linear-gradient(145deg, rgba(109,40,217,0.08), rgba(79,70,229,0.05))",
                borderColor: "var(--border-accent)",
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--violet-lt)" }}>
                Who I Work With
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Plumbers", "Roofers", "Landscapers",
                  "Excavators", "HVAC Contractors", "Painters",
                ].map((trade) => (
                  <div key={trade} className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-lt)" }}>
                    <MapPin size={12} weight="fill" style={{ color: "var(--violet-lt)", flexShrink: 0 }} />
                    {trade}
                  </div>
                ))}
              </div>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                Serving Brampton, Mississauga, Caledon & surrounding Peel Region.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
