import "server-only";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

export type EmailAddress = { email: string; name?: string };

export type OutgoingEmail = {
  to: EmailAddress[];
  subject: string;
  html: string;
  text: string;
  replyTo?: EmailAddress;
  // Labels the message in Brevo's logs, e.g. "contact-form"
  tags?: string[];
};

export type SendResult = { ok: true } | { ok: false; reason: "not-configured" | "failed" };

export function isEmailConfigured() {
  return Boolean(process.env.BREVO_API_KEY);
}

export function defaultSender(): EmailAddress {
  return { email: process.env.EMAIL_FROM ?? "info@gowaja.org", name: process.env.EMAIL_FROM_NAME ?? "WAJA" };
}

export async function sendEmail(message: OutgoingEmail): Promise<SendResult> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return { ok: false, reason: "not-configured" };

  try {
    const response = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        sender: defaultSender(),
        to: message.to,
        replyTo: message.replyTo,
        subject: message.subject,
        htmlContent: message.html,
        textContent: message.text,
        tags: message.tags,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      // Log the status only; the body can echo addresses
      console.error(`Brevo send failed with status ${response.status}`);
      return { ok: false, reason: "failed" };
    }
    return { ok: true };
  } catch (error) {
    console.error("Brevo send failed", error instanceof Error ? error.name : "unknown error");
    return { ok: false, reason: "failed" };
  }
}

// Makes visitor-typed text safe to place inside an HTML email
export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Plain paragraphs → simple HTML paragraphs, keeping the visitor's line breaks
export function toHtmlParagraphs(text: string) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => `<p style="margin:0 0 14px">${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`)
    .join("");
}
