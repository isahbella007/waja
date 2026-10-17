import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BoltIcon from "@mui/icons-material/Bolt";
import { wajaColors } from "@/theme/theme";
import { HERO } from "@/constants/home/hero";
import WajaLetterBoxes from "./WajaLetterBoxes";

export default function Hero() {
  return (
    <Box
      component="section"
      id="main-content"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: wajaColors.cardForeground,
        color: "#FFFFFF",
        py: { xs: 10, md: 14 },
      }}
    >
      {/* Large screens: the photo, dimmed under teal so the text stays readable */}
      {HERO.background.src && (
        <Box aria-hidden sx={{ display: { xs: "none", md: "block" }, position: "absolute", inset: 0 }}>
          <Image
            src={HERO.background.src}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: HERO.background.position ?? "center" }}
          />
          <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(22,78,99,0.84)" }} />
        </Box>
      )}
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignSelf: "flex-start",
                  alignItems: "center",
                  bgcolor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "999px",
                  px: 1.5,
                  py: 0.5,
                }}
              >
                <BoltIcon sx={{ fontSize: 18, color: wajaColors.accent }} />
                <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: 600 }}>
                  {HERO.badge}
                </Typography>
              </Stack>
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontSize: { xs: "2.25rem", md: "2.5rem" },
                  lineHeight: 1.12,
                  fontWeight: 700,
                }}
              >
                {HERO.title}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500, color: "#A5F3FC" }}>
                {HERO.description}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: "none", md: "block" } }}>
            <WajaLetterBoxes />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
