"use client";

import Link from "next/link";
import { StoreCategory, StoreProduct } from "@/config/storeProducts";
import { ProductGrid } from "@/components/store/ProductGrid";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface CategoryClientProps {
  category: StoreCategory;
  products: StoreProduct[];
  subCategories: StoreCategory[];
  parentCategory?: StoreCategory;
}

export function CategoryClient({ category, products, subCategories, parentCategory }: CategoryClientProps) {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Breadcrumb */}
      <div className="border-b border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-charcoal/60">
            <Link href="/art-supplies" className="hover:text-honey transition-colors">
              Art Supplies
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            {parentCategory && (
              <>
                <Link href={`/art-supplies/${parentCategory.slug}`} className="hover:text-honey transition-colors">
                  {parentCategory.name}
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
              </>
            )}
            <span className="text-ink font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-paper border-b border-linen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {parentCategory && (
              <Link
                href={`/art-supplies/${parentCategory.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-honey transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {parentCategory.name}
              </Link>
            )}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink tracking-tight">
              {category.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal/70 max-w-2xl leading-relaxed">
              {category.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-charcoal/50">
                {products.length} product{products.length !== 1 ? "s" : ""}
              </span>
              <span className="w-1 h-1 rounded-full bg-charcoal/30" />
              <a
                href={category.volusionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-charcoal/50 hover:text-honey transition-colors"
              >
                View on original store →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subcategories */}
      {subCategories.length > 0 && (
        <section className="border-b border-linen bg-canvas/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-charcoal/60">Subcategories:</span>
              {subCategories.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/art-supplies/${sub.slug}`}
                  className="px-4 py-2 bg-white border border-linen rounded-full text-sm text-charcoal hover:text-honey hover:border-honey/30 transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} categorySlug={category.slug} columns={3} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-linen bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-sm text-charcoal/50">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href={category.volusionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-honey hover:underline"
            >
              Browse the full selection on our Volusion store
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
