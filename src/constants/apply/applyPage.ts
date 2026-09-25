import type { CtaBannerContent, CtaLink } from "../types";

export const APPLY_FORM_HREF = "/apply/form";

export type ApplyPageContent = {
  seo: { title: string; description: string };
  cover: {
    eyebrow: string;
    title: string;
    description: string;
    badges: string[];
    primaryAction: CtaLink;
    secondaryAction: CtaLink;
  };
  overview: { title: string; items: string[]; programsLabel: string };
  eligibility: { title: string; items: string[]; note: string; commitment: string };
  waysToApply: {
    title: string;
    options: { title: string; description: string }[];
    help: { text: string; link: CtaLink };
  };
  assisted: {
    title: string;
    intro: string;
    barriers: string[];
    whoMay: { title: string; items: string[] };
    requirements: { title: string; items: string[]; note: string };
    consent: { title: string; intro: string; items: string[]; warning: string };
  };
  afterApplying: { title: string; steps: string[]; note: string };
  privacy: { title: string; intro: string; items: string[] };
  faq: { title: string; items: { question: string; answer: string }[] };
  partnership: CtaBannerContent;
  finalCta: CtaBannerContent;
};

export const APPLY_PAGE: ApplyPageContent = {
  seo: {
    title: "Apply | WAJA",
    description:
      "Apply for free to WAJA's hands-on automotive training for women and orphans in Ghana. No experience needed, and assisted applications are welcome.",
  },
  cover: {
    eyebrow: "Apply",
    title: "Apply to train with WAJA.",
    description:
      "WAJA for Women and Orphans provides hands-on automotive training, mentorship and professional development for women and orphans in Ghana.",
    badges: ["Free to apply", "No experience needed", "Someone can apply for you"],
    primaryAction: { label: "Start your application", href: APPLY_FORM_HREF },
    secondaryAction: { label: "Ways to apply", href: "#ways-to-apply" },
  },
  overview: {
    title: "What the training includes",
    items: [
      "Automotive repair fundamentals",
      "Bodywork and refinishing",
      "Safety and tool competency",
      "Business and customer service",
      "Mentorship and job placement support",
    ],
    programsLabel: "Read about the three programs",
  },
  eligibility: {
    title: "Who can apply",
    items: [
      "Women seeking vocational skills in automotive services",
      "Orphans and vulnerable young adults (age criteria may apply)",
      "Anyone committed to completing structured training",
      "Applicants willing to follow WAJA's safety and conduct policies",
    ],
    note: "No prior automotive experience is required.",
    commitment: "We are committed to making training inclusive, fair and free of barriers.",
  },
  waysToApply: {
    title: "Ways to apply",
    options: [
      { title: "Apply online", description: "Fill in the short interest form yourself." },
      {
        title: "Have someone apply for you",
        description:
          "A trusted organisation, community leader, social worker or guardian can fill in the form on your behalf.",
      },
      {
        title: "Apply offline",
        description:
          "Paper forms through partner organisations, in-person registration days, community registration events, or phone pre-registration where available.",
      },
    ],
    help: {
      text: "Need help applying? Get in touch and we'll find a way.",
      link: { label: "Contact WAJA", href: "/about/contact?topic=apply" },
    },
  },
  assisted: {
    title: "Assisted registration",
    intro:
      "Some applicants face barriers that make applying online hard. To keep access fair, a trusted person or organisation can apply on their behalf.",
    barriers: [
      "Limited literacy",
      "No smartphone or internet access",
      "No personal email address",
      "Disability",
      "Living in a rural area",
      "Other social or economic barriers",
    ],
    whoMay: {
      title: "Who can register an applicant",
      items: [
        "Registered community-based organisations",
        "Faith-based organisations",
        "Social workers",
        "Orphanage administrators",
        "School administrators or teachers",
        "Recognised community leaders",
        "Verified WAJA volunteers",
        "Trusted family guardians, where appropriate",
      ],
    },
    requirements: {
      title: "If you register someone, you must",
      items: [
        "Confirm the applicant has given informed consent",
        "Give accurate contact details for follow-up",
        "Clearly say you are applying on their behalf",
        "Provide supporting documents if asked, such as guardian confirmation",
      ],
      note: "WAJA may check an applicant's eligibility with them directly.",
    },
    consent: {
      title: "Consent notice",
      intro: "By applying on someone's behalf, you confirm that:",
      items: [
        "The applicant understands what the program is for",
        "The applicant is taking part voluntarily",
        "The information you give is true and accurate",
        "You are authorised to help with this application",
      ],
      warning: "False or misleading applications may be disqualified.",
    },
  },
  afterApplying: {
    title: "What happens next",
    steps: [
      "Application review",
      "Eligibility screening",
      "Interview, in person or online",
      "Program placement decision",
      "Enrollment orientation",
    ],
    note: "Selected applicants will receive further instructions.",
  },
  privacy: {
    title: "Your privacy",
    intro: "WAJA respects applicant privacy. The information you give us will:",
    items: [
      "Only be used for program evaluation and enrollment",
      "Never be sold or shared for commercial purposes",
      "Be handled in line with applicable data protection standards",
    ],
  },
  faq: {
    title: "Questions people ask",
    items: [
      {
        question: "Can I apply if I cannot read or write?",
        answer: "Yes. Someone can apply on your behalf, and WAJA supports you through the process.",
      },
      {
        question: "Can an orphanage register more than one candidate?",
        answer: "Yes. Organisations can submit several applications, as long as each applicant has given consent.",
      },
      {
        question: "What if I don't have email?",
        answer: "You can apply with a phone number instead, or a guardian, organisation or WAJA representative can help you.",
      },
      {
        question: "Is there a fee to apply?",
        answer: "No. Applying to WAJA programs is free.",
      },
    ],
  },
  partnership: {
    title: "Empowerment takes partnership.",
    description:
      "We welcome NGOs, women's advocacy groups, orphan care institutions, community development organisations and international partners. Together, we can remove barriers and expand opportunity.",
    buttons: [{ label: "Partner with us", href: "/about/contact?topic=partner" }],
  },
  finalCta: {
    title: "Ready to apply?",
    description: "It's free, no experience is needed, and someone can apply on your behalf.",
    buttons: [{ label: "Start your application", href: APPLY_FORM_HREF }],
  },
};
