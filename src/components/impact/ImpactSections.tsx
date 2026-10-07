// Static sections of /impact
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MediaFrame from "@/components/shared/MediaFrame";
import SectionTitle from "@/components/shared/SectionTitle";
import ActionButton from "@/components/shared/ActionButton";
import ArrowLink from "@/components/shared/ArrowLink";
import { typeScale, wajaColors } from "@/theme/theme";
import type { ImpactPageContent } from "@/constants/impact";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.2)";
const HEADING_SX = { color: wajaColors.foreground, ...typeScale.sectionTitle };

function Eyebrow({ children, color = wajaColors.accentDark }: { children: string; color?: string }) {
  return (
    <Typography variant="overline" component="p" sx={{ color, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1 }}>
      {children}
    </Typography>
  );
}

// ---------- Hero: oversized headline with the figures in teal ----------
export function ImpactHero({ eyebrow, lines, asideTitle, asideText, report }: ImpactPageContent["hero"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-end" }}>
      <Grid size={{ xs: 12, md: 8 }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Typography
          component="h1"
          // A step above the 48px used for other page titles, so the figures lead without shouting
          sx={{ ...typeScale.pageTitle, color: wajaColors.foreground }}
        >
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
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography variant="subtitle1" component="p" sx={{ color: wajaColors.foreground, fontWeight: 700, lineHeight: 1.35, mb: 1.5 }}>
          {asideTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {asideText}
        </Typography>
        <ArrowLink {...report} />
      </Grid>
    </Grid>
  );
}

// ---------- Four ruled rows with large faded numbers ----------
export function ChangeRows({ eyebrow, title, items }: ImpactPageContent["change"]) {
  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      <SectionTitle eyebrow={eyebrow} title={title} />
      <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", borderTop: RULE }}>
        {items.map((item, index) => (
          <Box
            component="li"
            key={item.title}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "56px 1fr", md: "120px 260px 1fr" },
              columnGap: { xs: 2, md: 4 },
              rowGap: 0.5,
              alignItems: "center",
              py: { xs: 2.5, md: 3 },
              borderBottom: RULE,
            }}
          >
            <Typography aria-hidden sx={{ fontFamily: SERIF, fontWeight: 700, fontSize: { xs: "2rem", md: "2.75rem" }, lineHeight: 1, color: "rgba(14,116,144,0.25)", gridRow: { xs: "span 2", md: "auto" } }}>
              {String(index + 1).padStart(2, "0")}
            </Typography>
            <Typography component="h3" variant="h5" sx={{ color: wajaColors.foreground }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}

// ---------- Full-width dark quote band with a portrait ----------
export function QuoteBand({ text, name, role, image }: ImpactPageContent["quote"]) {
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, sm: 5, md: 4 }}>
            <MediaFrame
              image={image}
              sizes="(min-width: 900px) 30vw, (min-width: 600px) 40vw, 100vw"
              placeholderBg="rgba(0,0,0,0.2)"
              placeholderColor={wajaColors.border}
              sx={{ aspectRatio: "4 / 5" }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 7, md: 8 }}>
            <Box component="figure" sx={{ m: 0 }}>
              <Typography aria-hidden sx={{ fontFamily: SERIF, fontSize: "3rem", lineHeight: 0.6, color: wajaColors.accent, mb: 1 }}>
                “
              </Typography>
              <Typography component="blockquote" sx={{ m: 0, fontFamily: SERIF, fontWeight: 600, fontSize: { xs: "1.35rem", md: "1.75rem" }, lineHeight: 1.35, color: "#FFFFFF" }}>
                {text}
              </Typography>
              <Box component="figcaption" sx={{ mt: 3 }}>
                <Typography variant="subtitle2" component="p" sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  {name}
                </Typography>
                <Typography variant="body2" sx={{ color: wajaColors.border }}>
                  {role}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ---------- Training centre: big heading, then "today" and "secured" side by side ----------
export function CentreSection({ eyebrow, title, description, today, secured }: ImpactPageContent["centre"]) {
  const panel = (block: ImpactPageContent["centre"]["today"], dark: boolean) => (
    <Box>
      <MediaFrame
        image={block.image}
        sizes="(min-width: 900px) 50vw, 100vw"
        placeholderBg={dark ? wajaColors.foreground : wajaColors.muted}
        placeholderColor={dark ? wajaColors.border : wajaColors.primaryDark}
        sx={{ aspectRatio: "16 / 11" }}
      />
      <Box sx={{ borderTop: `2px solid ${dark ? wajaColors.accent : wajaColors.foreground}`, mt: 2, pt: 1.5 }}>
        <Eyebrow color={dark ? wajaColors.accentDark : wajaColors.foreground}>{block.label}</Eyebrow>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {block.description}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Stack spacing={{ xs: 4, md: 5 }}>
      <Box>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Typography component="h2" sx={{ ...typeScale.sectionTitle, color: wajaColors.foreground, maxWidth: 820, mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 640 }}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 3 } }}>
        {panel(today, false)}
        {panel(secured, true)}
      </Box>
    </Stack>
  );
}

// ---------- What the centre will include: heading left, two ruled columns right ----------
export function IncludesSection({ title, description, link, items }: ImpactPageContent["includes"]) {
  return (
    <Grid container spacing={{ xs: 3, md: 6 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography component="h2" variant="h3" sx={{ ...HEADING_SX, fontSize: { xs: "1.5rem", md: "1.75rem" }, mb: 1.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {description}
        </Typography>
        <ArrowLink {...link} />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Box component="ul" sx={{ columnCount: { xs: 1, sm: 2 }, columnGap: 5, m: 0, p: 0, listStyle: "none" }}>
          {items.map((item) => (
            <Typography component="li" variant="body2" key={item} sx={{ breakInside: "avoid", py: 1.4, borderBottom: RULE, color: wajaColors.foreground }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

// ---------- Why the centre matters: dark band with the fit-out progress ----------
export function WhyCentreBand({ eyebrow, title, description, funding, button }: ImpactPageContent["why"]) {
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Eyebrow color="#FDBA74">{eyebrow}</Eyebrow>
            <Typography component="h2" variant="h3" sx={{ ...HEADING_SX, color: "#FFFFFF", mb: 2 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: wajaColors.border }}>
              {description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {funding && (
              <Box sx={{ mb: 3 }}>
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-end", mb: 1 }}>
                  <Box>
                    <Typography sx={{ fontFamily: SERIF, fontSize: { xs: "2.25rem", md: "2.75rem" }, lineHeight: 1, color: "#FFFFFF" }}>
                      {funding.raised}
                    </Typography>
                    <Typography variant="caption" sx={{ color: wajaColors.border }}>
                      {funding.goalText}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontFamily: SERIF, fontSize: "1.5rem", color: "#FDBA74" }}>{funding.percentLabel}</Typography>
                </Stack>
                <Box
                  role="progressbar"
                  aria-label={funding.goalText}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={funding.percent}
                  sx={{ height: 8, bgcolor: "rgba(255,255,255,0.15)", overflow: "hidden" }}
                >
                  <Box sx={{ width: `${Math.min(100, Math.max(0, funding.percent))}%`, height: "100%", bgcolor: wajaColors.accent }} />
                </Box>
              </Box>
            )}
            <ActionButton {...button} variant="contained" sx={{ bgcolor: wajaColors.accent, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.accentDark } }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ---------- Closing line with two actions ----------
export function ImpactClosing({ title, primary, secondary }: ImpactPageContent["closing"]) {
  return (
    <Box component="section" sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: { xs: 4, md: 5 } }}>
      <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography component="h2" variant="h3" sx={HEADING_SX}>
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
