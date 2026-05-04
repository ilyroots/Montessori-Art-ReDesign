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

/*
 * Aesthetic scattered layout — structured rows with intentional asymmetry.
 * No absolute positioning, no random overlap.
 * Hover expands each label into a warm info card.
 */
export function MagneticPills({ items, className = "" }: MagneticPillsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Split 8 items into rows of 3 + 3 + 2 for an organic shape
  const rows: PillItem[][] = [
    items.slice(0, 3),
    items.slice(3, 6),
    items.slice(6, 8),
  ];

  return (
    <div className={`relative py-12 px-4 ${className}`}>
      <div className="flex flex-col items-center gap-y-10 max-w-5xl mx-auto">
        {rows.map((row, rowIdx) => {
          // Alternate row alignments for visual interest
          const alignments = [
            "justify-start md:justify-center",
            "justify-end md:justify-center",
            "justify-center",
          ];
          const rowAlignment = alignments[rowIdx % alignments.length];

          return (
            <div
              key={rowIdx}
              className={`flex flex-wrap ${rowAlignment} gap-x-10 md:gap-x-16 gap-y-8 w-full`}
            >
              {row.map((item) => {
                const globalIdx = items.indexOf(item);
                const isHovered = hoveredIndex === globalIdx;
                // Vary font size per item for hierarchy
                const fontSize =
                  globalIdx === 0 || globalIdx === 4
                    ? "1.05rem"
                    : globalIdx === 2 || globalIdx === 6
                    ? "0.9rem"
                    : "0.95rem";

                return (
                  <div
                    key={item.label}
                    className="relative flex items-center justify-center min-w-[140px]"
                    onMouseEnter={() => setHoveredIndex(globalIdx)}
                    onMouseLeave={() =>
                      setHoveredIndex((prev) => (prev === globalIdx ? null : prev))
                    }
                  >
                    {/* Floating text label */}
                    <AnimatePresence mode="wait">
                      {!isHovered && (
                        <motion.span
                          key="text"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 0.6 + (globalIdx % 3) * 0.15, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex items-center gap-2 whitespace-nowrap font-serif text-ink cursor-default select-none"
                          style={{ fontSize }}
                        >
                          {item.icon && (
                            <span className="text-honey opacity-80">{item.icon}</span>
                          )}
                          <span>{item.label}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* Expanded info card */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.65 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          transition={{ type: "spring", stiffness: 380, damping: 26 }}
                          className="absolute z-30 w-64"
                          style={{ bottom: "calc(100% + 12px)" }}
                        >
                          <div className="relative rounded-card bg-paper border border-linen shadow-card-hover p-5 text-left">
                            {/* Tooltip arrow */}
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
          );
        })}
      </div>
    </div>
  );
}
