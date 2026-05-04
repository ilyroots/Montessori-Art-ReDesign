"use client";

import { motion } from "framer-motion";

interface SectionTransitionProps {
  variant?: "soft" | "gradient-warm" | "gradient-canvas" | "gradient-ink" | "swatches" | "honeycomb" | "overlap";
  className?: string;
  height?: "sm" | "md" | "lg" | "xl";
}

const heightMap = {
  sm: "h-8",
  md: "h-16",
  lg: "h-24",
  xl: "h-32",
};

export function SectionTransition({
  variant = "soft",
  className = "",
  height = "md",
}: SectionTransitionProps) {
  if (variant === "overlap") {
    return (
      <div className={`relative ${heightMap[height]} ${className}`}>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-canvas to-transparent" />
      </div>
    );
  }

  if (variant === "swatches") {
    const swatches = [
      "bg-bee-yellow",
      "bg-kids-blue",
      "bg-creative-pink",
      "bg-honey",
      "bg-sage",
    ];
    return (
      <div className={`relative overflow-hidden ${heightMap[height]} ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          {swatches.map((color, i) => (
            <motion.div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${color}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-linen to-transparent" />
      </div>
    );
  }

  if (variant === "honeycomb") {
    return (
      <div className={`relative overflow-hidden ${heightMap[height]} ${className}`}>
        <div className="absolute inset-0 honeycomb-accent opacity-[0.03]" />
        <motion.div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    );
  }

  const gradientClasses = {
    soft: "bg-gradient-to-b from-transparent via-ivory to-transparent",
    "gradient-warm": "bg-gradient-to-b from-ivory to-canvas-warm",
    "gradient-canvas": "bg-gradient-to-b from-canvas-warm to-canvas",
    "gradient-ink": "bg-gradient-to-b from-ink to-charcoal",
  };

  return (
    <div className={`relative overflow-hidden ${heightMap[height]} ${className}`}>
      <div className={`absolute inset-0 ${gradientClasses[variant]}`} />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-linen/60 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
