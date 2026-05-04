"use client";

import { useState } from "react";
import { products } from "@/config/products";
import { bookstoreExtract } from "@/config/publicContentExtract";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ExternalLink, BookOpen } from "lucide-react";

// ------------------------------------------------------------------
// Filter configuration
// ------------------------------------------------------------------

type FilterCategory =
  | "all"
  | "books"
  | "curriculum"
  | "early-childhood"
  | "elementary"
  | "color-theory"
  | "painting"
  | "drawing"
  | "clay";

const filterTabs: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "books", label: "Books" },
  { id: "curriculum", label: "Curriculum" },
  { id: "early-childhood", label: "Early Childhood" },
  { id: "elementary", label: "Elementary" },
  { id: "color-theory", label: "Color Theory" },
  { id: "painting", label: "Painting" },
  { id: "drawing", label: "Drawing" },
  { id: "clay", label: "Clay" },
];

// ------------------------------------------------------------------
// Data sources
// ------------------------------------------------------------------

const curriculumProducts = products.filter((p) => p.category === "curriculum");

const bookProducts = bookstoreExtract.products.filter(
  (p) => p.category === "book" || p.category === "bundle"
);

// ------------------------------------------------------------------
// Tag mappings for filtering
// ------------------------------------------------------------------

const itemTags: Record<string, string[]> = {
  // Curriculum (from products.ts)
  "painting-curriculum": ["curriculum", "painting"],
  "painting-work": ["curriculum", "painting", "elementary"],
  "drawing-curriculum": ["curriculum", "drawing", "early-childhood", "elementary"],
  "color-theory-curriculum": ["curriculum", "color-theory"],
  "clay-modeling-curriculum": ["curriculum", "clay"],
  // Books (from bookstoreExtract)
  "way-children-make-art": ["books"],
  "early-childhood-art": ["books", "early-childhood"],
  "defining-visual-arts": ["books"],
  "for-early-childhood": ["books", "early-childhood"],
  "elementary-art-guide": ["books", "elementary"],
  "kids-color-theory-book": ["books", "color-theory"],
  "nurturing-children-visual-arts": ["books"],
  "clay-play": ["books", "clay"],
  "art-teaching-curriculum": ["books", "curriculum"],
  "kids-painting-plus-elementary": ["books", "curriculum", "painting", "elementary"],
};

function matchesFilter(id: string, filter: FilterCategory): boolean {
  if (filter === "all") return true;
  const tags = itemTags[id] || [];
  return tags.includes(filter);
}

// ------------------------------------------------------------------
// Book card for pending-price items
// ------------------------------------------------------------------

const bookImages: Record<string, string> = {
  "way-children-make-art": "/images/way-children-make-art.jpg",
  "early-childhood-art": "/images/early-childhood-art.jpg",
  "defining-visual-arts": "/images/defining-visual-arts.jpg",
  "for-early-childhood": "/images/early-childhood-art.jpg",
  "elementary-art-guide": "/images/elementary-art-guide.jpg",
  "kids-color-theory-book": "/images/color-theory-curriculum.jpg",
  "nurturing-children-visual-arts": "/images/nurturing-children-visual-arts.jpg",
  "clay-play": "/images/clay-play.jpg",
  "art-teaching-curriculum": "/images/painting-curriculum.jpg",
  "kids-painting-plus-elementary": "/images/painting-curriculum.jpg",
};

function BookCard({
  name,
  category,
  id,
}: {
  name: string;
  category: string;
  id: string;
}) {
  const categoryLabel =
    category === "bundle" ? "Bundle" : category === "book" ? "Book" : category;

  const image = bookImages[id];

  return (
    <div className="relative flex flex-col rounded-card border border-linen bg-paper transition-shadow duration-200 hover:shadow-card-hover h-full overflow-hidden">
      {image && (
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-canvas">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="mb-4">
          <span className="inline-block rounded-full bg-canvas px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-charcoal/60 font-medium mb-3">
            {categoryLabel}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink leading-snug">
            {name}
          </h3>
        </div>

        <p className="text-sm text-charcoal/60 leading-relaxed mb-6">
          Details and pricing are being verified against the legacy catalog.
          View the current store for availability.
        </p>

        <div className="mt-auto pt-6 border-t border-linen">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-sm text-charcoal/50">
              Price pending verification
            </span>
          </div>
          <a
            href={bookstoreExtract.fallbackExternalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-button bg-ink/10 px-6 py-3 text-sm font-semibold text-ink hover:bg-ink/20 active:scale-[0.98] transition-all duration-200 w-full"
          >
            View Details
            <ExternalLink size={14} className="ml-1.5 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Main catalog component
// ------------------------------------------------------------------

export function BookstoreCatalog() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredCurriculum = curriculumProducts.filter((p) =>
    matchesFilter(p.id, activeFilter)
  );

  const filteredBooks = bookProducts.filter((p) =>
    matchesFilter(p.id, activeFilter)
  );

  const totalCount = filteredCurriculum.length + filteredBooks.length;

  return (
    <section className="py-16 sm:py-20 bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tab.id
                  ? "bg-ink text-paper"
                  : "bg-transparent text-charcoal border border-linen hover:border-honey/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-center text-xs uppercase tracking-wider text-charcoal/50 mb-10">
          {totalCount} {totalCount === 1 ? "item" : "items"}
        </p>

        {/* Product grid */}
        {totalCount > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Curriculum products (verified) */}
            {filteredCurriculum.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.08}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  href={product.href}
                  badge={product.badge}
                  features={product.features}
                  ageRange={product.ageRange}
                  format={product.format}
                  variant={product.badge === "Most Popular" ? "featured" : "default"}
                  image={product.image}
                />
              </ScrollReveal>
            ))}

            {/* Books (pending verification) */}
            {filteredBooks.map((book, i) => (
              <ScrollReveal
                key={book.id}
                delay={(filteredCurriculum.length + i) * 0.08}
              >
                <BookCard name={book.name} category={book.category} id={book.id} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <BookOpen
              size={40}
              className="mx-auto mb-4 text-charcoal/25"
            />
            <p className="text-charcoal/60 font-medium">
              No items match this filter.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-3 text-sm text-honey hover:text-honey-dark font-medium transition-colors"
            >
              View all items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
