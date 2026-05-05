"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface LayeredArtMaterialBackgroundProps {
  children: ReactNode;
  className?: string;
  layers?: number;
}

export function LayeredArtMaterialBackground({
  children,
  className = "",
  layers = 3,
}: LayeredArtMaterialBackgroundProps) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Layer 1: Deep paper wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-canvas/40 via-ivory/60 to-canvas-warm/30 pointer-events-none" />

      {/* Layer 2: Soft color fields */}
      {!reduced && layers >= 2 && (
        <>
          <motion.div
            className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-honey/[0.03] blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-kids-blue/[0.03] blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </>
      )}

      {/* Layer 3: Subtle texture dots */}
      {layers >= 3 && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #1C1B18 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      )}

      {/* Honeycomb accent — very subtle */}
      <div className="absolute inset-0 honeycomb-accent opacity-[0.03] pointer-events-none" />

      <div className="relative">{children}</div>
    </div>
  );
}
