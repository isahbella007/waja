// Sections of /get-involved/give (RULE and SERIF are shared with the other Give pages).
// Editorial layout: rules, big serif type and columns instead of boxed cards.
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import { wajaColors } from "@/theme/theme";
import type { GivePageContent } from "@/constants/getInvolved/give";

export const SERIF = "var(--font-heading), Georgia, serif";
export const RULE = "1px solid rgba(22,78,99,0.2)";
const ACCENT = wajaColors.accentDark;

function Eyebrow({ children, color = ACCENT }: { children?: string; color?: string }) {
  if (!children) return null;
  return (
    <Typography variant="overline" component="p" sx={{ color, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

function RuledItems({ items, color = wajaColors.foreground, rule = RULE }: { items: string[]; color?: string; rule?: string }) {
  return (
    <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", borderTop: rule }}>
      {items.map((item) => (
        <Typography component="li" variant="body2" key={item} sx={{ py: 1.25, borderBottom: rule, color }}>
          {item}
        </Typography>
      ))}
    </Box>
  );
}

// ---------- What funding supports: heading row, then three labelled columns ----------
export function FundingGroups({ title, description, groups }: GivePageContent["fundingUses"]) {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 6 }} sx={{ alignItems: "flex-end", pb: 2.5, borderBottom: `2px solid ${wajaColors.foreground}` }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography component="h2" variant="h3" sx={{ color: wajaColors.foreground, fontSize: { xs: "1.9rem", md: "2.5rem" }, lineHeight: 1.15 }}>
            {title}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: `repeat(${groups.length}, 1fr)` },
          gap: { xs: 4, md: 5 },
          pt: { xs: 3, md: 4 },
        }}
      >
        {groups.map((group) => (
          <Box key={group.title}>
            <Eyebrow>{group.title}</Eyebrow>
            <RuledItems items={group.items} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ---------- Challenge: heading column + two list columns ----------
export function ChallengeColumns({ eyebrow, title, description, barriers, market }: GivePageContent["challenge"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 5 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
      </Grid>
      {[barriers, market].map((column) => (
        <Grid key={column.title} size={{ xs: 12, sm: 6, md: 4 }}>
          <Eyebrow color={wajaColors.mutedForeground}>{column.title}</Eyebrow>
          <RuledItems items={column.items} />
        </Grid>
      ))}
    </Grid>
  );
}

// ---------- Solution: full-width dark band, with the model principles in a row beneath ----------
export function SolutionBand({ eyebrow, title, description, points, principles }: GivePageContent["solution"]) {
  const lightRule = "1px solid rgba(255,255,255,0.2)";
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Eyebrow color="#FDBA74">{eyebrow}</Eyebrow>
            <Typography
              component="h2"
              variant="h3"
              sx={{ color: "#FFFFFF", fontSize: { xs: "1.9rem", md: "2.5rem" }, lineHeight: 1.15, mb: 2 }}
            >
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: wajaColors.border }}>
              {description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <RuledItems items={points} color="#FFFFFF" rule={lightRule} />
          </Grid>
        </Grid>

        <Box
          component="ul"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: `repeat(${principles.length}, 1fr)` },
            gap: { xs: 3, md: 4 },
            m: 0,
            mt: { xs: 6, md: 8 },
            p: 0,
            listStyle: "none",
          }}
        >
          {principles.map((principle) => (
            <Box component="li" key={principle.title} sx={{ borderTop: "1px solid rgba(255,255,255,0.35)", pt: 2 }}>
              <Typography component="h3" variant="h6" sx={{ color: "#FFFFFF", fontSize: "1.1rem", mb: 1 }}>
                {principle.title}
              </Typography>
              <Typography variant="body2" sx={{ color: wajaColors.border }}>
                {principle.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ---------- KPIs: heading, a rule, then three figure columns ----------
export function ImpactKpis({ eyebrow, title, description, kpis }: GivePageContent["impact"]) {
  return (
    <Box>
      <Box sx={{ pb: 3, borderBottom: RULE }}>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
      </Box>
      <Box
        component="dl"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: `repeat(${kpis.length}, 1fr)` },
          gap: { xs: 3, md: 5 },
          m: 0,
          pt: { xs: 3, md: 4 },
        }}
      >
        {kpis.map((kpi) => (
          // Label first in the markup (dt before dd); column-reverse shows the figure on top
          <Box key={kpi.label} sx={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end" }}>
            <Box>
              <Typography component="dt" variant="subtitle1" sx={{ color: wajaColors.foreground, fontWeight: 700 }}>
                {kpi.label}
              </Typography>
              <Typography component="dd" variant="body2" sx={{ m: 0, color: "text.secondary" }}>
                {kpi.description}
              </Typography>
            </Box>
            <Typography
              component="dd"
              sx={{ m: 0, fontFamily: SERIF, fontSize: { xs: "2.5rem", md: "3rem" }, lineHeight: 1, color: wajaColors.primaryDark, mb: 1 }}
            >
              {kpi.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ---------- Commitment: heading left, four points in a 2 × 2 on the right ----------
export function Commitment({ eyebrow, title, items }: GivePageContent["commitment"]) {
  return (
    <Grid container spacing={{ xs: 3, md: 6 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <SectionTitle eyebrow={eyebrow} title={title} />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Box
          component="ul"
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, columnGap: 5, m: 0, p: 0, listStyle: "none", pt: { md: 4 } }}
        >
          {items.map((item) => (
            <Typography component="li" variant="body1" key={item} sx={{ py: 1.5, borderTop: RULE, color: wajaColors.foreground }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
