"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt, Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const inputCls =
  "w-full px-4 py-2.5 rounded-lg bg-[#1A1A2E] border border-white/7 text-foreground text-sm placeholder:text-muted-foreground outline-none transition-colors focus:border-violet-700/50";

export default function Contact() {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="services-gradient-bg relative py-28 px-6 overflow-hidden">
      {/* Centered glow to close the page */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(109,40,217,0.08) 0%, transparent 65%)" }} />
      <Separator className="max-w-6xl mx-auto mb-28 opacity-30" />
      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-4">Get in Touch</p>
          <h2
            className="text-foreground leading-none mb-5"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem,6vw,4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Let&apos;s Build<br />
            <span className="text-muted-foreground">Something That Ranks.</span>
          </h2>
          <p className="text-xl font-light leading-relaxed text-white/75 max-w-2xl tracking-wide">
            Free quote. No hard sell. Usually reply within a few hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form — 3 cols */}
          <ScrollReveal animation="slideLeft" className="lg:col-span-3">
            {submitted ? (
              <Card className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <CardContent className="p-14 flex flex-col items-center justify-center gap-4 text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                  >
                    <PaperPlaneTilt size={28} weight="duotone" className="text-violet-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Got it. Thanks!</h3>
                  <p className="text-sm max-w-xs text-muted-foreground">
                    I&apos;ll review your info and get back to you within a few hours.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <CardContent className="p-8">
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground">Your Name *</label>
                        <input name="name" required placeholder="John Smith" value={form.name} onChange={handle} className={inputCls} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground">Business Name</label>
                        <input name="business" placeholder="Smith Plumbing Inc." value={form.business} onChange={handle} className={inputCls} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground">Email *</label>
                        <input name="email" type="email" required placeholder="john@smithplumbing.ca" value={form.email} onChange={handle} className={inputCls} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground">Phone</label>
                        <input name="phone" type="tel" placeholder="+1 (905) 555-0192" value={form.phone} onChange={handle} className={inputCls} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-muted-foreground">What do you need?</label>
                      <select name="service" className={inputCls + " cursor-pointer"}>
                        <option value="">Select a service...</option>
                        <option>Website Design & Development</option>
                        <option>SEO Setup & Optimization</option>
                        <option>Monthly Retainer</option>
                        <option>All of the above</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-muted-foreground">Tell me about your business</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="We're a roofing company in Brampton — no website yet, need to start getting found on Google..."
                        value={form.message}
                        onChange={handle}
                        className={inputCls + " resize-none"}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="self-start bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-9 px-5 active:scale-[0.98]"
                    >
                      Send Message <PaperPlaneTilt size={15} weight="bold" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </ScrollReveal>

          {/* Info — 2 cols */}
          <ScrollReveal animation="slideRight" delay={0.1} className="lg:col-span-2 flex flex-col gap-5">
            <Card className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <CardContent className="p-7 flex flex-col gap-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-violet-400">
                  Contact Details
                </p>
                {[
                  { icon: <EnvelopeSimple size={17} weight="duotone" />, label: "Email", value: "info@builttorank.com", href: "mailto:info@builttorank.com" },
                  { icon: <Phone size={17} weight="duotone" />,          label: "Phone", value: "647-657-8525", href: "tel:+16476578525" },
                  { icon: <MapPin size={17} weight="duotone" />,         label: "Location", value: "GTA, Ontario, Canada", href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-violet-300"
                      style={{ background: "rgba(109,40,217,0.12)", border: "1px solid var(--border-accent)" }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-foreground hover:text-violet-300 transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: value === "Coming soon" ? "var(--muted-foreground)" : "var(--foreground)" }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card
              className="rounded-2xl border-violet-700/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              style={{ background: "linear-gradient(145deg,rgba(109,40,217,0.08),rgba(79,70,229,0.05))" }}
            >
              <CardContent className="p-6 flex flex-col gap-3">
                <p className="font-semibold text-sm text-foreground">What happens next?</p>
                {[
                  "I review your message (usually within hours)",
                  "Free 15-min call to understand your business",
                  "You get a clear quote with no surprises",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-violet-300"
                      style={{ background: "rgba(109,40,217,0.2)", border: "1px solid var(--border-accent)" }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">{step}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
