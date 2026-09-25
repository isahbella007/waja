// Organisation-wide contact details. Same values the footer shows today; any
// page that needs an email, phone, address or social link should read from here.

export type SocialPlatform = "instagram" | "facebook" | "linkedin" | "x" | "youtube";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type Office = {
  country: string;
  city: string;
  phone: string;
  address: string;
};

export type ContactDetails = {
  email: string;
  offices: { unitedStates: Office; ghana: Office };
  socials: SocialLink[];
};

export const CONTACT_DETAILS: ContactDetails = {
  email: "info@gowaja.org",
  offices: {
    unitedStates: {
      country: "United States",
      city: "Washington DC",
      phone: "(800) 237-WAJA",
      address: "2812 Georgia Avenue NW, Washington, DC 20001",
    },
    ghana: {
      country: "Ghana",
      city: "Accra",
      phone: "+233 (0) 302 54 WAJA",
      address: "HQ3M+MXC, Graphic Rd, Accra, Ghana",
    },
  },
  socials: [
    { platform: "instagram", label: "WAJA on Instagram", href: "#" },
    { platform: "facebook", label: "WAJA on Facebook", href: "#" },
    { platform: "linkedin", label: "WAJA on LinkedIn", href: "#" },
    { platform: "x", label: "WAJA on X", href: "#" },
  ],
};
