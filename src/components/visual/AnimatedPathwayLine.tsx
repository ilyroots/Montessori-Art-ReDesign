"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface Step {
  label: string;
  description?: string;
  status?: "completed" | "active" | "locked" | "upcoming";
}

interface AnimatedPathwayLineProps {
  steps: Step[];
  className?: string;
  orientation?: "horizontal" | "vertical";
}

const statusColors = {
  completed: "bg-sage border-sage",
  active: "bg-honey border-honey",
  locked: "bg-linen border-linen",
  upcoming: "bg-paper border-linen",
};

const statusTextColors = {
  completed: "text-sage",
  active: "text-honey",
  locked: "text-charcoal/30",
  upcoming: "text-charcoal/60",
};

export function AnimatedPathwayLine({
  steps,
  className = "",
  orientation = "horizontal",
}: AnimatedPathwayLineProps) {
  const reduced = useReducedMotion();
  const isHorizontal = orientation === "horizontal";

  if (isHorizontal) {
    return (
      <div className={`relative ${className}`}>
        {/* Connecting line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-linen">
          {!reduced && (
            <motion.div
              className="h-full bg-gradient-to-r from-sage via-honey to-honey/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
            />
          )}
        </div>

        <div className="relative flex justify-between">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center max-w-[120px]"
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={reduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold shadow-sm z-10 ${statusColors[step.status || "upcoming"]} ${
                  step.status === "locked" ? "text-charcoal/30" : step.status === "upcoming" ? "text-charcoal/60" : "text-paper"
                }`}
              >
                {step.status === "completed" ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  String(i + 1).padStart(2, "0")
                )}
              </div>
              <p className={`mt-3 text-xs font-semibold ${statusTextColors[step.status || "upcoming"]}`}>
                {step.label}
              </p>
              {step.description && (
                <p className="text-[10px] text-charcoal/50 mt-1 leading-tight">{step.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Vertical orientation
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-linen">
        {!reduced && (
          <motion.div
            className="w-full bg-gradient-to-b from-sage via-honey to-honey/30"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />
        )}
      </div>

      <div className="relative space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4"
            initial={reduced ? {} : { opacity: 0, x: -12 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold shadow-sm shrink-0 ${statusColors[step.status || "upcoming"]} ${
                step.status === "locked" ? "text-charcoal/30" : step.status === "upcoming" ? "text-charcoal/60" : "text-paper"
              }`}
            >
              {step.status === "completed" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                String(i + 1).padStart(2, "0")
              )}
            </div>
            <div>
              <p className={`text-sm font-semibold ${statusTextColors[step.status || "upcoming"]}`}>
                {step.label}
              </p>
              {step.description && (
                <p className="text-xs text-charcoal/60 mt-0.5">{step.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
