import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { wajaColors } from "@/theme/theme";
import type { ProgramsOverviewContent } from "@/constants/programs/overview";

export default function WhyTechnology({ eyebrow, title, paragraphs, highlight }: ProgramsOverviewContent["whyTechnology"]) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: wajaColors.foreground,
        color: "#FFFFFF",
        py: { xs: 7, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="overline"
              component="p"
              sx={{ color: wajaColors.accent, fontWeight: 700, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1 }}
            >
              {eyebrow}
            </Typography>
            <Typography
              component="h2"
              variant="h4"
              sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.85rem" }, lineHeight: 1.25 }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              {paragraphs.map((paragraph) => (
                <Typography key={paragraph} variant="body1" sx={{ color: wajaColors.border }}>
                  {paragraph}
                </Typography>
              ))}
              {/* <Typography variant="h6" component="p" sx={{ color: "#FFFFFF", fontWeight: 600, lineHeight: 1.4 }}>
                {highlight}
              </Typography> */}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
