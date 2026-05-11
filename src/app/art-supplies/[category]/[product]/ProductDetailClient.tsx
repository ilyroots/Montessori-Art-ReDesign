"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart, formatPrice } from "@/lib/store/useCart";
import { StoreProduct, StoreCategory, isPriceVerified } from "@/config/storeProducts";
import { ChevronRight, ShoppingBag, Check, ArrowLeft, ExternalLink, Truck, Shield, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

interface ProductDetailClientProps {
  product: StoreProduct;
  category: StoreCategory;
}

export function ProductDetailClient({ product, category }: ProductDetailClientProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const verified = isPriceVerified(product);

  const handleAdd = () => {
    if (!verified) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product.id);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

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
            <Link href={`/art-supplies/${category.slug}`} className="hover:text-honey transition-colors">
              {category.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-ink font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-canvas border border-linen/60"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
              {!imageLoaded && <div className="absolute inset-0 animate-pulse bg-canvas" />}

              {!verified && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-amber-100/90 backdrop-blur-sm text-amber-800 text-xs font-semibold uppercase tracking-wider rounded-full">
                    Price Pending Verification
                  </span>
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <Link
                href={`/art-supplies/${category.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-honey transition-colors mb-4 lg:hidden"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {category.name}
              </Link>

              <h1 className="font-serif text-3xl sm:text-4xl font-medium text-ink tracking-tight">
                {product.name}
              </h1>

              {product.shortDescription && (
                <p className="mt-2 text-sm text-charcoal/60 uppercase tracking-wide">
                  {product.shortDescription}
                </p>
              )}

              <div className="mt-6">
                {verified ? (
                  <span className="font-serif text-3xl font-medium text-ink">
                    {formatPrice(product.price)}
                  </span>
                ) : (
                  <div className="space-y-2">
                    <span className="font-serif text-2xl font-medium text-charcoal/40">
                      Price pending verification
                    </span>
                    <p className="text-sm text-charcoal/50">
                      This product&apos;s price has not been verified yet. Please view it on our original store.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 space-y-4">
                {/* Quantity */}
                {verified && (
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-charcoal/70">Quantity</span>
                    <div className="flex items-center border border-linen rounded-xl overflow-hidden">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-10 h-10 flex items-center justify-center hover:bg-canvas transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-canvas transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {verified ? (
                    <button
                      onClick={handleAdd}
                      disabled={added}
                      className={`flex-1 flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                        added
                          ? "bg-emerald-500 text-white"
                          : "bg-honey text-white hover:bg-honey/90 shadow-lg shadow-honey/20"
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="w-5 h-5" />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-5 h-5" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={product.fallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-medium bg-ink text-white hover:bg-ink/90 transition-colors"
                    >
                      View on Volusion Store
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={product.fallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-linen text-sm font-medium text-charcoal hover:border-honey/30 hover:text-honey transition-colors"
                  >
                    Original Listing
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-10 grid grid-cols-3 gap-4 py-6 border-t border-b border-linen">
                <div className="text-center">
                  <Truck className="w-5 h-5 mx-auto text-honey mb-1.5" />
                  <p className="text-xs font-medium text-charcoal/70">Fast Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto text-honey mb-1.5" />
                  <p className="text-xs font-medium text-charcoal/70">Safe & Non-toxic</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-5 h-5 mx-auto text-honey mb-1.5" />
                  <p className="text-xs font-medium text-charcoal/70">Easy Returns</p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="font-serif text-lg font-medium text-ink mb-3">About this product</h2>
                <p className="text-sm text-charcoal/70 leading-relaxed">{product.description}</p>
              </div>

              {/* Tags */}
              {product.tags.length > 0 && (
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-canvas rounded-full text-xs text-charcoal/60 capitalize"
                      >
                        {tag.replace(/-/g, " ")}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* SKU */}
              <div className="mt-6 pt-4 border-t border-linen">
                <p className="text-xs text-charcoal/40">
                  SKU: <span className="font-mono">{product.sku}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
