import { APPLY_HREF } from "../navigation";
import type { ActionLink, CtaBannerContent, CtaLink, ImageContent, SectionHeading } from "../types";

// Icon names map to MUI icons in the component, so content stays plain data
export type SkillIcon = "diagnostics" | "ai" | "ev" | "electrical" | "records" | "operations";

export type ProgramSummary = {
  id: string;
  // Small label above the number, e.g. "Program"
  label: string;
  // Large word on the panel, e.g. "One"
  number: string;
  title: string;
  subtitle: string;
  description: string;
  // Short theme shown at the bottom of the panel
  tag: string;
  link: CtaLink;
};

export type ProgramsOverviewContent = {
  seo: { title: string; description: string };
  intro: SectionHeading & {
    lead: string;
    primaryAction: ActionLink;
    secondaryAction: ActionLink;
    image: ImageContent;
  };
  skills: SectionHeading & { items: { icon: SkillIcon; title: string; description: string }[] };
  whyTechnology: { eyebrow: string; title: string; paragraphs: string[]; highlight: string };
  pathway: SectionHeading & { steps: string[]; programs: ProgramSummary[] };
  cta: CtaBannerContent;
};

export const PROGRAMS_OVERVIEW: ProgramsOverviewContent = {
  seo: {
    title: "Programs | WAJA",
    description:
      "Technology-enabled automotive training for women in Ghana: digital diagnostics, EV readiness, microenterprise and leadership programs.",
  },
  intro: {
    eyebrow: "Technology-enabled automotive training",
    title: "Modern cars require modern skills.",
    description:
      "Vehicles now rely on advanced electronics, sensors, onboard computers, diagnostic codes, digital repair systems and increasingly electric and hybrid platforms.",
    lead: "WAJA prepares women for this new reality.",
    primaryAction: { label: "Apply to a program", href: APPLY_HREF },
    secondaryAction: { label: "See the pathway", href: "#pathway" },
    image: {
      src: "/waja1.jpeg",
      alt: "A WAJA trainee in blue overalls works on an open car engine while two other trainees watch closely",
    },
  },
  skills: {
    eyebrow: "What participants learn",
    title: "Six areas of technology, taught hands-on.",
    items: [
      {
        icon: "diagnostics",
        title: "Digital diagnostics",
        description: "Using diagnostic scanners and interpreting vehicle fault codes.",
      },
      {
        icon: "ai",
        title: "AI-supported repair learning",
        description:
          "A learning environment where trainees use AI-supported tools to understand symptoms, compare repair pathways and strengthen diagnostic reasoning.",
      },
      {
        icon: "ev",
        title: "EV and hybrid readiness",
        description:
          "Foundational concepts for electric and hybrid systems: safety, batteries, charging and future service needs.",
      },
      {
        icon: "electrical",
        title: "Electrical and sensor systems",
        description: "Vehicle electronics, sensors, wiring systems and troubleshooting methods.",
      },
      {
        icon: "records",
        title: "Digital service records",
        description: "Documentation, service history, workflow tracking and customer communication.",
      },
      {
        icon: "operations",
        title: "Service operations technology",
        description:
          "How modern garages use scheduling tools, inventory systems, customer records and service management platforms.",
      },
    ],
  },
  whyTechnology: {
    eyebrow: "Why technology matters for women",
    title: "Technology creates a new entry point into the industry.",
    paragraphs: [
      "Women do not need to be limited by old assumptions about physical mechanical work. The future of automotive service depends on problem-solving, digital tools, diagnostics, data interpretation, customer communication and operational discipline.",
    ],
    highlight: "WAJA helps women enter that future with confidence.",
  },
  pathway: {
    eyebrow: "Integrated empowerment pathway",
    title: "Three programs that build on each other.",
    steps: ["Recruit", "Train", "Certify", "Employ", "Launch", "Lead"],
    programs: [
      {
        id: "automotive-skills",
        label: "Program",
        number: "One",
        title: "Women in Automotive Skills & Certification",
        subtitle: "Flagship 16-month cohort training",
        description:
          "Equipping underserved women and orphans with high-demand mechanical skills that lead directly to employment and entrepreneurship.",
        tag: "Technical mastery",
        link: { label: "Open", href: "/programs/automotive-skills" },
      },
      {
        id: "microenterprise",
        label: "Program",
        number: "Two",
        title: "Women's Microenterprise & Market Linkage Accelerator",
        subtitle: "Post-training business launch program",
        description: "Ensuring graduates move from skills to sustainable income.",
        tag: "Income & entrepreneurship",
        link: { label: "Open", href: "/programs/microenterprise" },
      },
      {
        id: "life-skills-leadership",
        label: "Program",
        number: "Three",
        title: "Life Skills, Leadership & Workforce Readiness",
        subtitle: "Foundational and wraparound support program",
        description:
          "Building confidence, numeracy, safety awareness and leadership capacity that supports long-term economic success.",
        tag: "Leadership & sustainability",
        link: { label: "Open", href: "/programs/life-skills-leadership" },
      },
    ],
  },
  cta: {
    title: "Ready to train with us?",
    description:
      "No formal literacy requirement. Applications are open to women aged 18 to 40, with orphans prioritised.",
    buttons: [{ label: "Apply to a program", href: APPLY_HREF }],
  },
};
