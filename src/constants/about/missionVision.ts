import type { CtaBannerContent, SectionHeading } from "../types";

export type MissionVisionContent = {
  seo: { title: string; description: string };
  intro: SectionHeading;
  mission: { title: string; paragraphs: string[] };
  vision: { title: string; paragraphs: string[]; highlight: string };
  difference: SectionHeading & { rolesLabel: string; roles: string[] };
  wholeFamily: {
    pillars: { title: string; caption: string }[];
    title: string;
    paragraphs: string[];
  };
  cta: CtaBannerContent;
};

export const MISSION_VISION: MissionVisionContent = {
  seo: {
    title: "Mission & Vision | WAJA",
    description:
      "Why WAJA exists and where we're going: training women and orphans in Ghana for real work in a changing automotive industry.",
  },
  intro: {
    eyebrow: "About WAJA",
    title: "Why we exist, and where we're going.",
    description:
      "WAJA stands for West Africa Jeep Adventures for Women and Orphans. We train women and orphans in Ghana for real work in a changing automotive industry.",
  },
  mission: {
    title: "Our mission",
    paragraphs: [
      "WAJA helps women gain the technical, digital, personal and entrepreneurial skills needed to take part in the future of automotive service and mobility.",
      "We equip women and orphans in Ghana with automotive technology training, life skills, financial literacy, personal development and business readiness, so they can build stable lives, support their families and lead in their communities.",
    ],
  },
  vision: {
    title: "Our vision",
    paragraphs: [
      "A future where women in Ghana and West Africa lead in technology-enabled automotive service, diagnostics, EV readiness and mobility infrastructure.",
    ],
    highlight:
      "Women should not only take part in the automotive industry. They should help shape its future.",
  },
  difference: {
    eyebrow: "What makes WAJA different",
    title: "We are not only teaching women to repair vehicles.",
    description:
      "We combine technical skill, digital learning, personal development and business readiness, so women can build futures that last.",
    rolesLabel: "We prepare women to become:",
    roles: [
      "Automotive diagnostic technicians",
      "Digital service assistants",
      "EV-ready automotive professionals",
      "Service advisors",
      "Garage operators",
      "Future entrepreneurs",
      "Community leaders",
    ],
  },
  wholeFamily: {
    pillars: [
      { title: "Skills", caption: "create independence" },
      { title: "Income", caption: "builds stability" },
      { title: "Stability", caption: "changes generations" },
    ],
    title: "A whole-family approach to break the cycle.",
    paragraphs: [
      "Economic vulnerability often repeats across generations. By equipping orphans and women with high-demand technical skills, business ownership pathways and leadership development, we create a generational interruption of poverty.",
      "We don't empower individuals in isolation. We empower families: children of mothers in our programs receive parallel educational support, so opportunity carries into the next generation.",
    ],
  },
  cta: {
    title: "See how it started.",
    description: "One Jeep, a roadside repair and two women who wanted to learn.",
    buttons: [
      { label: "Read our history", href: "/about/history" },
      { label: "See our programs", href: "/programs" },
    ],
  },
};
