import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ProgramsIntro from "@/components/programs/overview/ProgramsIntro";
import SkillAreas from "@/components/programs/overview/SkillAreas";
import WhyTechnology from "@/components/programs/overview/WhyTechnology";
import ProgramPathway from "@/components/programs/overview/ProgramPathway";
import CtaBanner from "@/components/shared/CtaBanner";
import { PROGRAMS_OVERVIEW } from "@/constants/programs/overview";
import { PROGRAM_PAGE_LABELS, PROGRAMS } from "@/constants/programs/programs";

export const metadata: Metadata = {
  title: PROGRAMS_OVERVIEW.seo.title,
  description: PROGRAMS_OVERVIEW.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };
const SECTION_GAP = { xs: 6, md: 10 };

export default function ProgramsOverviewPage() {
  const content = PROGRAMS_OVERVIEW;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <ProgramsIntro {...content.intro} />
          <SkillAreas {...content.skills} />
        </Stack>
      </Container>

      {/* Full-bleed band: sits outside the Container so its background spans the screen */}
      <WhyTechnology {...content.whyTechnology} />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <Box id="pathway" sx={{ scrollMarginTop: "96px" }}>
            <ProgramPathway {...content.pathway} programs={PROGRAMS} openLabel={PROGRAM_PAGE_LABELS.openLabel} />
          </Box>
          <CtaBanner {...content.cta} buttonTone="accent" />
        </Stack>
      </Container>
    </>
  );
}
