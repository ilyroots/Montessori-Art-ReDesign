"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";

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
 * Full-width scattered text with proximity magnify + hover cards
 * that expand directly from the word (up for top row, down for bottom row).
 *
 * The text stays anchored in place — only the background & description grow.
 */

interface Position {
  left: number; // %
  top: number; // %
  fontSize: number; // rem
  opacity: number;
  expandUp: boolean;
}

const POSITIONS: Position[] = [
  { left: 2, top: 30, fontSize: 1.15, opacity: 0.75, expandUp: true },   // Keynotes
  { left: 26, top: 18, fontSize: 1.05, opacity: 0.6, expandUp: true },   // Workshops
  { left: 52, top: 28, fontSize: 1.1, opacity: 0.7, expandUp: true },    // Venue Sponsorship
  { left: 76, top: 14, fontSize: 1.35, opacity: 0.9, expandUp: true },   // Corporate Creative Events
  { left: 10, top: 72, fontSize: 1.1, opacity: 0.65, expandUp: false },  // Teacher Art Training
  { left: 36, top: 62, fontSize: 0.95, opacity: 0.55, expandUp: false }, // Video Training
  { left: 62, top: 76, fontSize: 1.0, opacity: 0.6, expandUp: false },   // Art Supplies
  { left: 84, top: 66, fontSize: 1.25, opacity: 0.8, expandUp: false },  // Art Teaching Blueprint
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

      itemRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cRect = container.getBoundingClientRect();
        const px = rect.left - cRect.left + rect.width / 2;
        const py = rect.top - cRect.top + rect.height / 2;

        const dx = mx - px;
        const dy = my - py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const radius = 320;
        const maxScale = 1.32;
        const maxPull = 14;

        if (dist < radius) {
          const p = 1 - dist / radius;
          const eased = p * p * (3 - 2 * p);
          const scale = 1 + (maxScale - 1) * eased;
          const pull = maxPull * eased;
          const tx = (dx / dist) * pull || 0;
          const ty = (dy / dist) * pull || 0;
          el.style.setProperty("--scale", scale.toFixed(3));
          el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
        } else {
          el.style.setProperty("--scale", "1");
          el.style.transform = "translate(0px, 0px) scale(1)";
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
      style={{ minHeight: "200px" }}
    >
      {/* Desktop scattered canvas */}
      <div className="hidden md:block relative w-full" style={{ height: "180px" }}>
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
                zIndex: isHovered ? 50 : 10 - i,
                transformOrigin: "center center",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex((prev) => (prev === i ? null : prev))}
            >
              {/*
                Inner wrapper:
                - padding grows on hover
                - a counter-translate keeps the text visually anchored
                  (translate is divided by --scale so it stays exact regardless
                  of the proximity magnification)
              */}
              <div
                className={`
                  inline-flex rounded-card transition-all duration-300 ease-out
                  ${isHovered
                    ? "bg-paper border border-linen shadow-card-hover"
                    : "bg-transparent border-transparent"
                  }
                `}
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  padding: isHovered ? "16px" : "0px",
                  flexDirection: pos.expandUp ? "column-reverse" : "column",
                  alignItems: "flex-start",
                  transform: isHovered
                    ? pos.expandUp
                      ? "translateY(calc(16px / var(--scale, 1)))"
                      : "translateY(calc(-16px / var(--scale, 1)))"
                    : "translateY(0px)",
                }}
              >
                {/* Text + icon — anchor point, never shifts visually */}
                <span
                  className="inline-flex items-center gap-2 whitespace-nowrap font-serif text-ink cursor-default select-none"
                  style={{
                    fontSize: `${pos.fontSize}rem`,
                    opacity: isHovered ? 1 : pos.opacity,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  {item.icon && (
                    <span className="text-honey">{item.icon}</span>
                  )}
                  <span>{item.label}</span>
                </span>

                {/* Description — grows from the word (up or down) */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: isHovered ? 160 : 0,
                    opacity: isHovered ? 1 : 0,
                    marginTop: pos.expandUp ? 0 : isHovered ? 8 : 0,
                    marginBottom: pos.expandUp ? (isHovered ? 8 : 0) : 0,
                  }}
                >
                  <p className="text-sm text-charcoal/80 leading-relaxed max-w-[220px]">
                    {item.description}
                  </p>
                  {item.href && (
                    <span className="inline-block mt-2 text-xs font-semibold text-honey hover:text-earth-brown transition-colors">
                      Learn more →
                    </span>
                  )}
                </div>
              </div>
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
