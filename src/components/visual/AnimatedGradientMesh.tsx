"use client";

import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface AnimatedGradientMeshProps {
  className?: string;
  variant?: "warm" | "cool" | "sunset" | "forest" | "canvas";
  intensity?: "subtle" | "medium" | "bold";
  animate?: boolean;
}

const meshConfigs = {
  warm: {
    colors: [
      "rgba(216, 154, 39, 0.35)",
      "rgba(242, 211, 0, 0.20)",
      "rgba(233, 30, 143, 0.12)",
      "rgba(244, 238, 220, 0.60)",
    ],
    positions: ["0% 0%", "100% 0%", "100% 100%", "0% 100%"],
  },
  cool: {
    colors: [
      "rgba(68, 201, 212, 0.25)",
      "rgba(167, 184, 154, 0.20)",
      "rgba(244, 238, 220, 0.50)",
      "rgba(216, 154, 39, 0.10)",
    ],
    positions: ["0% 0%", "100% 0%", "100% 100%", "0% 100%"],
  },
  sunset: {
    colors: [
      "rgba(216, 154, 39, 0.40)",
      "rgba(233, 30, 143, 0.18)",
      "rgba(242, 211, 0, 0.25)",
      "rgba(244, 238, 220, 0.50)",
    ],
    positions: ["0% 0%", "100% 0%", "100% 100%", "0% 100%"],
  },
  forest: {
    colors: [
      "rgba(167, 184, 154, 0.30)",
      "rgba(216, 154, 39, 0.15)",
      "rgba(68, 201, 212, 0.12)",
      "rgba(244, 238, 220, 0.55)",
    ],
    positions: ["0% 0%", "100% 0%", "100% 100%", "0% 100%"],
  },
  canvas: {
    colors: [
      "rgba(244, 238, 220, 0.80)",
      "rgba(216, 154, 39, 0.08)",
      "rgba(167, 184, 154, 0.10)",
      "rgba(68, 201, 212, 0.06)",
    ],
    positions: ["0% 0%", "100% 0%", "100% 100%", "0% 100%"],
  },
};

const intensityMultipliers = {
  subtle: 0.5,
  medium: 1,
  bold: 1.4,
};

export function AnimatedGradientMesh({
  className = "",
  variant = "warm",
  intensity = "medium",
  animate = true,
}: AnimatedGradientMeshProps) {
  const reduced = useReducedMotion();
  const config = meshConfigs[variant];
  const mult = intensityMultipliers[intensity];

  const gradientStops = config.colors
    .map((color, i) => {
      // Apply intensity multiplier to alpha
      const rgba = color.replace(
        /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/,
        (_, r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${Math.min(1, parseFloat(a) * mult)})`
      );
      return `radial-gradient(ellipse at ${config.positions[i]}, ${rgba} 0%, transparent 60%)`;
    })
    .join(", ");

  const animationStyle =
    animate && !reduced
      ? {
          animation: "gradient-mesh-shift 12s ease-in-out infinite",
          backgroundSize: "200% 200%",
        }
      : {};

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: gradientStops,
        ...animationStyle,
      }}
    />
  );
}
