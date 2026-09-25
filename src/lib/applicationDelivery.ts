import "server-only";
import type { ApplicationValues } from "@/lib/application";

export type DeliveryResult = { delivered: true } | { delivered: false; reason: "not-configured" | "failed" };

// Where submitted applications go. NOT CONNECTED YET: until a destination is
// chosen (e.g. Sanity, or an email service), this reports "not-configured" and
// the form tells the applicant to apply by phone or email instead. Nothing is
// stored or sent, so no applicant data is lost silently.
export async function deliverApplication(application: ApplicationValues): Promise<DeliveryResult> {
  void application;
  return { delivered: false, reason: "not-configured" };
}
