import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { wajaColors } from "@/theme/theme";
import type { MissionVisionContent } from "@/constants/about/missionVision";

export default function WholeFamilyApproach({ pillars, title, paragraphs }: MissionVisionContent["wholeFamily"]) {
  return (
    <Box
      sx={{
        bgcolor: wajaColors.foreground,
        color: "#FFFFFF",
        borderRadius: "16px",
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          gap: 3,
          m: 0,
          p: 0,
          mb: { xs: 5, md: 7 },
          listStyle: "none",
        }}
      >
        {pillars.map((pillar) => (
          <Box component="li" key={pillar.title}>
            <Typography variant="h5" component="p" sx={{ color: "#FFFFFF", fontWeight: 700 }}>
              {pillar.title}
            </Typography>
            <Typography variant="body2" sx={{ color: wajaColors.border }}>
              {pillar.caption}
            </Typography>
          </Box>
        ))}
      </Box>

      <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{ color: "#FFFFFF", fontSize: { xs: "1.5rem", md: "1.75rem" }, lineHeight: 1.3 }}
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
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
