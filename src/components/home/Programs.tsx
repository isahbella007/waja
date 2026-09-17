import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import BuildIcon from "@mui/icons-material/Build";
import BoltIcon from "@mui/icons-material/Bolt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SectionContainer from "./SectionContainer";

const PROGRAMS = [
  {
    icon: BuildIcon,
    accent: "#0891B2",
    title: "Women's Automotive Skills & Certification Program",
    tag: "Hands-on + Digital",
    description:
      "Our comprehensive program equips women with practical mechanical skills and industry-recognized certifications. From engine diagnostics to modern EV systems, we train skilled technicians ready for the future of auto repair.",
  },
  {
    icon: BoltIcon,
    accent: "#EA580C",
    title: "Women's Microenterprise & Market Linkage Accelerator",
    tag: "Future-Ready",
    description:
      "Transforming technicians into entrepreneurs. This accelerator connects skilled women mechanics with market opportunities, business mentorship, and growth strategies to build sustainable careers and shops.",
  },
  {
    icon: TrendingUpIcon,
    accent: "#0E7490",
    title: "Life Skills, Leadership & Workforce Readiness Initiative",
    tag: "Beyond the Bay",
    description:
      "Empowering women for success in the auto industry. This initiative builds confidence, leadership, communication, and professional skills—preparing women not just for jobs, but for long-term careers and influence.",
  },
];

export default function Programs() {
  return (
    <SectionContainer id="programs">
      <Stack spacing={1} sx={{ mb: { xs: 4, md: 6 }, textAlign: "center" }}>
        <Typography
          component="p"
          variant="overline"
          sx={{ letterSpacing: 2, fontWeight: 600, color: "primary.main" }}
        >
          What We Do
        </Typography>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
          Our Programs
        </Typography>
      </Stack>
      <Grid container spacing={4}>
        {PROGRAMS.map((program) => {
          const Icon = program.icon;
          return (
            <Grid key={program.title} size={{ xs: 12, md: 4 }}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  borderColor: "divider",
                  borderTop: "4px solid",
                  borderTopColor: program.accent,
                  "&:hover": { boxShadow: "0 10px 15px rgba(0,0,0,0.1)", transform: "translateY(-2px)" },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      bgcolor: `${program.accent}1A`,
                      color: program.accent,
                      mb: 2,
                    }}
                  >
                    <Icon fontSize="large" />
                  </Box>
                  <Typography component="h3" variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {program.title}
                  </Typography>
                  <Chip
                    label={program.tag}
                    size="small"
                    sx={{ mb: 2, bgcolor: `${program.accent}1A`, color: program.accent, fontWeight: 600 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {program.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
}
