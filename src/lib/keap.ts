import { KEAP_CONFIG } from "@/config/integrations";

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
}

/**
 * Submit data to Keap.
 * Currently returns a placeholder success response.
 * Real integration will be added after login access is obtained.
 */
export async function submitToKeap(
  formType: "newsletter" | "free-resource" | "contact",
  data: KeapFormData
): Promise<KeapSubmitResult> {
  if (!KEAP_CONFIG.enabled) {
    // Placeholder: simulate success
    return {
      success: true,
      message:
        "Thank you! Your submission has been received. (Keap integration pending)",
    };
  }

  // Real implementation will go here after Keap API credentials are available
  try {
    const response = await fetch(`${KEAP_CONFIG.baseUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${KEAP_CONFIG.apiKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Keap API error: ${response.status}`);
    }

    return {
      success: true,
      message: "Thank you! Your submission was successful.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
    };
  }
}

export function getKeapFormId(
  resourceId: string
): string {
  return (
    KEAP_CONFIG.forms.freeResources[
      resourceId as keyof typeof KEAP_CONFIG.forms.freeResources
    ] || ""
  );
}
