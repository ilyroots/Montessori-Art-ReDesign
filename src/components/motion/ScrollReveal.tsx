"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

type RevealVariant = "fadeUp" | "fadeIn" | "scaleUp" | "slideLeft" | "slideRight";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  variant?: RevealVariant;
}

const variantInitials: Record<RevealVariant, object> = {
  fadeUp: { opacity: 0, y: 24 },
  fadeIn: { opacity: 0 },
  scaleUp: { opacity: 0, scale: 0.96 },
  slideLeft: { opacity: 0, x: -40 },
  slideRight: { opacity: 0, x: 40 },
};

const variantTargets: Record<RevealVariant, object> = {
  fadeUp: { opacity: 1, y: 0 },
  fadeIn: { opacity: 1 },
  scaleUp: { opacity: 1, scale: 1 },
  slideLeft: { opacity: 1, x: 0 },
  slideRight: { opacity: 1, x: 0 },
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 24,
  once = true,
  variant = "fadeUp",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const initial = variant === "fadeUp" ? { opacity: 0, y } : variantInitials[variant];
  const target = variant === "fadeUp" ? { opacity: 1, y: 0 } : variantTargets[variant];

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? target : initial}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
