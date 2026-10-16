import { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BoltIcon from "@mui/icons-material/Bolt";
import { wajaColors } from "@/theme/theme";
import { HERO, WAJA_NAME_PARTS } from "@/constants/home/hero";

const LETTER_COLOR = "#EA580C";
const RULE = "1px solid rgba(165,243,252,0.25)";

// W-A-J-A spelled down the page, one ruled row per letter
function WajaName() {
  return (
    <Box aria-label={HERO.nameLabel} role="img">
      <Box component="ul" aria-hidden sx={{ m: 0, p: 0, listStyle: "none", borderTop: RULE }}>
        {WAJA_NAME_PARTS.map((part, index) => (
          <Box
            component="li"
            key={part.word}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "2.5rem 1fr", md: "4.5rem 1fr" },
              alignItems: "baseline",
              py: { xs: 0.75, md: 1.25 },
              borderBottom: RULE,
              animation: `waja-name-rise 600ms ease-out ${200 + index * 150}ms both`,
              "@media (prefers-reduced-motion: reduce)": { animation: "none" },
            }}
          >
            <Box
              component="span"
              sx={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontWeight: 500,
                fontSize: { xs: "1.9rem", md: "3.25rem" },
                lineHeight: 1.1,
                color: LETTER_COLOR,
              }}
            >
              {part.letter}
            </Box>
            <Box
              component="span"
              sx={{ fontSize: { xs: "1.05rem", md: "1.35rem" }, fontWeight: 500, color: wajaColors.border, letterSpacing: "0.01em" }}
            >
              {part.word}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// Phones: the name in one line between the badge and the headline, initials in orange
function WajaNameInline() {
  return (
    <Typography
      component="p"
      sx={{
        display: { xs: "block", md: "none" },
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        fontWeight: 600,
        fontSize: "0.85rem",
        lineHeight: 1.6,
        color: wajaColors.border,
      }}
    >
      {WAJA_NAME_PARTS.map((part, index) => (
        <Fragment key={part.word}>
          {/* The plain space lets the line wrap between words; the dot stays with the word after it */}
          {index > 0 && " "}
          <Box component="span" sx={{ whiteSpace: "nowrap" }}>
            {index > 0 && (
              <Box component="span" aria-hidden sx={{ mr: 1, color: "rgba(165,243,252,0.6)" }}>
                ·
              </Box>
            )}
            <Box
              component="span"
              sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.3rem", fontWeight: 600, color: LETTER_COLOR, letterSpacing: 0 }}
            >
              {part.word.charAt(0)}
            </Box>
            {part.word.slice(1)}
          </Box>
        </Fragment>
      ))}
    </Typography>
  );
}

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
              <WajaNameInline />
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
            <WajaName />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
