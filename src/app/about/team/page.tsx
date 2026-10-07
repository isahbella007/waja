import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TeamIntro from "@/components/about/team/TeamIntro";
import TeamSlider from "@/components/about/team/TeamSlider";
import VolunteerList from "@/components/about/team/VolunteerList";
import GovernancePrinciples from "@/components/about/team/GovernancePrinciples";
import AdvisoryBoard from "@/components/about/team/AdvisoryBoard";
import OrgStructure from "@/components/about/team/OrgStructure";
import { TEAM } from "@/constants/about/team";

export const metadata: Metadata = {
  title: TEAM.seo.title,
  description: TEAM.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };
const SECTION_GAP = { xs: 8, md: 12 };

export default function TeamPage() {
  const content = TEAM;
  const { members, readBioLabel, ...leadershipHeading } = content.leadership;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <TeamIntro {...content.intro} />
          <TeamSlider heading={leadershipHeading} members={members} readBioLabel={readBioLabel} />
          <VolunteerList {...content.volunteers} />
        </Stack>
      </Container>

      {/* Dark band: the change of pace between the people and the advisory board */}
      <Box id="governance" sx={{ scrollMarginTop: "96px" }}>
        <GovernancePrinciples {...content.governance} />
      </Box>

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <AdvisoryBoard {...content.advisoryBoard} />
          <OrgStructure {...content.structure} />
        </Stack>
      </Container>
    </>
  );
}
