"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ScrollStepProgressProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

export function ScrollStepProgress({
  steps,
  title = "Six Steps to Art in the Prepared Environment",
  subtitle = "The Nature of Art Method guides educators through a proven approach to bringing visual arts into Montessori classrooms and homeschool spaces.",
}: ScrollStepProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32 bg-paper overflow-hidden">
      <div className="absolute inset-0 honeycomb-accent opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span
            className="section-label justify-center mb-5"
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            The Method
          </motion.span>
          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-5"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-charcoal/70 text-base sm:text-lg leading-relaxed"
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Steps with vertical progress line */}
        <div className="relative max-w-4xl mx-auto">
          {/* Progress line — desktop */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-linen hidden sm:block">
            {!reduced && (
              <motion.div
                className="absolute top-0 left-0 w-full bg-honey origin-top"
                style={{ height: lineHeight }}
              />
            )}
          </div>

          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, index) => (
              <StepItem
                key={step.number}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
  isLast,
  reduced,
}: {
  step: Step;
  index: number;
  isLast: boolean;
  reduced: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
        isEven ? "" : "lg:text-right"
      }`}
    >
      {/* Number + Content */}
      <motion.div
        className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
        initial={reduced ? {} : { opacity: 0, x: isEven ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`relative ${isEven ? "" : "lg:text-right"}`}>
          {/* Large number */}
          <span className="block font-serif text-7xl sm:text-8xl lg:text-9xl font-bold text-honey/8 leading-none mb-2 select-none">
            {step.number}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink -mt-6 sm:-mt-8 relative">
            {step.title}
          </h3>
        </div>
      </motion.div>

      {/* Description card */}
      <motion.div
        className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}
        initial={reduced ? {} : { opacity: 0, x: isEven ? 40 : -40, rotateY: isEven ? 6 : -6 }}
        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d", perspective: 800 }}
      >
        <div
          className={`relative bg-ivory border border-linen rounded-card p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 ${
            isEven ? "lg:border-l-4 lg:border-l-honey/30" : "lg:border-r-4 lg:border-r-honey/30"
          }`}
        >
          <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg">
            {step.description}
          </p>
        </div>
      </motion.div>

      {/* Timeline node — desktop */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className={`w-4 h-4 rounded-full border-2 border-paper shadow-sm ${
            isInView ? "bg-honey" : "bg-linen"
          }`}
          initial={reduced ? {} : { scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {!reduced && isInView && (
          <motion.div
            className="absolute inset-0 rounded-full bg-honey/30"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
          />
        )}
      </div>
    </div>
  );
}
