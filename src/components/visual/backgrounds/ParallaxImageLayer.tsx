"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface ParallaxImageLayerProps {
  src: string;
  alt: string;
  speed?: number; // -1 (moves slower) to 1 (moves faster), 0 = static
  className?: string;
  containerClassName?: string;
  overlayOpacity?: number;
  priority?: boolean;
}

export function ParallaxImageLayer({
  src,
  alt,
  speed = -0.3,
  className = "",
  containerClassName = "",
  overlayOpacity = 0.1,
  priority = false,
}: ParallaxImageLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * 15}%`, `${-speed * 15}%`]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName}`}>
      <motion.div
        className={`absolute inset-0 ${className}`}
        style={{ y: reduced ? 0 : y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
        />
        <div
          className="absolute inset-0 bg-ivory"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>
    </div>
  );
}
