import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { bookstoreExtract } from "@/config/publicContentExtract";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BookstoreCatalog } from "./BookstoreCatalog";
import { ExternalLink } from "lucide-react";
import { AnimatedColorBlobs } from "@/components/visual/AnimatedColorBlobs";
import { SectionTransition } from "@/components/visual/SectionTransition";
import { InteractiveCard } from "@/components/visual/InteractiveCard";

export const metadata = createMetadata({
  title: "Art Books & Curriculum",
  description:
    "Books and curriculum on Montessori art education by Spramani Elaun. Kids Painting, Drawing, Color Theory, Clay Modeling, and authoritative guides for educators.",
});

export default function BookstorePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <AnimatedColorBlobs intensity="subtle" className="opacity-25" />
        <div className="absolute inset-0 honeycomb-accent opacity-30 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 15% 30%, rgba(216, 154, 39, 0.05) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 85% 70%, rgba(68, 201, 212, 0.04) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <ScrollReveal>
                <p className="section-label mb-4">Art Books & Curriculum</p>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink tracking-[-0.02em] mb-6 leading-snug">
                  {bookstoreExtract.heroMessage}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-charcoal/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-lg">
                  Complete curriculum guides and authoritative books on Montessori art education — written by Spramani Elaun for educators who believe every child deserves quality art instruction.
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
              <ScrollReveal delay={0.1} variant="scaleUp">
                <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
                  <Image
                    src="/images/kids-painting-book.jpg"
                    alt="Kids Painting curriculum book by Spramani Elaun"
                    fill
                    className="object-cover"
                    sizes="40vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-paper border border-linen rounded-card p-3 shadow-card-hover rotate-[-2deg]">
                  <p className="font-hand text-sm text-creative-pink">16 titles available</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      <SectionTransition variant="swatches" height="md" />

      {/* Catalog */}
      <BookstoreCatalog />
      <SectionTransition variant="swatches" height="lg" />

      {/* Fallback CTA */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal variant="fadeIn">
              <InteractiveCard glowColor="honey" hoverLift={-4}>
                <div className="bg-paper border border-linen rounded-card p-8 sm:p-10">
                  <p className="section-label mb-3">Legacy Store</p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-4">
                    Looking for something else?
                  </h2>
                  <p className="text-charcoal/70 mb-8 leading-relaxed">
                    Some titles and editions are still being migrated to the new site. Visit the legacy catalog to browse the complete collection.
                  </p>
                  <a
                    href={bookstoreExtract.fallbackExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-button bg-ink px-8 py-4 text-base font-semibold text-paper hover:bg-charcoal active:scale-[0.98] transition-all duration-200"
                  >
                    Browse Legacy Catalog
                    <ExternalLink size={16} />
                  </a>
                </div>
              </InteractiveCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
