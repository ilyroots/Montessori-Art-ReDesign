"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface HorizontalShowcaseProps {
  children: ReactNode;
  className?: string;
  gap?: number;
  cardWidth?: string;
  showArrows?: boolean;
  showFade?: boolean;
}

export function HorizontalShowcase({
  children,
  className = "",
  gap = 20,
  cardWidth = "320px",
  showArrows = true,
  showFade = true,
}: HorizontalShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
        style={{ gap: `${gap}px` }}
      >
        {children}
      </div>

      {/* Gradient fade edges */}
      {showFade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ivory to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ivory to-transparent z-10" />
        </>
      )}

      {/* Arrow controls */}
      {showArrows && (
        <div className="hidden md:flex items-center justify-center gap-3 mt-4">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-linen bg-paper flex items-center justify-center text-charcoal hover:text-honey hover:border-honey/30 transition-colors shadow-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-linen bg-paper flex items-center justify-center text-charcoal hover:text-honey hover:border-honey/30 transition-colors shadow-sm"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

    </div>
  );
}

interface ShowcaseCardProps {
  children: ReactNode;
  className?: string;
  width?: string;
}

export function ShowcaseCard({ children, className = "", width = "320px" }: ShowcaseCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div
        className={`snap-start flex-shrink-0 ${className}`}
        style={{ width }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`snap-start flex-shrink-0 ${className}`}
      style={{ width }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
