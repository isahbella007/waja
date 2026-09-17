import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionContainer from "./SectionContainer";
import { wajaColors } from "@/theme/theme";

const ACTIVITY = [
  {
    tag: "Workshop",
    date: "[Placeholder] March 2026",
    title: "Trainees complete first EV diagnostics workshop",
    description: "[Placeholder] 30 trainees worked hands-on with battery and hybrid-system diagnostic tools.",
  },
  {
    tag: "Milestone",
    date: "[Placeholder] February 2026",
    title: "First cohort graduates with digital diagnostics certification",
    description: "[Placeholder] Graduates now hold certification in sensor-based and computer diagnostics.",
  },
  {
    tag: "Partnership",
    date: "[Placeholder] January 2026",
    title: "WAJA partners with a local garage to place graduates in paid apprenticeships",
    description: "[Placeholder] New employer partnership creates a direct pipeline from training to paid work.",
  },
];

export default function ActivityFeed() {
  return (
    <SectionContainer id="activity">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "flex-end" },
          mb: { xs: 4, md: 6 },
        }}
      >
        <Stack spacing={1}>
          <Typography
            component="p"
            variant="overline"
            sx={{ letterSpacing: 2, fontWeight: 600, color: "primary.main" }}
          >
            Our Activity
          </Typography>
          <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
            What&apos;s happening at WAJA
          </Typography>
        </Stack>
        <Button variant="text" href="#" endIcon={<ArrowForwardIcon />} sx={{ color: "primary.main", fontWeight: 600 }}>
          View all updates
        </Button>
      </Stack>
      <Grid container spacing={4}>
        {ACTIVITY.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <Card variant="outlined" sx={{ height: "100%", borderColor: "divider" }}>
              <CardMedia
                aria-hidden
                sx={{
                  height: 160,
                  background: `linear-gradient(135deg, ${wajaColors.secondary} 0%, ${wajaColors.primary} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <Typography variant="caption">[Placeholder image]</Typography>
              </CardMedia>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1.5 }}>
                  <Chip label={item.tag} size="small" color="primary" sx={{ fontWeight: 600 }} />
                  <Typography variant="caption" color="text.secondary">
                    {item.date}
                  </Typography>
                </Stack>
                <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
