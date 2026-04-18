"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Star, Quotes } from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    initials: "RP",
    name: "Ravi Patel",
    company: "Peel Excavation Services",
    location: "Brampton, ON",
    text: "Arjan built our entire website from scratch in under 47 days. Before that, we had zero online presence. Now we get calls every week from people who found us on Google. The investment paid for itself within the first month.",
    rating: 5,
  },
  {
    initials: "MT",
    name: "Mike Torres",
    company: "T&T Plumbing",
    location: "Mississauga, ON",
    text: "I was skeptical about spending money on a website, but Arjan showed me exactly what I'd get before we started. Delivered on every promise. The site looks better than any competitor in Mississauga and actually shows up when people search.",
    rating: 5,
  },
  {
    initials: "JL",
    name: "Jason Lee",
    company: "Apex Roofing GTA",
    location: "Brampton, ON",
    text: "Fast, professional, and he actually understands the trades. Didn't waste my time with questions he should already know. We're on page one for our main keywords now and the phone rings way more than it used to.",
    rating: 5,
  },
];

const variants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48, transition: { duration: 0.2 } }),
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  }, [active]);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setActive((a) => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

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
          <p className="section-eyebrow justify-center mb-4">Client Testimonials</p>
          <h2
            className="text-foreground leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem,6vw,4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            What Clients Say.
          </h2>
        </motion.div>

        {/* Card */}
        <div className="relative overflow-hidden min-h-[280px] flex items-center">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={active}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <div
                className="rounded-2xl p-8 md:p-12 flex flex-col gap-6"
                style={{
                  background: "#0F0F1C",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <Quotes size={32} weight="fill" className="text-violet-700/60" />

                <p className="text-lg md:text-xl leading-relaxed text-foreground/85 font-light">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-white"
                      style={{ background: "linear-gradient(135deg,#6D28D9,#4F46E5)" }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.company} &middot; {t.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} weight="fill" color="#FBBF24" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === active ? "2rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                background: i === active ? "#6D28D9" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
