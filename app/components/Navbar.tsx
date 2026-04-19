"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/#work"    },
  { label: "About",    href: "/about"    },
  { label: "Blog",     href: "/blog"     },
  { label: "Contact",  href: "/contact"  },
];

const primaryLink = cn(
  buttonVariants({ variant: "default", size: "default" }),
  "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] h-8 px-4 active:scale-[0.98]"
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,18,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        {scrolled && <Separator className="absolute bottom-0 left-0 right-0 opacity-40" />}

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span
              className="text-2xl text-foreground"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em" }}
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

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <MagneticButton><a href="/contact" className={primaryLink}>Get a Quote</a></MagneticButton>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </Button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-[64px] left-4 right-4 z-40 rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: "rgba(14,14,26,0.97)",
              border: "1px solid var(--border)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 24px 48px -12px rgba(0,0,0,0.6)",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-base font-medium py-2 text-white/80 hover:text-white transition-colors border-b border-border"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="/contact"
              className={cn(primaryLink, "mt-1 w-full justify-center h-9")}
              onClick={() => setMenuOpen(false)}
            >
              Get a Free Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
