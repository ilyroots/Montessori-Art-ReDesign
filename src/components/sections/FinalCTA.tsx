"use client";

import Link from "next/link";

interface FinalCTAProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "default" | "dark";
}

export function FinalCTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "default",
}: FinalCTAProps) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "bg-espresso py-16 sm:py-24" : "bg-canvas py-16 sm:py-24"}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 ${
            isDark ? "text-paper" : "text-espresso"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 ${
            isDark ? "text-canvas/80" : "text-charcoal/70"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-button bg-terracotta px-8 py-4 text-base font-semibold text-paper hover:bg-terracotta-dark transition-colors"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center justify-center rounded-button border px-8 py-4 text-base font-semibold transition-colors ${
                isDark
                  ? "border-paper/30 text-paper hover:bg-paper/10"
                  : "border-espresso text-espresso hover:bg-espresso hover:text-paper"
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
