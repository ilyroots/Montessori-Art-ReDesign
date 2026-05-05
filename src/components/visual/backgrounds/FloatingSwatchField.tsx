"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface Swatch {
  color: string;
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
}

interface FloatingSwatchFieldProps {
  children: ReactNode;
  className?: string;
  swatches?: Swatch[];
}

const defaultSwatches: Swatch[] = [
  { color: "bg-honey/15", size: 48, x: "8%", y: "15%", delay: 0, duration: 8 },
  { color: "bg-kids-blue/12", size: 36, x: "85%", y: "20%", delay: 1.5, duration: 10 },
  { color: "bg-creative-pink/10", size: 28, x: "75%", y: "65%", delay: 3, duration: 9 },
  { color: "bg-bee-yellow/12", size: 40, x: "15%", y: "70%", delay: 2, duration: 11 },
  { color: "bg-sage/12", size: 32, x: "50%", y: "85%", delay: 4, duration: 8.5 },
  { color: "bg-honey/10", size: 24, x: "92%", y: "45%", delay: 0.5, duration: 9.5 },
  { color: "bg-kids-blue/8", size: 20, x: "30%", y: "40%", delay: 2.5, duration: 10.5 },
  { color: "bg-creative-pink/8", size: 16, x: "60%", y: "10%", delay: 1, duration: 7.5 },
];

export function FloatingSwatchField({
  children,
  className = "",
  swatches = defaultSwatches,
}: FloatingSwatchFieldProps) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!reduced &&
        swatches.map((swatch, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${swatch.color} blur-[1px] pointer-events-none`}
            style={{
              width: swatch.size,
              height: swatch.size,
              left: swatch.x,
              top: swatch.y,
            }}
            animate={{
              y: [0, -18, 0, 12, 0],
              x: [0, 8, -6, 4, 0],
              scale: [1, 1.05, 0.95, 1.02, 1],
            }}
            transition={{
              duration: swatch.duration,
              delay: swatch.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      <div className="relative">{children}</div>
    </div>
  );
}
