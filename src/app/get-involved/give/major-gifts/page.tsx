import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import PageIntro from "@/components/shared/PageIntro";
import RuledLinkList from "@/components/shared/RuledLinkList";
import {
  ApproachRows,
  GiftLevelsBand,
  HowToGiveRows,
  ClosingInvitation,
  OpportunityColumns,
  Stewardship,
} from "@/components/getInvolved/give/MajorGiftSections";
import { MAJOR_GIFTS_PAGE } from "@/constants/getInvolved/give";
import { CONTACT_DETAILS } from "@/constants/contact";

export const metadata: Metadata = {
  title: MAJOR_GIFTS_PAGE.seo.title,
  description: MAJOR_GIFTS_PAGE.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };
const SECTION_GAP = { xs: 8, md: 12 };
// Offset for in-page jumps so headings clear the sticky navbar
const ANCHOR = { scrollMarginTop: "96px" };

export default function MajorGiftsPage() {
  const content = MAJOR_GIFTS_PAGE;

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

          <ApproachRows {...content.approach} />

          <Box id="opportunities" sx={ANCHOR}>
            <OpportunityColumns {...content.opportunities} />
          </Box>
        </Stack>
      </Container>

      <Box id="gift-levels" sx={ANCHOR}>
        <GiftLevelsBand {...content.levels} />
      </Box>

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <Box id="stewardship" sx={ANCHOR}>
            <Stewardship {...content.stewardship} />
          </Box>
          <Box id="how-to-give" sx={ANCHOR}>
            <HowToGiveRows {...content.howToGive} />
          </Box>
          <ClosingInvitation {...content.closing} email={CONTACT_DETAILS.email} />
        </Stack>
      </Container>
    </>
  );
}
