"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";

type RevealVariant =
  | "fadeUp"
  | "fadeIn"
  | "scaleUp"
  | "slideLeft"
  | "slideRight"
  | "blurIn"
  | "rotateIn"
  | "clipReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  variant?: RevealVariant;
  amount?: number;
}

const variantInitials: Record<RevealVariant, { opacity: number; y?: number; scale?: number; x?: number; filter?: string; rotate?: number; clipPath?: string }> = {
  fadeUp: { opacity: 0, y: 24 },
  fadeIn: { opacity: 0 },
  scaleUp: { opacity: 0, scale: 0.96 },
  slideLeft: { opacity: 0, x: -40 },
  slideRight: { opacity: 0, x: 40 },
  blurIn: { opacity: 0, filter: "blur(8px)", y: 16 },
  rotateIn: { opacity: 0, rotate: -6, scale: 0.92 },
  clipReveal: { opacity: 0, clipPath: "inset(8% 8% 8% 8%)" },
};

const variantTargets: Record<RevealVariant, { opacity: number; y?: number; scale?: number; x?: number; filter?: string; rotate?: number; clipPath?: string }> = {
  fadeUp: { opacity: 1, y: 0 },
  fadeIn: { opacity: 1 },
  scaleUp: { opacity: 1, scale: 1 },
  slideLeft: { opacity: 1, x: 0 },
  slideRight: { opacity: 1, x: 0 },
  blurIn: { opacity: 1, filter: "blur(0px)", y: 0 },
  rotateIn: { opacity: 1, rotate: 0, scale: 1 },
  clipReveal: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 24,
  once = true,
  variant = "fadeUp",
  amount,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once, margin: "-80px", amount });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const initial: { opacity: number; y?: number; x?: number; scale?: number; filter?: string; rotate?: number; clipPath?: string } =
    variant === "fadeUp" ? { opacity: 0, y } : variantInitials[variant];
  const target: { opacity: number; y?: number; x?: number; scale?: number; filter?: string; rotate?: number; clipPath?: string } =
    variant === "fadeUp" ? { opacity: 1, y: 0 } : variantTargets[variant];

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
  amount?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
  amount,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once, margin: "-60px", amount });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

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

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
  variant?: "fadeUp" | "scaleUp" | "slideLeft" | "slideRight" | "blurIn";
}

export function StaggerItem({
  children,
  className = "",
  y = 20,
  variant = "fadeUp",
}: StaggerItemProps) {
  const reduced = useReducedMotion();

  const variantsMap: Record<string, Variants> = {
    fadeUp: {
      hidden: { opacity: 0, y },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.94 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -30 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: 30 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    },
    blurIn: {
      hidden: { opacity: 0, filter: "blur(6px)", y: 12 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={variantsMap[variant]} className={className}>
      {children}
    </motion.div>
  );
}
