// ============================================================
// Keap API Route — Server-Side Only
// ============================================================
// This route runs on the server, so KEAP_API_KEY stays secure.
// The browser never sees the API key.
//
// PRODUCTION SAFETY:
// - If KEAP_ENABLED is false or KEAP_API_KEY is missing,
//   this route returns a clear error in production.
// - Placeholder success is ONLY returned in development.
// - NEVER fake success in production when integration is disabled.
//
// TODO: After Keap login access is obtained:
// 1. Verify KEAP_API_KEY is set in .env.local (server-only)
// 2. Set KEAP_ENABLED=true
// 3. Test this endpoint with real Keap credentials
// 4. Add rate limiting if needed
// 5. Add validation for required fields per form type
// ============================================================

import { NextRequest, NextResponse } from "next/server";

const KEAP_API_KEY = process.env.KEAP_API_KEY || "";
const KEAP_ENABLED = process.env.KEAP_ENABLED === "true";
const KEAP_BASE_URL = "https://api.infusionsoft.com/crm/rest/v1";
const IS_DEV = process.env.NODE_ENV === "development";

interface KeapPayload {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  formType: "newsletter" | "free-resource" | "contact";
  [key: string]: unknown;
}

export async function POST(request: NextRequest) {
  // ── Production Safety Guard ───────────────────────────────
  // If Keap is not enabled or API key is missing, do NOT fake success.
  if (!KEAP_ENABLED || !KEAP_API_KEY) {
    const reason = !KEAP_ENABLED
      ? "Keap integration is disabled (KEAP_ENABLED is not 'true')."
      : "Keap API key is not configured.";

    if (IS_DEV) {
      // In development, return a clear placeholder so the UI flow can be tested
      return NextResponse.json(
        {
          success: true,
          message: `Thank you! Your submission has been received. (${reason} — placeholder response in dev mode)`,
          placeholder: true,
          devNote: "Set KEAP_ENABLED=true and KEAP_API_KEY in .env.local to test real integration.",
        },
        { status: 200 }
      );
    }

    // In production, return a clear error
    return NextResponse.json(
      {
        success: false,
        message: "This service is temporarily unavailable. Please try again later.",
        errorCode: "INTEGRATION_NOT_CONFIGURED",
      },
      { status: 503 }
    );
  }

  // ── Real Keap Integration ─────────────────────────────────
  try {
    const body: KeapPayload = await request.json();

    // Basic validation
    if (!body.email || typeof body.email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email is required.", errorCode: "MISSING_EMAIL" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address.", errorCode: "INVALID_EMAIL" },
        { status: 400 }
      );
    }

    // Build Keap contact payload
    const keapBody = {
      email_addresses: [{ email: body.email, field: "EMAIL1" }],
      given_name: body.firstName || "",
      family_name: body.lastName || "",
    };

    const response = await fetch(`${KEAP_BASE_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${KEAP_API_KEY}`,
      },
      body: JSON.stringify(keapBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Keap API error:", response.status, errorText);
      return NextResponse.json(
        {
          success: false,
          message: "We couldn't process your request right now. Please try again later.",
          errorCode: "KEAP_API_ERROR",
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    // TODO: If tags are provided, apply them to the contact
    // TODO: If formType is "free-resource", trigger lead magnet delivery campaign

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your submission was successful.",
        contactId: data.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Keap route error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
        errorCode: "INTERNAL_ERROR",
      },
      { status: 500 }
    );
  }
}
