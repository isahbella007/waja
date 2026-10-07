import type { ActionLink, CtaLink, ImageContent } from "./types";

export type ImpactYear = {
  year: string;
  tag: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
};

export type ImpactPageContent = {
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    // Each line of the big headline; `figure` is shown in the accent colour
    lines: { figure?: string; text: string }[];
    asideTitle: string;
    asideText: string;
    report: ActionLink;
  };
  cohortPhoto: ImageContent;
  change: { eyebrow: string; title: string; items: { title: string; description: string }[] };
  quote: { text: string; name: string; role: string; image: ImageContent };
  progress: {
    eyebrow: string;
    title: string;
    // Year selected when the page loads
    current: string;
    years: ImpactYear[];
  };
  centre: {
    eyebrow: string;
    title: string;
    description: string;
    today: { label: string; description: string; image: ImageContent };
    secured: { label: string; description: string; image: ImageContent };
  };
  includes: { title: string; description: string; link: CtaLink; items: string[] };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    // Remove `funding` entirely if there is no fit-out target yet, rather than showing placeholders
    funding?: { raised: string; goalText: string; percentLabel: string; percent: number };
    button: CtaLink;
  };
  closing: { title: string; primary: CtaLink; secondary: CtaLink };
};

export const IMPACT_PAGE: ImpactPageContent = {
  seo: {
    title: "Our Impact | WAJA",
    description:
      "19 women, including 3 orphans, on one pathway to a new future. See how lives are changing and what WAJA's training centre will make possible.",
  },
  hero: {
    eyebrow: "Our impact · As of [MONTH 2026]",
    lines: [
      { figure: "19", text: " women." },
      { figure: "3", text: " orphans." },
      { text: "One pathway to a new future." },
    ],
    asideTitle: "Behind every number is a woman whose future is changing.",
    asideText:
      "WAJA's current cohort includes 19 women, including 3 orphans, who are building skills, confidence, discipline and a new sense of possibility.",
    // TODO(WAJA): add the report file (e.g. /reports/impact-2026.pdf) to switch this link on
    report: { label: "Download the impact report" },
  },
  cohortPhoto: {
    src: "/programs/automotive.jpg",
    alt: "WAJA trainees in blue overalls working together on an open car engine",
    position: "center 35%",
  },
  change: {
    eyebrow: "How lives are changing",
    title: "The change starts before the first pay cheque.",
    items: [
      { title: "Confidence", description: "Women are beginning to see themselves as capable of working in a technical field." },
      { title: "Stability", description: "Training support helps reduce the barriers that prevent women from completing long-term programmes." },
      {
        title: "Identity",
        description: "Participants are moving from being viewed as beneficiaries to seeing themselves as technicians, problem-solvers and future earners.",
      },
      {
        title: "Future income",
        description: "WAJA's goal is to help women progress toward employment, incubation, entrepreneurship and long-term independence.",
      },
    ],
  },
  quote: {
    text: "WAJA is more than training. It is opening doors that were never available to women in our communities. Learning automotive repair means I can support myself and help my family.",
    name: "Abena",
    role: "WAJA technician",
    // TODO(WAJA): confirm this photo is Abena, or swap it for one of her
    image: { src: "/programs/life.jpg", alt: "A WAJA trainee working on a car engine", position: "center 30%" },
  },
  progress: {
    eyebrow: "Progress since 2024",
    title: "Where we have been, and where this is going.",
    current: "2026",
    years: [
      {
        year: "2024",
        tag: "Pilot",
        title: "Start in a shared garage.",
        description:
          "A shared garage partnership in Ghana let training start quickly, with real vehicles, real tools and real customer expectations.",
        stats: [{ value: "29", label: "women began the pilot" }],
      },
      {
        year: "2025",
        tag: "Commitment",
        title: "Stay the course.",
        description:
          "Family obligations, health challenges and transport pressures meant some could not continue. Those who stayed kept advancing.",
        stats: [
          { value: "19", label: "women still advancing" },
          { value: "3", label: "orphans among them" },
        ],
      },
      {
        year: "2026",
        tag: "This year",
        title: "Finish the pilot. Open the centre.",
        description: "WAJA's goal this year is to complete pilot training and launch the warehouse-based training centre.",
        stats: [
          { value: "19", label: "women completing pilot training" },
          { value: "1", label: "warehouse secured, awaiting fit-out" },
        ],
      },
      {
        year: "2027",
        tag: "Growth",
        title: "Grow the women we have.",
        description:
          "No new intake. WAJA will focus on fully developing the current cohort through incubation, mentorship, personal development and business readiness.",
        stats: [
          { value: "0", label: "new intake, by design" },
          { value: "19", label: "women in incubation and business readiness" },
        ],
      },
      {
        year: "2028",
        tag: "Scale",
        title: "Open a second cohort.",
        description:
          "WAJA plans to launch a second cohort through a more selective intake process.",
        stats: [
          { value: "~40", label: "candidates in the second intake" },
          { value: "30", label: "participants WAJA aims to retain" },
        ],
      },
    ],
  },
  centre: {
    eyebrow: "The WAJA training centre",
    title: "From a shared garage to a technology-enabled training centre.",
    description:
      "WAJA has secured a large warehouse space in Ghana that will become the next home for training, technology-enabled learning, diagnostics, personal development and incubation.",
    today: {
      label: "Where they train today",
      description: "A shared garage partnership: real vehicles, real customers, borrowed space and shared tools.",
      image: {
        src: "/programs/enterprise.jpg",
        alt: "A WAJA trainee working under the bonnet of a van in the shared garage yard",
        position: "center 40%",
      },
    },
    secured: {
      label: "The warehouse we have secured",
      description: "Dedicated space we now need to equip: bays, classrooms, diagnostics and safety systems.",
      image: { alt: "Photo: the secured warehouse as it stands now, empty" },
    },
  },
  includes: {
    title: "What the centre will include",
    description: "Every item here is something a sponsor can fund outright.",
    link: { label: "Sponsor equipment", href: "/get-involved/give/in-kind" },
    items: [
      "Automotive training bays",
      "Digital classroom space",
      "Laptops and tablets",
      "Safety equipment",
      "Service workflow training",
      "Incubation support for the 19 women",
      "Diagnostic learning stations",
      "AI-supported repair learning tools",
      "Simulation training tools",
      "EV and hybrid readiness equipment",
      "Personal development and financial literacy sessions",
    ],
  },
  why: {
    eyebrow: "Why the centre matters",
    title: "The women need more than access to a garage.",
    description:
      "They need a structured environment where they can learn consistently, safely and with the tools required for the future of automotive service. The centre lets WAJA control curriculum, improve training quality, expand technology access and prepare women for real economic opportunity.",
    // TODO(WAJA): replace with the real fit-out target and amount raised, or delete `funding` to hide the bar
    funding: { raised: "[$X]", goalText: "raised of [$Y] needed to fit out the centre", percentLabel: "[##]%", percent: 0 },
    button: { label: "Help equip the centre", href: "/get-involved/give/major-gifts#opportunities" },
  },
  closing: {
    title: "Nineteen women are most of the way there. Take them the rest.",
    primary: { label: "Fund a trainee", href: "/get-involved/give#give-now" },
    secondary: { label: "Other ways to help", href: "/get-involved" },
  },
};
