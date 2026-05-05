import { createMetadata } from "@/lib/seo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Art Shelf Setup Guide — Coming Soon",
  description:
    "How to organize and present art materials in a Montessori prepared environment. Get notified when the guide is ready.",
});

const plannedSections = [
  "Shelf layout by age group",
  "Material organization principles",
  "Color-coding and labeling",
  "Rotation and refresh strategies",
  "Safety and accessibility checks",
];

export default function ArtShelfSetupPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28 bg-ivory">
        <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="blurIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-kids-blue/10 flex items-center justify-center mb-6">
              <FileText size={28} className="text-kids-blue" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-5">
              Art Shelf Setup Guide
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed max-w-xl mx-auto mb-8">
              How to organize and present art materials in a Montessori prepared
              environment — coming soon.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} variant="fadeUp">
            <StaggerContainer className="flex flex-wrap justify-center gap-3 mb-10" staggerDelay={0.05}>
              {plannedSections.map((item) => (
                <StaggerItem key={item}>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-paper border border-linen px-3 py-1.5 text-sm text-charcoal/70">
                    <FileText size={14} className="text-kids-blue" />
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-canvas">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="blurIn">
            <div className="bg-paper border border-linen rounded-card p-8 shadow-card">
              <h2 className="font-serif text-2xl font-semibold text-ink text-center mb-3">
                Get Notified When It&apos;s Ready
              </h2>
              <p className="text-sm text-charcoal/60 text-center mb-6">
                Enter your email and we&apos;ll send you the guide as soon as it&apos;s available.
              </p>
              <NewsletterSignup variant="inline" source="art_shelf_setup_waitlist" showNameField />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-charcoal/60 mb-4">Want to set up your art shelf now?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/training/art-shelf"
                className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
              >
                View Art Shelf Training
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/art-supplies"
                className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-6 py-3 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors"
              >
                Browse Art Supplies
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
