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
 * Full-width scattered text with proximity magnify + downward-expanding cards.
 *
 * Desktop: 8 items explicitly positioned across a large canvas.
 * Proximity: mouse distance drives smooth scale + gentle magnetic pull.
 * Hover: the text+icon stays put; a warm rounded card grows downward
 *         with background, border, shadow, and description.
 */

interface Position {
  left: number; // %
  top: number; // %
  fontSize: number; // rem
  opacity: number;
}

const POSITIONS: Position[] = [
  { left: 6, top: 8, fontSize: 1.15, opacity: 0.75 },   // Keynotes
  { left: 72, top: 5, fontSize: 1.0, opacity: 0.6 },    // Workshops
  { left: 38, top: 22, fontSize: 1.05, opacity: 0.7 },  // Venue Sponsorship
  { left: 58, top: 34, fontSize: 1.3, opacity: 0.9 },   // Corporate Creative Events
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

      itemRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cRect = container.getBoundingClientRect();
        const px = rect.left - cRect.left + rect.width / 2;
        const py = rect.top - cRect.top + rect.height / 2;

        const dx = mx - px;
        const dy = my - py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const radius = 300;
        const maxScale = 1.22;
        const maxPull = 10;

        if (dist < radius) {
          const p = 1 - dist / radius;
          const eased = p * p * (3 - 2 * p); // smoothstep
          const scale = 1 + (maxScale - 1) * eased;
          const pull = maxPull * eased;
          const tx = (dx / dist) * pull || 0;
          const ty = (dy / dist) * pull || 0;
          el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
        } else {
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
                zIndex: isHovered ? 50 : 10 - i,
                transformOrigin: "center top",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex((prev) => (prev === i ? null : prev))}
            >
              {/* Card shell — grows from the text on hover */}
              <div
                className={`
                  inline-flex flex-col items-start rounded-card
                  transition-all duration-300 ease-out
                  ${isHovered
                    ? "bg-paper border border-linen shadow-card-hover p-4"
                    : "bg-transparent border-transparent p-0"
                  }
                `}
                style={{ borderWidth: "1px", borderStyle: "solid" }}
              >
                {/* Text + icon — always visible */}
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

                {/* Description — expands downward on hover */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-out
                    ${isHovered ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
                  `}
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
