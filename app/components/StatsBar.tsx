"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "1",    label: "Site Launched"         },
  { value: "47",   label: "Days to Go Live"        },
  { value: "Pg.1", label: "Google Ranking"         },
  { value: "100%", label: "Custom — No Templates"  },
];

export default function StatsBar() {
  return (
    <div
      className="relative py-10 px-6 overflow-hidden"
      style={{ background: "#07070E", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 90, damping: 20 }}
              className="flex flex-col items-center text-center gap-1"
            >
              <span
                className="text-violet-300"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(2rem,4vw,2.8rem)",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span className="text-xs font-medium text-white/50 tracking-wide uppercase">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dividers between stats on desktop */}
      <div className="hidden md:block absolute inset-y-0 left-1/4 w-px" style={{ background: "rgba(255,255,255,0.05)", top: "20%", bottom: "20%", height: "60%", margin: "auto 0" }} />
      <div className="hidden md:block absolute inset-y-0 left-1/2 w-px" style={{ background: "rgba(255,255,255,0.05)", top: "20%", bottom: "20%", height: "60%", margin: "auto 0" }} />
      <div className="hidden md:block absolute inset-y-0 left-3/4 w-px" style={{ background: "rgba(255,255,255,0.05)", top: "20%", bottom: "20%", height: "60%", margin: "auto 0" }} />
    </div>
  );
}
