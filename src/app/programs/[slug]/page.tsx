import { ViewTransition } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Typography from "@mui/material/Typography";
import ProgramCover from "@/components/programs/detail/ProgramCover";
import PamphletSheet, { SheetPanel } from "@/components/shared/PamphletSheet";
import LeafletFooter from "@/components/programs/detail/LeafletFooter";
import LeafletSection from "@/components/shared/LeafletSection";
import {
  ApproachBody,
  CurriculumBody,
  EligibilityBody,
  JourneyBody,
  OutcomesBody,
  PurposeBody,
} from "@/components/programs/detail/LeafletBodies";
import ProgramQuote from "@/components/programs/detail/ProgramQuote";
import ProgramContact from "@/components/programs/detail/ProgramContact";
import { getProgramTheme } from "@/theme/programThemes";
import { PROGRAMS_NAV } from "@/constants/navigation";
import { APPLY_FORM_HREF } from "@/constants/apply/applyPage";
import { PROGRAM_PAGE_LABELS, PROGRAMS } from "@/constants/programs/programs";

// Only the programs listed in PROGRAMS exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return PROGRAMS.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: `${program.title} | WAJA`,
    description: program.detail?.seoDescription ?? program.summary,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function ProgramPage({ params }: PageProps<"/programs/[slug]">) {
  const { slug } = await params;
  const index = PROGRAMS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const program = PROGRAMS[index];
  const theme = getProgramTheme(index);
  const detail = program.detail;
  const labels = PROGRAM_PAGE_LABELS;

  // The last program "turns the page" back to the first
  const isLast = index === PROGRAMS.length - 1;
  const nextIndex = isLast ? 0 : index + 1;
  const previous = index > 0 ? PROGRAMS[index - 1] : undefined;

  const overviewHref = PROGRAMS_NAV.children?.[0]?.href ?? "/programs";

  // Numbered leaflet sections, in reading order
  const sections = detail
    ? [
        { title: detail.purpose.title, body: <PurposeBody {...detail.purpose} /> },
        { title: detail.curriculum.title, body: <CurriculumBody {...detail.curriculum} accent={theme.accent} /> },
        { title: detail.approach.title, body: <ApproachBody {...detail.approach} accent={theme.accent} /> },
        { title: detail.journey.title, body: <JourneyBody {...detail.journey} accent={theme.accent} /> },
        { title: detail.eligibility.title, body: <EligibilityBody {...detail.eligibility} accent={theme.accent} /> },
        { title: detail.outcomes.title, body: <OutcomesBody {...detail.outcomes} accent={theme.accent} /> },
      ]
    : [];

  // Moving between programs ("page-turn"): old leaf swings away over the new one.
  // Arriving from the Overview ("page-open"): the leaflet swings in.
  // Going back ("page-back"): the previous leaf swings back over the current one.
  const enter = { "page-turn": "page-in", "page-open": "page-open", "page-back": "page-over", default: "none" };
  const exit = { "page-turn": "page-out", "page-back": "page-under", default: "none" };

  return (
    // Keyed by slug so moving between programs plays the page-turn (see globals.css)
    <ViewTransition key={slug} enter={enter} exit={exit} default="none">
      <div>
        <PamphletSheet>
          <ProgramCover
            program={program}
            intro={detail?.cover.intro ?? program.summary}
            facts={detail?.cover.facts}
            theme={theme}
            runningHeader={`${labels.series} · ${pad(index + 1)} / ${pad(PROGRAMS.length)}`}
            back={{ label: labels.backToOverview, href: overviewHref }}
          />

          {detail ? (
            <>
              {/* Panels alternate plain paper and a wash of the program colour */}
              {sections.map((section, i) => (
                <SheetPanel key={section.title} tint={i % 2 === 1 ? theme.tint : undefined}>
                  <LeafletSection number={pad(i + 1)} title={section.title} accent={theme.accent}>
                    {section.body}
                  </LeafletSection>
                </SheetPanel>
              ))}

              {/* {detail.quote && <ProgramQuote {...detail.quote} theme={theme} />} */}

              <SheetPanel tint={sections.length % 2 === 1 ? theme.tint : undefined}>
                <ProgramContact
                  {...detail.contact}
                  // Straight to the form with this program pre-selected
                  apply={{ label: labels.applyLabel, href: `${APPLY_FORM_HREF}?program=${program.slug}` }}
                  accent={theme.accent}
                />
              </SheetPanel>
            </>
          ) : (
            <SheetPanel>
              <Typography variant="h5" component="p" sx={{ color: "text.secondary", fontWeight: 400 }}>
                {labels.comingSoon}
              </Typography>
            </SheetPanel>
          )}

          <LeafletFooter
            label={labels.series}
            previous={
              previous
                ? {
                    eyebrow: labels.previousLeaflet,
                    label: `${previous.label} ${previous.number}`,
                    href: `/programs/${previous.slug}`,
                    color: getProgramTheme(index - 1).accent,
                    transition: "page-back",
                  }
                : { eyebrow: labels.series, label: labels.backToOverview, href: overviewHref, color: theme.accent }
            }
            next={{
              eyebrow: isLast ? labels.backToStart : labels.turnThePage,
              label: `${PROGRAMS[nextIndex].label} ${PROGRAMS[nextIndex].number}`,
              href: `/programs/${PROGRAMS[nextIndex].slug}`,
              color: getProgramTheme(nextIndex).accent,
              transition: "page-turn",
            }}
            printed={`${labels.series} · ${labels.sheetFooter}`}
            rule={`${theme.accent}55`}
          />
        </PamphletSheet>
      </div>
    </ViewTransition>
  );
}
