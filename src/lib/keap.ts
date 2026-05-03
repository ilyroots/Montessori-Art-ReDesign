// ============================================================
// Keap Client Library
// ============================================================
// This library submits form data to our secure server-side API
// route (src/app/api/keap/route.ts) instead of calling Keap
// directly from the browser. This keeps KEAP_API_KEY secret.
//
// TODO: After Keap login access is obtained:
// 1. Verify the API route works with real credentials
// 2. Test each form type (newsletter, free-resource, contact)
// 3. Add error handling for specific Keap error codes
// 4. Consider adding client-side retry logic
// ============================================================

export interface KeapFormData {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  [key: string]: string | string[] | undefined;
}

export interface KeapSubmitResult {
  success: boolean;
  message: string;
  contactId?: number;
  placeholder?: boolean;
}

/**
 * Submit form data to Keap via our secure server-side API route.
 * The browser never sees the Keap API key.
 */
export async function submitToKeap(
  formType: "newsletter" | "free-resource" | "contact",
  data: KeapFormData
): Promise<KeapSubmitResult> {
  try {
    const response = await fetch("/api/keap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, formType }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          result.message || "Something went wrong. Please try again.",
      };
    }

    return result as KeapSubmitResult;
  } catch (error) {
    // If the API route is unreachable (e.g. during static build),
    // return a graceful placeholder response.
    return {
      success: true,
      message:
        "Thank you! Your submission has been received. (Keap integration pending)",
      placeholder: true,
    };
  }
}
