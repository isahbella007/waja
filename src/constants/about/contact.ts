import type { SectionHeading } from "../types";

export type ContactTopic = {
  // Used in links, e.g. /about/contact?topic=advisory-board
  value: string;
  label: string;
};

export type FormField = { label: string; placeholder?: string; requiredError: string };

export type ContactPageContent = {
  seo: { title: string; description: string };
  intro: SectionHeading;
  form: {
    title: string;
    name: FormField;
    email: FormField & { invalidError: string };
    topic: { label: string };
    message: FormField;
    topics: ContactTopic[];
    submitLabel: string;
    // replyNote: string;
    // Shown after submit, since the message is sent from the visitor's email app
    sentNote: string;
  };
  details: {
    email: { label: string; note: string };
    phone: { label: string; note?: string };
    ghana: { label: string; note: string };
    unitedStates: { label: string; note: string };
    follow: { label: string };
  };
};

export const CONTACT_PAGE: ContactPageContent = {
  seo: {
    title: "Contact Us | WAJA",
    description:
      "Get in touch with WAJA about applying, partnering, volunteering or where your donation goes. We answer every message.",
  },
  intro: {
    eyebrow: "Contact us",
    title: "Talk to a real person.",
    description:
      "Whether you want to apply, partner, volunteer or ask where your donation goes, we answer every message.",
  },
  form: {
    title: "Send us a message",
    name: { label: "Your name", placeholder: "Full name", requiredError: "Please enter your name." },
    email: {
      label: "Email address",
      placeholder: "name@example.com",
      requiredError: "Please enter your email address.",
      invalidError: "Please enter a valid email address.",
    },
    topic: { label: "What is this about?" },
    message: { label: "Your message", placeholder: "Tell us how we can help.", requiredError: "Please write a message." },
    topics: [
      { value: "apply", label: "Applying to a program" },
      { value: "partner", label: "Partnering with WAJA" },
      { value: "volunteer", label: "Volunteering" },
      { value: "advisory-board", label: "Joining the advisory board" },
      { value: "donation", label: "A question about donations" },
      { value: "major-gift", label: "Major gifts and pledges" },
      { value: "in-kind", label: "Donating equipment or supplies" },
      { value: "other", label: "Something else" },
    ],
    submitLabel: "Send message",
    
    sentNote: "Your email app should now open with your message ready to send.",
  },
  details: {
    email: { label: "Email", note: "For applications, partnerships and general questions." },
    phone: { label: "Phone" },
    ghana: { label: "Ghana", note: "Where our training takes place." },
    unitedStates: { label: "United States", note: "Registered 501(c)(3) address for cheques and correspondence." },
    follow: { label: "Follow us" },
  },
};
