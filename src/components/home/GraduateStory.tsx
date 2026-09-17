import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionContainer from "./SectionContainer";

export default function GraduateStory() {
  return (
    <SectionContainer id="graduate-story">
      <Grid container spacing={6} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            aria-hidden
            sx={{
              width: "100%",
              aspectRatio: "4 / 5",
              borderRadius: 3,
              background: "linear-gradient(135deg, #0891B2 0%, #EA580C 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <Typography variant="body2">[Placeholder photo: graduate portrait]</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3}>
            <Typography
              component="p"
              variant="overline"
              sx={{ letterSpacing: 2, fontWeight: 600, color: "primary.main" }}
            >
              Graduate Story
            </Typography>
            <FormatQuoteIcon sx={{ fontSize: 40, color: "warning.main" }} />
            <Typography
              component="blockquote"
              variant="h5"
              sx={{ fontWeight: 500, fontStyle: "italic", lineHeight: 1.4, m: 0 }}
            >
              [Placeholder] &quot;My instructors taught me to read a diagnostic scan the
              same week they taught me to change a brake pad. Today I run my own
              garage.&quot;
            </Typography>
            <Box>
              <Typography component="cite" variant="subtitle1" sx={{ fontWeight: 600, fontStyle: "normal", display: "block" }}>
                [Placeholder Name], Automotive Technology Graduate
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Class of [Placeholder Year]
              </Typography>
            </Box>
            <Button
              variant="text"
              href="#"
              endIcon={<ArrowForwardIcon />}
              sx={{ alignSelf: "flex-start", color: "primary.main", fontWeight: 600 }}
            >
              Read more stories
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
