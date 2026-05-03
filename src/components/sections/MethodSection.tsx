"use client";

interface MethodStep {
  number: string;
  title: string;
  description: string;
}

interface MethodSectionProps {
  steps: MethodStep[];
  title?: string;
  subtitle?: string;
}

export function MethodSection({
  steps,
  title = "The Nature of Art Method",
  subtitle = "A proven approach to bringing visual arts into the prepared environment.",
}: MethodSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso mb-4">
            {title}
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-paper border border-linen rounded-card p-6 sm:p-8"
            >
              <span className="absolute -top-4 -left-2 font-serif text-6xl font-bold text-terracotta/10">
                {step.number}
              </span>
              <div className="relative">
                <h3 className="font-serif text-xl font-semibold text-espresso mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
