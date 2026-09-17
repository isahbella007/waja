import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DescriptionIcon from "@mui/icons-material/Description";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SectionContainer from "./SectionContainer";

const GOALS = [
  { value: "85%", label: "of our graduates will secure employment or paid apprenticeships after completing the program." },
  { value: "87%", label: "of employed graduates will remain in paid positions one year after placement." },
  { value: "93%", label: "of graduates will initiate income-generating businesses or independent service operations within six months of certification." },
];

const ACHIEVEMENTS = [
  { value: "57%", label: "of our current trainees report measurable improvements in household savings, and ability to meet basic needs." },
  { value: "86%", label: "of trainees have developed new practical technological-based skills in the automotive industry." },
  { value: "29%", label: "of current trainees within two years, mentor other trainees, or manage small teams." },
];

function StatGroup({
  icon: Icon,
  eyebrow,
  title,
  stats,
  valueColor,
}: {
  icon: typeof TrackChangesIcon;
  eyebrow: string;
  title: string;
  stats: { value: string; label: string }[];
  valueColor: string;
}) {
  return (
    <Box>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", justifyContent: "center", mb: { xs: 3, md: 4 } }}>
        <Icon sx={{ color: valueColor }} />
        <Typography component="h3" variant="h6" sx={{ fontWeight: 700, color: "#FFFFFF" }}>
          {title}
        </Typography>
      </Stack>
      <Typography
        component="p"
        variant="overline"
        align="center"
        sx={{ display: "block", letterSpacing: 2, fontWeight: 600, color: "#22D3EE", mb: 2 }}
      >
        {eyebrow}
      </Typography>
      <Grid container spacing={4}>
        {stats.map((stat) => (
          <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
            <Stack spacing={1} sx={{ alignItems: "center", textAlign: "center" }}>
              <Typography component="p" variant="h3" sx={{ fontWeight: 700, color: valueColor }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                {stat.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function ImpactNumbers() {
  return (
    <SectionContainer id="impact" py={{ xs: 10, md: 12 }} bgcolor="#164E63">
      <Stack spacing={1} sx={{ mb: { xs: 6, md: 8 }, textAlign: "center", color: "#FFFFFF" }}>
        <Typography component="p" variant="overline" sx={{ letterSpacing: 2, fontWeight: 600, color: "#22D3EE" }}>
          Our Impact
        </Typography>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
          Numbers we hold ourselves to
        </Typography>
      </Stack>

      <Stack spacing={{ xs: 7, md: 9 }}>
        <StatGroup
          icon={TrackChangesIcon}
          eyebrow="Our Goals"
          title="Goals we strive to reach"
          stats={GOALS}
          valueColor="warning.main"
        />
        <StatGroup
          icon={EmojiEventsIcon}
          eyebrow="Our Achievements"
          title="Our current achievements"
          stats={ACHIEVEMENTS}
          valueColor="#22D3EE"
        />
      </Stack>

      <Stack sx={{ alignItems: "center", mt: { xs: 6, md: 8 } }}>
        <Button
          variant="outlined"
          href="#"
          startIcon={<DescriptionIcon />}
          sx={{
            color: "#FFFFFF",
            borderColor: "rgba(255,255,255,0.6)",
            borderWidth: 2,
            "&:hover": { borderColor: "#FFFFFF", borderWidth: 2, bgcolor: "rgba(255,255,255,0.08)" },
          }}
        >
          Download our [Placeholder Year] Impact Report
        </Button>
      </Stack>
    </SectionContainer>
  );
}
