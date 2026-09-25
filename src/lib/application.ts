// Shape and validation rules for the application form. Shared by the form
// (instant feedback per step) and the server action (final check), so the
// two can never disagree. Messages live in src/constants/apply/applyForm.ts.

export type ApplicationValues = {
  filledBy: "self" | "behalf";
  registrantFirstName: string;
  registrantLastName: string;
  registrantRole: string;
  registrantOrganization: string;
  registrantPhone: string;
  registrantEmail: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  line2: string;
  city: string;
  region: string;
  digitalAddress: string;
  program: string;
  employed: "" | "yes" | "no";
  goals: string;
  needs: string;
  consentPrivacy: boolean;
  consentBehalf: boolean;
};

export type ApplicationField = keyof ApplicationValues;
export type ApplicationErrorCode = "required" | "invalidEmail" | "invalidPhone" | "contactRequired" | "consent";
export type ApplicationErrors = Partial<Record<ApplicationField, ApplicationErrorCode>>;

export const EMPTY_APPLICATION: ApplicationValues = {
  filledBy: "self",
  registrantFirstName: "",
  registrantLastName: "",
  registrantRole: "",
  registrantOrganization: "",
  registrantPhone: "",
  registrantEmail: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  street: "",
  line2: "",
  city: "",
  region: "",
  digitalAddress: "",
  program: "",
  employed: "",
  goals: "",
  needs: "",
  consentPrivacy: false,
  consentBehalf: false,
};

export const APPLICATION_STEP_COUNT = 4;

// Keep submissions to a sane size
export const MAX_TEXT_LENGTH = 2000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Digits with optional +, spaces, dashes, dots or brackets; 9 to 15 digits in total
const PHONE_PATTERN = /^\+?[\d\s\-().]+$/;

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return PHONE_PATTERN.test(value) && digits.length >= 9 && digits.length <= 15;
}

function checkContact(
  errors: ApplicationErrors,
  emailField: ApplicationField,
  phoneField: ApplicationField,
  email: string,
  phone: string,
) {
  if (!email && !phone) {
    errors[emailField] = "contactRequired";
    return;
  }
  if (email && !EMAIL_PATTERN.test(email)) errors[emailField] = "invalidEmail";
  if (phone && !isValidPhone(phone)) errors[phoneField] = "invalidPhone";
}

// Validates one step (0-based). Step 3 (review) holds the consent boxes.
export function validateApplicationStep(step: number, raw: ApplicationValues): ApplicationErrors {
  const v = trimValues(raw);
  const errors: ApplicationErrors = {};
  const required = (field: ApplicationField) => {
    if (!v[field]) errors[field] = "required";
  };

  if (step === 0 && v.filledBy === "behalf") {
    required("registrantFirstName");
    required("registrantLastName");
    required("registrantRole");
    // The registrant must be reachable for follow-up
    checkContact(errors, "registrantEmail", "registrantPhone", v.registrantEmail, v.registrantPhone);
  }

  if (step === 1) {
    required("firstName");
    required("lastName");
    // An applicant registered by someone else may have neither; the registrant is the contact then
    if (v.filledBy === "self" || v.email || v.phone) {
      checkContact(errors, "email", "phone", v.email, v.phone);
    }
    required("street");
    required("city");
    required("region");
  }

  if (step === 2) {
    required("employed");
    required("goals");
  }

  if (step === 3) {
    if (!v.consentPrivacy) errors.consentPrivacy = "consent";
    if (v.filledBy === "behalf" && !v.consentBehalf) errors.consentBehalf = "consent";
  }

  return errors;
}

export function validateApplication(values: ApplicationValues): ApplicationErrors {
  return Object.assign(
    {},
    ...Array.from({ length: APPLICATION_STEP_COUNT }, (_, step) => validateApplicationStep(step, values)),
  );
}

// Which step a field lives on, so the form can jump back to the first problem
export function stepOfField(field: ApplicationField): number {
  if (field.startsWith("registrant") || field === "filledBy") return 0;
  if (["program", "employed", "goals", "needs"].includes(field)) return 2;
  if (field.startsWith("consent")) return 3;
  return 1;
}

export function trimValues(values: ApplicationValues): ApplicationValues {
  const out = { ...values };
  for (const key of Object.keys(out) as ApplicationField[]) {
    const value = out[key];
    if (typeof value === "string") (out as Record<string, unknown>)[key] = value.trim().slice(0, MAX_TEXT_LENGTH);
  }
  return out;
}

// Turns untrusted input (e.g. a direct POST) into a well-formed application
export function coerceApplication(input: unknown): ApplicationValues {
  const source = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const out = { ...EMPTY_APPLICATION };
  for (const key of Object.keys(EMPTY_APPLICATION) as ApplicationField[]) {
    const value = source[key];
    if (typeof EMPTY_APPLICATION[key] === "boolean") {
      (out as Record<string, unknown>)[key] = value === true;
    } else if (typeof value === "string") {
      (out as Record<string, unknown>)[key] = value;
    }
  }
  if (out.filledBy !== "behalf") out.filledBy = "self";
  if (out.employed !== "yes" && out.employed !== "no") out.employed = "";
  return trimValues(out);
}
