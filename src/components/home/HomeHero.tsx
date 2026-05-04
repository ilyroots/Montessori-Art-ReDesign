"use client";

import { motion } from "framer-motion";
import { HeroActionCard } from "@/components/sections/HeroActionCard";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { AnimatedGradientMesh } from "@/components/visual/AnimatedGradientMesh";
import { FloatingAccentShapes } from "@/components/motion/FloatingAccentShapes";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ivory pt-20">
      <AnimatedGradientMesh variant="warm" intensity="subtle" className="opacity-60" />
      <AnimatedColorBlobs intensity="subtle" className="opacity-25" />
      <FloatingAccentShapes />
      <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <motion.p
          className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          The Modern Montessori Art Atelier
        </motion.p>

        <motion.h1
          className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-6"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Teach Children Visual Arts With{" "}
          <span className="text-honey">Structure, Freedom,</span>{" "}
          and <span className="italic">Wonder.</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Nature of Art® helps Montessori guides, homeschool families, and educators
          bring painting, drawing, clay, color theory, and process-based art into the
          prepared environment.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {["Curriculum", "Certification", "Free Resources"].map((badge) => (
            <span key={badge} className="text-xs text-charcoal/50">{badge}</span>
          ))}
        </motion.div>

        <HeroActionCard />
      </div>
    </section>
  );
}
