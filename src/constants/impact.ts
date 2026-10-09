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
    // The present year, marked "Now" in the timeline
    current: string;
    nowLabel: string;
    years: ImpactYear[];
  };
  centre: {
    eyebrow: string;
    title: string;
    description: string;
    // Before/after viewer: the secured warehouse today vs the planned centre
    compare: {
      todayLabel: string;
      visionLabel: string;
      todayCaption: string;
      visionCaption: string;
      // Shown on the vision images so nobody mistakes a rendering for a photo
      visionBadge: string;
      viewsLabel: string;
      views: { id: string; label: string; today: ImageContent; vision: ImageContent }[];
    };
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
      "17 women, including 3 orphans, on one pathway to a new future. See how lives are changing and what WAJA's training centre will make possible.",
  },
  hero: {
    eyebrow: "Our impact · As of 2025",
    lines: [
      { figure: "17", text: " women." },
      { figure: "3", text: " orphans." },
      { text: "One pathway to a new future." },
    ],
    asideTitle: "Behind every number is a woman whose future is changing.",
    asideText:
      "WAJA's current cohort includes 17 women, including 3 orphans, who are building skills, confidence, discipline and a new sense of possibility.",
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
    nowLabel: "Now",
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
          { value: "17", label: "women in training from 2025" },
          { value: "3", label: "orphans among them" },
        ],
      },
      {
        year: "2026",
        tag: "This year",
        title: "Finish the pilot. Open the centre.",
        description: "WAJA's goal this year is to complete pilot training and launch the warehouse-based training centre.",
        stats: [
          { value: "17", label: "women completing pilot training" },
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
          { value: "17", label: "women in incubation and business readiness" },
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
    eyebrow: "The next chapter",
    title: "A training centre of their own.",
    description:
      "Finishing the pilot means moving out of a borrowed garage. WAJA has secured a large warehouse in Ghana that will become the home for training, technology-enabled learning, diagnostics, personal development and incubation.",
    compare: {
      todayLabel: "Today",
      visionLabel: "The vision",
      todayCaption: "The warehouse WAJA has secured in Ghana, as it stands now. It needs to be equipped with bays, classrooms, diagnostics and safety systems.",
      visionCaption: "The planned WAJA Flagship Garage & Training Hub.",
      visionBadge: "AI-generated concept",
      viewsLabel: "Choose a view",
      views: [
        {
          id: "front",
          label: "Front",
          today: { src: "/building/current/old_building_front.jpeg", alt: "The front of the secured warehouse today: weathered walls, an open doorway and a bare yard" },
          vision: { src: "/building/new_building_front.jpeg", alt: "Concept of the front of the WAJA Flagship Garage & Training Hub, with red branding and a service bay" },
        },
        {
          id: "entrance",
          label: "Entrance",
          today: { src: "/building/current/old_building_entrance.jpeg", alt: "The warehouse entrance today" },
          vision: { src: "/building/new_building_entrance.jpeg", alt: "Concept of the new entrance to the WAJA training hub" },
        },
        {
          id: "right-side",
          label: "Right side",
          today: { src: "/building/current/old_building_right_side.jpeg", alt: "The right side of the warehouse today" },
          vision: { src: "/building/new_building_right_side.jpeg", alt: "Concept of the right side of the WAJA training hub" },
        },
        {
          id: "overview",
          label: "From the street",
          today: { src: "/building/current/old_building.jpeg", alt: "The long warehouse beside a red dirt road, with Ghana Publishing Corporation lettering still on the wall" },
          vision: { src: "/building/new_building_overview.jpeg", alt: "Aerial concept of the WAJA Flagship Garage & Training Hub with landscaping and parking" },
        },
      ],
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
      "Incubation support for the 17 women",
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
    funding: { raised: "$12,934", goalText: "raised of $650,000 needed to fit out the centre", percentLabel: "1%", percent: 1 },
    button: { label: "Help equip the centre", href: "/get-involved/give#give-now" },
  },
  closing: {
    title: "Seventeen women are most of the way there. Take them the rest.",
    primary: { label: "Fund a trainee", href: "/get-involved/give#give-now" },
    secondary: { label: "Other ways to help", href: "/get-involved" },
  },
};
