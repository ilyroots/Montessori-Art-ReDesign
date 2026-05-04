"use client";

import { ReactNode } from "react";

interface LayeredSectionProps {
  children: ReactNode;
  className?: string;
  variant?: "ivory" | "canvas" | "paper" | "ink" | "gradient-warm" | "gradient-canvas";
  withTexture?: boolean;
  withWash?: boolean;
  withShapes?: boolean;
}

/**
 * LayeredSection — A section wrapper that combines background variants
 * with optional texture overlays, watercolor washes, and floating shapes.
 * Creates visual depth and editorial rhythm between page sections.
 */
export function LayeredSection({
  children,
  className = "",
  variant = "ivory",
  withTexture = false,
  withWash = false,
  withShapes = false,
}: LayeredSectionProps) {
  const bgClasses = {
    ivory: "bg-ivory",
    canvas: "bg-canvas",
    paper: "bg-paper",
    ink: "bg-ink",
    "gradient-warm": "bg-gradient-warm",
    "gradient-canvas": "bg-gradient-canvas",
  };

  return (
    <section className={`relative overflow-hidden ${bgClasses[variant]} ${className}`}>
      {withTexture && <div className="absolute inset-0 honeycomb-accent opacity-25 pointer-events-none" />}
      {withTexture && <div className="absolute inset-0 grain-overlay pointer-events-none" />}
      {withWash && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 15% 30%, rgba(216, 154, 39, 0.05) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 85% 70%, rgba(68, 201, 212, 0.04) 0%, transparent 70%)",
            }}
          />
        </div>
      )}
      {withShapes && (
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute top-[15%] right-[12%] w-8 h-8 rounded-full bg-bee-yellow/50 border-2 border-paper shadow-sm" />
          <div className="absolute top-[35%] right-[8%] w-5 h-5 rounded-full bg-kids-blue/40 border-2 border-paper shadow-sm" />
          <div className="absolute bottom-[25%] right-[18%] w-6 h-6 rounded-full bg-creative-pink/40 border-2 border-paper shadow-sm" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
