"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface SoftGradientFieldProps {
  children: ReactNode;
  className?: string;
  variant?: "warm" | "cool" | "honey" | "sage" | "rose";
  animate?: boolean;
}

const gradientMap = {
  warm: "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(216, 154, 39, 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 60%, rgba(242, 211, 0, 0.04) 0%, transparent 60%)",
  cool: "radial-gradient(ellipse 70% 50% at 30% 30%, rgba(68, 201, 212, 0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 70% 70%, rgba(167, 184, 154, 0.04) 0%, transparent 60%)",
  honey: "radial-gradient(ellipse 75% 55% at 25% 45%, rgba(216, 154, 39, 0.07) 0%, transparent 55%), radial-gradient(ellipse 55% 75% at 75% 55%, rgba(242, 211, 0, 0.05) 0%, transparent 55%)",
  sage: "radial-gradient(ellipse 70% 60% at 40% 30%, rgba(167, 184, 154, 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 60% 70%, rgba(68, 201, 212, 0.03) 0%, transparent 60%)",
  rose: "radial-gradient(ellipse 65% 55% at 35% 40%, rgba(233, 30, 143, 0.04) 0%, transparent 60%), radial-gradient(ellipse 55% 65% at 65% 60%, rgba(216, 154, 39, 0.03) 0%, transparent 60%)",
};

export function SoftGradientField({
  children,
  className = "",
  variant = "warm",
  animate = true,
}: SoftGradientFieldProps) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: gradientMap[variant] }}
      />
      {/* Animated secondary wash */}
      {!reduced && animate && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: gradientMap[variant] }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
