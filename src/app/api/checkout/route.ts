import { NextRequest, NextResponse } from "next/server";

/**
 * Stripe Checkout API Route
 * 
 * Creates a Stripe Checkout session for the items in the cart.
 * Returns 503 STRIPE_NOT_CONFIGURED if Stripe credentials are not set.
 * 
 * Environment variables required:
 * - STRIPE_SECRET_KEY
 * - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
 * - STRIPE_WEBHOOK_SECRET
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

  try {
    const body: CheckoutBody = await request.json();

    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { success: false, errorCode: "EMPTY_CART", message: "Cart is empty" },
        { status: 400 }
      );
    }

    // Dynamically import Stripe to avoid build-time dependency
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stripeModule: any = await import("stripe");
    const StripeConstructor = stripeModule.default || stripeModule;
    const stripe = new StripeConstructor(stripeSecretKey, {
      apiVersion: "2024-12-18.acacia",
    });

    // Build line items from cart
    // NOTE: This requires stripePriceId to be set on products.
    // For now, we return an error since no products have stripePriceId configured.
    const lineItems = body.items
      .map(() => {
        // In a full implementation, look up the product by ID
        // and use its stripePriceId here.
        // const product = getProductById(item.productId);
        // if (!product?.stripePriceId) return null;
        // return { price: product.stripePriceId, quantity: item.quantity };
        return null;
      })
      .filter(Boolean);

    if (lineItems.length === 0) {
      return NextResponse.json(
        {
          success: false,
          errorCode: "NO_STRIPE_PRICES",
          message:
            "No products in your cart have Stripe price IDs configured yet. Please use the Volusion store.",
          fallbackUrl: "https://atosb-raxtf.volusion.store/shoppingcart.asp",
        },
        { status: 503 }
      );
    }

    const origin = request.headers.get("origin") || "https://montessori-art.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems as { price: string; quantity: number }[],
      success_url: body.successUrl || `${origin}/cart?success=true`,
      cancel_url: body.cancelUrl || `${origin}/cart?canceled=true`,
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      automatic_tax: { enabled: false },
    });

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      {
        success: false,
        errorCode: "CHECKOUT_ERROR",
        message: "Unable to create checkout session. Please try again or use the Volusion store.",
        fallbackUrl: "https://atosb-raxtf.volusion.store/shoppingcart.asp",
      },
      { status: 500 }
    );
  }
}
