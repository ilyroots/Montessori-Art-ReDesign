"use client";

import { ReactNode } from "react";

interface PaperTextureBackgroundProps {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "light" | "medium";
  variant?: "warm" | "cool" | "neutral";
}

export function PaperTextureBackground({
  children,
  className = "",
  intensity = "subtle",
  variant = "warm",
}: PaperTextureBackgroundProps) {
  const intensityMap = {
    subtle: "opacity-[0.015]",
    light: "opacity-[0.025]",
    medium: "opacity-[0.04]",
  };

  const variantMap = {
    warm: "bg-[#FAF7EF]",
    cool: "bg-[#F4F6F0]",
    neutral: "bg-[#F8F6F2]",
  };

  return (
    <div className={`relative overflow-hidden ${variantMap[variant]} ${className}`}>
      {/* Grain texture overlay */}
      <div
        className={`absolute inset-0 pointer-events-none ${intensityMap[intensity]}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
      {/* Subtle paper fibers */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(139, 125, 107, 0.03) 2px,
            rgba(139, 125, 107, 0.03) 3px
          )`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
