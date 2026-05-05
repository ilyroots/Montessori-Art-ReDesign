"use client";

import { ReactNode } from "react";

interface HoneycombPatternBackgroundProps {
  children: ReactNode;
  className?: string;
  opacity?: number;
  color?: "honey" | "ink" | "charcoal";
}

export function HoneycombPatternBackground({
  children,
  className = "",
  opacity = 0.03,
  color = "honey",
}: HoneycombPatternBackgroundProps) {
  const colorMap = {
    honey: "#D89A27",
    ink: "#1C1B18",
    charcoal: "#3D3A34",
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(colorMap[color])}' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
