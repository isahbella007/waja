import { cloudinaryPoster, cloudinaryVideo } from "@/lib/cloudinary";
import type { CtaLink, ImageContent, VideoContent } from "./types";

// Leave a story's `video` out until it's hosted: a placeholder shows instead
export type StoryVideo = VideoContent;

export type Story = {
  id: string;
  name: string;
  role: string;
  // Optional: a short line from the video. Hidden until added.
  quote?: string;
  // e.g. "0:48"
  duration: string;
  orientation: "portrait" | "landscape";
  poster: ImageContent;
  video?: StoryVideo;
  // Optional: one string per paragraph. The "Read the transcript" toggle shows only when present.
  transcript?: string[];
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

// Builds a story from its Cloudinary video. `poster` is the second of the video used as its thumbnail.
const story = (id: string, name: string, path: string, duration: string, poster = 3): Story => ({
  id,
  name,
  role: "WAJA trainee",
  duration,
  orientation: "landscape",
  video: { url: cloudinaryVideo(path) },
  poster: { src: cloudinaryPoster(path, poster), alt: `${name} speaking in her WAJA story video` },
  // TODO(WAJA): confirm consent is recorded for each woman before launch
  consentConfirmed: true,
});

// TODO(WAJA): add each woman's `quote` (a line from her video) and `transcript` when available
export const STORIES: Story[] = [
  story("zebby", "Zebby", "v1791475978/Zebby", "0:51"),
  story("chinenye-iwueze", "Chinenye Iwueze", "v1791475978/Chinenye_Iwueze", "0:39"),
  story("hilda-clement", "Hilda Clement", "v1791475963/Hilda_Clement", "0:42"),
  story("vera-gajah", "Vera Gajah", "v1791475953/Vera_Gajah", "0:33", 15),
  story("jennifer-figilo", "Jennifer Figilo", "v1791475935/Jennifer_Figilo", "0:35"),
  story("stephanie", "Stephanie", "v1791475912/Stephanie", "0:35"),
];
