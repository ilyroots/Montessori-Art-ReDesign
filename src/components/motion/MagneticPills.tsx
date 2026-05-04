"use client";

import React, { useRef, useEffect, useCallback } from "react";

export interface PillItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

interface MagneticPillsProps {
  items: PillItem[];
  className?: string;
}

/**
 * Proximity-based hover effect inspired by Shopify Editions.
 * Pills scale up and gravitate toward the cursor based on distance.
 */
export function MagneticPills({ items, className = "" }: MagneticPillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLAnchorElement | HTMLSpanElement | null)[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const isHoveringRef = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    isHoveringRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
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

      pillRefs.current.forEach((pill) => {
        if (!pill) return;
        const rect = pill.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Pill center relative to container
        const px = rect.left - containerRect.left + rect.width / 2;
        const py = rect.top - containerRect.top + rect.height / 2;

        const dx = mx - px;
        const dy = my - py;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Interaction radius (px)
        const radius = 220;
        // Max scale multiplier
        const maxScale = 1.35;
        // Max magnetic pull (px)
        const maxPull = 18;

        if (distance < radius && isHoveringRef.current) {
          const progress = 1 - distance / radius;
          // Smooth easing
          const eased = progress * progress * (3 - 2 * progress);
          const scale = 1 + (maxScale - 1) * eased;
          const pull = maxPull * eased;
          const tx = (dx / distance) * pull || 0;
          const ty = (dy / distance) * pull || 0;

          pill.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
          pill.style.zIndex = "10";
        } else {
          pill.style.transform = "translate(0px, 0px) scale(1)";
          pill.style.zIndex = "1";
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
      className={`relative select-none ${className}`}
      style={{ minHeight: "320px" }}
    >
      {items.map((item, i) => {
        // Scatter pills using a pseudo-random grid with varying sizes
        const row = Math.floor(i / 4);
        const col = i % 4;
        const offsetX = (Math.sin(i * 1.7) * 8) + (col * 24);
        const offsetY = (Math.cos(i * 2.3) * 10) + (row * 18);
        const fontSize = 0.9 + Math.sin(i * 3.1) * 0.15; // 0.75rem – 1.05rem range
        const opacity = 0.65 + Math.cos(i * 1.9) * 0.25;

        const baseClasses =
          "inline-flex items-center gap-2 bg-paper border border-linen rounded-full px-5 py-2.5 text-charcoal/80 whitespace-nowrap transition-shadow duration-300 hover:shadow-card-hover cursor-default will-change-transform";

        const style: React.CSSProperties = {
          position: "absolute",
          left: `${12 + offsetX}%`,
          top: `${10 + offsetY}%`,
          fontSize: `${fontSize}rem`,
          opacity,
        };

        if (item.href) {
          return (
            <a
              key={item.label}
              ref={(el) => { pillRefs.current[i] = el; }}
              href={item.href}
              className={`${baseClasses} hover:text-honey hover:border-honey/40`}
              style={style}
            >
              {item.icon && (
                <span className="text-honey shrink-0">{item.icon}</span>
              )}
              <span>{item.label}</span>
            </a>
          );
        }

        return (
          <span
            key={item.label}
            ref={(el) => { pillRefs.current[i] = el; }}
            className={baseClasses}
            style={style}
          >
            {item.icon && (
              <span className="text-honey shrink-0">{item.icon}</span>
            )}
            <span>{item.label}</span>
          </span>
        );
      })}
    </div>
  );
}
