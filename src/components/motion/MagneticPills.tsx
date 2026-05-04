"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
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
 * Full-width scattered text inspired by Shopify Editions.
 *
 * Desktop: items are explicitly positioned across a large canvas
 *          with generous whitespace — no overlaps possible.
 * Proximity: mouse distance drives scale + subtle magnetic pull.
 * Hover: expands into a warm info card.
 */

interface Position {
  left: number; // %
  top: number; // %
  fontSize: number; // rem
  opacity: number;
}

// Pre-calculated scatter positions for 8 items
// Spread across full width & height so nothing can overlap
const POSITIONS: Position[] = [
  { left: 6, top: 8, fontSize: 1.15, opacity: 0.75 },   // Keynotes
  { left: 72, top: 5, fontSize: 1.0, opacity: 0.6 },    // Workshops
  { left: 38, top: 22, fontSize: 1.05, opacity: 0.7 },  // Venue Sponsorship
  { left: 58, top: 34, fontSize: 1.3, opacity: 0.9 },   // Corporate Creative Events (hero)
  { left: 10, top: 48, fontSize: 1.1, opacity: 0.65 },  // Teacher Art Training
  { left: 48, top: 54, fontSize: 0.95, opacity: 0.55 }, // Video Training
  { left: 22, top: 74, fontSize: 1.0, opacity: 0.6 },   // Art Supplies
  { left: 70, top: 70, fontSize: 1.2, opacity: 0.8 },   // Art Teaching Blueprint
];

export function MagneticPills({ items, className = "" }: MagneticPillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cRect = container.getBoundingClientRect();
        const px = rect.left - cRect.left + rect.width / 2;
        const py = rect.top - cRect.top + rect.height / 2;

        const dx = mx - px;
        const dy = my - py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const radius = 200;
        const maxScale = 1.35;
        const maxPull = 16;

        if (dist < radius) {
          const p = 1 - dist / radius;
          const eased = p * p * (3 - 2 * p);
          const scale = 1 + (maxScale - 1) * eased;
          const pull = maxPull * eased;
          const tx = (dx / dist) * pull || 0;
          const ty = (dy / dist) * pull || 0;
          el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
          el.style.zIndex = "10";
        } else {
          el.style.transform = "translate(0px, 0px) scale(1)";
          el.style.zIndex = "1";
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ minHeight: "520px" }}
    >
      {/* Desktop scattered canvas */}
      <div className="hidden md:block relative w-full" style={{ height: "480px" }}>
        {items.map((item, i) => {
          const pos = POSITIONS[i];
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={item.label}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="absolute will-change-transform"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex((prev) => (prev === i ? null : prev))}
            >
              {/* Base floating text */}
              <span
                className={`
                  inline-flex items-center gap-2 whitespace-nowrap
                  font-serif text-ink cursor-default select-none
                  transition-opacity duration-200
                  ${isHovered ? "opacity-0" : ""}
                `}
                style={{
                  fontSize: `${pos.fontSize}rem`,
                  opacity: isHovered ? 0 : pos.opacity,
                }}
              >
                {item.icon && (
                  <span className="text-honey opacity-80">{item.icon}</span>
                )}
                <span>{item.label}</span>
              </span>

              {/* Expanded card on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.75 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-60 z-30"
                  >
                    <div className="relative rounded-card bg-paper border border-linen shadow-card-hover p-5 text-left">
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

      {/* Mobile: clean stacked list */}
      <div className="md:hidden flex flex-wrap justify-center gap-3">
        {items.map((item) => (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 bg-paper border border-linen rounded-full px-4 py-2 text-sm text-charcoal/80"
          >
            {item.icon && (
              <span className="text-honey">{item.icon}</span>
            )}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
