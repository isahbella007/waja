// Shared content shapes. These mirror the Sanity schemas we will add later,
// so swapping a constant for a GROQ query result should not change components.

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type CtaLink = {
  label: string;
  href: string;
};

// A button that may not have a destination yet (e.g. "Apply" before the
// application page exists). Without href it renders but doesn't navigate.
export type ActionLink = {
  label: string;
  href?: string;
};

export type SectionHeading = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export type ImageContent = {
  // Leave src empty to show a labelled placeholder until the real photo is ready
  src?: string;
  alt: string;
};

// Content for the shared CtaBanner. Buttons render in order: the first is
// filled, the rest are outlined. Add or remove entries to change the count.
export type CtaBannerContent = {
  title: string;
  description?: string;
  buttons: ActionLink[];
};
