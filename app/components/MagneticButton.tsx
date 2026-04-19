"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({ children, className, strength = 0.38 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 18 });
  const sy = useSpring(y, { stiffness: 280, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width  / 2)) * strength);
    y.set((e.clientY - (rect.top  + rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
