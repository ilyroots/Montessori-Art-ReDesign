"use client";

import { useCart, formatPrice } from "@/lib/store/useCart";
import { getProductById } from "@/config/storeProducts";
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice, getCartProducts } = useCart();

  const cartProducts = getCartProducts();
  const hasVerifiedProducts = cartProducts.some((p) => p.priceVerified && p.price > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-ink/30 backdrop-blur-sm z-[60]"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-paper z-[70] shadow-dramatic flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-honey" />
                <h2 className="font-serif text-xl font-medium text-ink">Your Cart</h2>
                {totalItems > 0 && (
                  <span className="text-sm text-charcoal/60">({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
                )}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-canvas transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cartProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-canvas flex items-center justify-center">
                    <ShoppingBag className="w-7 h-7 text-charcoal/40" />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-ink">Your cart is empty</p>
                    <p className="text-sm text-charcoal/60 mt-1">Explore our art supplies and add something beautiful.</p>
                  </div>
                  <Link
                    href="/art-supplies"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-honey text-white text-sm font-medium rounded-lg hover:bg-honey/90 transition-colors"
                  >
                    Browse Supplies
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                cartProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="flex gap-4 p-3 rounded-xl bg-canvas/40 border border-linen/50"
                  >
                    {/* Image */}
                    <Link
                      href={`/art-supplies/${product.categoryIds[0]}/${product.id}`}
                      onClick={() => setIsOpen(false)}
                      className="shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-white border border-linen"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/art-supplies/${product.categoryIds[0]}/${product.id}`}
                        onClick={() => setIsOpen(false)}
                        className="font-medium text-sm text-ink hover:text-honey transition-colors line-clamp-2"
                      >
                        {product.name}
                      </Link>
                      <p className="text-xs text-charcoal/50 mt-0.5">{product.shortDescription}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-md bg-white border border-linen hover:border-honey/50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{product.quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-md bg-white border border-linen hover:border-honey/50 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-ink">
                          {product.lineTotal > 0 ? formatPrice(product.lineTotal) : "—"}
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(product.id)}
                      className="shrink-0 self-start p-1.5 rounded-md hover:bg-red-50 text-charcoal/40 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartProducts.length > 0 && (
              <div className="border-t border-linen px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/70">Subtotal</span>
                  <span className="font-serif text-xl font-medium text-ink">
                    {hasVerifiedProducts ? formatPrice(totalPrice) : "—"}
                  </span>
                </div>

                {!hasVerifiedProducts && (
                  <p className="text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg border border-amber-100">
                    Cart contains items with pending prices. Please visit the Volusion store to complete your purchase.
                  </p>
                )}

                <div className="space-y-2">
                  <Link
                    href="/cart"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-honey text-white font-medium rounded-xl hover:bg-honey/90 transition-colors"
                  >
                    View Cart
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-xs text-center text-charcoal/40">
                    Shipping calculated at checkout
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
