// Contact form rules, shared by the form (instant feedback) and the server action
// (final check), so the two can never disagree.

export type ContactValues = { name: string; email: string; topic: string; message: string };
export type ContactField = keyof ContactValues;
export type ContactErrorCode = "required" | "invalidEmail";
export type ContactErrors = Partial<Record<ContactField, ContactErrorCode>>;

export const CONTACT_LIMITS = { name: 120, email: 200, topic: 60, message: 5000 } as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function cleanContact(input: unknown): ContactValues {
  const source = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const text = (key: ContactField) => (typeof source[key] === "string" ? (source[key] as string).trim().slice(0, CONTACT_LIMITS[key]) : "");
  return { name: text("name"), email: text("email"), topic: text("topic"), message: text("message") };
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = "required";
  if (!values.email.trim()) errors.email = "required";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "invalidEmail";
  if (!values.message.trim()) errors.message = "required";
  return errors;
}
