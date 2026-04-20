"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1",    label: "Site Launched",        sub: "and counting"         },
  { value: "47",   label: "Days to Go Live",       sub: "start to launch"      },
  { value: "Pg.1", label: "Google Ranking",        sub: "for our first client" },
  { value: "100%", label: "Custom Built",          sub: "zero templates"       },
];

export default function StatsBar() {
  return (
    <section
      className="py-16 px-6"
      style={{ background: "#07070E" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ value, label, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 80, damping: 18 }}
            className="relative flex flex-col items-center text-center px-6 py-10 rounded-2xl overflow-hidden"
            style={{
              background: "#0D0D1C",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(109,40,217,0.12) 0%, transparent 70%)" }}
            />
            <span
              className="relative text-foreground leading-none mb-3"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.8rem,8vw,6.5rem)",
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              {value}
            </span>
            <span className="relative text-sm font-bold text-white/90 tracking-wide uppercase mb-1">
              {label}
            </span>
            <span className="relative text-xs text-white/35 tracking-wide">
              {sub}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
