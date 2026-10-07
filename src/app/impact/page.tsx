import type { Metadata } from "next";
import Container from "@mui/material/Container";
import ProgressTimeline from "@/components/impact/ProgressTimeline";
import { ImpactClosing, ImpactHero, NextChapterBand, VoicesBand } from "@/components/impact/ImpactSections";
import { IMPACT_PAGE } from "@/constants/impact";

export const metadata: Metadata = {
  title: IMPACT_PAGE.seo.title,
  description: IMPACT_PAGE.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };

// One story: the women now → how their lives are changing → how far they've come
// → the next chapter (the training centre) → how to help.
export default function ImpactPage() {
  const content = IMPACT_PAGE;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <ImpactHero {...content.hero} photo={content.cohortPhoto} />
      </Container>

      <VoicesBand change={content.change} quote={content.quote} />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <ProgressTimeline {...content.progress} />
      </Container>

      <NextChapterBand centre={content.centre} why={content.why} includes={content.includes} />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <ImpactClosing {...content.closing} />
      </Container>
    </>
  );
}
