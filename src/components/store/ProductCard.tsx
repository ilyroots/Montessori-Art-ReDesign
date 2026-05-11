"use client";

import Link from "next/link";
import { useCart } from "@/lib/store/useCart";
import { StoreProduct, formatPrice, isPriceVerified } from "@/config/storeProducts";
import { ShoppingBag, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: StoreProduct;
  categorySlug: string;
  index?: number;
}

export function ProductCard({ product, categorySlug, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [added, setAdded] = useState(false);
  const verified = isPriceVerified(product);

  const handleAdd = () => {
    if (!verified) return;
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      {/* Image */}
      <Link
        href={`/art-supplies/${categorySlug}/${product.id}`}
        className="relative block aspect-[4/5] rounded-2xl overflow-hidden bg-canvas border border-linen/60 mb-4"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-canvas" />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {!verified && (
            <span className="px-2.5 py-1 bg-amber-100/90 backdrop-blur-sm text-amber-800 text-[10px] font-semibold uppercase tracking-wider rounded-full">
              Price Pending
            </span>
          )}
        </div>

        {/* Quick add */}
        {verified && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAdd();
            }}
            className={`absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${
              added
                ? "bg-emerald-500 text-white"
                : "bg-white text-ink hover:bg-honey hover:text-white"
            }`}
            aria-label="Add to cart"
          >
            {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        )}
      </Link>

      {/* Info */}
      <div className="space-y-1.5">
        <Link
          href={`/art-supplies/${categorySlug}/${product.id}`}
          className="block font-serif text-base font-medium text-ink hover:text-honey transition-colors leading-snug"
        >
          {product.name}
        </Link>
        {product.shortDescription && (
          <p className="text-xs text-charcoal/50">{product.shortDescription}</p>
        )}
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-medium text-ink">
            {verified ? formatPrice(product.price) : "Price pending verification"}
          </span>
          {!verified && (
            <a
              href={product.fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-charcoal/50 hover:text-honey transition-colors"
            >
              View on store
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
