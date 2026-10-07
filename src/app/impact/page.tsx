import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import MediaFrame from "@/components/shared/MediaFrame";
import ProgressTimeline from "@/components/impact/ProgressTimeline";
import {
  CentreSection,
  ChangeRows,
  ImpactClosing,
  ImpactHero,
  IncludesSection,
  QuoteBand,
  WhyCentreBand,
} from "@/components/impact/ImpactSections";
import { IMPACT_PAGE } from "@/constants/impact";
import { wajaColors } from "@/theme/theme";

export const metadata: Metadata = {
  title: IMPACT_PAGE.seo.title,
  description: IMPACT_PAGE.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };
const SECTION_GAP = { xs: 8, md: 12 };

export default function ImpactPage() {
  const content = IMPACT_PAGE;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <ImpactHero {...content.hero} />
      </Container>

      {/* Full-width cohort photo */}
      <MediaFrame
        image={content.cohortPhoto}
        sizes="100vw"
        placeholderBg={wajaColors.muted}
        placeholderColor={wajaColors.primaryDark}
        sx={{ height: { xs: 260, sm: 360, md: 480 } }}
      />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <ChangeRows {...content.change} />
      </Container>

      <QuoteBand {...content.quote} />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <ProgressTimeline {...content.progress} />
          <CentreSection {...content.centre} />
          <IncludesSection {...content.includes} />
        </Stack>
      </Container>

      <WhyCentreBand {...content.why} />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <ImpactClosing {...content.closing} />
      </Container>
    </>
  );
}
