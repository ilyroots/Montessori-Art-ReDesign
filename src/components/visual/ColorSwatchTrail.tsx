"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface ColorSwatchTrailProps {
  className?: string;
  swatches?: { color: string; label?: string }[];
  direction?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
}

const defaultSwatches = [
  { color: "bg-bee-yellow", label: "Yellow" },
  { color: "bg-kids-blue", label: "Blue" },
  { color: "bg-creative-pink", label: "Magenta" },
  { color: "bg-honey", label: "Ochre" },
  { color: "bg-sage", label: "Sage" },
];

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-10 h-10",
};

export function ColorSwatchTrail({
  className = "",
  swatches = defaultSwatches,
  direction = "horizontal",
  size = "md",
}: ColorSwatchTrailProps) {
  const reduced = useReducedMotion();
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={`flex ${isHorizontal ? "flex-row items-center gap-2" : "flex-col items-center gap-2"} ${className}`}
    >
      {swatches.map((swatch, i) => (
        <motion.div
          key={i}
          className={`relative group ${sizeMap[size]} rounded-full ${swatch.color} border-2 border-paper shadow-sm`}
          initial={reduced ? { opacity: 0.7 } : { opacity: 0, scale: 0.5, x: isHorizontal ? -10 : 0, y: isHorizontal ? 0 : -10 }}
          whileInView={reduced ? { opacity: 0.7 } : { opacity: 1, scale: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {swatch.label && (
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-charcoal/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {swatch.label}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
