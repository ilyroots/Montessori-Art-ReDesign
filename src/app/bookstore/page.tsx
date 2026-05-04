import { createMetadata } from "@/lib/seo";
import { bookstoreExtract } from "@/config/publicContentExtract";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BookstoreCatalog } from "./BookstoreCatalog";
import { ExternalLink } from "lucide-react";

export const metadata = createMetadata({
  title: "Art Books & Curriculum",
  description:
    "Books and curriculum on Montessori art education by Spramani Elaun. Kids Painting, Drawing, Color Theory, Clay Modeling, and authoritative guides for educators.",
});

export default function BookstorePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-honey font-semibold mb-6">
              Art Books &amp; Curriculum
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink tracking-[-0.02em] mb-8 leading-snug">
              {bookstoreExtract.heroMessage}
            </h1>
            <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Complete curriculum guides and authoritative books on Montessori
              art education — written by Spramani Elaun for educators who
              believe every child deserves quality art instruction.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Catalog */}
      <BookstoreCatalog />

      {/* Fallback CTA */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-honey font-semibold mb-3">
              Legacy Store
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em] mb-4">
              Looking for something else?
            </h2>
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              Some titles and editions are still being migrated to the new
              site. Visit the legacy catalog to browse the complete collection.
            </p>
            <a
              href={bookstoreExtract.fallbackExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-button bg-ink px-8 py-4 text-base font-semibold text-paper hover:bg-ink-dark active:scale-[0.98] transition-all duration-200"
            >
              Browse Legacy Catalog
              <ExternalLink size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
