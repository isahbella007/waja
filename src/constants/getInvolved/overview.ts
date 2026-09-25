import type { CtaLink, ImageContent } from "../types";

export type InvolvementWay = {
  id: string;
  title: string;
  audience: string;
  description: string;
  href: string;
  links: CtaLink[];
};

export type Supporter = {
  name: string;
  // Leave src empty to show a placeholder box
  logo: ImageContent;
};

export type GetInvolvedOverviewContent = {
  seo: { title: string; description: string };
  intro: { eyebrow: string; title: string; description: string; jumpLabel: string };
  photo: ImageContent;
  ways: InvolvementWay[];
  funding: {
    eyebrow: string;
    title: string;
    description: string;
    button: CtaLink;
    items: string[];
  };
  supporters: {
    eyebrow: string;
    title: string;
    link: CtaLink;
    list: Supporter[];
    note: string;
  };
  ask: { title: string; description: string; contactLink: CtaLink };
  // Shown on the sub-pages (Give, Partner, …) until they are designed
  comingSoon: string;
};

export const GET_INVOLVED_OVERVIEW: GetInvolvedOverviewContent = {
  seo: {
    title: "Get Involved | WAJA",
    description:
      "Give, partner, volunteer or sponsor an event. Seventeen women in Ghana are ready for the next phase of their automotive training. Pick your part.",
  },
  intro: {
    eyebrow: "Get involved",
    title: "Seventeen women are ready for the next phase. Pick your part.",
    description:
      "Some people fund a trainee. Some open a workshop door. Some teach on a Saturday. Whatever you have, there is a way to use it here.",
    jumpLabel: "Ways to get involved",
  },
  photo: { src: "/waja1.jpeg", alt: "Full-width photo: the current cohort in the workshop" },
  ways: [
    {
      id: "give",
      title: "Give",
      audience: "For individuals and families",
      description:
        "A one-time gift, monthly giving, a major gift, or tools and equipment instead of money. Every amount is tied to something specific: training hours, safety gear, a diagnostic scanner.",
      href: "/get-involved/give",
      links: [
        { label: "Give an amount", href: "/get-involved/give#give-now" },
        { label: "Major gifts", href: "/get-involved/give/major-gifts" },
        { label: "In-kind donations", href: "/get-involved/give/in-kind" },
      ],
    },
    {
      id: "partner",
      title: "Partner with us",
      audience: "For companies, schools, foundations and investors",
      description:
        "Workshops that host apprentices, employers who hire graduates, funders backing the training centre, and industry partners shaping the curriculum.",
      href: "/get-involved/partner",
      links: [
        { label: "Apprenticeship partners", href: "/get-involved/partner#apprenticeships" },
        { label: "Corporate & foundation support", href: "/get-involved/partner#corporate-foundation" },
        { label: "The excellence centre vision", href: "/get-involved/partner#excellence-centre" },
      ],
    },
    {
      id: "volunteer",
      title: "Volunteer",
      audience: "For mechanics, trainers, professionals and students",
      description:
        "Mentor a trainee, teach a module, advise on business or fundraising, or help with research and outreach. Remote and in-Ghana roles both exist.",
      href: "/get-involved/volunteer",
      links: [
        { label: "Mentor or trainer", href: "/get-involved/volunteer#mentor-trainer" },
        { label: "Advisory & professional skills", href: "/get-involved/volunteer#advisory" },
        { label: "Fundraising & outreach", href: "/get-involved/volunteer#fundraising-outreach" },
      ],
    },
    {
      id: "events",
      title: "Events & sponsorship",
      audience: "For brands, teams and anyone who likes to show up",
      description:
        "Run for Change 5K and other events raise funds and awareness. Sponsors get visibility; runners get a morning out for a good reason.",
      href: "/get-involved/events",
      links: [
        { label: "Run for Change 5K", href: "/get-involved/events#run-for-change" },
        { label: "Event sponsorship", href: "/get-involved/events#sponsorship" },
        { label: "Host your own fundraiser", href: "/get-involved/events#host-a-fundraiser" },
      ],
    },
  ],
  funding: {
    eyebrow: "What support funds right now",
    title: "The 17 women need to finish what they started.",
    description:
      "WAJA is raising support to help them complete pilot training, move into incubation and prepare for long-term independence.",
    button: { label: "Fund a trainee", href: "/get-involved/give" },
    items: [
      "Diagnostic tools",
      "Training equipment",
      "Laptops and tablets",
      "AI-supported repair learning tools",
      "EV and hybrid readiness training",
      "Safety gear",
      "Trainee support",
      "Personal development services",
      "Financial literacy partnerships",
      "Incubation and business readiness",
    ],
  },
  supporters: {
    eyebrow: "Who already backs this",
    title: "You would be in good company.",
    link: { label: "Become a partner", href: "/get-involved/partner" },
    list: [
      { name: "[PARTNER]", logo: { alt: "[PARTNER LOGO]" } },
      { name: "[PARTNER]", logo: { alt: "[PARTNER LOGO]" } },
      { name: "[PARTNER]", logo: { alt: "[PARTNER LOGO]" } },
      { name: "[PARTNER]", logo: { alt: "[PARTNER LOGO]" } },
    ],
    note: "Supporters are named only with their permission. [NUMBER] individuals give to WAJA.",
  },
  ask: {
    title: "Not sure where you fit? Just ask.",
    description:
      "Tell us what you have (money, tools, time, contacts, expertise) and we will tell you honestly what would help most.",
    contactLink: { label: "Contact page", href: "/about/contact" },
  },
  comingSoon: "The full page for this is coming soon. In the meantime, get in touch and we'll talk it through.",
};
