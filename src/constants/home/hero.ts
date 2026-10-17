import type { ImageContent } from "../types";

// What W-A-J-A stands for, one letter per row in the home hero
export const WAJA_NAME_PARTS = [
  { letter: "W", word: "West" },
  { letter: "A", word: "Africa" },
  { letter: "J", word: "Journey-Woman" },
  { letter: "A", word: "Adventures" },
] as const;

export const WAJA_FULL_NAME = WAJA_NAME_PARTS.map((part) => part.word).join(" ");

export type HeroContent = {
  badge: string;
  title: string;
  description: string;
  // Read out by screen readers in place of the letter-by-letter block
  nameLabel: string;
  // Large screens: the four letter boxes, a nudge to hover them, and the line shown once all four are open
  nameHint: string;
  nameComplete: string;
  // Large screens only, dimmed behind the text. Leave src empty for the plain teal background.
  background: ImageContent;
};

export const HERO: HeroContent = {
  badge: "U.S. 501(c)(3) Nonprofit · Ghana & West Africa",
  title: "Empowering Women to Drive the Future of Mobility in Ghana.",
  description:
    "Hands-on automotive, diagnostics and EV training, plus business and life skills, so women and orphans can build lasting economic independence",
  nameLabel: `WAJA stands for ${WAJA_FULL_NAME}`,
  nameHint: "Hover over each letter to see what WAJA stands for",
  nameComplete: WAJA_FULL_NAME,
  // Decorative (heavily dimmed), so no alt text; keep the trainee and instructor in frame
  background: { src: "/students/student_teacher.jpg", alt: "", position: "65% 40%" },
};
