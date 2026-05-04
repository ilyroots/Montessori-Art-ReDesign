"use client";

interface BrushstrokeDividerProps {
  variant?: "wave" | "curve" | "slant";
  flip?: boolean;
  className?: string;
}

/**
 * BrushstrokeDivider — Organic section transition using SVG paths.
 * Creates a fluid, art-directed separation between sections.
 */
export function BrushstrokeDivider({
  variant = "wave",
  flip = false,
  className = "",
}: BrushstrokeDividerProps) {
  const paths = {
    wave: "M0,64 C240,120 480,0 720,64 C960,128 1200,0 1440,64 L1440,0 L0,0 Z",
    curve: "M0,96 C360,0 720,192 1080,96 C1260,48 1350,64 1440,80 L1440,0 L0,0 Z",
    slant: "M0,128 L480,0 L960,128 L1440,0 L1440,0 L0,0 Z",
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] sm:h-[60px] lg:h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[variant]} fill="currentColor" className="text-canvas" />
      </svg>
    </div>
  );
}
