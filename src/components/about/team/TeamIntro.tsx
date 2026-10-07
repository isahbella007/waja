import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageIntro from "@/components/shared/PageIntro";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

// Headline and intro on the left; "How we work" as a ruled aside on the right (no box)
export default function TeamIntro({ eyebrow, title, paragraphs, howWeWork }: TeamContent["intro"]) {
  return (
    <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "flex-end" }}>
      <Grid size={{ xs: 12, md: 8 }}>
        <Stack spacing={2}>
          <PageIntro eyebrow={eyebrow} title={title} />
          {paragraphs.map((paragraph) => (
            <Typography key={paragraph} variant="body1" sx={{ color: "text.secondary", maxWidth: 620 }}>
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box component="aside" sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: 2 }}>
          <Typography variant="subtitle1" component="h2" sx={{ color: wajaColors.foreground, fontWeight: 700, mb: 1 }}>
            {howWeWork.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            {howWeWork.description}
          </Typography>
          <ArrowLink {...howWeWork.link} />
        </Box>
      </Grid>
    </Grid>
  );
}
