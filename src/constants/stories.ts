import type { CtaLink, ImageContent, VideoContent } from "./types";

// Leave a story's `video` out until it's hosted: a placeholder shows instead
export type StoryVideo = VideoContent;

export type Story = {
  id: string;
  name: string;
  role: string;
  quote: string;
  // e.g. "0:48"
  duration: string;
  // Phone videos are usually portrait
  orientation: "portrait" | "landscape";
  poster: ImageContent;
  video?: StoryVideo;
  transcript: string[];
  // Only stories with recorded consent (and guardian consent where needed) are shown
  consentConfirmed: boolean;
};

export type StoriesPageContent = {
  seo: { title: string; description: string };
  intro: { eyebrow: string; title: string; description: string; countNote: string };
  labels: {
    nowPlaying: string;
    play: string; // "Play {name}'s story"
    comingSoon: string;
    transcript: string;
    moreStories: string;
    watch: string;
  };
  consentNote: string;
  closing: { title: string; primary: CtaLink; secondary: CtaLink };
};

export const STORIES_PAGE: StoriesPageContent = {
  seo: {
    title: "Stories | WAJA",
    description: "Short videos from the women training with WAJA in Ghana, in their own words.",
  },
  intro: {
    eyebrow: "Stories",
    title: "In their own words.",
    description: "Short videos from the women training with WAJA: what changed, what was hard, and what comes next.",
    countNote: "{count} stories · under a minute each",
  },
  labels: {
    nowPlaying: "Now playing",
    play: "Play {name}'s story",
    comingSoon: "Video coming soon",
    transcript: "Read the transcript",
    moreStories: "More stories",
    watch: "Watch",
  },
  consentNote: "Every story here is shared with the storyteller's consent, in her own words.",
  closing: {
    title: "Help write the next story.",
    primary: { label: "Fund a trainee", href: "/get-involved/give#give-now" },
    secondary: { label: "Apply to train", href: "/apply" },
  },
};

// TODO(WAJA): replace the six placeholders with the real stories once the videos are hosted
const placeholder = (n: number): Story => ({
  id: `story-${n}`,
  name: `[Name ${n}]`,
  role: "[Program · Cohort]",
  quote: "[A short line from the video that captures her story.]",
  duration: "0:45",
  orientation: "portrait",
  poster: { alt: `Photo: still from story ${n}` },
  transcript: ["[Transcript of the video, taken from the corrected captions.]"],
  consentConfirmed: true,
});

export const STORIES: Story[] = [1, 2, 3, 4, 5, 6].map(placeholder);
