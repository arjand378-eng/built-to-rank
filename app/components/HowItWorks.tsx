"use client";

import { motion } from "framer-motion";
import { ChatCircle, PaintBrush, MagnifyingGlass } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    number: "01",
    icon: <ChatCircle size={28} weight="duotone" />,
    title: "Tell Me Your Trade",
    body: "We talk about your business, your city, and who you want to beat on Google. No jargon, no pressure. Usually 15 minutes.",
  },
  {
    number: "02",
    icon: <PaintBrush size={28} weight="duotone" />,
    title: "I Build Your Site",
    body: "Built from scratch around your trade. You see it before it goes live and I make changes until you're happy. Most sites are live within 47 days.",
  },
  {
    number: "03",
    icon: <MagnifyingGlass size={28} weight="duotone" />,
    title: "Your Phone Starts Ringing",
    body: "Full SEO setup built in from day one. When someone Googles your trade in your city, you show up. That's the whole point.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ background: "#08080F" }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(109,40,217,0.07) 0%, transparent 70%)" }}
      />
      <Separator className="max-w-6xl mx-auto mb-16 opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">The Process</p>
          <h2
            className="text-foreground leading-none mb-5"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem,6vw,4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Simple as<br />
            <span className="text-muted-foreground">1, 2, 3.</span>
          </h2>
          <p className="text-xl font-light leading-relaxed text-white/90 max-w-2xl tracking-wide">
            No confusing packages. No surprises. Just a clear path from where you are to a website that brings in work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ number, icon, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 90, damping: 20 }}
              className="relative rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "#0F0F1C",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Step number — large background */}
              <span
                className="absolute top-6 right-7 font-bold select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "5rem",
                  lineHeight: 1,
                  color: "rgba(109,40,217,0.08)",
                  letterSpacing: "0.02em",
                }}
              >
                {number}
              </span>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-violet-300"
                style={{ background: "rgba(109,40,217,0.12)", border: "1px solid rgba(109,40,217,0.25)" }}
              >
                {icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-white/85">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
