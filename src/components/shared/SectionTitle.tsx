import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { wajaColors } from "@/theme/theme";
import type { SectionHeading } from "@/constants/types";

// h2-level section heading (PageIntro is the h1 version)
export default function SectionTitle({ eyebrow, title, description }: SectionHeading) {
  return (
    <Stack spacing={1.5} sx={{ maxWidth: 720 }}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: wajaColors.accent, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        component="h2"
        variant="h2"
        sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, lineHeight: 1.2, color: wajaColors.foreground }}
      >
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
