"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { ReactNode, useRef, useState } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverLift?: number;
  glowColor?: "yellow" | "pink" | "blue" | "honey" | "none";
  tilt?: boolean;
}

const glowMap = {
  yellow: "hover:shadow-[0_8px_32px_rgba(242,211,0,0.15)]",
  pink: "hover:shadow-[0_8px_32px_rgba(233,30,143,0.12)]",
  blue: "hover:shadow-[0_8px_32px_rgba(68,201,212,0.12)]",
  honey: "hover:shadow-[0_8px_32px_rgba(216,154,39,0.15)]",
  none: "",
};

export function InteractiveCard({
  children,
  className = "",
  hoverScale = 1.01,
  hoverLift = -4,
  glowColor = "none",
  tilt = false,
}: InteractiveCardProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -4, y: x * 4 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  if (reduced) {
    return (
      <div
        className={`transition-shadow duration-300 ${glowMap[glowColor]} ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`transition-shadow duration-300 ${glowMap[glowColor]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: hoverScale,
        y: hoverLift,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
    >
      {children}
    </motion.div>
  );
}
