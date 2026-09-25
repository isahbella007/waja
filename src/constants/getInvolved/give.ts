import type { ActionLink, CtaLink, SectionHeading } from "../types";

// Where every "Give online" / "Donate now" button goes. Undefined until a
// payment provider is chosen: the buttons show but don't navigate yet.
export const DONATE_ONLINE_HREF: string | undefined = undefined;

type Titled = { title: string; description: string };

// ---------- /get-involved/give ----------

export type GiveFrequency = "monthly" | "once";

export type GiftTier = {
  // Number sent to the giving platform; amount is what people see
  value: number;
  amount: string;
  description: string;
};

// Link to the giving platform with the chosen amount, or undefined while
// DONATE_ONLINE_HREF isn't set (the button then shows but doesn't navigate).
// Adjust the parameter names to match the platform once it's connected.
export function buildDonateHref(value: number, frequency: GiveFrequency): string | undefined {
  if (!DONATE_ONLINE_HREF) return undefined;
  const separator = DONATE_ONLINE_HREF.includes("?") ? "&" : "?";
  return `${DONATE_ONLINE_HREF}${separator}amount=${value}&frequency=${frequency}`;
}

export type GivePageContent = {
  seo: { title: string; description: string };
  intro: SectionHeading & { jumpLabel: string; jumpLinks: CtaLink[] };
  giveNow: {
    eyebrow: string;
    tiers: GiftTier[];
    defaultValue: number;
    panelEyebrow: string;
    frequencyLabel: string;
    frequencies: { value: GiveFrequency; label: string; button: string }[];
    secureNote: string;
    taxNote: string;
    alternative: CtaLink;
  };
  fundingUses: {
    title: string;
    description: string;
    groups: { title: string; items: string[] }[];
  };
  challenge: SectionHeading & {
    barriers: { title: string; items: string[] };
    market: { title: string; items: string[] };
  };
  solution: SectionHeading & {
    points: string[];
    principles: { title: string; description: string }[];
  };
  impact: SectionHeading & { kpis: { value: string; label: string; description: string }[] };
  commitment: SectionHeading & { items: string[] };
  largerScale: {
    title: string;
    link: CtaLink;
    roles: { title: string; description: string; href: string }[];
  };
};

export const GIVE_PAGE: GivePageContent = {
  seo: {
    title: "Ways to Give | WAJA",
    description:
      "Give to WAJA and help 17 women in Ghana, including 3 orphans, move into the next phase of automotive training, technology learning and independence.",
  },
  intro: {
    eyebrow: "Ways to give",
    title: "Every gift is tied to something a trainee can hold.",
    description:
      "WAJA is raising support to help 17 women, including 3 orphans, move into the next phase: training, technology learning, incubation and long-term independence.",
    jumpLabel: "On this page",
    jumpLinks: [
      { label: "Give now", href: "#give-now" },
      { label: "What funding supports", href: "#funding" },
      { label: "Why this model works", href: "#model" },
      { label: "Major gifts & sponsorship", href: "/get-involved/give/major-gifts" },
    ],
  },
  giveNow: {
    eyebrow: "Choose an amount",
    tiers: [
      { value: 100, amount: "$100", description: "Provides training materials, safety supplies and workshop essentials for one participant." },
      { value: 250, amount: "$250", description: "Helps cover shop supplies, transportation support, wellness resources and training materials." },
      {
        value: 500,
        amount: "$500",
        description: "Supports hands-on technical instruction, digital learning tools, financial literacy, personal development and mentorship.",
      },
      {
        value: 5000,
        amount: "$5,000",
        description:
          "Helps fund the next phase for the 17 women: incubation, tools, technology, partner services, business readiness and training centre setup.",
      },
    ],
    defaultValue: 250,
    panelEyebrow: "Your gift",
    frequencyLabel: "How often",
    frequencies: [
      { value: "monthly", label: "Monthly", button: "Give {amount} monthly" },
      { value: "once", label: "One-time", button: "Give {amount} once" },
    ],
    secureNote: "Secure giving through Boomerang.",
    taxNote: "U.S. 501(c)(3) · EIN [EIN] · tax-deductible as allowed by law.",
    alternative: { label: "Prefer bank transfer or a pledge?", href: "/about/contact?topic=donation" },
  },
  fundingUses: {
    title: "What funding supports overall",
    description: "Contributions provide the tools, technology, instruction, support services and stability these women need to succeed.",
    groups: [
      {
        title: "Facility & technology",
        items: [
          "Warehouse-based training centre launch",
          "Diagnostic scanners",
          "Laptops and tablets",
          "Digital repair databases",
          "AI-supported repair learning tools",
          "EV and hybrid training equipment",
          "Automotive lifts and training tools",
        ],
      },
      {
        title: "Workshop & safety",
        items: [
          "Safety gear and uniforms",
          "Training bay setup",
          "Paint booth safety systems",
          "Training classrooms and equipment",
          "Instructor support",
          "Financial literacy partnerships",
        ],
      },
      {
        title: "People & progression",
        items: [
          "Wellness and personal development services",
          "Incubation and business readiness support",
          "Scholarships and stipends",
          "Mentor and instructor support",
          "Operational excellence systems",
        ],
      },
    ],
  },
  challenge: {
    eyebrow: "The challenge and the opportunity",
    title: "Two parallel needs, one solution.",
    description:
      "Women and orphans face barriers to employment, while demand for skilled automotive service keeps growing. WAJA bridges the gap.",
    barriers: {
      title: "Barriers to employment",
      items: [
        "Limited vocational opportunities",
        "Financial dependency",
        "Lack of access to technical training",
        "Underrepresentation in skilled trades",
      ],
    },
    market: {
      title: "A growing market",
      items: [
        "Increasing demand for skilled automotive repair",
        "Need for globally recognised service standards",
        "Opportunity for a women-led social enterprise",
        "Potential for regional economic growth",
      ],
    },
  },
  solution: {
    eyebrow: "Our solution",
    title: "The WAJA Automotive Excellence Center",
    description:
      "A social enterprise built for economic independence: a premium automotive repair business that funds structured, hands-on training for women and orphans, creating a self-sustaining cycle.",
    points: [
      "Premium automotive repair services for the public",
      "Structured, hands-on training in a live workshop",
      "Mentorship and job-readiness programmes",
      "Clear employment pathways for graduates",
    ],
    principles: [
      {
        title: "Revenue + impact model",
        description: "Repair operations generate sustainable revenue to support training, so the model is built to last.",
      },
      {
        title: "Women-focused trade access",
        description: "Intentionally opening doors for women and orphans in a traditionally male-dominated industry.",
      },
      {
        title: "Assisted registration",
        description: "Local NGOs and community leaders register women without internet access or formal documentation.",
      },
      {
        title: "Built to global standards",
        description: "An ISO 9001-aligned quality management system for operational excellence and accountability.",
      },
    ],
  },
  impact: {
    eyebrow: "Measurable, lasting impact",
    title: "This is workforce development, not symbolic charity.",
    description: "With your support, we track key performance indicators to make sure we achieve:",
    kpis: [
      { value: "80%+", label: "Competency rate", description: "Trainees master the skills needed for employment." },
      { value: "[##]", label: "Job placement", description: "Clear pathways into work for our graduates." },
      { value: "[##]", label: "Income stability", description: "Women-led households with real financial independence." },
    ],
  },
  commitment: {
    eyebrow: "Our commitment to you",
    title: "You will see where it went.",
    items: [
      "Clear financial tracking and regular impact updates",
      "Key performance indicator reporting",
      "Ethical governance and accountability",
      "Meaningful donor recognition opportunities",
    ],
  },
  largerScale: {
    title: "Giving at a larger scale",
    link: { label: "Major gifts & naming opportunities", href: "/get-involved/give/major-gifts" },
    roles: [
      {
        title: "Capital sponsor",
        description: "Support facility development, equipment or classrooms.",
        href: "/get-involved/give/major-gifts",
      },
      {
        title: "Scholarship sponsor",
        description: "Fund a full training cohort and empower a new generation of technicians.",
        href: "/get-involved/give/major-gifts",
      },
      {
        title: "Equipment sponsor",
        description: "Provide lifts, tools, diagnostics or paint systems.",
        href: "/get-involved/give/in-kind",
      },
      {
        title: "Corporate & grant partner",
        description: "Align your brand with empowerment, or support structured, measurable workforce development.",
        href: "/get-involved/partner",
      },
    ],
  },
};

// ---------- /get-involved/give/major-gifts ----------

export type MajorGiftsContent = {
  seo: { title: string; description: string };
  intro: SectionHeading & { jumpLabel: string; jumpLinks: CtaLink[] };
  approach: SectionHeading & { principles: Titled[] };
  opportunities: {
    title: string;
    description: string;
    areas: { tag: string; title: string; description: string; items: string[] }[];
  };
  levels: {
    title: string;
    currencyNote: string;
    tiers: { amount: string; name: string; description: string }[];
    note: string;
  };
  stewardship: SectionHeading & { expectations: string[] };
  howToGive: {
    title: string;
    options: (Titled & { action: ActionLink })[];
  };
  closing: { title: string; description: string; action: CtaLink };
};

export const MAJOR_GIFTS_PAGE: MajorGiftsContent = {
  seo: {
    title: "Major Gifts | WAJA",
    description:
      "Major giving opportunities at WAJA: naming rights, cohort underwriting and equipment for a modern automotive training centre for women and orphans in Ghana.",
  },
  intro: {
    eyebrow: "Major gifts",
    title: "Fund the building, the cohort, or the equipment that makes both work.",
    description:
      "WAJA is developing a modern automotive repair and training centre that gives women and orphans job-ready technical skills, backed by professional standards and measured performance. This is not short-term relief: it is capacity-building with discipline.",
    jumpLabel: "On this page",
    jumpLinks: [
      { label: "Giving opportunities", href: "#opportunities" },
      { label: "Gift levels", href: "#gift-levels" },
      { label: "Stewardship & governance", href: "#stewardship" },
      { label: "How to give", href: "#how-to-give" },
      { label: "Donate equipment (in-kind)", href: "/get-involved/give/in-kind" },
    ],
  },
  approach: {
    eyebrow: "A different approach",
    title: "Built for long-term success.",
    principles: [
      {
        title: "A sustainable model",
        description:
          "WAJA integrates revenue-generating automotive services with structured training. Repair operations support ongoing programme delivery, reducing dependency on donations over time.",
      },
      {
        title: "Standards-based execution",
        description:
          "A quality management system ensures consistent service quality, documented processes, accountability and measured outcomes.",
      },
      {
        title: "Transparent impact",
        description:
          "Training happens inside a real operating shop with real customer expectations, so graduates build workplace-ready competence rather than classroom exposure.",
      },
      {
        title: "Barrier-free access",
        description:
          "Local organisations and verified volunteers may register applicants on their behalf when literacy, disability or lack of digital access is a barrier.",
      },
    ],
  },
  opportunities: {
    title: "Major giving opportunities",
    description: "Three ways to make a gift that changes what WAJA can do, not just what it can cover this month.",
    areas: [
      {
        tag: "Capital impact",
        title: "Fund the facility",
        description:
          "Support the construction and build-out of a modern, landmark centre that becomes a permanent platform for skill development.",
        items: [
          "Service bay sponsorship",
          "Training wing sponsorship",
          "Paint & bodywork suite sponsorship",
          "Customer overlook deck sponsorship",
        ],
      },
      {
        tag: "Human impact",
        title: "Fund a training cohort",
        description: "Underwrite a full cohort of trainees and give them everything they need to succeed.",
        items: ["Instruction and mentorship", "Safety gear and tools", "Competency verification", "Career readiness support"],
      },
      {
        tag: "Performance impact",
        title: "Equip the centre",
        description: "Fund the systems and tools that make a professional, safe and effective learning environment possible.",
        items: [
          "Vehicle lifts and safety anchors",
          "Diagnostic equipment and toolkits",
          "Paint booth and filtration systems",
          "PPE and safety infrastructure",
        ],
      },
    ],
  },
  levels: {
    title: "Suggested gift levels",
    currencyNote: "In U.S. dollars",
    tiers: [
      { amount: "$500,000+", name: "Title partner", description: "A naming rights opportunity with the highest visibility and signature impact." },
      { amount: "$250,000", name: "Major area sponsor", description: "Name the training wing, the paint and body suite, or the customer overlook deck." },
      { amount: "$100,000", name: "Classroom / lab sponsor", description: "Sponsor critical training infrastructure or a complete equipment set." },
      {
        amount: "$50,000",
        name: "Scholarship & safety sponsor",
        description: "Fund scholarships, personal protective equipment and competency assessments for trainees.",
      },
    ],
    note: "Custom gifts are welcome and can be structured for targeted outcomes. We will work with you to meet your philanthropic goals.",
  },
  stewardship: {
    eyebrow: "Stewardship, governance & trust",
    title: "Dignity and outcomes, not pity.",
    description:
      "We are committed to professional governance and brand-safe storytelling. Major donors and partners can expect:",
    expectations: [
      "Clear scope and deliverables tied to funded items",
      "Line-item budgeting and procurement controls",
      "Donor-linked reporting on measured outcomes and milestones",
      "Customised sponsor recognition options",
      "Site visits, graduation ceremonies and partner engagement",
    ],
  },
  howToGive: {
    title: "How to give",
    options: [
      {
        title: "Give online",
        description: "Make a major gift directly through our secure giving page.",
        action: { label: "Donate now", href: DONATE_ONLINE_HREF },
      },
      {
        title: "Pledge, wire or bank transfer",
        description: "Prefer a formal pledge structure or a transfer? We can provide a gift agreement and banking details.",
        action: { label: "Request instructions", href: "/about/contact?topic=major-gift" },
      },
      {
        title: "Donor-advised funds & foundations",
        description: "We can support structured giving through donor-advised funds or foundation partners.",
        action: { label: "Speak with leadership", href: "/about/contact?topic=major-gift" },
      },
      {
        title: "Equipment & supplies",
        description: "Give lifts, diagnostic equipment, paint systems, tools, technology or training vehicles in kind.",
        action: { label: "See items we need", href: "/get-involved/give/in-kind" },
      },
    ],
  },
  closing: {
    title: "Start a conversation with WAJA leadership.",
    description:
      "We can provide a gift agreement, banking details, a project brief for any funded item, or arrange a site visit in Ghana.",
    action: { label: "Request major gift information", href: "/about/contact?topic=major-gift" },
  },
};

// ---------- /get-involved/give/in-kind ----------

export type InKindContent = {
  seo: { title: string; description: string };
  intro: SectionHeading & { jumpLabel: string; jumpLinks: CtaLink[] };
  items: { title: string; description: string; list: string[] };
  training: { eyebrow: string; title: string; description: string; programLink: CtaLink };
  closing: { title: string; description: string; action: CtaLink };
};

export const IN_KIND_PAGE: InKindContent = {
  seo: {
    title: "In-Kind Donations | WAJA",
    description:
      "Donate automotive lifts, diagnostic equipment, paint systems, tools, technology or vehicles to equip WAJA's training centre for women and orphans in Ghana.",
  },
  intro: {
    eyebrow: "In-kind donations",
    title: "Give the tools they'll build careers with.",
    description:
      "Support comes in many forms. Donating equipment and supplies directly equips our training centre, giving women and young people hands-on experience with the industry-standard tools they need to build successful careers.",
    jumpLabel: "On this page",
    jumpLinks: [
      { label: "Items we need", href: "#items" },
      { label: "Offer a donation", href: "#offer" },
      { label: "Major gifts & sponsorship", href: "/get-involved/give/major-gifts" },
      { label: "Give an amount", href: "/get-involved/give#give-now" },
    ],
  },
  items: {
    title: "Items we need",
    description:
      "New or gently used equipment and supplies are welcome. They are crucial for outfitting our training centre, so trainees learn with industry-standard tools. We are currently looking for:",
    list: [
      "Automotive lifts",
      "Diagnostic equipment",
      "Paint systems",
      "Tool kits and safety equipment",
      "Technology & software",
      "Vehicles for training use",
    ],
  },
  training: {
    eyebrow: "Where it goes",
    title: "Straight into training.",
    description:
      "Every item on this list helps us provide top-tier training in our Women in Automotive Skills & Certification program.",
    programLink: { label: "About the program", href: "/programs/automotive-skills" },
  },
  closing: {
    title: "Let's coordinate your donation.",
    description: "If you can help with any of these needs, get in touch and we'll arrange the details with you. We'd love to hear from you.",
    action: { label: "Offer a donation", href: "/about/contact?topic=in-kind" },
  },
};
