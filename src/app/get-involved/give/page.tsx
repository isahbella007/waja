import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import PageIntro from "@/components/shared/PageIntro";
import RuledLinkList from "@/components/shared/RuledLinkList";
import GiveNow from "@/components/getInvolved/give/GiveNow";
import LargerScale from "@/components/getInvolved/give/LargerScale";
import {
  ChallengeColumns,
  Commitment,
  FundingGroups,
  ImpactKpis,
  SolutionBand,
} from "@/components/getInvolved/give/GiveSections";
import { GIVE_PAGE } from "@/constants/getInvolved/give";

export const metadata: Metadata = {
  title: GIVE_PAGE.seo.title,
  description: GIVE_PAGE.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };
const SECTION_GAP = { xs: 8, md: 12 };
// Offset for in-page jumps so headings clear the sticky navbar
const ANCHOR = { scrollMarginTop: "96px" };

export default function GivePage() {
  const content = GIVE_PAGE;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "flex-end" }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <PageIntro eyebrow={content.intro.eyebrow} title={content.intro.title} description={content.intro.description} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <RuledLinkList label={content.intro.jumpLabel} links={content.intro.jumpLinks} />
            </Grid>
          </Grid>

          <Box id="give-now" sx={ANCHOR}>
            <GiveNow {...content.giveNow} />
          </Box>

          <Box id="funding" sx={ANCHOR}>
            <FundingGroups {...content.fundingUses} />
          </Box>

          <ChallengeColumns {...content.challenge} />
        </Stack>
      </Container>

      <Box id="model" sx={ANCHOR}>
        <SolutionBand {...content.solution} />
      </Box>

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <ImpactKpis {...content.impact} />
          <Commitment {...content.commitment} />
          <LargerScale {...content.largerScale} />
        </Stack>
      </Container>
    </>
  );
}
