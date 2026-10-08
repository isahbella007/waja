import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionContainer from "./SectionContainer";
import MediaFrame from "@/components/shared/MediaFrame";
import { wajaColors } from "@/theme/theme";
import { GRADUATE_STORY } from "@/constants/home/graduateStory";

export default function GraduateStory() {
  const story = GRADUATE_STORY;

  return (
    <SectionContainer id="graduate-story">
      <Grid container spacing={6} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <MediaFrame
            image={story.image}
            sizes="(min-width: 900px) 40vw, 100vw"
            placeholderBg={wajaColors.muted}
            placeholderColor={wajaColors.primaryDark}
            sx={{ width: "100%", aspectRatio: "4 / 5", borderRadius: 3 }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3}>
            <Typography
              component="p"
              variant="overline"
              sx={{ letterSpacing: 2, fontWeight: 600, color: "primary.main" }}
            >
              {story.eyebrow}
            </Typography>
            <FormatQuoteIcon aria-hidden sx={{ fontSize: 40, color: "warning.main" }} />
            <Box component="figure" sx={{ m: 0 }}>
              <Typography
                component="blockquote"
                variant="h5"
                sx={{ fontWeight: 500, fontStyle: "italic", lineHeight: 1.4, m: 0 }}
              >
                {story.quote}
              </Typography>
              <Box component="figcaption" sx={{ mt: 3 }}>
                <Typography component="cite" variant="subtitle1" sx={{ fontWeight: 600, fontStyle: "normal", display: "block" }}>
                  {story.name}, {story.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {story.cohort}
                </Typography>
              </Box>
            </Box>
            <Button
              variant="text"
              href={story.link.href}
              endIcon={<ArrowForwardIcon />}
              // No side padding, so the text lines up with the quote above
              sx={{ alignSelf: "flex-start", color: "primary.main", fontWeight: 600, px: 0, minWidth: 0, "&:hover": { bgcolor: "transparent", textDecoration: "underline" } }}
            >
              {story.link.label}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
