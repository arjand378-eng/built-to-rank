"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer-fine (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.style.cursor = "none";

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }
      gsap.to(dot, { x: mx, y: my, duration: 0.08, ease: "power2.out" });
    };

    // Ring follows with lerp for smooth lag
    const tick = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      gsap.set(ring, { x: rx, y: ry });
    };
    gsap.ticker.add(tick);

    const onEnterLink = () => {
      gsap.to(ring, { scale: 1.75, borderColor: "rgba(139,92,246,0.9)", duration: 0.25, ease: "power2.out" });
      gsap.to(dot,  { scale: 0, duration: 0.15 });
    };
    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, borderColor: "rgba(167,139,250,0.7)", duration: 0.25, ease: "power2.out" });
      gsap.to(dot,  { scale: 1, duration: 0.15 });
    };
    const onEnterBtn = () => {
      gsap.to(ring, { scale: 2.2, borderColor: "rgba(109,40,217,0.8)", duration: 0.25, ease: "power2.out" });
      gsap.to(dot,  { scale: 0, duration: 0.15 });
    };

    const attachListeners = () => {
      document.querySelectorAll("a").forEach(el => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
      document.querySelectorAll("button").forEach(el => {
        el.addEventListener("mouseenter", onEnterBtn);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };

    attachListeners();

    // Re-attach on route changes (MutationObserver)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(tick);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#fff",
          transform: "translate(-50%,-50%)",
          opacity: 0,
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          border: "1.5px solid rgba(167,139,250,0.7)",
          transform: "translate(-50%,-50%)",
          opacity: 0,
          willChange: "transform",
        }}
      />
    </>
  );
}
