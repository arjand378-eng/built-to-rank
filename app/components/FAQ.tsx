"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Most trades websites start at $1,500–$2,500. The final price depends on how many pages you need and what features matter to your business — a plumber with 3 services is different from a general contractor with 10. You'll get a clear quote before anything starts. No surprises, no hidden fees.",
  },
  {
    q: "How long does it take?",
    a: "Typically 30–47 days from the first call to your site going live. You'll see the design before anything is finalized, and I don't launch until you're happy with it. If you need it faster, let me know — I can work around urgent timelines.",
  },
  {
    q: "Do I need to be involved every day?",
    a: "Not at all. I need about 30 minutes of your time at the start to understand your business and what you want. Then you review the design near the end. I handle everything in between — design, build, SEO setup, and launch.",
  },
  {
    q: "What if I don't like the design?",
    a: "Revisions are included. I won't launch anything you're not proud to show customers. You'll see the design at multiple checkpoints before it goes live, so there are no surprises at the end.",
  },
  {
    q: "Will this actually get me more calls?",
    a: "The honest answer: a website alone doesn't guarantee calls overnight. What it does is make sure that when someone in Brampton or Mississauga searches for your trade, your business shows up instead of your competitor's. SEO builds momentum over 3–6 months — but once it kicks in, it keeps working for you without paying for ads.",
  },
  {
    q: "What do I need to get started?",
    a: "Just a 15-minute call. No contracts to sign upfront, no money due until you've seen a proposal you're happy with. We talk about your business, I tell you exactly what I'd build and what it costs, and you decide if it makes sense.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ background: "#0A0A12" }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 70%, rgba(109,40,217,0.07) 0%, transparent 70%)" }}
      />
      <Separator className="max-w-6xl mx-auto mb-28 opacity-30" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-4">FAQ</p>
          <h2
            className="text-foreground leading-none mb-5"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem,6vw,4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Questions Trades<br />
            <span className="text-muted-foreground">Owners Always Ask.</span>
          </h2>
          <p className="text-xl font-light leading-relaxed text-white/75 max-w-2xl tracking-wide">
            Straight answers. No fluff.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 90, damping: 20 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: open === i ? "#0F0F1E" : "#0D0D1A",
                border: open === i ? "1px solid rgba(109,40,217,0.35)" : "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.2s, background 0.2s",
              }}
            >
              <button
                className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base font-semibold text-foreground leading-snug">{q}</span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-violet-400"
                  style={{ background: "rgba(109,40,217,0.12)", border: "1px solid rgba(109,40,217,0.2)" }}
                >
                  {open === i ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-7 pb-6 text-sm leading-relaxed text-white/75">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
