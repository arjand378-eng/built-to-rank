import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page Not Found | Built to Rank",
  description: "The page you're looking for doesn't exist. Head back home or get in touch.",
  robots: { index: false, follow: false },
};

const btnPrimary = cn(
  buttonVariants({ size: "lg" }),
  "bg-gradient-to-br from-violet-700 to-indigo-600 text-white border-0 hover:opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2 h-11 px-6 active:scale-[0.98]"
);

const btnGhost = cn(
  buttonVariants({ variant: "ghost", size: "lg" }),
  "text-white/80 hover:text-white hover:bg-white/5 gap-2 h-11 px-5"
);

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg,#0A0A14 0%,#080810 60%,#0B0A16 100%)" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(109,40,217,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <p className="section-eyebrow justify-center mb-6">404 — Page Not Found</p>
        <h1
          className="text-foreground leading-none mb-6"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(4rem,12vw,9rem)",
            letterSpacing: "0.02em",
            background: "linear-gradient(135deg, #fff 0%, #A78BFA 50%, #818CF8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Lost Page.
        </h1>
        <p className="text-lg font-light leading-relaxed text-white/75 max-w-lg mx-auto mb-10 tracking-wide">
          The page you&apos;re after doesn&apos;t exist, was moved, or never shipped. Head
          back home or send me a note and I&apos;ll help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <Link href="/" className={btnPrimary}>
            Back to Home
          </Link>
          <Link href="/#contact" className={btnGhost}>
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
