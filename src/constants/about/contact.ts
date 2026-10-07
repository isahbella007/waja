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
    sendingLabel: string;
    // Shown after the website has sent the message
    success: { title: string; body: string; again: string };
    failed: string;
    // Fallback while email sending isn't set up: the visitor's email app opens instead
    sentNote: string;
  };
  // The two emails sent when someone submits the form. {name} and {topic} are filled in.
  emails: {
    notification: { subject: string; intro: string };
    autoReply: { subject: string; greeting: string; paragraphs: string[]; signoff: string };
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
    sendingLabel: "Sending…",
    success: {
      title: "Thank you. Your message has been sent.",
      body: "We've emailed you a confirmation, and we will respond as soon as possible.",
      again: "Send another message",
    },
    failed: "Sorry, your message couldn't be sent. Please try again, or email us directly.",
    
    sentNote: "Your email app should now open with your message ready to send.",
  },
  emails: {
    notification: {
      subject: "Website message: {topic}",
      intro: "New message from the WAJA website contact form. Reply to this email to answer {name} directly.",
    },
    autoReply: {
      subject: "Thank you for contacting WAJA",
      greeting: "Hi {name},",
      paragraphs: [
        "Thank you for contacting us. We have received your message and will respond to you as soon as possible.",
        "If your question is urgent, you can reply to this email.",
      ],
      signoff: "The WAJA team",
    },
  },
  details: {
    email: { label: "Email", note: "For applications, partnerships and general questions." },
    phone: { label: "Phone" },
    ghana: { label: "Ghana", note: "Where our training takes place." },
    unitedStates: { label: "United States", note: "Registered 501(c)(3) address for cheques and correspondence." },
    follow: { label: "Follow us" },
  },
};
