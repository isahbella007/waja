import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { wajaColors } from "@/theme/theme";
import type { SectionHeading } from "@/constants/types";

export default function PageIntro({ eyebrow, title, description }: SectionHeading) {
  return (
    <Stack spacing={2} sx={{ maxWidth: 720 }}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: wajaColors.accent, fontWeight: 700, letterSpacing: "0.12em", lineHeight: 1.5 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        component="h1"
        variant="h2"
        sx={{ fontSize: { xs: "2.25rem", md: "3rem" }, color: wajaColors.foreground }}
      >
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.05rem", maxWidth: 600 }}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
