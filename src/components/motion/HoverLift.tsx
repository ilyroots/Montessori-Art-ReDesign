"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  lift?: number;
  shadow?: boolean;
}

/**
 * HoverLift — Lifts element on hover with optional shadow enhancement.
 * Desktop-only hover effect. Mobile touch devices get no hover lift.
 * Uses whileHover so it only applies on devices that support hover.
 */
export function HoverLift({
  children,
  className = "",
  lift = 4,
  shadow = true,
}: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -lift,
        boxShadow: shadow
          ? "0 12px 40px rgba(61, 43, 31, 0.12)"
          : undefined,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
