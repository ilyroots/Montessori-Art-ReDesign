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
 * Full-width scattered text with proximity magnify + hover cards.
 *
 * - Proximity effect magnifies nearby words as you move the mouse,
 *   but does NOT open cards.
 * - Cards only open when you directly hover over a word.
 * - Top-row cards expand UPWARD without shifting the anchored text.
 * - Bottom-row cards expand DOWNWARD without shifting the anchored text.
 */

interface Position {
  left: number;
  top: number;
  fontSize: number;
  opacity: number;
  expandUp: boolean;
}

const POSITIONS: Position[] = [
  { left: 2, top: 30, fontSize: 1.15, opacity: 0.75, expandUp: true },
  { left: 26, top: 18, fontSize: 1.05, opacity: 0.6, expandUp: true },
  { left: 52, top: 28, fontSize: 1.1, opacity: 0.7, expandUp: true },
  { left: 76, top: 14, fontSize: 1.35, opacity: 0.9, expandUp: true },
  { left: 10, top: 72, fontSize: 1.1, opacity: 0.65, expandUp: false },
  { left: 36, top: 62, fontSize: 0.95, opacity: 0.55, expandUp: false },
  { left: 62, top: 76, fontSize: 1.0, opacity: 0.6, expandUp: false },
  { left: 84, top: 66, fontSize: 1.25, opacity: 0.8, expandUp: false },
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
    setHoveredIndex(null);
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
      style={{ minHeight: "200px" }}
    >
      <div className="hidden md:block relative w-full" style={{ height: "180px" }}>
        {items.map((item, i) => {
          const pos = POSITIONS[i];
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={item.label}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="absolute will-change-transform pointer-events-none"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                zIndex: isHovered ? 50 : 10 - i,
                transformOrigin: "center center",
              }}
            >
              {/*
                Inner wrapper captures pointer events only over the text
                when collapsed. When expanded it includes the card, so the
                card stays readable while the mouse is over it.
              */}
              <div
                className={`
                  inline-flex rounded-card transition-all duration-300 ease-out pointer-events-auto
                  ${isHovered
                    ? "bg-paper border border-linen shadow-card-hover"
                    : "bg-transparent border-transparent"
                  }
                `}
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  flexDirection: pos.expandUp ? "column-reverse" : "column",
                  alignItems: "flex-start",
                  /*
                    Asymmetric padding + negative margin keeps the text
                    visually anchored while the card grows in one direction:
                    - expandUp:  padding top only,    negative top & left margin
                    - expandDown: padding bottom only, negative left margin
                  */
                  padding: isHovered
                    ? pos.expandUp
                      ? "16px 16px 0px 16px"
                      : "0px 16px 16px 16px"
                    : "0px",
                  margin: isHovered
                    ? pos.expandUp
                      ? "-16px 0px 0px -16px"
                      : "0px 0px 0px -16px"
                    : "0px",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex((prev) => (prev === i ? null : prev))}
              >
                {/* Anchor text — never shifts from its magnified position */}
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

                {/* Description — grows from the anchored word */}
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

      {/* Mobile */}
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
