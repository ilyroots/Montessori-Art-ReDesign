"use client";

import { StoreProduct } from "@/config/storeProducts";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: StoreProduct[];
  categorySlug: string;
  columns?: 2 | 3 | 4;
}

export function ProductGrid({ products, categorySlug, columns = 3 }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-serif text-xl text-ink">No products found</p>
        <p className="text-sm text-charcoal/50 mt-2">Check back soon for new arrivals.</p>
      </div>
    );
  }

  const gridCols =
    columns === 4
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      : columns === 2
      ? "grid-cols-2"
      : "grid-cols-2 sm:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-x-6 gap-y-10`}>
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} categorySlug={categorySlug} index={i} />
      ))}
    </div>
  );
}
