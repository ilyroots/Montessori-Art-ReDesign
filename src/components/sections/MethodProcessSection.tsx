"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface MethodProcessSectionProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function MethodProcessSection({
  steps,
  title = "The Nature of Art Method",
  subtitle = "A proven approach to bringing visual arts into the prepared environment.",
  className,
}: MethodProcessSectionProps) {
  return (
    <section className={`py-20 sm:py-28 ${className ?? "bg-canvas"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 sm:mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4">
              {title}
            </h2>
            <p className="text-charcoal/70 text-base sm:text-lg max-w-2xl">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="space-y-12 sm:space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <StaggerItem key={step.number}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Number + Title block */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="block font-serif text-7xl sm:text-8xl lg:text-9xl font-bold text-honey/10 leading-none mb-2 select-none">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink -mt-4 sm:-mt-6 relative">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="lg:pl-8 lg:border-l border-linen">
                      <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
