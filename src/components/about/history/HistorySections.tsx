// Sections of /about/history, set like a magazine feature: big serif type,
// a standfirst, a drop cap, a pull quote and a ruled timeline. No cards.
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import VideoPlayer from "@/components/shared/VideoPlayer";
import MediaFrame from "@/components/shared/MediaFrame";
import ActionButton from "@/components/shared/ActionButton";
import { typeScale, wajaColors } from "@/theme/theme";
import type { HistoryContent } from "@/constants/about/history";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.2)";

function Eyebrow({ children, color = wajaColors.accentDark }: { children?: string; color?: string }) {
  if (!children) return null;
  return (
    <Typography variant="overline" component="p" sx={{ color, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

// ---------- Opening spread: headline and standfirst ----------
export function HistoryOpening({ eyebrow, title, description }: HistoryContent["intro"]) {
  return (
    <Box sx={{ maxWidth: 900 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Typography
        component="h1"
        sx={{ ...typeScale.pageTitle, color: wajaColors.foreground, mb: 2.5 }}
      >
        {title}
      </Typography>
      {/* Lead paragraph, a little larger than body text */}
      <Typography sx={{ ...typeScale.lead, color: wajaColors.foreground, maxWidth: 720 }}>
        {description}
      </Typography>
    </Box>
  );
}

// ---------- The film: full-width dark band ----------
export function HistoryFilm({ eyebrow, title, caption, video, poster, orientation, playLabel, comingSoon }: HistoryContent["film"]) {
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "space-between", alignItems: { sm: "flex-end" }, mb: { xs: 3, md: 4 } }}>
          <Box>
            <Eyebrow color="#FDBA74">{eyebrow}</Eyebrow>
            <Typography component="h2" sx={{ ...typeScale.sectionTitle, color: "#FFFFFF" }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: wajaColors.border, maxWidth: 360 }}>
            {caption}
          </Typography>
        </Stack>
        <Box sx={{ maxWidth: 760, mx: "auto" }}>
          <VideoPlayer
            video={video}
            poster={poster}
            orientation={orientation}
            title={title}
            playLabel={playLabel}
            comingSoonLabel={comingSoon}
          />
        </Box>
      </Container>
    </Box>
  );
}

// ---------- Turning point: pull-heading left, body with a drop cap right ----------
export function TurningPoint({ title, paragraphs }: HistoryContent["turningPoint"]) {
  return (
    <Grid container spacing={{ xs: 3, md: 8 }}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Typography
          component="h2"
          sx={{ ...typeScale.sectionTitle, color: wajaColors.foreground, borderTop: `2px solid ${wajaColors.foreground}`, pt: 2 }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Stack spacing={2.5} sx={{ pt: { md: 2.5 } }}>
          {paragraphs.map((paragraph, index) => (
            <Typography
              key={paragraph}
              variant="body1"
              sx={{
                color: wajaColors.foreground,
                lineHeight: 1.7,
                // Drop cap on the opening paragraph
                ...(index === 0 && {
                  "&::first-letter": {
                    float: "left",
                    fontFamily: SERIF,
                    fontWeight: 600,
                    fontSize: "3.75rem",
                    lineHeight: 0.85,
                    color: wajaColors.accentDark,
                    pr: 1.25,
                    pt: 0.75,
                  },
                }),
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}

// ---------- Ben's words: his portrait beside the pull quote ----------
export function FounderPullQuote({ quote, name, role, image }: HistoryContent["founderQuote"]) {
  return (
    <Box
      component="figure"
      sx={{
        m: 0,
        borderTop: RULE,
        borderBottom: RULE,
        py: { xs: 5, md: 7 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "200px 1fr", md: "240px 1fr" },
        columnGap: { sm: 5, md: 7 },
        rowGap: 3,
        alignItems: "center",
      }}
    >
      <MediaFrame
        image={image}
        sizes="(min-width: 900px) 240px, (min-width: 600px) 200px, 160px"
        placeholderBg={wajaColors.muted}
        placeholderColor={wajaColors.primaryDark}
        sx={{ width: { xs: 160, sm: "100%" }, aspectRatio: "4 / 5" }}
      />
      <Box>
        <Typography aria-hidden sx={{ fontFamily: SERIF, fontSize: "4rem", lineHeight: 0.5, color: wajaColors.accent, mb: 1.5 }}>
          “
        </Typography>
        <Typography component="blockquote" sx={{ m: 0, ...typeScale.subTitle, fontWeight: 500, lineHeight: 1.45, color: wajaColors.foreground }}>
          {quote}
        </Typography>
        <Box component="figcaption" sx={{ mt: 3 }}>
          <Typography variant="subtitle1" component="p" sx={{ color: wajaColors.foreground, fontWeight: 700, lineHeight: 1.3 }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// ---------- How we built it: numbered two-column list, large faded numbers ----------
export function HowWeBuiltIt({ eyebrow, title, items }: HistoryContent["approach"]) {
  return (
    <Stack spacing={{ xs: 3, md: 5 }}>
      <SectionTitle eyebrow={eyebrow} title={title} />
      <Box
        component="ol"
        sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, columnGap: 6, m: 0, p: 0, listStyle: "none", borderTop: `2px solid ${wajaColors.foreground}` }}
      >
        {items.map((item, index) => (
          <Box component="li" key={item.title} sx={{ display: "grid", gridTemplateColumns: "56px 1fr", columnGap: 2, py: { xs: 2.5, md: 3 }, borderBottom: RULE }}>
            <Typography aria-hidden sx={{ fontFamily: SERIF, fontWeight: 600, fontSize: "2.25rem", lineHeight: 1, color: "rgba(14,116,144,0.22)" }}>
              {String(index + 1).padStart(2, "0")}
            </Typography>
            <Box>
              <Typography component="h3" variant="h6" sx={{ color: wajaColors.foreground, fontSize: "1.1rem", lineHeight: 1.3, mb: 0.5 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}

// ---------- Timeline: one continuous line, big serif years; the current year marked "Now" ----------
export function HistoryTimeline({ eyebrow, title, currentYear, nowLabel, entries }: HistoryContent["timeline"]) {
  return (
    <Stack spacing={{ xs: 3, md: 5 }}>
      <SectionTitle eyebrow={eyebrow} title={title} />
      <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", position: "relative" }}>
        {entries.map((entry, index) => {
          const isNow = entry.year === currentYear;
          const isAhead = Number(entry.year) > Number(currentYear);
          const isLast = index === entries.length - 1;
          return (
            <Box
              component="li"
              key={`${entry.year}-${entry.title}`}
              aria-current={isNow ? "step" : undefined}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "72px 24px 1fr", md: "160px 32px 1fr" },
                columnGap: { xs: 1.5, md: 3 },
                opacity: isAhead ? 0.7 : 1,
              }}
            >
              <Box sx={{ pt: 0.25 }}>
                <Typography sx={{ fontFamily: SERIF, fontWeight: isNow ? 600 : 400, fontSize: { xs: "1.4rem", md: "2.25rem" }, lineHeight: 1, color: isNow ? wajaColors.accentDark : wajaColors.foreground }}>
                  {entry.year}
                </Typography>
                {isNow && (
                  <Typography component="span" sx={{ display: "inline-block", mt: 0.75, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF", bgcolor: wajaColors.accent, px: 1, py: 0.25, borderRadius: "999px" }}>
                    {nowLabel}
                  </Typography>
                )}
              </Box>

              {/* The line and its marker */}
              <Box aria-hidden sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    bottom: isLast ? "auto" : 0,
                    height: isLast ? 14 : "auto",
                    width: "2px",
                    bgcolor: isAhead ? "transparent" : wajaColors.foreground,
                    borderLeft: isAhead ? `2px dashed ${wajaColors.foreground}66` : "none",
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    mt: 0.75,
                    width: isNow ? 16 : 12,
                    height: isNow ? 16 : 12,
                    borderRadius: "50%",
                    bgcolor: isNow ? wajaColors.accent : isAhead ? wajaColors.background : wajaColors.foreground,
                    border: `2px solid ${isNow ? wajaColors.accent : wajaColors.foreground}`,
                    boxShadow: isNow ? `0 0 0 5px ${wajaColors.accent}33` : "none",
                  }}
                />
              </Box>

              <Box sx={{ pb: isLast ? 0 : { xs: 4, md: 5 } }}>
                <Typography component="h3" variant="h6" sx={{ color: wajaColors.foreground, lineHeight: 1.3, mb: 0.75 }}>
                  {entry.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 640 }}>
                  {entry.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
}

// ---------- Closing row under a heavy rule ----------
export function HistoryClosing({ title, description, action }: HistoryContent["closing"]) {
  return (
    <Box component="section" sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: { xs: 4, md: 5 } }}>
      <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "flex-end" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography component="h2" variant="h3" sx={{ color: wajaColors.foreground, ...typeScale.sectionTitle, mb: 1.5 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 560 }}>
            {description}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { md: "flex-end" } }}>
          <ActionButton {...action} variant="contained" sx={{ bgcolor: wajaColors.accent, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.accentDark } }} />
        </Grid>
      </Grid>
    </Box>
  );
}
