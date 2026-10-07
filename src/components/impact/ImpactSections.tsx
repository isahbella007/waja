// Sections of /impact, told as one story:
// the women now → how their lives are changing → how far they've come →
// the next chapter (the training centre) → how to help.
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import MediaFrame from "@/components/shared/MediaFrame";
import SectionTitle from "@/components/shared/SectionTitle";
import ActionButton from "@/components/shared/ActionButton";
import ArrowLink from "@/components/shared/ArrowLink";
import BuildingCompare from "@/components/impact/BuildingCompare";
import { typeScale, wajaColors } from "@/theme/theme";
import type { ImageContent } from "@/constants/types";
import type { ImpactPageContent } from "@/constants/impact";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.2)";

function Eyebrow({ children, color = wajaColors.accentDark }: { children: string; color?: string }) {
  return (
    <Typography variant="overline" component="p" sx={{ color, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1 }}>
      {children}
    </Typography>
  );
}

// ---------- 1. The women now: headline left, cohort photo right ----------
export function ImpactHero({
  eyebrow,
  lines,
  asideTitle,
  asideText,
  report,
  photo,
}: ImpactPageContent["hero"] & { photo: ImageContent }) {
  return (
    <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Typography component="h1" sx={{ ...typeScale.pageTitle, color: wajaColors.foreground, mb: 3 }}>
          {lines.map((line) => (
            <Box component="span" key={`${line.figure ?? ""}${line.text}`} sx={{ display: "block" }}>
              {line.figure && (
                <Box component="span" sx={{ color: wajaColors.primaryDark }}>
                  {line.figure}
                </Box>
              )}
              {line.text}
            </Box>
          ))}
        </Typography>
        <Box sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: 2, maxWidth: 520 }}>
          <Typography variant="subtitle1" component="p" sx={{ color: wajaColors.foreground, fontWeight: 700, lineHeight: 1.35, mb: 1 }}>
            {asideTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            {asideText}
          </Typography>
          <ArrowLink {...report} />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <MediaFrame
          image={photo}
          sizes="(min-width: 900px) 50vw, 100vw"
          placeholderBg={wajaColors.muted}
          placeholderColor={wajaColors.primaryDark}
          sx={{ aspectRatio: "4 / 5", maxHeight: 620 }}
        />
      </Grid>
    </Grid>
  );
}

// ---------- 2. How lives are changing: Abena's words, with the four changes beneath ----------
export function VoicesBand({ change, quote }: { change: ImpactPageContent["change"]; quote: ImpactPageContent["quote"] }) {
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Eyebrow color="#FDBA74">{change.eyebrow}</Eyebrow>
        <Typography component="h2" sx={{ ...typeScale.sectionTitle, color: "#FFFFFF", mb: { xs: 4, md: 6 }, maxWidth: 720 }}>
          {change.title}
        </Typography>

        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <MediaFrame
              image={quote.image}
              sizes="(min-width: 900px) 25vw, (min-width: 600px) 33vw, 60vw"
              placeholderBg="rgba(0,0,0,0.2)"
              placeholderColor={wajaColors.border}
              sx={{ aspectRatio: "4 / 5", maxWidth: { xs: 240, sm: "none" } }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 8, md: 9 }}>
            <Box component="figure" sx={{ m: 0 }}>
              <Typography aria-hidden sx={{ fontFamily: SERIF, fontSize: "3.5rem", lineHeight: 0.6, color: wajaColors.accent, mb: 1 }}>
                “
              </Typography>
              <Typography component="blockquote" sx={{ m: 0, ...typeScale.subTitle, fontWeight: 500, lineHeight: 1.45, color: "#FFFFFF" }}>
                {quote.text}
              </Typography>
              <Box component="figcaption" sx={{ mt: 2.5 }}>
                <Typography variant="subtitle2" component="p" sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  {quote.name}
                </Typography>
                <Typography variant="body2" sx={{ color: wajaColors.border }}>
                  {quote.role}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* The four changes, as a calm row under a rule */}
        <Box
          component="ul"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: `repeat(${change.items.length}, 1fr)` },
            gap: { xs: 3, md: 4 },
            m: 0,
            mt: { xs: 6, md: 8 },
            p: 0,
            listStyle: "none",
          }}
        >
          {change.items.map((item) => (
            <Box component="li" key={item.title} sx={{ borderTop: "1px solid rgba(255,255,255,0.35)", pt: 2 }}>
              <Typography component="h3" variant="h6" sx={{ color: "#FFFFFF", mb: 0.75 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: wajaColors.border }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ---------- 4. The next chapter: soft band with the centre, why it matters and what it will include ----------
export function NextChapterBand({
  centre,
  why,
  includes,
}: {
  centre: ImpactPageContent["centre"];
  why: ImpactPageContent["why"];
  includes: ImpactPageContent["includes"];
}) {
  const { funding } = why;
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.muted, py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 5, md: 7 }}>
          <SectionTitle eyebrow={centre.eyebrow} title={centre.title} description={centre.description} />

          <BuildingCompare {...centre.compare} />

          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: { xs: 4, md: 5 } }}>
            {/* Why it matters + fit-out progress */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Eyebrow>{why.eyebrow}</Eyebrow>
              <Typography component="h3" sx={{ ...typeScale.subTitle, color: wajaColors.foreground, mb: 1.5 }}>
                {why.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                {why.description}
              </Typography>
              {funding && (
                <Box sx={{ mb: 3 }}>
                  <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-end", mb: 1 }}>
                    <Box>
                      <Typography sx={{ fontFamily: SERIF, fontWeight: 600, fontSize: "2rem", lineHeight: 1, color: wajaColors.foreground }}>
                        {funding.raised}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        {funding.goalText}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: SERIF, fontWeight: 600, fontSize: "1.25rem", color: wajaColors.accentDark }}>
                      {funding.percentLabel}
                    </Typography>
                  </Stack>
                  <Box
                    role="progressbar"
                    aria-label={funding.goalText}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={funding.percent}
                    sx={{ height: 8, bgcolor: "rgba(22,78,99,0.12)", overflow: "hidden" }}
                  >
                    <Box sx={{ width: `${Math.min(100, Math.max(0, funding.percent))}%`, height: "100%", bgcolor: wajaColors.accent }} />
                  </Box>
                </Box>
              )}
              <ActionButton {...why.button} variant="contained" sx={{ bgcolor: wajaColors.accent, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.accentDark } }} />
            </Grid>

            {/* What the centre will include */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Eyebrow>{includes.title}</Eyebrow>
              <Box component="ul" sx={{ columnCount: { xs: 1, sm: 2 }, columnGap: 4, m: 0, p: 0, listStyle: "none" }}>
                {includes.items.map((item) => (
                  <Box component="li" key={item} sx={{ breakInside: "avoid", display: "flex", gap: 1, alignItems: "flex-start", py: 1, borderBottom: RULE }}>
                    <CheckIcon aria-hidden sx={{ fontSize: 16, color: wajaColors.accent, mt: 0.4 }} />
                    <Typography variant="body2" sx={{ color: wajaColors.foreground }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2, mb: 1 }}>
                {includes.description}
              </Typography>
              <ArrowLink {...includes.link} />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

// ---------- 5. Closing line with two actions (also used on the Stories page) ----------
export function ImpactClosing({ title, primary, secondary }: ImpactPageContent["closing"]) {
  return (
    <Box component="section" sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: { xs: 4, md: 5 } }}>
      <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography component="h2" sx={{ ...typeScale.sectionTitle, color: wajaColors.foreground }}>
            {title}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: { md: "flex-end" } }}>
            <ActionButton {...primary} variant="contained" sx={{ bgcolor: wajaColors.accent, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.accentDark } }} />
            <ActionButton
              {...secondary}
              variant="outlined"
              sx={{ color: wajaColors.foreground, borderColor: wajaColors.foreground, borderWidth: 2, "&:hover": { borderWidth: 2, bgcolor: "rgba(22,78,99,0.05)" } }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
