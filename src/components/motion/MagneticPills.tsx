"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface PillItem {
  label: string;
  icon?: React.ReactNode;
  description: string;
  href?: string;
}

interface MagneticPillsProps {
  items: PillItem[];
  className?: string;
}

/**
 * Service cloud inspired by Shopify Editions proximity effect.
 *
 * Default: scattered floating text + icon.
 * Hover:    expands into a warm info card.
 *
 * Layout uses flex-wrap with small translate offsets — gaps
 * guarantee no overlaps.
 */
export function MagneticPills({ items, className = "" }: MagneticPillsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`relative py-10 px-4 ${className}`}>
      <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-6 max-w-5xl mx-auto">
        {items.map((item, i) => {
          // Scatter offsets kept small so flex gaps still prevent overlaps
          const offsetX = Math.sin(i * 2.7) * 14;
          const offsetY = Math.cos(i * 1.9) * 8;
          const fontSize = 0.85 + Math.sin(i * 3.1) * 0.18; // 0.67 – 1.03 rem
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={item.label}
              className="relative flex items-center justify-center"
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex((prev) => (prev === i ? null : prev))}
            >
              {/* Default floating text label */}
              <AnimatePresence mode="wait">
                {!isHovered && (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 + Math.cos(i * 2.4) * 0.3 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-2 whitespace-nowrap font-serif text-ink cursor-default select-none"
                    style={{ fontSize: `${fontSize}rem` }}
                  >
                    {item.icon && (
                      <span className="text-honey opacity-80">{item.icon}</span>
                    )}
                    <span>{item.label}</span>
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Expanded info card on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    className="absolute z-30 w-60"
                  >
                    <div className="relative rounded-card bg-paper border border-linen shadow-card-hover p-5 text-left">
                      {/* Arrow pointing down to the original text position */}
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-paper border-r border-b border-linen rotate-45" />

                      <div className="relative">
                        <div className="flex items-center gap-2 mb-2">
                          {item.icon && (
                            <span className="text-honey">{item.icon}</span>
                          )}
                          <h4 className="font-serif text-base font-semibold text-ink leading-tight">
                            {item.label}
                          </h4>
                        </div>
                        <p className="text-sm text-charcoal/80 leading-relaxed">
                          {item.description}
                        </p>
                        {item.href && (
                          <span className="inline-block mt-3 text-xs font-semibold text-honey hover:text-earth-brown transition-colors">
                            Learn more →
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
