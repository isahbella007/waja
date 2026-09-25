"use server";

import { coerceApplication, validateApplication, type ApplicationErrors } from "@/lib/application";
import { deliverApplication } from "@/lib/applicationDelivery";

export type SubmitApplicationResult =
  | { status: "success" }
  | { status: "invalid"; errors: ApplicationErrors }
  | { status: "unavailable" }
  | { status: "error" };

// Public form: anyone can POST here directly, so everything is re-validated.
export async function submitApplication(input: unknown, honeypot: string): Promise<SubmitApplicationResult> {
  // Bots fill the hidden field; pretend it worked and drop it
  if (honeypot) return { status: "success" };

  const application = coerceApplication(input);
  const errors = validateApplication(application);
  if (Object.keys(errors).length > 0) return { status: "invalid", errors };

  try {
    const result = await deliverApplication(application);
    if (result.delivered) return { status: "success" };
    return { status: result.reason === "not-configured" ? "unavailable" : "error" };
  } catch {
    return { status: "error" };
  }
}
