import { Suspense } from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PageIntro from "@/components/shared/PageIntro";
import ArrowLink from "@/components/shared/ArrowLink";
import ApplicationForm from "@/components/apply/ApplicationForm";
import ApplicationFormWithProgram from "@/components/apply/ApplicationFormWithProgram";
import { APPLY_FORM } from "@/constants/apply/applyForm";
import { PROGRAMS } from "@/constants/programs/programs";
import { CONTACT_DETAILS } from "@/constants/contact";

export const metadata: Metadata = {
  title: APPLY_FORM.seo.title,
  description: APPLY_FORM.seo.description,
};

export default function ApplicationFormPage() {
  const formProps = {
    content: APPLY_FORM,
    programs: PROGRAMS.map((p) => ({ value: p.slug, label: `${p.label} ${p.number}: ${p.title}` })),
    privacyHref: "/apply#privacy",
    contact: { email: CONTACT_DETAILS.email, phone: CONTACT_DETAILS.offices.ghana.phone },
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
      <Box sx={{ mb: 1.5 }}>
        <ArrowLink label={APPLY_FORM.backToInfo.label} href={APPLY_FORM.backToInfo.href} />
      </Box>
      <PageIntro {...APPLY_FORM.intro} />
      <Box
        sx={{
          mt: { xs: 4, md: 5 },
          bgcolor: "#FFFFFF",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "16px",
          p: { xs: 2.5, sm: 4, md: 5 },
        }}
      >
        {/* Fallback is the same form without a pre-selected program */}
        <Suspense fallback={<ApplicationForm {...formProps} />}>
          <ApplicationFormWithProgram {...formProps} />
        </Suspense>
      </Box>
    </Container>
  );
}
