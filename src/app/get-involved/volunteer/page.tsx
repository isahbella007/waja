import type { Metadata } from "next";
import Container from "@mui/material/Container";
import { LookingFor, VolunteerIntro, WhyVolunteerBand } from "@/components/getInvolved/volunteer/VolunteerSections";
import VolunteerRolesAndForm from "@/components/getInvolved/volunteer/VolunteerRolesAndForm";
import { VOLUNTEER_PAGE } from "@/constants/getInvolved/volunteer";
import { CONTACT_DETAILS } from "@/constants/contact";

export const metadata: Metadata = {
  title: VOLUNTEER_PAGE.seo.title,
  description: VOLUNTEER_PAGE.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };

export default function VolunteerPage() {
  const content = VOLUNTEER_PAGE;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <VolunteerIntro {...content.intro} />
      </Container>

      <WhyVolunteerBand reasons={content.why} />

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <VolunteerRolesAndForm roles={content.roles} form={content.form} email={CONTACT_DETAILS.email}>
          <LookingFor {...content.lookingFor} />
        </VolunteerRolesAndForm>
      </Container>
    </>
  );
}
