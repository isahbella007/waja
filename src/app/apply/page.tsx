import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PamphletSheet, { SheetPanel } from "@/components/shared/PamphletSheet";
import LeafletSection from "@/components/shared/LeafletSection";
import CtaBanner from "@/components/shared/CtaBanner";
import ApplyCover from "@/components/apply/ApplyCover";
import {
  AfterApplyingBody,
  AssistedBody,
  EligibilityBody,
  FaqBody,
  OverviewBody,
  PrivacyBody,
  WaysToApplyBody,
} from "@/components/apply/ApplyBodies";
import { APPLY_PAGE } from "@/constants/apply/applyPage";
import { PROGRAMS } from "@/constants/programs/programs";
import { wajaColors } from "@/theme/theme";

export const metadata: Metadata = {
  title: APPLY_PAGE.seo.title,
  description: APPLY_PAGE.seo.description,
};

// Orange for numbers and markers; the darker shade keeps small text readable
const ACCENT = wajaColors.accentDark;
const TINT = "#E2F2F6";

const pad = (n: number) => String(n).padStart(2, "0");

export default function ApplyPage() {
  const content = APPLY_PAGE;
  const programLinks = PROGRAMS.map((p) => ({ label: `${p.label} ${p.number}: ${p.tag}`, href: `/programs/${p.slug}` }));

  // id lets other pages link straight to a section (e.g. /apply#privacy)
  const sections = [
    { id: "overview", title: content.overview.title, body: <OverviewBody {...content.overview} programLinks={programLinks} accent={ACCENT} /> },
    { id: "who-can-apply", title: content.eligibility.title, body: <EligibilityBody {...content.eligibility} accent={ACCENT} /> },
    { id: "ways-to-apply", title: content.waysToApply.title, body: <WaysToApplyBody {...content.waysToApply} accent={ACCENT} /> },
    { id: "assisted-registration", title: content.assisted.title, body: <AssistedBody {...content.assisted} accent={ACCENT} /> },
    { id: "what-happens-next", title: content.afterApplying.title, body: <AfterApplyingBody {...content.afterApplying} accent={ACCENT} /> },
    { id: "privacy", title: content.privacy.title, body: <PrivacyBody {...content.privacy} accent={ACCENT} /> },
    { id: "faq", title: content.faq.title, body: <FaqBody {...content.faq} /> },
  ];

  return (
    <>
      <PamphletSheet>
        <ApplyCover {...content.cover} />
        {sections.map((section, i) => (
          <Box key={section.id} id={section.id} sx={{ scrollMarginTop: "80px" }}>
            <SheetPanel tint={i % 2 === 1 ? TINT : undefined}>
              <LeafletSection number={pad(i + 1)} title={section.title} accent={ACCENT}>
                {section.body}
              </LeafletSection>
            </SheetPanel>
          </Box>
        ))}
        <SheetPanel tint={sections.length % 2 === 1 ? TINT : undefined}>
          <CtaBanner {...content.finalCta} buttonTone="accent" background="#FFFFFF" />
        </SheetPanel>
      </PamphletSheet>

      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
        <CtaBanner
          {...content.partnership}
          background={wajaColors.foreground}
          borderColor="transparent"
          titleColor="#FFFFFF"
          descriptionColor={wajaColors.border}
          buttonTone="accent"
        />
      </Container>
    </>
  );
}
