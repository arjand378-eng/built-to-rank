"use client";
import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.getElementById(hash.replace("#", ""));
    if (!el) return;
    setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
  }, []);
  return null;
}
