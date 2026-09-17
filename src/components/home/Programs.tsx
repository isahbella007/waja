import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import SectionContainer from "./SectionContainer";
import { wajaColors } from "@/theme/theme";
import { ArrowForward } from "@mui/icons-material";

const PROGRAMS = [
  {
    accent: wajaColors.primary,
    image: "/programs/automotive.jpg",
    title: "Women's Automotive Skills & Certification Program",
    description:
      "Hand-on repair, digital diagnostics and EV readiness, leading to recongized certification.",
      buttonText: "Learn More"
  },
  {
    accent: wajaColors.accent,
    image: "/programs/enterprise.jpg",
    title: "Women's Microenterprise & Market Linkage Accelerator",
    description:
      "Business training and market connections so graduates can launch and grow their own service businesses.",
      buttonText: "Learn More"
  },
  {
    accent: wajaColors.primaryDark,
    image: "/programs/life.jpg",
    title: "Life Skills, Leadership & Workforce Readiness Initiative",
    description:
      "Confidence, learship and job-readiness skills that carry women into lasting careers",
      buttonText: "Learn More"
  },
];

export default function Programs() {
  return (
    <SectionContainer id="programs" pt={{ xs: 4, md: 4 }}>
      <Stack spacing={1} sx={{ mb: { xs: 4, md: 6 }, textAlign: "center" }}>
        <Typography
          component="p"
          variant="overline"
          sx={{ letterSpacing: 2, fontWeight: 600, color: "warning.main" }}
        >
          What We Do
        </Typography>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700, color: "primary.main" }}>
          Our Programs
        </Typography>
      </Stack>
      <Grid container spacing={4}>
        {PROGRAMS.map((program) => {
          return (
            <Grid key={program.title} size={{ xs: 12, md: 4 }}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderColor: "divider",
                  borderTop: "4px solid",
                  borderTopColor: program.accent,
                  overflow: "hidden",
                  "&:hover": { boxShadow: "0 10px 15px rgba(0,0,0,0.1)", transform: "translateY(-2px)" },
                }}
              >
                <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <Typography component="h3" variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {program.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {program.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center", mt: "auto", pt: 2, cursor: "pointer" }}
                    component="a"
                    href="#programs"
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600, color: program.accent }}>
                      {program.buttonText}
                    </Typography>
                    <ArrowForward sx={{ fontSize: 20, color: program.accent }} />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
}
