import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import PageIntro from "@/components/shared/PageIntro";
import MissionVisionCards from "@/components/about/mission-vision/MissionVisionCards";
import WhatMakesUsDifferent from "@/components/about/mission-vision/WhatMakesUsDifferent";
import WholeFamilyApproach from "@/components/about/mission-vision/WholeFamilyApproach";
import CtaBanner from "@/components/shared/CtaBanner";
import { MISSION_VISION } from "@/constants/about/missionVision";

export const metadata: Metadata = {
  title: MISSION_VISION.seo.title,
  description: MISSION_VISION.seo.description,
};

export default function MissionVisionPage() {
  const content = MISSION_VISION;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={{ xs: 6, md: 10 }}>
        <Stack spacing={{ xs: 4, md: 6 }}>
          <PageIntro {...content.intro} />
          <MissionVisionCards mission={content.mission} vision={content.vision} />
        </Stack>
        <WhatMakesUsDifferent {...content.difference} />
        <WholeFamilyApproach {...content.wholeFamily} />
        <CtaBanner {...content.cta} />
      </Stack>
    </Container>
  );
}
