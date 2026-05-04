import { createMetadata } from "@/lib/seo";
import { FakeLoginCard } from "@/components/academy/FakeLoginCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata = createMetadata({
  title: "Start Free — Nature of Art Academy",
  description: "Create your free learning account. No credit card. Start with the Color Mixing Starter Path and save your progress.",
});

export default function AcademyStartPage() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-4">
              Start Your Free Academy Account
            </h1>
            <p className="text-charcoal/70">
              Create your free learning account. No credit card. Start with the Color Mixing Starter Path and save your progress.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <FakeLoginCard />
        </ScrollReveal>
      </div>
    </section>
  );
}
