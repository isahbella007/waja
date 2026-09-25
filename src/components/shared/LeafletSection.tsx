import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { wajaColors } from "@/theme/theme";

// One numbered "page" of a program leaflet: number + heading on the left,
// content on the right (stacked on phones), separated by a thin rule.
export default function LeafletSection({
  number,
  title,
  accent,
  children,
}: {
  number: string;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <Box component="section">
      <Grid container spacing={{ xs: 2.5, md: 6 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            component="p"
            aria-hidden
            sx={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: { xs: "2.25rem", md: "3rem" },
              lineHeight: 1,
              color: accent,
              mb: { xs: 1, md: 1.5 },
            }}
          >
            {number}
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            sx={{ color: wajaColors.foreground, fontSize: { xs: "1.6rem", md: "1.9rem" }, lineHeight: 1.2 }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>{children}</Grid>
      </Grid>
    </Box>
  );
}
