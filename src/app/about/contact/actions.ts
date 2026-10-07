"use server";

import { cleanContact, validateContact, type ContactErrors } from "@/lib/contactMessage";
import { escapeHtml, sendEmail, toHtmlParagraphs } from "@/lib/email";
import { CONTACT_PAGE } from "@/constants/about/contact";
import { CONTACT_DETAILS } from "@/constants/contact";

export type SubmitContactResult =
  | { status: "sent" }
  | { status: "invalid"; errors: ContactErrors }
  // Email sending isn't set up yet: the form falls back to the visitor's email app
  | { status: "unavailable" }
  | { status: "error" };

const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");

// Public form: anyone can POST here directly, so everything is re-validated.
export async function submitContact(input: unknown, honeypot: string): Promise<SubmitContactResult> {
  // Bots fill the hidden field; pretend it worked and drop it
  if (honeypot) return { status: "sent" };

  const values = cleanContact(input);
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) return { status: "invalid", errors };

  const { emails, form } = CONTACT_PAGE;
  const topic = form.topics.find((t) => t.value === values.topic)?.label ?? "General enquiry";
  const inbox = process.env.CONTACT_INBOX ?? CONTACT_DETAILS.email;
  const vars = { name: values.name, topic };

  // 1. The message itself, to WAJA's inbox. Reply-To is the visitor, so "Reply" answers them.
  const notification = await sendEmail({
    to: [{ email: inbox, name: "WAJA" }],
    replyTo: { email: values.email, name: values.name },
    subject: fill(emails.notification.subject, vars),
    tags: ["contact-form"],
    text: [
      fill(emails.notification.intro, vars),
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Topic: ${topic}`,
      "",
      values.message,
    ].join("\n"),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#164E63">
        <p style="margin:0 0 16px;color:#475569">${escapeHtml(fill(emails.notification.intro, vars))}</p>
        <table style="border-collapse:collapse;margin:0 0 16px">
          <tr><td style="padding:2px 16px 2px 0;color:#475569">Name</td><td><strong>${escapeHtml(values.name)}</strong></td></tr>
          <tr><td style="padding:2px 16px 2px 0;color:#475569">Email</td><td>${escapeHtml(values.email)}</td></tr>
          <tr><td style="padding:2px 16px 2px 0;color:#475569">Topic</td><td>${escapeHtml(topic)}</td></tr>
        </table>
        <div style="border-top:1px solid #A5F3FC;padding-top:16px">${toHtmlParagraphs(values.message)}</div>
      </div>`,
  });

  if (!notification.ok) return { status: notification.reason === "not-configured" ? "unavailable" : "error" };

  // 2. The thank-you to the visitor. If only this fails, their message still reached WAJA.
  const reply = emails.autoReply;
  await sendEmail({
    to: [{ email: values.email, name: values.name }],
    // Replies to the thank-you go to WAJA's inbox
    replyTo: { email: inbox, name: "WAJA" },
    subject: reply.subject,
    tags: ["contact-auto-reply"],
    text: [fill(reply.greeting, vars), "", ...reply.paragraphs.flatMap((p) => [p, ""]), reply.signoff].join("\n"),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#164E63">
        <p style="margin:0 0 14px">${escapeHtml(fill(reply.greeting, vars))}</p>
        ${reply.paragraphs.map((p) => `<p style="margin:0 0 14px">${escapeHtml(p)}</p>`).join("")}
        <p style="margin:0">${escapeHtml(reply.signoff)}</p>
      </div>`,
  });

  return { status: "sent" };
}
