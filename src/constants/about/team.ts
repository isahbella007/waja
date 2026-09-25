import type { CtaLink, ImageContent, SectionHeading } from "../types";

export type TeamMember = {
  // Stable key; becomes the Sanity document _id / slug later
  id: string;
  name: string;
  role: string;
  // Short text shown on the card
  summary: string;
  // Full bio shown in the pop-up. One string per paragraph; leave empty to hide "Read full bio"
  bio: string[];
  image: ImageContent;
};

export type Volunteer = {
  id: string;
  name: string;
  role: string;
  image: ImageContent;
};

export type TeamContent = {
  seo: { title: string; description: string };
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    howWeWork: { title: string; description: string; link: CtaLink };
  };
  leadership: SectionHeading & { members: TeamMember[]; readBioLabel: string };
  volunteers: SectionHeading & { people: Volunteer[] };
  governance: SectionHeading & { principles: { title: string; description: string }[] };
  advisoryBoard: {
    badge: string;
    title: string;
    description: string;
    button: CtaLink;
    benefitsLabel: string;
    benefits: string[];
  };
  structure: { title: string; description: string; link: CtaLink };
};

const memberPlaceholder = (id: string): TeamMember => ({
  id,
  name: "[FULL NAME]",
  role: "[ROLE]",
  summary: "[Two lines on their background and what they do at WAJA.]",
  bio: ["[Full bio paragraph one.]", "[Full bio paragraph two.]"],
  image: { alt: "Photo: [FULL NAME]" },
});

export const TEAM: TeamContent = {
  seo: {
    title: "Our Team | WAJA",
    description:
      "Meet the WAJA leadership team and volunteers, and learn how we hold ourselves accountable while building automotive opportunity in West Africa.",
  },
  intro: {
    eyebrow: "Our team",
    title: "Building the future of automotive opportunity in West Africa.",
    paragraphs: [
      "WAJA is led by a team committed to strengthening workforce development, expanding economic opportunity and building modern automotive service infrastructure in West Africa.",
      "Our leadership team brings together experience in business, technical training, operations and international development.",
    ],
    howWeWork: {
      title: "How we work",
      description:
        "We operate with transparency, accountability and a focus on measurable impact. Our staff and volunteers power this mission, and we could not do much without their energy and dedication.",
      link: { label: "See our governance principles", href: "#governance" },
    },
  },
  leadership: {
    title: "Leadership",
    readBioLabel: "Read full bio",
    members: [
      {
        id: "ben",
        name: "Ben",
        role: "Founder",
        summary: "[Two lines on his background and what he does at WAJA.]",
        bio: ["[Full bio paragraph one.]", "[Full bio paragraph two.]"],
        image: { alt: "Photo: Ben" },
      },
      memberPlaceholder("leader-2"),
      memberPlaceholder("leader-3"),
      memberPlaceholder("leader-4"),
    ],
  },
  volunteers: {
    title: "Volunteers",
    description:
      "As dedicated volunteers, they are an essential part of our efforts to raise funds responsibly, promote awareness and deliver lasting change through collaboration, research and workforce development.",
    people: [
      {
        id: "douglas-karboni",
        name: "Douglas Karboni",
        role: "U.S. veteran and business owner",
        image: { alt: "Photo" },
      },
      {
        id: "scholastica-dohard",
        name: "Scholastica Dohard",
        role: "Education program officer",
        image: { alt: "Photo" },
      },
    ],
  },
  governance: {
    eyebrow: "Governance",
    title: "How we hold ourselves accountable.",
    principles: [
      {
        title: "Transparency",
        description:
          "Organizations working for social impact should give clear information about their mission, programs and operations. We communicate openly with donors, partners and the communities we serve.",
      },
      {
        title: "Accountability",
        description:
          "Our leadership is responsible for allocating entrusted resources responsibly and in line with our mission, supported by internal systems for program delivery and financial management.",
      },
      {
        title: "Mission alignment",
        description:
          "Every strategic decision is measured against our mission: expanding opportunity for women and vulnerable people through technical training and entrepreneurship.",
      },
      {
        title: "Ethical stewardship",
        description:
          "We are committed to ethical fundraising and responsible stewardship of every contribution from donors and partners.",
      },
    ],
  },
  advisoryBoard: {
    badge: "In progress",
    title: "Global Automotive & Mobility Advisory Board",
    description:
      "We are establishing an advisory board of leaders from the automotive, mobility, investment and development communities. It will help WAJA grow responsibly while staying connected to global best practice.",
    button: { label: "Join the advisory board", href: "/about/contact?topic=advisory-board" },
    benefitsLabel: "The board will provide:",
    benefits: [
      "Strategic guidance",
      "Industry insight",
      "Introductions to potential partners and investors",
      "Expertise in automotive infrastructure and workforce development",
    ],
  },
  structure: {
    title: "Organizational structure",
    description:
      "WAJA is a nonprofit organization and does not issue equity or investment opportunities. Certain mobility innovation initiatives may be developed through separate for-profit entities that can pursue investment to support scalable projects.",
    link: { label: "Questions about how we are structured? Contact us", href: "/about/contact" },
  },
};
