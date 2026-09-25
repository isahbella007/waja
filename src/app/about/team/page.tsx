import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TeamIntro from "@/components/about/team/TeamIntro";
import TeamSlider from "@/components/about/team/TeamSlider";
import VolunteerList from "@/components/about/team/VolunteerList";
import GovernancePrinciples from "@/components/about/team/GovernancePrinciples";
import AdvisoryBoardCard from "@/components/about/team/AdvisoryBoardCard";
import OrgStructure from "@/components/about/team/OrgStructure";
import { TEAM } from "@/constants/about/team";

export const metadata: Metadata = {
  title: TEAM.seo.title,
  description: TEAM.seo.description,
};

export default function TeamPage() {
  const content = TEAM;
  const { members, readBioLabel, ...leadershipHeading } = content.leadership;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={{ xs: 6, md: 10 }}>
        <TeamIntro {...content.intro} />
        <TeamSlider heading={leadershipHeading} members={members} readBioLabel={readBioLabel} />
        <VolunteerList {...content.volunteers} />
        <Box id="governance" sx={{ scrollMarginTop: "96px" }}>
          <GovernancePrinciples {...content.governance} />
        </Box>
        <AdvisoryBoardCard {...content.advisoryBoard} />
        <OrgStructure {...content.structure} />
      </Stack>
    </Container>
  );
}
