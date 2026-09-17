import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BuildIcon from "@mui/icons-material/Build";
import BoltIcon from "@mui/icons-material/Bolt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SectionContainer from "./SectionContainer";

const APPROACH = [
  {
    icon: BuildIcon,
    title: "Technology-enabled training",
    description: "Hands-on repair skills paired with digital diagnostic tools and AI-supported education.",
  },
  {
    icon: BoltIcon,
    title: "EV & hybrid readiness",
    description: "Preparing technicians for Ghana's electric and hybrid vehicle future, not just today's fleet.",
  },
  {
    icon: PsychologyIcon,
    title: "Personal development",
    description: "Confidence, professionalism, and leadership alongside technical skill.",
  },
  {
    icon: StorefrontIcon,
    title: "Entrepreneurship pathways",
    description: "Graduates leave ready to start their own repair businesses, not just find a job.",
  },
];

export default function ChangeApproach() {
  return (
    <SectionContainer id="why-waja" bgcolor="#ECFEFF">
      <Grid container spacing={6} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            component="p"
            variant="overline"
            sx={{ letterSpacing: 2, fontWeight: 600, color: "primary.main" }}
          >
            Why WAJA Exists
          </Typography>
          <Typography component="h2" variant="h4" sx={{ fontWeight: 700, mt: 1, mb: 2 }}>
            Two gaps. One connection.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Many women and orphans in Ghana face barriers to stable income, technical
            education, and long-term economic independence. At the same time, Ghana&apos;s
            automotive sector needs a stronger workforce capable of supporting modern
            vehicles, diagnostics, and future EV systems.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontWeight: 600, color: "text.primary" }}>
            WAJA connects these two needs — training women for real opportunities in the
            automotive industry while helping strengthen Ghana&apos;s future service
            infrastructure.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3}>
            {APPROACH.map((item) => {
              const Icon = item.icon;
              return (
                <Stack key={item.title} direction="row" spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 44,
                      height: 44,
                      minWidth: 44,
                      borderRadius: "50%",
                      bgcolor: "#FFFFFF",
                      color: "primary.main",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
