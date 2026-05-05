"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Sparkles, Eye, Brain, Heart, Compass } from "lucide-react";

const pillars = [
  {
    icon: <Eye size={20} />,
    title: "Observation",
    description:
      "Long-term observation of how children naturally process, explore, and express through visual materials.",
    color: "bg-kids-blue/10 text-kids-blue border-kids-blue/20",
  },
  {
    icon: <Brain size={20} />,
    title: "Sequence",
    description:
      "Developmentally sequenced experiences that honor each child's phase of artistic growth — from scribble to form to expression.",
    color: "bg-honey/10 text-honey border-honey/20",
  },
  {
    icon: <Heart size={20} />,
    title: "Process",
    description:
      "Process-based art that prioritizes exploration, material literacy, and creative confidence over prescribed outcomes.",
    color: "bg-creative-pink/10 text-creative-pink border-creative-pink/20",
  },
  {
    icon: <Compass size={20} />,
    title: "Environment",
    description:
      "The prepared environment as a co-teacher — every shelf, material, and invitation designed to support independent artistic work.",
    color: "bg-sage/10 text-sage border-sage/20",
  },
];

export function ScienceArtMethodSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 lg:py-40 bg-canvas overflow-hidden">
      {/* Layered background depth */}
      <div className="absolute inset-0 watercolor-wash pointer-events-none" />
      <div className="absolute inset-0 honeycomb-accent opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge / Seal */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 mb-6 shadow-lifted"
            initial={reduced ? {} : { opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles size={14} className="text-bee-yellow" />
            <span className="text-xs font-semibold text-paper uppercase tracking-wider">
              Core Framework
            </span>
          </motion.div>

          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-ink tracking-[-0.02em] mb-5 leading-tight"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            The Science Art Method™
          </motion.h2>

          <motion.p
            className="text-charcoal/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            A distinctive, research-informed framework for children&apos;s visual arts education.
            Developed by Spramani Elaun through decades of classroom observation and practice.
          </motion.p>
        </div>

        {/* Central Method Card */}
        <motion.div
          className="relative max-w-3xl mx-auto mb-16 sm:mb-20"
          initial={reduced ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative bg-paper border border-linen rounded-card p-8 sm:p-12 shadow-lifted">
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-honey/20 rounded-tl-card" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-honey/20 rounded-br-card" />

            <blockquote className="relative">
              <span className="absolute -top-2 -left-2 text-5xl font-serif text-honey/20 leading-none select-none">
                &ldquo;
              </span>
              <p className="font-serif text-xl sm:text-2xl text-ink leading-relaxed text-center mb-6">
                Montessori provides the learning environment.
                <br />
                <span className="text-honey">Nature of Art® provides the art pedagogy.</span>
              </p>
              <span className="absolute -bottom-6 -right-2 text-5xl font-serif text-honey/20 leading-none select-none">
                &rdquo;
              </span>
            </blockquote>

            <div className="text-center mt-8 pt-6 border-t border-linen">
              <p className="text-sm text-charcoal/60">
                The Science Art Method™ is taught exclusively through{" "}
                <span className="font-medium text-ink">The Art Teaching Blueprint™</span> certification.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Four Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group relative bg-paper border border-linen rounded-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              initial={reduced ? {} : { opacity: 0, y: 28, rotateX: 8 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformStyle: "preserve-3d", perspective: 800 }}
            >
              <div
                className={`w-11 h-11 rounded-full border flex items-center justify-center mb-4 ${pillar.color} group-hover:scale-105 transition-transform duration-300`}
              >
                {pillar.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2 group-hover:text-honey transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
