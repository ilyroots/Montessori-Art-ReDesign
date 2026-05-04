import { createMetadata } from "@/lib/seo";
import { FakeLoginCard } from "@/components/academy/FakeLoginCard";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata = createMetadata({
  title: "Start Free — Nature of Art Academy",
  description: "Create your free learning account. No credit card. Start with the Color Mixing Starter Path and save your progress.",
});

export default function AcademyStartPage() {
  return (
    <div className="min-h-screen bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="relative flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <ScrollReveal>
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <span className="font-serif text-2xl font-semibold text-ink">Nature of Art</span>
                <span className="block text-xs uppercase tracking-[0.2em] text-honey font-semibold mt-1">Academy</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="text-center mb-6">
              <h1 className="font-serif text-2xl font-semibold text-ink tracking-[-0.02em] mb-2">
                Start Your Free Account
              </h1>
              <p className="text-sm text-charcoal/60">
                No credit card required. Begin the Color Mixing Starter Path today.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FakeLoginCard />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-6 text-center">
              <p className="text-sm text-charcoal/60">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-honey hover:text-honey-dark transition-colors">
                  Log in
                </Link>
              </p>
              <p className="text-xs text-charcoal/40 mt-3">
                Temporary prototype signup for concepting only. Real accounts and billing will be connected later.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
