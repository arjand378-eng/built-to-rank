"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
  /** "fadeUp" | "slideLeft" | "slideRight" | "scaleUp" */
  animation?: "fadeUp" | "slideLeft" | "slideRight" | "scaleUp";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from: gsap.TweenVars = { opacity: 0, duration: 0.8, ease: "power3.out", delay };
    const to: gsap.TweenVars   = { opacity: 1, duration: 0.8, ease: "power3.out", delay };

    switch (animation) {
      case "fadeUp":    from.y = 40;   to.y = 0;   break;
      case "slideLeft": from.x = -50;  to.x = 0;   break;
      case "slideRight":from.x = 50;   to.x = 0;   break;
      case "scaleUp":   from.scale = 0.88; to.scale = 1; from.y = 24; to.y = 0; break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [animation, delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
