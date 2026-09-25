// The content that sits inside each numbered LeafletSection of a program page.
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import RuledList from "@/components/shared/RuledList";
import { wajaColors } from "@/theme/theme";
import type { ProgramDetail } from "@/constants/programs/programs";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.18)";

// Long text flows into two columns on large screens
export function PurposeBody({ paragraphs }: ProgramDetail["purpose"]) {
  return (
    <Box sx={{ columnCount: { xs: 1, lg: 2 }, columnGap: 6 }}>
      {paragraphs.map((paragraph, index) => (
        <Typography
          key={paragraph}
          variant="body1"
          sx={{
            color: index === 0 ? wajaColors.foreground : "text.secondary",
            fontSize: index === 0 ? "1.15rem" : "1rem",
            breakInside: "avoid",
            mb: 2,
          }}
        >
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
}

export function CurriculumBody({ modules, note, accent }: ProgramDetail["curriculum"] & { accent: string }) {
  return (
    <Stack spacing={3}>
      <RuledList items={modules} accent={accent} numbered />
      <Typography variant="body1" sx={{ color: "text.secondary", fontStyle: "italic", maxWidth: 620 }}>
        {note}
      </Typography>
    </Stack>
  );
}

export function ApproachBody({ method, highlights, support, accent }: ProgramDetail["approach"] & { accent: string }) {
  return (
    <Stack spacing={4}>
      {/* Teaching method as a sentence-like sequence */}
      {method && method.length > 0 && (
        <Box
          component="ol"
          aria-label="Teaching method"
          sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: { xs: 1, md: 1.5 }, m: 0, p: 0, listStyle: "none" }}
        >
          {method.map((step, index) => (
            <Box component="li" key={step} sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 1.5 } }}>
              <Typography component="span" sx={{ fontFamily: SERIF, fontSize: { xs: "1.25rem", md: "1.6rem" }, color: wajaColors.foreground }}>
                {step}
              </Typography>
              {index < method.length - 1 && <EastIcon aria-hidden sx={{ fontSize: 20, color: accent }} />}
            </Box>
          ))}
        </Box>
      )}
      <RuledList items={highlights} accent={accent} />
      <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 620 }}>
        {support}
      </Typography>
    </Stack>
  );
}

export function JourneyBody({ phases, accent }: ProgramDetail["journey"] & { accent: string }) {
  return (
    <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", borderTop: RULE }}>
      {phases.map((phase) => (
        <Box
          component="li"
          key={phase.phase}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "150px 1fr" },
            columnGap: 4,
            rowGap: 1,
            py: 3,
            borderBottom: RULE,
          }}
        >
          <Box>
            <Typography variant="overline" component="p" sx={{ color: accent, fontWeight: 700, letterSpacing: "0.12em", lineHeight: 1.5 }}>
              {phase.phase}
            </Typography>
            {phase.when && (
              <Typography component="p" sx={{ fontFamily: SERIF, color: wajaColors.foreground, fontSize: "1.15rem" }}>
                {phase.when}
              </Typography>
            )}
          </Box>
          <Box>
            <Typography variant="h6" component="h3" sx={{ color: wajaColors.foreground, mb: 1 }}>
              {phase.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {phase.items.join(" · ")}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export function EligibilityBody({ items, accent }: ProgramDetail["eligibility"] & { accent: string }) {
  return <RuledList items={items} accent={accent} />;
}

export function OutcomesBody({ stats, results, note, accent }: ProgramDetail["outcomes"] & { accent: string }) {
  return (
    <Stack spacing={3}>
      <Box
        component="dl"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: `repeat(${Math.max(stats.length, 3)}, 1fr)` },
          gap: { xs: 3, sm: 4 },
          m: 0,
        }}
      >
        {stats.map((stat) => (
          // Label comes first in the markup (dt before dd); column-reverse shows the number on top
          <Box
            key={stat.label}
            sx={{ display: "flex", flexDirection: "column-reverse", borderTop: `2px solid ${accent}`, pt: 2 }}
          >
            <Typography component="dt" variant="body2" sx={{ color: wajaColors.foreground, fontWeight: 600, mt: 1 }}>
              {stat.label}
            </Typography>
            <Typography
              component="dd"
              sx={{ m: 0, fontFamily: SERIF, fontWeight: 400, fontSize: { xs: "3rem", md: "3.75rem" }, lineHeight: 1, color: accent }}
            >
              {stat.value}
            </Typography>
          </Box>
        ))}
      </Box>
      {results && results.length > 0 && <RuledList items={results} accent={accent} />}
      {note && (
        <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 620 }}>
          {note}
        </Typography>
      )}
    </Stack>
  );
}
