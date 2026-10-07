import Image from "next/image";
import Box from "@mui/material/Box";
import { CANDID_SEAL } from "@/constants/trust";
import { wajaColors } from "@/theme/theme";

// The Candid transparency seal, linked to WAJA's Candid profile.
// Shown unaltered (no recolouring or cropping), at a modest size.
// onDark: use a white focus ring so keyboard users can see it on dark backgrounds
export default function CandidSeal({ size = 88, onDark = false }: { size?: number; onDark?: boolean }) {
  return (
    <Box
      component="a"
      href={CANDID_SEAL.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={CANDID_SEAL.label}
      sx={{
        display: "inline-block",
        lineHeight: 0,
        borderRadius: "2px",
        transition: "opacity 200ms ease",
        "&:hover": { opacity: 0.85 },
        "&:focus-visible": { outline: `3px solid ${onDark ? "#FFFFFF" : wajaColors.primary}`, outlineOffset: 3 },
      }}
    >
      <Image src={CANDID_SEAL.image.src} alt={CANDID_SEAL.image.alt} width={size} height={size} />
    </Box>
  );
}
