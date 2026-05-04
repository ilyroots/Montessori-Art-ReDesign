"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface FunnelCTASectionProps {
  overline?: string;
  headline: string;
  subheadline: string;
  benefits: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustText?: string;
  variant?: "light" | "dark";
  className?: string;
}

export function FunnelCTASection({
  overline,
  headline,
  subheadline,
  benefits,
  primaryCta,
  secondaryCta,
  trustText,
  variant = "light",
  className,
}: FunnelCTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section className={`py-20 sm:py-28 ${className ?? (isDark ? "bg-ink" : "bg-ivory")}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          {overline && (
            <p
              className={`text-xs uppercase tracking-[0.15em] font-semibold mb-5 ${
                isDark ? "text-bee-yellow" : "text-honey"
              }`}
            >
              {overline}
            </p>
          )}
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] mb-5 ${
              isDark ? "text-paper" : "text-ink"
            }`}
          >
            {headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className={`text-base sm:text-lg mb-10 max-w-2xl mx-auto ${
              isDark ? "text-canvas/80" : "text-charcoal/80"
            }`}
          >
            {subheadline}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <ul className="inline-block text-left mb-10 space-y-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className={`flex items-start gap-3 text-sm sm:text-base ${
                  isDark ? "text-canvas/90" : "text-charcoal/80"
                }`}
              >
                <Check
                  size={18}
                  className={`mt-0.5 shrink-0 ${isDark ? "text-bee-yellow" : "text-sage"}`}
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href={primaryCta.href}
              className={`inline-flex items-center justify-center rounded-button px-8 py-4 text-base font-semibold transition-colors duration-200 ${
                isDark
                  ? "bg-bee-yellow text-ink hover:bg-bee-yellow/90"
                  : "bg-ink text-paper hover:bg-charcoal"
              }`}
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`inline-flex items-center justify-center rounded-button border px-8 py-4 text-base font-semibold transition-colors duration-200 ${
                  isDark
                    ? "border-paper/30 text-paper hover:bg-paper/10"
                    : "border-ink text-ink hover:bg-ink hover:text-paper"
                }`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </ScrollReveal>

        {trustText && (
          <ScrollReveal delay={0.25}>
            <p
              className={`text-xs ${
                isDark ? "text-canvas/50" : "text-charcoal/50"
              }`}
            >
              {trustText}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
