import type { SectionHeading } from "../types";

// Text for the application form at /apply/form. Field names and rules live in
// src/lib/application.ts; everything a person reads lives here.

export type ApplyFormContent = {
  seo: { title: string; description: string };
  intro: SectionHeading;
  backToInfo: { label: string; href: string };
  steps: string[];
  stepCounter: string; // "Step {current} of {total}"
  filledBy: {
    legend: string;
    self: string;
    behalf: string;
    behalfHint: string;
  };
  registrant: {
    heading: string;
    firstName: string;
    lastName: string;
    role: string;
    rolePlaceholder: string;
    roles: string[];
    organization: string;
    organizationHint: string;
    phone: string;
    email: string;
  };
  applicant: {
    headingSelf: string;
    headingBehalf: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    phonePlaceholder: string;
    contactHint: string;
    street: string;
    line2: string;
    city: string;
    region: string;
    regionPlaceholder: string;
    regions: string[];
    digitalAddress: string;
    digitalAddressHint: string;
  };
  program: {
    legend: string;
    unsure: string;
    employed: string;
    yes: string;
    no: string;
    goals: string;
    goalsHint: string;
    needs: string;
    needsHint: string;
  };
  review: {
    heading: string;
    applicantLabel: string;
    contactLabel: string;
    programLabel: string;
    filledByLabel: string;
    edit: string;
    privacyConsent: string;
    privacyLinkLabel: string;
    behalfConsentIntro: string;
    behalfConsentItems: string[];
    behalfConsent: string;
  };
  optional: string;
  back: string;
  next: string;
  submit: string;
  submitting: string;
  errors: {
    required: string;
    invalidEmail: string;
    invalidPhone: string;
    contactRequired: string;
    consent: string;
    summary: string;
  };
  results: {
    successTitle: string;
    successBody: string;
    unavailableTitle: string;
    unavailableBody: string;
    errorTitle: string;
    errorBody: string;
  };
};

export const APPLY_FORM: ApplyFormContent = {
  seo: {
    title: "Application form | WAJA",
    description: "Submit your interest in WAJA's free automotive training for women and orphans in Ghana.",
  },
  intro: {
    eyebrow: "Application",
    title: "Submit your interest form",
    description: "Four short steps. You can apply for yourself, or on behalf of someone else.",
  },
  backToInfo: { label: "Who can apply, policies & FAQ", href: "/apply" },
  steps: ["Who's applying", "About the applicant", "Program & goals", "Review & consent"],
  stepCounter: "Step {current} of {total}",
  filledBy: {
    legend: "Who is filling in this form?",
    self: "I'm applying for myself",
    behalf: "I'm applying on behalf of someone else",
    behalfHint: "For organisations, social workers, community leaders, volunteers and guardians.",
  },
  registrant: {
    heading: "Your details",
    firstName: "Your first name",
    lastName: "Your last name",
    role: "Your role",
    rolePlaceholder: "Choose your role",
    roles: [
      "Community-based organisation",
      "Faith-based organisation",
      "Social worker",
      "Orphanage administrator",
      "School administrator or teacher",
      "Community leader",
      "WAJA volunteer",
      "Family guardian",
    ],
    organization: "Organisation name",
    organizationHint: "Leave blank if you're not with an organisation.",
    phone: "Your phone number",
    email: "Your email",
  },
  applicant: {
    headingSelf: "About you",
    headingBehalf: "About the applicant",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone number",
    phonePlaceholder: "024 000 0000",
    contactHint: "Give an email or a phone number, or both.",
    street: "Street address",
    line2: "Address line 2",
    city: "Town or city",
    region: "Region",
    regionPlaceholder: "Choose a region",
    regions: [
      "Ahafo",
      "Ashanti",
      "Bono",
      "Bono East",
      "Central",
      "Eastern",
      "Greater Accra",
      "North East",
      "Northern",
      "Oti",
      "Savannah",
      "Upper East",
      "Upper West",
      "Volta",
      "Western",
      "Western North",
    ],
    digitalAddress: "GhanaPost GPS address",
    digitalAddressHint: "For example GA-123-4567, if you have one.",
  },
  program: {
    legend: "Which program are you interested in?",
    unsure: "Not sure yet",
    employed: "Are you currently employed?",
    yes: "Yes",
    no: "No",
    goals: "What are you looking to get out of the program?",
    goalsHint: "A few words is fine.",
    needs: "Do you have any special needs or requests?",
    needsHint: "For example accessibility, childcare or language support.",
  },
  review: {
    heading: "Check and send",
    applicantLabel: "Applicant",
    contactLabel: "Contact",
    programLabel: "Program",
    filledByLabel: "Filled in by",
    edit: "Edit",
    privacyConsent: "I agree to the privacy policy.",
    privacyLinkLabel: "Read the privacy policy",
    behalfConsentIntro: "Because you're applying on someone's behalf, please confirm that:",
    behalfConsentItems: [
      "The applicant understands what the program is for",
      "The applicant is taking part voluntarily",
      "The information given is true and accurate",
      "You are authorised to help with this application",
    ],
    behalfConsent: "I confirm all of the above.",
  },
  optional: "optional",
  back: "Back",
  next: "Continue",
  submit: "Submit your interest form",
  submitting: "Sending…",
  errors: {
    required: "Please fill this in.",
    invalidEmail: "Please enter a valid email address.",
    invalidPhone: "Please enter a valid phone number.",
    contactRequired: "Please give an email or a phone number.",
    consent: "Please tick this box to continue.",
    summary: "Some answers need attention before you can continue.",
  },
  results: {
    successTitle: "Thank you. Your interest form has been sent.",
    successBody: "Our team will review it and get in touch using the contact details provided.",
    unavailableTitle: "Online applications aren't open just yet.",
    unavailableBody:
      "Nothing was sent. Please contact us to register your interest by phone or email, and we'll make sure your application is recorded.",
    errorTitle: "Something went wrong sending your form.",
    errorBody: "Please try again in a moment, or contact us to apply by phone or email.",
  },
};
