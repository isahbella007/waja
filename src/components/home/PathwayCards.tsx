import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GroupsIcon from "@mui/icons-material/Groups";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import InfoIcon from "@mui/icons-material/Info";
import { visuallyHidden } from "@mui/utils";
import { wajaColors } from "@/theme/theme";

const PATHWAYS = [
  {
    icon: GroupsIcon,
    title: "Meet the Women",
    description: "Stories from graduates",
    href: "#graduate-story",
    buttonText: "Meet them",
    iconBg: wajaColors.background,
    iconColor: "primary.main",
  },
  {
    icon: VolunteerActivismIcon,
    title: "Invest in Her",
    description: "Fund a trainee",
    href: "#donate",
    buttonText: "Support",
    iconBg: wajaColors.background,
    iconColor: "primary.main",
  },
  {
    icon: HowToRegIcon,
    title: "Join a Cohort",
    description: "Applications open",
    href: "#programs",
    buttonText: "Apply now",
    iconBg: wajaColors.background,
    iconColor: "primary.main",
  },
  {
    icon: InfoIcon,
    title: "Why WAJA",
    description: "How it started",
    href: "#why-waja",
    buttonText: "Our story",
    iconBg: "#FFF7ED",
    iconColor: "warning.main",
    wide: true,
  },
];

export default function PathwayCards() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography component="h2" sx={visuallyHidden}>
          Find your way in
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          sx={{
            position: "relative",
            zIndex: 2,
            mt: { xs: -6, md: -9 },
          }}
        >
          {PATHWAYS.map((pathway) => {
            const Icon = pathway.icon;
            const wide = Boolean(pathway.wide);
            return (
              <Grid key={pathway.title} size={{ xs: 6, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderColor: "divider",
                    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                    "&:hover": { boxShadow: "0 20px 25px rgba(0,0,0,0.15)", transform: "translateY(-2px)" },
                  }}
                >
                  <CardActionArea
                    href={pathway.href}
                    sx={{
                      height: "100%",
                      p: { xs: 2, sm: 3 },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: wide ? { xs: 0, md: 0 } : 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 48,
                        height: 48,
                        minWidth: 48,
                        borderRadius: "50%",
                        bgcolor: pathway.iconBg,
                        color: pathway.iconColor,
                        mb: wide ? { xs: 2, md: 2 } : 2,
                      }}
                    >
                      <Icon fontSize="medium" />
                    </Box>
                    <CardContent sx={{ p: 0, flexGrow: 1, "&:last-child": { pb: 0 } }}>
                      <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {pathway.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                        {pathway.description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={0.5}
                        sx={{ alignItems: "center", color: pathway.iconColor, fontWeight: 700 }}
                      >
                        <Typography component="span" variant="body2" sx={{ fontWeight: 700, color: "inherit" }}>
                          {pathway.buttonText}
                        </Typography>
                        <ArrowForwardIcon sx={{ fontSize: 16 }} />
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
