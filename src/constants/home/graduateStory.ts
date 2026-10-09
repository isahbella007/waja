import type { CtaLink, ImageContent } from "../types";

// The featured story on the home page
export type GraduateStoryContent = {
  eyebrow: string;
  quote: string;
  name: string;
  role: string;
  cohort: string;
  image: ImageContent;
  link: CtaLink;
};

// TODO(WAJA): fill in her name, her own words and her year (owner to provide)
export const GRADUATE_STORY: GraduateStoryContent = {
  eyebrow: "Graduate Story",
  quote: "When I first picked up a wrench, I didn't know what I was capable of. WAJA taught me more than how to fix engines. It taught me to believe in myself. Today I'm not just a mechanic, I'm proof that a woman's place is wherever she chooses to build her future.",
  name: "Zebby",
  role: "WAJA Graduate",
  cohort: "Class of 2026",
  image: {
    src: "/students/trainee.jpg",
    alt: "A WAJA trainee in blue overalls carrying a toolbox and a diagnostic tool past cars in the workshop yard",
    // She stands left of centre in a wide photo; keep her in the upright frame
    position: "40% 40%",
  },
  link: { label: "Read more stories", href: "/stories" },
};
