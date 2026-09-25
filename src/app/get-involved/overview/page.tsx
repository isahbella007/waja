import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import MediaFrame from "@/components/shared/MediaFrame";
import GetInvolvedIntro from "@/components/getInvolved/overview/GetInvolvedIntro";
import WaysToGetInvolved from "@/components/getInvolved/overview/WaysToGetInvolved";
import FundingBand from "@/components/getInvolved/overview/FundingBand";
import Supporters from "@/components/getInvolved/overview/Supporters";
import JustAsk from "@/components/getInvolved/overview/JustAsk";
import { GET_INVOLVED_OVERVIEW } from "@/constants/getInvolved/overview";
import { CONTACT_DETAILS } from "@/constants/contact";
import { wajaColors } from "@/theme/theme";

export const metadata: Metadata = {
  title: GET_INVOLVED_OVERVIEW.seo.title,
  description: GET_INVOLVED_OVERVIEW.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };

export default function GetInvolvedOverviewPage() {
  const content = GET_INVOLVED_OVERVIEW;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <GetInvolvedIntro {...content.intro} ways={content.ways} />
      </Container>

      {/* Full-width photo band */}
      <MediaFrame
        image={content.photo}
        sizes="100vw"
        placeholderBg="#CFFAFE"
        placeholderColor={wajaColors.primaryDark}
        sx={{ height: { xs: 240, sm: 320, md: 420 } }}
      />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <WaysToGetInvolved ways={content.ways} />
      </Container>

      <FundingBand {...content.funding} />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={{ xs: 8, md: 12 }}>
          <Supporters {...content.supporters} />
          <JustAsk {...content.ask} email={CONTACT_DETAILS.email} />
        </Stack>
      </Container>
    </>
  );
}
