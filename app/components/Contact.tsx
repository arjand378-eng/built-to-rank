"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt, Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", business: "", email: "", phone: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 1rem",
    borderRadius: "0.6rem",
    background: "var(--bg-raised)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.18s",
  };

  return (
    <section id="contact" className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-4">Get in Touch</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                color: "var(--text)",
              }}
            >
              Let&apos;s Build<br />
              <span style={{ color: "var(--muted)" }}>Something That Ranks.</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed md:text-right" style={{ color: "var(--muted-lt)" }}>
              Free quote. No hard sell.<br />
              Usually reply within a few hours.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div
                className="card flex flex-col items-center justify-center gap-4 p-14 text-center h-full"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(109,40,217,0.15)", border: "1px solid var(--border-accent)" }}
                >
                  <PaperPlaneTilt size={28} weight="duotone" style={{ color: "#A78BFA" }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>Got it — thanks!</h3>
                <p className="text-sm max-w-xs" style={{ color: "var(--muted-lt)" }}>
                  I&apos;ll review your info and get back to you within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="card p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>Your Name *</label>
                    <input
                      name="name"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handle}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>Business Name</label>
                    <input
                      name="business"
                      placeholder="Smith Plumbing Inc."
                      value={form.business}
                      onChange={handle}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@smithplumbing.ca"
                      value={form.email}
                      onChange={handle}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+1 (905) 555-0192"
                      value={form.phone}
                      onChange={handle}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>What do you need?</label>
                  <select
                    name="service"
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  >
                    <option value="">Select a service...</option>
                    <option>Website Design & Development</option>
                    <option>SEO Setup & Optimization</option>
                    <option>Monthly Retainer</option>
                    <option>All of the above</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>Tell me about your business</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="We're a roofing company in Brampton — no website yet, need to start getting found on Google..."
                    value={form.message}
                    onChange={handle}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--border-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <button type="submit" className="btn btn-primary self-start">
                  Send Message <PaperPlaneTilt size={16} weight="bold" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info card */}
            <div className="card p-7 flex flex-col gap-5">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--violet-lt)" }}>
                Contact Details
              </p>

              {[
                {
                  icon: <EnvelopeSimple size={18} weight="duotone" />,
                  label: "Email",
                  value: "dhillonarjan552@gmail.com",
                  href: "mailto:dhillonarjan552@gmail.com",
                },
                {
                  icon: <Phone size={18} weight="duotone" />,
                  label: "Phone",
                  value: "Coming soon",
                  href: null,
                },
                {
                  icon: <MapPin size={18} weight="duotone" />,
                  label: "Location",
                  value: "GTA, Ontario, Canada",
                  href: null,
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(109,40,217,0.12)", border: "1px solid var(--border-accent)", color: "#A78BFA" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium" style={{ color: "var(--text)" }}>
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: value === "Coming soon" ? "var(--muted)" : "var(--text)" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response promise */}
            <div
              className="card p-6 flex flex-col gap-3"
              style={{
                background: "linear-gradient(145deg, rgba(109,40,217,0.08), rgba(79,70,229,0.05))",
                borderColor: "var(--border-accent)",
              }}
            >
              <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                What happens next?
              </p>
              {[
                "I review your message (usually within hours)",
                "Free 15-min call to understand your business",
                "You get a clear quote — no surprises",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                    style={{ background: "rgba(109,40,217,0.2)", border: "1px solid var(--border-accent)", color: "#A78BFA" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted-lt)" }}>{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
