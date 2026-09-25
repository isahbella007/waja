import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { wajaColors } from "@/theme/theme";
import type { MissionVisionContent } from "@/constants/about/missionVision";

const CARD_SX = {
  height: "100%",
  borderRadius: "16px",
  p: { xs: 3, md: 4 },
};

const ICON_BOX_SX = {
  width: 40,
  height: 40,
  borderRadius: "10px",
  display: "grid",
  placeItems: "center",
  mb: 2.5,
};

export default function MissionVisionCards({
  mission,
  vision,
}: Pick<MissionVisionContent, "mission" | "vision">) {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          component="article"
          sx={{ ...CARD_SX, bgcolor: "#FFFFFF", border: "1px solid", borderColor: "divider" }}
        >
          <Box aria-hidden sx={{ ...ICON_BOX_SX, bgcolor: wajaColors.background, color: wajaColors.primary }}>
            <TrackChangesIcon fontSize="small" />
          </Box>
          <Typography component="h2" variant="h4" sx={{ color: wajaColors.foreground, mb: 2 }}>
            {mission.title}
          </Typography>
          <Stack spacing={2}>
            {mission.paragraphs.map((paragraph) => (
              <Typography key={paragraph} variant="body1" sx={{ color: "text.secondary" }}>
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box component="article" sx={{ ...CARD_SX, bgcolor: wajaColors.foreground, color: "#FFFFFF" }}>
          <Box aria-hidden sx={{ ...ICON_BOX_SX, bgcolor: "rgba(255,255,255,0.1)", color: wajaColors.accent }}>
            <VisibilityOutlinedIcon fontSize="small" />
          </Box>
          <Typography component="h2" variant="h4" sx={{ color: "#FFFFFF", mb: 2 }}>
            {vision.title}
          </Typography>
          <Stack spacing={2}>
            {vision.paragraphs.map((paragraph) => (
              <Typography key={paragraph} variant="body1" sx={{ color: wajaColors.border }}>
                {paragraph}
              </Typography>
            ))}
            <Typography variant="h6" component="p" sx={{ color: "#FFFFFF", lineHeight: 1.4, pt: 1 }}>
              {vision.highlight}
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
