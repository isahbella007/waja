import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import HistoryIntro from "@/components/about/history/HistoryIntro";
import TurningPoint from "@/components/about/history/TurningPoint";
import FounderQuote from "@/components/about/history/FounderQuote";
import HowWeBuiltIt from "@/components/about/history/HowWeBuiltIt";
import HistoryTimeline from "@/components/about/history/HistoryTimeline";
import CtaBanner from "@/components/shared/CtaBanner";
import { HISTORY } from "@/constants/about/history";

export const metadata: Metadata = {
  title: HISTORY.seo.title,
  description: HISTORY.seo.description,
};

export default function HistoryPage() {
  const content = HISTORY;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={{ xs: 6, md: 10 }}>
        <HistoryIntro {...content.intro} />
        <TurningPoint {...content.turningPoint} />
        <FounderQuote {...content.founderQuote} />
        <HowWeBuiltIt {...content.approach} />
        <HistoryTimeline {...content.timeline} />
        <CtaBanner {...content.cta} />
      </Stack>
    </Container>
  );
}
