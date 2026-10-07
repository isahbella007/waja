import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaFrame from "@/components/shared/MediaFrame";
import { wajaColors } from "@/theme/theme";
import type { ImageContent } from "@/constants/types";

// Initials from a name, ignoring placeholder brackets: "Abigail Owusu" -> "AO"
function initials(name: string) {
  return name
    .replace(/[^\p{L}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

// Portrait photo on the dark teal of the governance band, or that panel with large
// serif initials until the photo arrives,
// so a missing headshot still looks deliberate rather than broken.
export default function TeamPortrait({ name, image, sizes }: { name: string; image: ImageContent; sizes: string }) {
  if (image.src) {
    return <MediaFrame image={{ position: "center 25%", ...image }} sizes={sizes} placeholderBg={wajaColors.foreground} sx={{ aspectRatio: "4 / 5" }} />;
  }
  return (
    <Box
      role="img"
      aria-label={image.alt}
      sx={{ aspectRatio: "4 / 5", bgcolor: wajaColors.foreground, display: "grid", placeItems: "center", overflow: "hidden" }}
    >
      <Typography
        aria-hidden
        sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 300, fontSize: { xs: "2.5rem", md: "3.25rem" }, color: wajaColors.border, opacity: 0.7 }}
      >
        {initials(name)}
      </Typography>
    </Box>
  );
}
