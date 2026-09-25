import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageIntro from "@/components/shared/PageIntro";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

export default function TeamIntro({ eyebrow, title, paragraphs, howWeWork }: TeamContent["intro"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
      <Grid size={{ xs: 12, md: 7 }}>
        <Stack spacing={2}>
          <PageIntro eyebrow={eyebrow} title={title} />
          {paragraphs.map((paragraph) => (
            <Typography key={paragraph} variant="body1" sx={{ color: "text.secondary", maxWidth: 600 }}>
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Box
          component="aside"
          sx={{ bgcolor: "#FFFFFF", border: "1px solid", borderColor: "divider", borderRadius: "12px", p: 3 }}
        >
          <Typography variant="h6" component="h2" sx={{ color: wajaColors.foreground, fontWeight: 700, mb: 1.5 }}>
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
