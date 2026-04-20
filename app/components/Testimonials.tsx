"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const btnPrimary = cn(
  buttonVariants({ size: "lg" }),
  "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-11 px-6 active:scale-[0.98]"
);

const spots = [
  { taken: true,  label: "Spot 1", note: "Peel Excavation Services — Brampton, ON" },
  { taken: false, label: "Spot 2", note: "Available" },
  { taken: false, label: "Spot 3", note: "Available" },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ background: "linear-gradient(160deg,#0A0A14 0%,#080810 60%,#0B0A16 100%)" }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,40,217,0.07) 0%, transparent 70%)" }}
      />
      <Separator className="max-w-6xl mx-auto mb-28 opacity-30" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow justify-center mb-4">Founding Clients</p>
          <h2
            className="text-foreground leading-none mb-5"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem,6vw,4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Taking 3 Clients<br />
            <span className="text-muted-foreground">At a Launch Rate.</span>
          </h2>
          <p className="text-lg font-light leading-relaxed text-white/75 max-w-2xl mx-auto tracking-wide">
            I&apos;m building my portfolio. In exchange, the first 3 trades businesses
            get a full custom website and SEO setup at a discounted founding rate.
          </p>
        </motion.div>

        {/* Spots */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {spots.map(({ taken, label, note }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 90, damping: 20 }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: taken ? "rgba(109,40,217,0.08)" : "#0F0F1C",
                border: taken ? "1px solid rgba(109,40,217,0.35)" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: taken ? "#A78BFA" : "var(--muted-foreground)" }}
                >
                  {label}
                </span>
                {taken ? (
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle size={13} weight="fill" /> Taken
                  </span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_#7C3AED]" />
                )}
              </div>
              <p className="text-sm text-white/70">{note}</p>
            </motion.div>
          ))}
        </div>

        {/* What they get */}
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
          <p className="text-sm font-semibold text-violet-400 tracking-widest uppercase mb-5">What founding clients get</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Custom website built from scratch",
              "Full SEO setup from day one",
              "Google Business Profile guidance",
              "Contact form that emails you directly",
              "Mobile-optimized, fast load times",
              "Discounted founding rate",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                <Star size={13} weight="fill" className="text-violet-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <a href="#contact" className={btnPrimary}>
            Claim a Founding Spot <ArrowRight size={16} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
