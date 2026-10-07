import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { typeScale, wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

// Full-width dark band: the page's change of pace between people and the advisory board
export default function GovernancePrinciples({ eyebrow, title, principles }: TeamContent["governance"]) {
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            {eyebrow && (
              <Typography variant="overline" component="p" sx={{ color: "#FDBA74", fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1 }}>
                {eyebrow}
              </Typography>
            )}
            <Typography component="h2" variant="h3" sx={{ color: "#FFFFFF", ...typeScale.sectionTitle }}>
              {title}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              component="ol"
              sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, columnGap: 5, rowGap: { xs: 3, md: 4 }, m: 0, p: 0, listStyle: "none" }}
            >
              {principles.map((principle, index) => (
                <Box component="li" key={principle.title} sx={{ borderTop: "1px solid rgba(255,255,255,0.35)", pt: 2 }}>
                  <Typography component="span" aria-hidden sx={{ display: "block", fontFamily: "var(--font-heading), Georgia, serif", color: "#FDBA74", mb: 0.75 }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography component="h3" sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: { xs: "1.3rem", md: "1.45rem" }, color: "#FFFFFF", mb: 1 }}>
                    {principle.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: wajaColors.border }}>
                    {principle.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
