import { createMetadata } from "@/lib/seo";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata({
  title: "First Drawing Lessons — Coming Soon",
  description:
    "A free sequence of early drawing activities for toddlers and young children. Get notified when the lessons are ready.",
});

const plannedSections = [
  "Scribble stage activities (ages 1–2)",
  "Controlled mark-making (ages 2–3)",
  "Shape and form discovery (ages 3–4)",
  "Representational drawing (ages 4–5)",
  "Material recommendations by stage",
];

export default function DrawingLessonsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28 bg-ivory">
        <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="blurIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-sage/10 flex items-center justify-center mb-6">
              <BookOpen size={28} className="text-sage" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] mb-5">
              First Drawing Lessons
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed max-w-xl mx-auto mb-8">
              A free sequence of early drawing activities for toddlers and young
              children — coming soon.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} variant="fadeUp">
            <StaggerContainer className="flex flex-wrap justify-center gap-3 mb-10" staggerDelay={0.05}>
              {plannedSections.map((item) => (
                <StaggerItem key={item}>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-paper border border-linen px-3 py-1.5 text-sm text-charcoal/70">
                    <BookOpen size={14} className="text-sage" />
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
                Enter your email and we&apos;ll send you the lessons as soon as they&apos;re available.
              </p>
              <NewsletterSignup variant="inline" source="drawing_lessons_waitlist" showNameField />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-charcoal/60 mb-4">Looking for drawing curriculum now?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/curriculum/drawing"
                className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-charcoal transition-colors"
              >
                Explore Drawing Curriculum
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/bookstore"
                className="inline-flex items-center justify-center rounded-button border border-ink text-ink px-6 py-3 text-sm font-semibold hover:bg-ink hover:text-paper transition-colors"
              >
                View Art Books
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
