"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Fingerprint,
  HardHat,
  MagnifyingGlass,
  UserCircle,
} from "@phosphor-icons/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const sectionStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const softRise = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 82, damping: 20 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, x: 28, y: 8 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring" as const, stiffness: 86, damping: 21 },
  },
};

const reasons = [
  {
    icon: UserCircle,
    title: "You work directly with the builder",
    body: "No account manager. No handoff. You talk to the person planning, designing, building, and launching the site.",
  },
  {
    icon: HardHat,
    title: "The site is written for trades",
    body: "Service pages, city language, calls-to-action, and proof sections are shaped around how homeowners choose contractors.",
  },
  {
    icon: Fingerprint,
    title: "No recycled template look",
    body: "The structure, copy, and visual direction are built around your trade, your services, and your local market.",
  },
  {
    icon: MagnifyingGlass,
    title: "SEO foundations are included",
    body: "Schema, sitemap, metadata, page structure, and Google Business Profile guidance are part of the build from the start.",
  },
];

export default function WhyHire() {
  return (
    <section className="relative overflow-hidden px-6 py-28" style={{ background: "#08080F" }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 35%, rgba(109,40,217,0.1) 0%, transparent 64%)",
        }}
      />
      <Separator className="relative mx-auto mb-20 max-w-6xl opacity-30" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="flex flex-col items-start"
        >
          <motion.p variants={softRise} className="section-eyebrow mb-5">
            Why Work With Me
          </motion.p>
          <h2
            className="text-foreground leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem,6vw,4.7rem)",
              letterSpacing: "0.02em",
            }}
          >
            <motion.span variants={softRise} className="block">
              Built to Turn Searches
            </motion.span>
            <motion.span variants={softRise} className="block text-muted-foreground">
              Into Calls.
            </motion.span>
          </h2>
          <motion.p variants={softRise} className="mt-6 max-w-[52ch] text-lg font-light leading-relaxed text-white/85">
            A trades website should do more than look sharp. It should explain what you do,
            make you easy to trust, and give Google the right signals from day one.
          </motion.p>

          <motion.div
            variants={softRise}
            className="mt-8 w-full rounded-2xl p-6"
            style={{
              background: "linear-gradient(145deg,rgba(109,40,217,0.12),rgba(79,70,229,0.06))",
              border: "1px solid rgba(109,40,217,0.3)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <p className="text-sm font-semibold text-white">Free audit first.</p>
            <p className="mt-2 text-sm leading-relaxed text-white/72">
              Send your website or Google Business Profile. I&apos;ll point out the highest-impact
              fixes before you decide whether a build makes sense.
            </p>
          </motion.div>

          <motion.a
            variants={softRise}
            href="#contact"
            className={cn(
              buttonVariants(),
              "mt-6 h-10 min-w-[11.5rem] gap-2 overflow-visible border-0 bg-gradient-to-br from-violet-700 to-indigo-600 px-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:opacity-90 active:scale-[0.98]"
            )}
          >
            Request Free Audit <ArrowRight size={15} weight="bold" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-4"
        >
          {reasons.map(({ icon: Icon, title, body }, index) => (
            <motion.div
              key={title}
              variants={cardReveal}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className={cn(
                "grid grid-cols-[auto_1fr] gap-4 rounded-2xl p-6",
                index === 0 ? "lg:ml-10" : index === 2 ? "lg:mr-10" : ""
              )}
              style={{
                background: index === 0 ? "#101021" : "#0D0D1A",
                border:
                  index === 0
                    ? "1px solid rgba(109,40,217,0.38)"
                    : "1px solid rgba(255,255,255,0.07)",
                boxShadow:
                  index === 0
                    ? "0 22px 44px -24px rgba(109,40,217,0.45), inset 0 1px 0 rgba(255,255,255,0.05)"
                    : "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-violet-300"
                style={{
                  background: "rgba(109,40,217,0.14)",
                  border: "1px solid rgba(109,40,217,0.26)",
                }}
              >
                <Icon size={22} weight="duotone" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-foreground">{title}</h3>
                  {index === 0 ? (
                    <CheckCircle size={15} weight="fill" className="shrink-0 text-violet-300" />
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/72">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
