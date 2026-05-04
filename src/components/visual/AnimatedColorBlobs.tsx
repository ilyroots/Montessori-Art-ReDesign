"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface BlobConfig {
  color: string;
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  opacity: number;
}

interface AnimatedColorBlobsProps {
  className?: string;
  intensity?: "subtle" | "medium" | "vibrant";
  blobs?: BlobConfig[];
}

const defaultBlobs: BlobConfig[] = [
  { color: "bg-bee-yellow", size: 180, x: "10%", y: "20%", duration: 18, delay: 0, opacity: 0.12 },
  { color: "bg-kids-blue", size: 140, x: "75%", y: "15%", duration: 22, delay: 2, opacity: 0.10 },
  { color: "bg-creative-pink", size: 160, x: "60%", y: "70%", duration: 20, delay: 4, opacity: 0.09 },
  { color: "bg-honey", size: 120, x: "30%", y: "80%", duration: 16, delay: 1, opacity: 0.10 },
  { color: "bg-sage", size: 100, x: "85%", y: "55%", duration: 24, delay: 3, opacity: 0.08 },
];

const intensityMultipliers = {
  subtle: 0.5,
  medium: 1,
  vibrant: 1.4,
};

export function AnimatedColorBlobs({
  className = "",
  intensity = "medium",
  blobs = defaultBlobs,
}: AnimatedColorBlobsProps) {
  const reduced = useReducedMotion();
  const mult = intensityMultipliers[intensity];

  if (reduced) {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        {blobs.map((b, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-3xl ${b.color}`}
            style={{
              width: b.size * mult,
              height: b.size * mult,
              left: b.x,
              top: b.y,
              opacity: b.opacity * mult,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.color}`}
          style={{
            width: b.size * mult,
            height: b.size * mult,
            left: b.x,
            top: b.y,
            opacity: b.opacity * mult,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 20, -10, 15, 0],
            y: [0, -15, 10, -20, 0],
            scale: [1, 1.08, 0.95, 1.05, 1],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
