import type { ActionLink, CtaLink, NavItem } from "./types";

// Where every general "Apply" button goes: the Apply information page.
// (Set to undefined to make the buttons show without navigating.)
export const APPLY_HREF: string | undefined = "/apply";

export const ABOUT_NAV: NavItem = {
  label: "About",
  href: "/about",
  children: [
    { label: "Mission & Vision", href: "/about/mission-vision" },
    { label: "History", href: "/about/history" },
    { label: "Team", href: "/about/team" },
    { label: "Contact", href: "/about/contact" },
  ],
};

export const PROGRAMS_NAV: NavItem = {
  label: "Programs",
  href: "/programs",
  children: [
    { label: "Overview", href: "/programs/overview" },
    { label: "Automotive skills", href: "/programs/automotive-skills" },
    { label: "Microenterprise", href: "/programs/microenterprise" },
    { label: "Life skills & leadership", href: "/programs/life-skills-leadership" },
  ],
};

// Shown on the right of the Programs sub-nav
export const PROGRAMS_SUBNAV_ACTION: ActionLink = { label: "Apply", href: APPLY_HREF };

export const NAV_LINKS: NavItem[] = [
  ABOUT_NAV,
  PROGRAMS_NAV,
  { label: "Our Story", href: "/#graduate-story" },
  { label: "Impact", href: "/#impact" },
  { label: "Get Involved", href: "/#get-involved" },
];

export const DONATE_LINK: CtaLink = { label: "Donate", href: "/#donate" };
