"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface HoneycombFieldProps {
  className?: string;
  density?: "sparse" | "medium" | "dense";
  color?: "honey" | "linen" | "ink";
  animate?: boolean;
}

export function HoneycombField({
  className = "",
  density = "sparse",
  color = "honey",
  animate = true,
}: HoneycombFieldProps) {
  const reduced = useReducedMotion();
  const shouldAnimate = animate && !reduced;

  const colorMap = {
    honey: "text-honey/5",
    linen: "text-linen/40",
    ink: "text-ink/5",
  };

  const sizeMap = {
    sparse: "w-6 h-6",
    medium: "w-4 h-4",
    dense: "w-3 h-3",
  };

  // Generate a grid of hexagons
  const cols = density === "sparse" ? 8 : density === "medium" ? 12 : 16;
  const rows = density === "sparse" ? 4 : density === "medium" ? 6 : 8;
  const hexagons = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const offsetX = r % 2 === 0 ? 0 : 0.5;
      hexagons.push({
        id: `${r}-${c}`,
        x: (c + offsetX) * (100 / cols),
        y: r * (100 / rows),
        delay: (r * cols + c) * 0.02,
      });
    }
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="honeycomb-pattern"
            width="28"
            height="49"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb-pattern)" className={colorMap[color]} />
      </svg>

      {shouldAnimate && (
        <div className="absolute inset-0">
          {hexagons.slice(0, 12).map((hex) => (
            <motion.div
              key={hex.id}
              className={`absolute rounded-full ${colorMap[color]} ${sizeMap[density]}`}
              style={{
                left: `${hex.x}%`,
                top: `${hex.y}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: [0, 0.3, 0], scale: [0, 1, 0] }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                delay: hex.delay,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
