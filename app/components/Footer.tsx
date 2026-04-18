import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Home",     href: "/"         },
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/#work"    },
  { label: "About",    href: "/about"    },
  { label: "Blog",     href: "/blog"     },
  { label: "Contact",  href: "/contact"  },
];
const serviceLinks = [
  { label: "Website Design",    href: "/services" },
  { label: "SEO Optimization",  href: "/services" },
  { label: "Monthly Retainer",  href: "/services" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--background)" }}>
      <Separator className="opacity-30" />

      {/* CTA strip */}
      <div
        className="px-6 py-16"
        style={{ background: "linear-gradient(135deg,rgba(109,40,217,0.1) 0%,rgba(79,70,229,0.06) 100%)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-foreground leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(1.8rem,4vw,2.8rem)",
                letterSpacing: "0.02em",
              }}
            >
              Ready to Get Found on Google?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Let&apos;s build something that works for your business.
            </p>
          </div>
          <a
            href="/contact"
            className={cn(buttonVariants(), "shrink-0 bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-10 px-5 active:scale-[0.98]")}
          >
            Get a Free Quote <ArrowUpRight size={15} weight="bold" />
          </a>
        </div>
      </div>

      <Separator className="opacity-20" />

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-xs">
            <a href="/" className="inline-flex items-center">
              <span
                className="text-foreground"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "1.35rem", letterSpacing: "0.04em" }}
              >
                Built to{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#8B5CF6,#6366F1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Rank
                </span>
              </span>
            </a>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Web design &amp; SEO for trades businesses across the GTA.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Navigation</p>
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Services</p>
            {serviceLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Coverage</p>
            {["GTA, Ontario, Canada", "Brampton · Mississauga · Vaughan", "Remote work available nationwide"].map((l) => (
              <p key={l} className="text-sm text-muted-foreground">{l}</p>
            ))}
          </div>
        </div>

        <Separator className="mt-10 mb-6 opacity-20" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Built to Rank. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Designed &amp; built in the GTA.</p>
        </div>
      </div>
    </footer>
  );
}
