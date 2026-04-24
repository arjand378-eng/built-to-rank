"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, EnvelopeSimple, FacebookLogo, InstagramLogo, PaperPlaneTilt, Phone } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const inputCls =
  "w-full px-4 py-2.5 rounded-lg bg-[#1A1A2E] border border-white/7 text-foreground text-sm placeholder:text-muted-foreground outline-none transition-colors focus:border-violet-700/50";
const contactEmail = "info@builttorank.ca";

const auditItems = [
  "Mobile and speed issues",
  "Google Business Profile gaps",
  "Local SEO quick wins",
  "Call and form conversion problems",
  "Clear next steps, no pressure",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!key) {
        console.error("Missing NEXT_PUBLIC_WEB3FORMS_KEY env var");
        setError(`The form is temporarily unavailable. Please email ${contactEmail} instead.`);
        setLoading(false);
        return;
      }
      const data = new FormData(e.currentTarget);
      data.append("access_key", key);
      data.append("subject", "New Built to Rank audit request");
      data.append("from_name", "Built to Rank Website");
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
        // GA4 lead event — no-ops if gtag isn't loaded
        if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "generate_lead", {
            form_location: "contact",
          });
        }
      } else {
        setError(`Message failed to send. Please try again or email ${contactEmail}.`);
      }
    } catch {
      setError(`Message failed to send. Please try again or email ${contactEmail}.`);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="services-gradient-bg relative py-28 px-6 overflow-hidden">
      {/* Centered glow to close the page */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(109,40,217,0.08) 0%, transparent 65%)" }} />
      <Separator className="max-w-6xl mx-auto mb-28 opacity-30" />
      <div className="relative max-w-6xl mx-auto">

        <motion.div
          id="contact-inner-header"
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
          <p className="text-xl font-light leading-relaxed text-white/90 max-w-2xl tracking-wide">
            Send me your current site or Google Business Profile link. I&apos;ll send back a free written audit showing where you&apos;re losing customers and what I&apos;d fix first. No sales pitch.
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
                    onSubmit={onSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-name" className="text-xs font-medium text-muted-foreground">Your Name *</label>
                        <input id="contact-name" name="name" required placeholder="John Smith" value={form.name} onChange={handle} className={inputCls} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-business" className="text-xs font-medium text-muted-foreground">Business Name</label>
                        <input id="contact-business" name="business" placeholder="Smith Plumbing Inc." value={form.business} onChange={handle} className={inputCls} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-email" className="text-xs font-medium text-muted-foreground">Email *</label>
                        <input id="contact-email" name="email" type="email" required placeholder="john@smithplumbing.ca" value={form.email} onChange={handle} className={inputCls} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-phone" className="text-xs font-medium text-muted-foreground">Phone</label>
                        <input id="contact-phone" name="phone" type="tel" placeholder="+1 (905) 555-0192" value={form.phone} onChange={handle} className={inputCls} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-url" className="text-xs font-medium text-muted-foreground">Current website or Google Business Profile URL</label>
                      <input id="contact-url" name="current_url" type="url" placeholder="https://yoursite.ca or google.com/maps/..." className={inputCls} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-service" className="text-xs font-medium text-muted-foreground">What do you need?</label>
                      <select id="contact-service" name="service" className={inputCls + " cursor-pointer"}>
                        <option value="">Select a service...</option>
                        <option>Website Design & Development</option>
                        <option>SEO Setup & Optimization</option>
                        <option>Monthly Retainer</option>
                        <option>All of the above</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-message" className="text-xs font-medium text-muted-foreground">Tell me about your business</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        placeholder="I'm a roofing contractor with no website yet. I need to start getting found on Google..."
                        value={form.message}
                        onChange={handle}
                        className={inputCls + " resize-none"}
                      />
                    </div>
                    {error ? (
                      <p
                        role="alert"
                        className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm leading-relaxed text-red-100"
                      >
                        {error}
                      </p>
                    ) : null}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="self-start bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-9 px-5 active:scale-[0.98] disabled:opacity-60"
                    >
                      {loading ? "Sending…" : <><span>Request Free Audit</span><PaperPlaneTilt size={15} weight="bold" /></>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </ScrollReveal>

          {/* Info — 2 cols */}
          <ScrollReveal animation="slideRight" delay={0.1} className="lg:col-span-2 flex flex-col gap-5">
            <Card
              className="rounded-2xl border-violet-700/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              style={{ background: "linear-gradient(145deg,rgba(109,40,217,0.1),rgba(79,70,229,0.05))" }}
            >
              <CardContent className="p-7 flex flex-col gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-violet-400">
                    Your Free Audit Includes
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/78">
                    A quick written breakdown of what is helping, what is hurting, and what I&apos;d fix first.
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {auditItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/82">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-violet-300"
                        style={{ background: "rgba(109,40,217,0.18)", border: "1px solid rgba(109,40,217,0.28)" }}
                      >
                        <Check size={12} weight="bold" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <CardContent className="p-7 flex flex-col gap-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-violet-400">
                  Contact Details
                </p>
                {[
                  { icon: <EnvelopeSimple size={17} weight="duotone" />, label: "Email", value: contactEmail, href: `mailto:${contactEmail}` },
                  { icon: <Phone size={17} weight="duotone" />,          label: "Phone", value: "647-657-8525", href: "tel:+16476578525" },
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
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://www.facebook.com/people/Built-to-Rank/61588887140478/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Built to Rank on Facebook"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-violet-300 hover:text-violet-200 transition-colors"
                    style={{ background: "rgba(109,40,217,0.12)", border: "1px solid var(--border-accent)" }}
                  >
                    <FacebookLogo size={17} weight="duotone" />
                  </a>
                  <a
                    href="https://www.instagram.com/builttorank.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Built to Rank on Instagram"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-violet-300 hover:text-violet-200 transition-colors"
                    style={{ background: "rgba(109,40,217,0.12)", border: "1px solid var(--border-accent)" }}
                  >
                    <InstagramLogo size={17} weight="duotone" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card
              className="rounded-2xl border-violet-700/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              style={{ background: "linear-gradient(145deg,rgba(109,40,217,0.08),rgba(79,70,229,0.05))" }}
            >
              <CardContent className="p-6 flex flex-col gap-3">
                <p className="font-semibold text-sm text-foreground">What happens next?</p>
                {[
                  "I review your site / GBP (usually within hours)",
                  "You get a free written audit, no sales pitch",
                  "If it's a fit, we book a 15-min call",
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
