"use client";

import { ArrowUpRight } from "@phosphor-icons/react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work"     },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
      {/* CTA strip */}
      <div
        className="px-6 py-16"
        style={{
          background: "linear-gradient(135deg, rgba(109,40,217,0.1) 0%, rgba(79,70,229,0.06) 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "0.02em",
                lineHeight: 1,
                color: "var(--text)",
              }}
            >
              Ready to Get Found on Google?
            </h3>
            <p className="mt-2 text-sm" style={{ color: "var(--muted-lt)" }}>
              Let&apos;s build something that works for your trades business.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary shrink-0">
            Get a Free Quote <ArrowUpRight size={16} weight="bold" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <a href="#" className="inline-flex items-center gap-1">
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.35rem", letterSpacing: "0.04em", color: "var(--text)" }}>
                Built to{" "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "1.35rem",
                  letterSpacing: "0.04em",
                  background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginLeft: "0.3rem",
                }}
              >
                Rank
              </span>
            </a>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Web design &amp; SEO for trades businesses in Peel Region and the GTA.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-150"
                style={{ color: "var(--muted-lt)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-lt)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
              Services
            </p>
            {["Website Design", "SEO Optimization", "Monthly Retainer"].map((s) => (
              <a
                key={s}
                href="#services"
                className="text-sm transition-colors duration-150"
                style={{ color: "var(--muted-lt)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-lt)")}
              >
                {s}
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
              Location
            </p>
            <p className="text-sm" style={{ color: "var(--muted-lt)" }}>GTA, Ontario, Canada</p>
            <p className="text-sm" style={{ color: "var(--muted-lt)" }}>Serving Peel Region</p>
            <p className="text-sm" style={{ color: "var(--muted-lt)" }}>Brampton · Mississauga · Caledon</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Built to Rank. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Designed &amp; built in the GTA.
          </p>
        </div>
      </div>
    </footer>
  );
}
