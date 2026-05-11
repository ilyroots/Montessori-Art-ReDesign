"use client";

import Link from "next/link";
import { useCart, formatPrice } from "@/lib/store/useCart";
import { Plus, Minus, Trash2, ArrowRight, ShoppingBag, ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, getCartProducts, clearCart } = useCart();
  const cartProducts = getCartProducts();
  const hasVerifiedProducts = cartProducts.some((p) => p.priceVerified && p.price > 0);
  const allVerified = cartProducts.every((p) => p.priceVerified && p.price > 0);

  return (
    <div className="min-h-screen bg-ivory">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-ink tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-sm text-charcoal/60 mt-1">
              {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
            </p>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm text-charcoal/50 hover:text-red-500 transition-colors"
            >
              Clear cart
            </button>
          )}
        </div>

        {cartProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-paper rounded-3xl border border-linen"
          >
            <div className="w-16 h-16 rounded-full bg-canvas flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-7 h-7 text-charcoal/40" />
            </div>
            <h2 className="font-serif text-xl text-ink mb-2">Your cart is empty</h2>
            <p className="text-sm text-charcoal/60 mb-6 max-w-sm mx-auto">
              Explore our curated art supplies and add something beautiful to your creative toolkit.
            </p>
            <Link
              href="/art-supplies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-honey text-white font-medium rounded-xl hover:bg-honey/90 transition-colors"
            >
              Browse Supplies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-4 p-4 bg-paper rounded-2xl border border-linen/60"
                >
                  <Link
                    href={`/art-supplies/${product.categoryIds[0]}/${product.id}`}
                    className="shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-white border border-linen"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/art-supplies/${product.categoryIds[0]}/${product.id}`}
                        className="font-medium text-ink hover:text-honey transition-colors line-clamp-2"
                      >
                        {product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="shrink-0 p-1.5 rounded-md hover:bg-red-50 text-charcoal/40 hover:text-red-500 transition-colors"
                        aria-label="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-charcoal/50 mt-0.5">{product.shortDescription}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-linen rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, product.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-canvas transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center text-sm font-medium">{product.quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, product.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-canvas transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-medium text-ink">
                        {product.lineTotal > 0 ? formatPrice(product.lineTotal) : "—"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-paper rounded-2xl border border-linen p-6 sticky top-24">
                <h2 className="font-serif text-lg font-medium text-ink mb-4">Order Summary</h2>

                <div className="space-y-3 pb-4 border-b border-linen">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal/60">Subtotal</span>
                    <span className="font-medium">
                      {hasVerifiedProducts ? formatPrice(totalPrice) : "—"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal/60">Shipping</span>
                    <span className="text-charcoal/40">Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4">
                  <span className="font-medium text-ink">Total</span>
                  <span className="font-serif text-xl font-medium text-ink">
                    {allVerified ? formatPrice(totalPrice) : "—"}
                  </span>
                </div>

                {!allVerified && (
                  <div className="mb-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
                    <p className="text-xs text-amber-700">
                      Some items have pending prices. Please visit our Volusion store to complete your purchase.
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <button
                    disabled={!allVerified}
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium transition-colors ${
                      allVerified
                        ? "bg-honey text-white hover:bg-honey/90 shadow-lg shadow-honey/20"
                        : "bg-charcoal/10 text-charcoal/40 cursor-not-allowed"
                    }`}
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://atosb-raxtf.volusion.store/shoppingcart.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-linen text-sm font-medium text-charcoal hover:border-honey/30 hover:text-honey transition-colors"
                  >
                    Checkout on Volusion
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <Link
                  href="/art-supplies"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm text-charcoal/50 hover:text-honey transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
