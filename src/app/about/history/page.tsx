import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {
  FounderPullQuote,
  HistoryClosing,
  HistoryFilm,
  HistoryOpening,
  HistoryTimeline,
  HowWeBuiltIt,
  TurningPoint,
} from "@/components/about/history/HistorySections";
import { HISTORY } from "@/constants/about/history";

export const metadata: Metadata = {
  title: HISTORY.seo.title,
  description: HISTORY.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };
const SECTION_GAP = { xs: 8, md: 12 };

export default function HistoryPage() {
  const content = HISTORY;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <HistoryOpening {...content.intro} />
      </Container>

      <HistoryFilm {...content.film} />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <TurningPoint {...content.turningPoint} />
          <FounderPullQuote {...content.founderQuote} />
          <HowWeBuiltIt {...content.approach} />
          <HistoryTimeline {...content.timeline} />
          <HistoryClosing {...content.closing} />
        </Stack>
      </Container>
    </>
  );
}
