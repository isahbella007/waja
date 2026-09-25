import type { Metadata } from "next";
import Container from "@mui/material/Container";
import PageIntro from "@/components/shared/PageIntro";
import { PROGRAM_PLACEHOLDERS } from "@/constants/programs/placeholders";

export const metadata: Metadata = { title: `${PROGRAM_PLACEHOLDERS.microenterprise.title} | WAJA` };

export default function MicroenterprisePage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <PageIntro {...PROGRAM_PLACEHOLDERS.microenterprise} />
    </Container>
  );
}
