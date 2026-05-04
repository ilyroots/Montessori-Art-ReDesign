import { createMetadata } from "@/lib/seo";
import { BundlePlanner } from "@/components/academy/BundlePlanner";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata = createMetadata({
  title: "Art Box & Bundles — Nature of Art Academy",
  description: "Future supply kits and product bundles matched to each learning path.",
});

export default function AcademyBundlesPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.02em] mb-4">
              Art Box & Supply Bundles
            </h1>
            <p className="text-charcoal/70 max-w-xl mx-auto">
              Curated supply kits matched to each learning path. Concepts for future production — no checkout yet.
            </p>
          </div>
        </ScrollReveal>

        <BundlePlanner />

        <ScrollReveal delay={0.2}>
          <div className="mt-12 bg-paper border border-linen rounded-card p-6 text-center">
            <p className="text-sm text-charcoal/70">
              Want to browse existing curriculum and books? Visit the{" "}
              <a href="/art-supplies" className="text-honey hover:underline">Art Supplies</a> page or the{" "}
              <a href="/bookstore" className="text-honey hover:underline">Bookstore</a>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
