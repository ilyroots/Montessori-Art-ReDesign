import { NextRequest, NextResponse } from "next/server";

/**
 * Stripe Checkout API Route — STUB
 *
 * This route is prepared for Stripe integration but currently returns
 * 503 STRIPE_NOT_CONFIGURED because the stripe package is not installed
 * and no price IDs have been configured.
 *
 * To activate:
 * 1. npm install stripe
 * 2. Add STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env vars
 * 3. Add stripePriceId to products in src/config/storeProducts.ts
 * 4. Replace this stub with the full implementation below
 *
 * Full implementation (save for later):
 *   const Stripe = require("stripe");
 *   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-12-18.acacia" });
 *   const session = await stripe.checkout.sessions.create({...});
 */

interface CheckoutItem {
  productId: string;
  quantity: number;
}

interface CheckoutBody {
  items: CheckoutItem[];
  successUrl?: string;
  cancelUrl?: string;
}

export async function POST(request: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const isConfigured =
    !!stripeSecretKey &&
    stripeSecretKey.startsWith("sk_") &&
    !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  // Always return 503 until stripe is installed and configured
  if (!isConfigured) {
    return NextResponse.json(
      {
        success: false,
        errorCode: "STRIPE_NOT_CONFIGURED",
        message:
          "Stripe checkout is not yet configured. Please complete your purchase on our Volusion store.",
        fallbackUrl: "https://atosb-raxtf.volusion.store/shoppingcart.asp",
      },
      { status: 503 }
    );
  }

  // If we reach here, keys are set but stripe package isn't installed.
  // This is a safety net — shouldn't happen in production.
  try {
    const body: CheckoutBody = await request.json();

    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { success: false, errorCode: "EMPTY_CART", message: "Cart is empty" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        errorCode: "STRIPE_LIBRARY_MISSING",
        message:
          "Stripe library is not installed. Run 'npm install stripe' and redeploy to activate checkout.",
        fallbackUrl: "https://atosb-raxtf.volusion.store/shoppingcart.asp",
      },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        errorCode: "CHECKOUT_ERROR",
        message: "Unable to process checkout. Please use the Volusion store.",
        fallbackUrl: "https://atosb-raxtf.volusion.store/shoppingcart.asp",
      },
      { status: 500 }
    );
  }
}
