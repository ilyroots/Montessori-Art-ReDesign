"use client";

import { motion } from "framer-motion";

interface FloatingAccentShapesProps {
  className?: string;
}

/**
 * FloatingAccentShapes — Decorative color swatch dots that float subtly.
 * Use inside relative-positioned sections for ambient visual interest.
 * Hidden on mobile. Respects reduced-motion via CSS.
 */
export function FloatingAccentShapes({ className = "" }: FloatingAccentShapesProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Honey dot */}
      <motion.div
        className="floating-dot w-8 h-8 bg-bee-yellow/60 border-2 border-paper shadow-sm hidden lg:block"
        style={{ top: "15%", right: "12%" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blue dot */}
      <motion.div
        className="floating-dot w-5 h-5 bg-kids-blue/50 border-2 border-paper shadow-sm hidden lg:block"
        style={{ top: "35%", right: "8%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {/* Pink dot */}
      <motion.div
        className="floating-dot w-6 h-6 bg-creative-pink/50 border-2 border-paper shadow-sm hidden lg:block"
        style={{ bottom: "25%", right: "18%" }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Small ochre dot */}
      <motion.div
        className="floating-dot w-3 h-3 bg-ochre/60 border-2 border-paper shadow-sm hidden lg:block"
        style={{ top: "60%", left: "8%" }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      {/* Sage dot */}
      <motion.div
        className="floating-dot w-4 h-4 bg-sage/50 border-2 border-paper shadow-sm hidden lg:block"
        style={{ bottom: "15%", left: "15%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </div>
  );
}
