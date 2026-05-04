// ============================================================
// Motion Variants — Reusable Framer Motion Configurations
// ============================================================
// Centralized animation variants for consistency across the site.
// All variants respect reduced-motion preferences via CSS.
//
// Usage:
//   import { fadeUp, staggerContainer } from "@/components/motion/motionVariants";
//   <motion.div variants={fadeUp} />
//   <motion.div variants={staggerContainer} />
// ============================================================

import { Variants } from "framer-motion";

// Easing curves
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;
export const easeInOutQuad = [0.45, 0, 0.55, 1] as const;
export const easeSpring = { type: "spring", stiffness: 300, damping: 30 } as const;

// Fade up (default scroll reveal)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

// Fade in (no movement)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

// Scale up (for cards, images)
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

// Slide in from left
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

// Slide in from right
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

// Blur in (premium reveal)
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 16 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

// Rotate in (for icons, badges)
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -8, scale: 0.9 },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

// Clip reveal (for images, sections)
export const clipReveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(10% 10% 10% 10%)" },
  show: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Fast stagger (for smaller groups)
export const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

// Stagger item (child of staggerContainer)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

// Hero headline
export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

// Hero subheadline
export const heroSubheadline: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: easeOutExpo },
  },
};

// Button group
export const heroButtons: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3, ease: easeOutExpo },
  },
};

// Floating layer (subtle continuous motion)
export const floatingLayer = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Image reveal (clip-path or scale)
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

// Card hover lift (used with whileHover)
export const hoverLift = {
  y: -4,
  transition: { duration: 0.25, ease: easeOutExpo },
};

// Card hover shadow (used with whileHover)
export const hoverShadow = {
  boxShadow: "0 12px 40px rgba(61, 43, 31, 0.12)",
  transition: { duration: 0.25 },
};

// Brush mask reveal (for creative image reveals)
export const brushMaskReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1, ease: easeOutExpo },
  },
};

// SVG draw-on (for paths, dividers, icons)
export const drawSVG: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: easeOutExpo },
  },
};

// Counter / number animation helper
export const countUp = {
  hidden: { opacity: 0, y: 10 },
  show: (value: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  }),
};

// Path reveal for learning pathways
export const pathwayLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: easeOutExpo },
  },
};

// Honeycomb cell reveal
export const honeycombReveal: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
};

// Price card emphasis (for pricing toggle)
export const priceEmphasis: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: easeSpring,
  },
};
