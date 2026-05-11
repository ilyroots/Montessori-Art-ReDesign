"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from "react";
import { StoreProduct, getProductById, formatPrice } from "@/config/storeProducts";

export interface CartItem {
  productId: string;
  quantity: number;
  addedAt: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  getCartProducts: () => (StoreProduct & { quantity: number; lineTotal: number })[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleCart: () => void;
}

const CART_STORAGE_KEY = "nature-of-art-cart-v1";

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hydrated]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { productId, quantity, addedAt: Date.now() }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.productId !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(() => {
    return items.reduce((sum, item) => {
      const product = getProductById(item.productId);
      if (!product || !product.priceVerified || product.price <= 0) return sum;
      return sum + product.price * item.quantity;
    }, 0);
  }, [items]);

  const getCartProducts = useCallback(() => {
    return items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        return {
          ...product,
          quantity: item.quantity,
          lineTotal: product.price > 0 ? product.price * item.quantity : 0,
        };
      })
      .filter(Boolean) as (StoreProduct & { quantity: number; lineTotal: number })[];
  }, [items]);

  const toggleCart = useCallback(() => setIsOpen((o) => !o), []);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      getCartProducts,
      isOpen,
      setIsOpen,
      toggleCart,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, getCartProducts, isOpen, toggleCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}

export { formatPrice };
