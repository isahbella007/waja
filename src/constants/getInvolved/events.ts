import { cloudinaryImage, cloudinaryPoster, cloudinaryVideo } from "@/lib/cloudinary";
import type { CtaLink, ImageContent, SectionHeading, VideoContent } from "../types";

export type EventPhoto = ImageContent & {
  // Short caption under the photo
  caption: string;
  // "wide" photos span more of the mosaic; "tall" photos are portrait
  shape: "wide" | "tall";
};

export type EventVideo = {
  title: string;
  duration: string;
  video: VideoContent;
  poster: ImageContent;
};

export type WajaEvent = {
  id: string;
  title: string;
  // Shown as written, e.g. "May 2026"
  date: string;
  description: string[];
  photos: EventPhoto[];
  videos: EventVideo[];
};

export type EventsPageContent = {
  seo: { title: string; description: string };
  intro: SectionHeading;
  labels: { photos: string; videos: string; enlarge: string; close: string; play: string; comingSoon: string };
  closing: { title: string; primary: CtaLink; secondary: CtaLink };
};

export const EVENTS_PAGE: EventsPageContent = {
  seo: {
    title: "Events | WAJA",
    description: "Moments from the WAJA community: social days, gatherings and the people who show up for the women of WAJA.",
  },
  intro: {
    eyebrow: "Events",
    title: "Moments from the WAJA community.",
    description: "Social days, gatherings and the people who show up for the women of WAJA.",
  },
  labels: {
    photos: "Photos",
    videos: "Watch",
    enlarge: "View larger photo",
    close: "Close",
    play: "Play {title}",
    comingSoon: "Video coming soon",
  },
  closing: {
    title: "Want to be at the next one, or help make it happen?",
    primary: { label: "Get in touch", href: "/about/contact?topic=other" },
    secondary: { label: "Ways to give", href: "/get-involved/give" },
  },
};

// Newest first. Add a new event by adding one more entry here.
// TODO(WAJA): confirm the description, and add the location if wanted
export const EVENTS: WajaEvent[] = [
  {
    id: "waja-social-day-may-2026",
    title: "WAJA Social Day",
    date: "May 2026",
    description: [
      "The WAJA Social Club brings together Jeep and off-road enthusiasts to share adventures, learn off-roading basics and give back to their communities.",
      "On the day, friends and supporters gathered for a Jeep showcase and time with the WAJA team, and tools and diagnostic equipment were collected for the women's training.",
    ],
    photos: [
      {
        src: cloudinaryImage("v1791817320/WAJA_SOCIAL_DAY_MAY_2026"),
        alt: "Guests at tables under the orange WAJA Social Club banner, with a lifted Jeep on display",
        caption: "The WAJA Social Club banner goes up",
        shape: "wide",
      },
      {
        src: cloudinaryImage("v1791817267/WAJA_DAY"),
        alt: "A grey Jeep Wrangler raised on wooden ramps in front of the WAJA Social Club banner",
        caption: "The Jeep showcase",
        shape: "tall",
      },
      {
        src: cloudinaryImage("v1791817413/DONATION_COLLECTION"),
        alt: "A table under a tent covered with donated tool kits, diagnostic equipment and supplies",
        caption: "Tools and equipment collected for training",
        shape: "tall",
      },
    ],
    videos: [
      {
        title: "The Social Day",
        duration: "1:06",
        video: { url: cloudinaryVideo("v1791817366/WAJA_SOCIAL_DAY") },
        poster: { src: cloudinaryPoster("v1791817366/WAJA_SOCIAL_DAY", 35), alt: "The WAJA Social Club banner" },
      },
      {
        title: "With the team",
        duration: "0:18",
        video: { url: cloudinaryVideo("v1791817296/WAJA_LUNCH_WITH_TEAM") },
        poster: { src: cloudinaryPoster("v1791817296/WAJA_LUNCH_WITH_TEAM", 3), alt: "WAJA team members working together under the bonnet of a Jeep" },
      },
    ],
  },
];
