import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {
  MissionClosing,
  MissionOpening,
  MissionVisionPair,
  WhatMakesUsDifferent,
  WholeFamilyBand,
} from "@/components/about/mission-vision/MissionVisionSections";
import { MISSION_VISION } from "@/constants/about/missionVision";

export const metadata: Metadata = {
  title: MISSION_VISION.seo.title,
  description: MISSION_VISION.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };
const SECTION_GAP = { xs: 8, md: 12 };

export default function MissionVisionPage() {
  const content = MISSION_VISION;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <MissionOpening {...content.intro} />
          <MissionVisionPair mission={content.mission} vision={content.vision} />
        </Stack>
      </Container>

      {/* Dark band sits mid-page, so the page ends on a full light section before the dark footer */}
      <WholeFamilyBand {...content.wholeFamily} />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <WhatMakesUsDifferent {...content.difference} />
          <MissionClosing {...content.closing} />
        </Stack>
      </Container>
    </>
  );
}
