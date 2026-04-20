"use client";

import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "#080810" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(109,40,217,0.07) 0%, transparent 70%)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 18 }}
          className="flex flex-col gap-2"
        >
          <p
            className="text-foreground leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3.2rem,9vw,8rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.95,
            }}
          >
            Built for trades.
          </p>
          <p
            className="leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3.2rem,9vw,8rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.95,
              color: "rgba(255,255,255,0.18)",
            }}
          >
            Built to rank.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, type: "spring", stiffness: 70, damping: 18 }}
          className="mt-8 text-lg text-white/55 max-w-[52ch] leading-relaxed"
        >
          One developer. Direct access. No agencies, no middlemen, no templates.
          A custom site that gets your trade found on Google — in 47 days.
        </motion.p>
      </div>
    </section>
  );
}
