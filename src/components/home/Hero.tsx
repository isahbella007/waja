import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BoltIcon from "@mui/icons-material/Bolt";

export default function Hero() {
  return (
    <Box
      component="section"
      id="main-content"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0891B2 0%, #0E7490 50%, #164E63 100%)",
        color: "#FFFFFF",
        py: { xs: 10, md: 14 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.18,
          backgroundImage:
            "radial-gradient(circle at 15% 15%, #FFFFFF 0, transparent 30%), radial-gradient(circle at 85% 70%, #EA580C 0, transparent 42%)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack spacing={3} sx={{ maxWidth: 760 }}>
          <Chip
            icon={<BoltIcon sx={{ color: "#EA580C !important" }} />}
            label="U.S. 501(c)(3) Nonprofit · Ghana & West Africa"
            sx={{
              alignSelf: "flex-start",
              bgcolor: "rgba(255,255,255,0.12)",
              color: "#FFFFFF",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          />
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontSize: { xs: "2.25rem", md: "2.5rem",  },
              lineHeight: 1.12,
              fontWeight: 700,
            }}
          >
            Empowering Women to Drive the Future of Mobility in Ghana.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 500, color: "#A5F3FC" }}>
            The future of automotive work is changing. Being a woman or orphan should
            never be a barrier to opportunity.
          </Typography>
          {/* <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)" }}>
            WAJA empowers women and orphans in Ghana through automotive technology
            training, digital diagnostics, AI-supported repair education, EV readiness,
            personal development, and entrepreneurship.
          </Typography> */}
          {/* <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
            <Button
              size="large"
              variant="contained"
              href="#donate"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "warning.main",
                color: "#FFFFFF",
                px: 4,
                "&:hover": { bgcolor: "warning.dark" },
              }}
            >
              Donate Now
            </Button>
            <Button
              size="large"
              variant="outlined"
              href="#programs"
              sx={{
                color: "#FFFFFF",
                borderColor: "rgba(255,255,255,0.6)",
                borderWidth: 2,
                px: 4,
                "&:hover": { borderColor: "#FFFFFF", borderWidth: 2, bgcolor: "rgba(255,255,255,0.08)" },
              }}
            >
              See Our Programs
            </Button>
          </Stack> */}
        </Stack>
      </Container>
    </Box>
  );
}
