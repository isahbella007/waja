import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageIntro from "@/components/shared/PageIntro";
import StoriesBrowser from "@/components/stories/StoriesBrowser";
import { ImpactClosing } from "@/components/impact/ImpactSections";
import { STORIES, STORIES_PAGE } from "@/constants/stories";

export const metadata: Metadata = {
  title: STORIES_PAGE.seo.title,
  description: STORIES_PAGE.seo.description,
};

export default function StoriesPage() {
  const content = STORIES_PAGE;
  // Never show a story without recorded consent
  const stories = STORIES.filter((story) => story.consentConfirmed);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={{ xs: 6, md: 9 }}>
        <Grid container spacing={{ xs: 2, md: 6 }} sx={{ alignItems: "flex-end" }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <PageIntro eyebrow={content.intro.eyebrow} title={content.intro.title} description={content.intro.description} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: { md: "right" } }}>
              {content.intro.countNote.replace("{count}", String(stories.length))}
            </Typography>
          </Grid>
        </Grid>

        <StoriesBrowser stories={stories} labels={content.labels} />

        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {content.consentNote}
        </Typography>

        <ImpactClosing {...content.closing} />
      </Stack>
    </Container>
  );
}
