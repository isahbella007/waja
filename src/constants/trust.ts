import type { ImageContent } from "./types";

// Candid (formerly GuideStar) transparency seal. Candid expects the seal to link to
// the organisation's public profile so visitors can verify it.
export const CANDID_SEAL: { href: string; label: string; image: ImageContent & { src: string } } = {
  href: "https://app.candid.org/profile/16537679/west-africa-jeep-adventures-for-women-and-orphans-33-1714992?pkId=20982299-4c61-4370-aaad-82a16ab56bb3&isActive=true",
  label: "View WAJA's profile on Candid (opens in a new tab)",
  image: { src: "/candid-seal-silver-2026.png", alt: "Candid Silver Transparency 2026 seal" },
};
