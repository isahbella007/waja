import { Suspense } from "react";
import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import PageIntro from "@/components/shared/PageIntro";
import ContactForm from "@/components/about/contact/ContactForm";
import ContactFormWithTopic from "@/components/about/contact/ContactFormWithTopic";
import ContactDetailsPanel from "@/components/about/contact/ContactDetailsPanel";
import { CONTACT_PAGE } from "@/constants/about/contact";
import { CONTACT_DETAILS } from "@/constants/contact";

export const metadata: Metadata = {
  title: CONTACT_PAGE.seo.title,
  description: CONTACT_PAGE.seo.description,
};

export default function ContactPage() {
  const content = CONTACT_PAGE;
  const formProps = { content: content.form, recipient: CONTACT_DETAILS.email };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={{ xs: 4, md: 6 }}>
        <PageIntro {...content.intro} />
        <Grid container spacing={3} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Fallback is the same form without a pre-selected topic */}
            <Suspense fallback={<ContactForm {...formProps} />}>
              <ContactFormWithTopic {...formProps} />
            </Suspense>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <ContactDetailsPanel details={CONTACT_DETAILS} labels={content.details} />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
