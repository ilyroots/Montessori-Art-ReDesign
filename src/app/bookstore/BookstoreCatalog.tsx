"use client";

import { useState, useMemo } from "react";
import { products, type Product } from "@/config/products";
import { bookstoreExtract } from "@/config/publicContentExtract";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ExternalLink, BookOpen, ArrowUpDown } from "lucide-react";

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

type SortOption = "default" | "price-low" | "price-high" | "name-az";

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

const sortOptions: { id: SortOption; label: string }[] = [
  { id: "default", label: "Featured" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "name-az", label: "Name: A–Z" },
];

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
// Unified catalog data — preserves original website order
// ------------------------------------------------------------------

type CatalogItem =
  | {
      id: string;
      type: "product";
      product: Product;
      sortPrice: number;
    }
  | {
      id: string;
      type: "book";
      bookName: string;
      bookCategory: string;
      sortPrice: number;
    };

function parsePrice(priceStr: string): number {
  const match = priceStr.replace(/,/g, "").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : Infinity;
}

const productMap = new Map(products.map((p) => [p.id, p]));

// Original website order from Leadpages "all-my-books"
const catalogOrder: { id: string; type: "product" | "book" }[] = [
  { id: "way-children-make-art", type: "book" },
  { id: "early-childhood-art", type: "book" },
  { id: "defining-visual-arts", type: "book" },
  { id: "for-early-childhood", type: "book" },
  { id: "elementary-art-guide", type: "book" },
  { id: "kids-color-theory-book", type: "book" },
  { id: "nurturing-children-visual-arts", type: "book" },
  { id: "painting-curriculum", type: "product" },
  { id: "clay-play", type: "book" },
  { id: "art-teaching-curriculum", type: "book" },
  { id: "drawing-curriculum", type: "product" },
  { id: "kids-painting-plus-elementary", type: "book" },
  { id: "color-theory-curriculum", type: "product" },
  { id: "clay-modeling-curriculum", type: "product" },
  { id: "painting-work", type: "product" },
];

const bookMap = new Map(
  bookstoreExtract.products.map((b) => [b.id, b])
);

const allItems: CatalogItem[] = catalogOrder.flatMap((entry): CatalogItem[] => {
  if (entry.type === "product") {
    const product = productMap.get(entry.id);
    if (!product) return [];
    return [
      {
        id: entry.id,
        type: "product" as const,
        product,
        sortPrice: parsePrice(product.price),
      },
    ];
  } else {
    const book = bookMap.get(entry.id);
    if (!book) return [];
    return [
      {
        id: entry.id,
        type: "book" as const,
        bookName: book.name,
        bookCategory: book.category,
        sortPrice: book.price ? parsePrice(book.price) : Infinity,
      },
    ];
  }
});

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
// Render helper — TypeScript-safe discriminated union narrowing
// ------------------------------------------------------------------

function renderCatalogItem(item: CatalogItem) {
  if (item.type === "product") {
    return (
      <ProductCard
        id={item.product.id}
        title={item.product.title}
        description={item.product.description}
        price={item.product.price}
        originalPrice={item.product.originalPrice}
        href={item.product.href}
        badge={item.product.badge}
        features={item.product.features}
        ageRange={item.product.ageRange}
        format={item.product.format}
        variant={
          item.product.badge === "Most Popular" ? "featured" : "default"
        }
        image={item.product.image}
      />
    );
  }

  return (
    <BookCard
      name={item.bookName}
      category={item.bookCategory}
      id={item.id}
    />
  );
}

// ------------------------------------------------------------------
// Main catalog component
// ------------------------------------------------------------------

export function BookstoreCatalog() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [activeSort, setActiveSort] = useState<SortOption>("default");

  const filteredItems = useMemo(() => {
    let items = allItems.filter((item) =>
      matchesFilter(item.id, activeFilter)
    );

    switch (activeSort) {
      case "price-low":
        items = [...items].sort((a, b) => a.sortPrice - b.sortPrice);
        break;
      case "price-high":
        items = [...items].sort((a, b) => b.sortPrice - a.sortPrice);
        break;
      case "name-az":
        items = [...items].sort((a, b) => {
          const nameA =
            a.type === "product" ? a.product!.title : a.bookName!;
          const nameB =
            b.type === "product" ? b.product!.title : b.bookName!;
          return nameA.localeCompare(nameB);
        });
        break;
      default:
        // Preserve original website order
        break;
    }

    return items;
  }, [activeFilter, activeSort]);

  return (
    <section className="py-16 sm:py-20 bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
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

        {/* Sort + Results count row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <p className="text-xs uppercase tracking-wider text-charcoal/50">
            {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
          </p>

          <div className="flex items-center gap-2">
            <ArrowUpDown size={14} className="text-charcoal/40" />
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value as SortOption)}
              className="bg-transparent text-sm text-charcoal border border-linen rounded-button px-3 py-2 pr-8 hover:border-honey/50 transition-colors cursor-pointer appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
              }}
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08}>
                {renderCatalogItem(item)}
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <BookOpen size={40} className="mx-auto mb-4 text-charcoal/25" />
            <p className="text-charcoal/60 font-medium">
              No items match this filter.
            </p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setActiveSort("default");
              }}
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
