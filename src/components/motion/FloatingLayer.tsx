"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingLayerProps {
  children: ReactNode;
  className?: string;
  amplitude?: number; // pixels to float
  duration?: number; // seconds per cycle
  delay?: number;
}

/**
 * FloatingLayer — Subtle continuous vertical float animation.
 * Perfect for decorative elements, image collages, and accent cards.
 * Respects reduced-motion via CSS (animation disabled in prefers-reduced-motion).
 */
export function FloatingLayer({
  children,
  className = "",
  amplitude = 8,
  duration = 5,
  delay = 0,
}: FloatingLayerProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
