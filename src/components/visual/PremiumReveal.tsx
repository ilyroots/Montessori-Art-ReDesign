"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface PremiumRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  type?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "blur" | "stagger-words";
  duration?: number;
}

export function PremiumReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  type = "slide-up",
  duration = 0.7,
}: PremiumRevealProps) {
  const ref = useRef<HTMLDivElement | HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once, margin: "-60px" });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    "slide-up": { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    "slide-left": { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    "slide-right": { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
    blur: { hidden: { opacity: 0, filter: "blur(10px)" }, visible: { opacity: 1, filter: "blur(0px)" } },
    "stagger-words": { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  if (type === "stagger-words" && typeof children === "string") {
    const words = children.split(" ");
    return (
      <motion.span
        ref={ref}
        className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.04, delayChildren: delay }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants[type].hidden}
      animate={isInView ? variants[type].visible : variants[type].hidden}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
