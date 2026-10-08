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
  quote: "[A short quote in her own words about what the training changed for her.]",
  name: "[Name]",
  role: "Automotive Technology Graduate",
  cohort: "Class of [Year]",
  image: {
    src: "/students/trainee.jpg",
    alt: "A WAJA trainee in blue overalls carrying a toolbox and a diagnostic tool past cars in the workshop yard",
    // She stands left of centre in a wide photo; keep her in the upright frame
    position: "40% 40%",
  },
  link: { label: "Read more stories", href: "/stories" },
};
