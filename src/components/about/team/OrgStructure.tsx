import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

export default function OrgStructure({ title, description, link }: TeamContent["structure"]) {
  return (
    <Grid container spacing={{ xs: 2, md: 6 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography variant="h5" component="h2" sx={{ color: wajaColors.foreground, fontWeight: 700 }}>
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
  );
}
