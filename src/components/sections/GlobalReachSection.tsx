"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { Globe, Users, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { HoneycombPatternBackground } from "@/components/visual/backgrounds/HoneycombPatternBackground";
import { SoftGradientField } from "@/components/visual/backgrounds/SoftGradientField";

const stats = [
  {
    icon: <Globe size={18} />,
    value: "Global",
    label: "Reach",
    sub: "Across multiple continents",
  },
  {
    icon: <Users size={18} />,
    value: "Educators",
    label: "Worldwide",
    sub: "Teachers, guides & parents",
  },
  {
    icon: <BookOpen size={18} />,
    value: "20+",
    label: "Years",
    sub: "Of practice & development",
  },
  {
    icon: <GraduationCap size={18} />,
    value: "60+",
    label: "Training Videos",
    sub: "Professional development",
  },
];

const pinLocations = [
  { cx: 180, cy: 110, label: "North America", delay: 0 },
  { cx: 220, cy: 140, label: "South America", delay: 0.3 },
  { cx: 360, cy: 100, label: "Europe", delay: 0.6 },
  { cx: 390, cy: 125, label: "Africa", delay: 0.9 },
  { cx: 460, cy: 95, label: "Asia", delay: 1.2 },
  { cx: 520, cy: 155, label: "Oceania", delay: 1.5 },
];

function WorldMapSVG({ reduced }: { reduced: boolean }) {
  return (
    <svg
      viewBox="0 0 640 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Continent silhouettes — stylized, abstract */}
      <g opacity="0.10" fill="currentColor" className="text-honey">
        {/* North America */}
        <path d="M80 60 L160 50 L200 90 L180 140 L120 130 L90 100 Z" />
        {/* South America */}
        <path d="M150 160 L200 155 L220 210 L190 260 L160 240 L140 200 Z" />
        {/* Europe */}
        <path d="M330 55 L380 50 L400 80 L370 100 L340 90 Z" />
        {/* Africa */}
        <path d="M340 110 L390 105 L410 170 L370 220 L340 180 Z" />
        {/* Asia */}
        <path d="M420 50 L520 45 L560 90 L540 140 L480 130 L440 100 Z" />
        {/* Oceania */}
        <path d="M500 180 L550 175 L570 200 L540 220 L510 210 Z" />
      </g>

      {/* Orbit / connection lines */}
      {!reduced && (
        <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.15" className="text-honey">
          <motion.path
            d="M180 110 Q280 60 360 100"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M360 100 Q420 80 460 95"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M180 110 Q200 140 220 140"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
          />
          <motion.path
            d="M390 125 Q440 140 460 95"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M460 95 Q490 125 520 155"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          />
        </g>
      )}

      {/* Animated pins */}
      {pinLocations.map((pin) => (
        <g key={pin.label}>
          {/* Pulse ring */}
          {!reduced && (
            <motion.circle
              cx={pin.cx}
              cy={pin.cy}
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-honey"
              initial={{ r: 4, opacity: 0.6 }}
              animate={{ r: 16, opacity: 0 }}
              transition={{
                duration: 2.5,
                delay: pin.delay + 0.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeOut",
              }}
            />
          )}
          {/* Pin dot */}
          <motion.circle
            cx={pin.cx}
            cy={pin.cy}
            r="3.5"
            fill="currentColor"
            className="text-honey"
            initial={reduced ? {} : { scale: 0 }}
            animate={reduced ? {} : { scale: 1 }}
            transition={{ duration: 0.5, delay: pin.delay, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Crosshair */}
          {!reduced && (
            <>
              <motion.line
                x1={pin.cx - 8}
                y1={pin.cy}
                x2={pin.cx + 8}
                y2={pin.cy}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.25"
                className="text-honey"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: pin.delay + 0.2 }}
              />
              <motion.line
                x1={pin.cx}
                y1={pin.cy - 8}
                x2={pin.cx}
                y2={pin.cy + 8}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.25"
                className="text-honey"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: pin.delay + 0.2 }}
              />
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

export function GlobalReachSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <HoneycombPatternBackground opacity={0.02}>
      <SoftGradientField variant="warm" animate={false}>
        <section ref={ref} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <motion.span
                className="section-label justify-center mb-5"
                initial={reduced ? {} : { opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Global Reach
              </motion.span>
              <motion.h2
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-5"
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                A Trusted Resource for Educators{" "}
                <span className="text-honey">Across the Globe</span>
              </motion.h2>
              <motion.p
                className="text-charcoal/70 text-base sm:text-lg leading-relaxed"
                initial={reduced ? {} : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Nature of Art® has supported educators, schools, and families across multiple
                continents through curriculum, training, books, and a distinctive visual arts
                approach rooted in the Science Art Method™.
              </motion.p>
            </div>

            {/* World Map */}
            <motion.div
              className="relative max-w-4xl mx-auto mb-16 sm:mb-20"
              initial={reduced ? {} : { opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative bg-paper/60 border border-linen rounded-card p-6 sm:p-10 shadow-card backdrop-blur-sm">
                <WorldMapSVG reduced={reduced} />

                {/* Floating location labels — desktop only */}
                {!reduced && (
                  <>
                    {pinLocations.slice(0, 3).map((pin, i) => (
                      <motion.div
                        key={pin.label}
                        className="absolute hidden lg:flex items-center gap-1.5 bg-paper/90 backdrop-blur-sm border border-linen rounded-full px-2.5 py-1 shadow-soft"
                        style={{ left: `${(pin.cx / 640) * 100}%`, top: `${(pin.cy / 320) * 100}%` }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <MapPin size={10} className="text-honey" />
                        <span className="text-[10px] font-medium text-charcoal/70 whitespace-nowrap">{pin.label}</span>
                      </motion.div>
                    ))}
                  </>
                )}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="relative bg-paper/80 border border-linen rounded-card p-5 sm:p-6 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300 backdrop-blur-sm"
                  initial={reduced ? {} : { opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-9 h-9 mx-auto rounded-full bg-bee-yellow/10 flex items-center justify-center mb-3 text-honey">
                    {stat.icon}
                  </div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-charcoal/80 mb-0.5">{stat.label}</p>
                  <p className="text-xs text-charcoal/50">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SoftGradientField>
    </HoneycombPatternBackground>
  );
}
