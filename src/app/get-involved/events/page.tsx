import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import PageIntro from "@/components/shared/PageIntro";
import EventFeature from "@/components/getInvolved/events/EventFeature";
import { ImpactClosing } from "@/components/impact/ImpactSections";
import { EVENTS, EVENTS_PAGE } from "@/constants/getInvolved/events";
import { wajaColors } from "@/theme/theme";

export const metadata: Metadata = {
  title: EVENTS_PAGE.seo.title,
  description: EVENTS_PAGE.seo.description,
};

export default function EventsPage() {
  const content = EVENTS_PAGE;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={{ xs: 6, md: 9 }}>
        <PageIntro {...content.intro} />

        {/* Each event under a heavy rule, newest first */}
        {EVENTS.map((event) => (
          <Box key={event.id} sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: { xs: 4, md: 5 } }}>
            <EventFeature event={event} labels={content.labels} />
          </Box>
        ))}

        <ImpactClosing {...content.closing} />
      </Stack>
    </Container>
  );
}
