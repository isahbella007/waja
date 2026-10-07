import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

// Closing row under a heavy rule, like the end of the Give pages
export default function OrgStructure({ title, description, link }: TeamContent["structure"]) {
  return (
    <Box component="section" sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: { xs: 4, md: 5 } }}>
      <Grid container spacing={{ xs: 2, md: 8 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography component="h2" variant="h3" sx={{ color: wajaColors.foreground, fontSize: { xs: "1.5rem", md: "1.75rem" }, lineHeight: 1.2 }}>
            {title}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            {description}
          </Typography>
          <ArrowLink {...link} />
        </Grid>
      </Grid>
    </Box>
  );
}
