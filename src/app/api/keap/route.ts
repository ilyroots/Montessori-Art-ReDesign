// ============================================================
// Keap API Route — Server-Side Only
// ============================================================
// This route runs on the server, so KEAP_API_KEY stays secure.
// The browser never sees the API key.
//
// TODO: After Keap login access is obtained:
// 1. Verify KEAP_API_KEY is set in .env.local (server-only)
// 2. Test this endpoint with real Keap credentials
// 3. Add rate limiting if needed
// 4. Add validation for required fields per form type
// ============================================================

import { NextRequest, NextResponse } from "next/server";

const KEAP_API_KEY = process.env.KEAP_API_KEY || "";
const KEAP_BASE_URL = "https://api.infusionsoft.com/crm/rest/v1";

interface KeapPayload {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  formType: "newsletter" | "free-resource" | "contact";
  [key: string]: unknown;
}

export async function POST(request: NextRequest) {
  // If no API key is configured, return a placeholder success
  // so the frontend can still demonstrate the flow.
  // TODO: Remove this placeholder block once KEAP_API_KEY is configured.
  if (!KEAP_API_KEY) {
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your submission has been received. (Keap integration pending — server key not configured)",
        placeholder: true,
      },
      { status: 200 }
    );
  }

  try {
    const body: KeapPayload = await request.json();

    // Basic validation
    if (!body.email || typeof body.email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    // Build Keap contact payload
    const keapBody = {
      email_addresses: [{ email: body.email, field: "EMAIL1" }],
      given_name: body.firstName || "",
      family_name: body.lastName || "",
      // TODO: Add tag application if tags are provided and tag IDs are configured
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
          message: `Keap API error: ${response.status}. Please try again later.`,
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
      },
      { status: 500 }
    );
  }
}
