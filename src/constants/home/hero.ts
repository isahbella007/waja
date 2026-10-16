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
};

export const HERO: HeroContent = {
  badge: "U.S. 501(c)(3) Nonprofit · Ghana & West Africa",
  title: "Empowering Women to Drive the Future of Mobility in Ghana.",
  description:
    "Hands-on automotive, diagnostics and EV training, plus business and life skills, so women and orphans can build lasting economic independence",
  nameLabel: `WAJA stands for ${WAJA_FULL_NAME}`,
};
