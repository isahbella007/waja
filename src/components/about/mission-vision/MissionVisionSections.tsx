// Sections of /about/mission-vision: photo-led and calm. Real photos carry the
// emotion; all text stays on the site's normal type scale.
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import PageIntro from "@/components/shared/PageIntro";
import SectionTitle from "@/components/shared/SectionTitle";
import MediaFrame from "@/components/shared/MediaFrame";
import ActionButton from "@/components/shared/ActionButton";
import { typeScale, wajaColors } from "@/theme/theme";
import type { MissionVisionContent } from "@/constants/about/missionVision";

function Label({ children, color = wajaColors.accentDark }: { children: string; color?: string }) {
  return (
    <Typography variant="overline" component="p" sx={{ color, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1 }}>
      {children}
    </Typography>
  );
}

// ---------- Opening: heading and intro left, photo right ----------
export function MissionOpening({ image, ...heading }: MissionVisionContent["intro"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <PageIntro {...heading} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <MediaFrame
          image={image}
          sizes="(min-width: 900px) 50vw, 100vw"
          placeholderBg={wajaColors.muted}
          placeholderColor={wajaColors.primaryDark}
          sx={{ aspectRatio: "4 / 3" }}
        />
      </Grid>
    </Grid>
  );
}

// ---------- Mission (light) beside Vision (dark): a contrasting pair ----------
export function MissionVisionPair({ mission, vision }: Pick<MissionVisionContent, "mission" | "vision">) {
  return (
    <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: "stretch" }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box component="section" sx={{ height: "100%", borderTop: `2px solid ${wajaColors.foreground}`, pt: 3 }}>
          <Label>{mission.title}</Label>
          <Stack spacing={2}>
            {mission.paragraphs.map((paragraph, index) => (
              <Typography
                key={paragraph}
                variant="body1"
                sx={index === 0 ? { ...typeScale.subTitle, fontWeight: 500, color: wajaColors.foreground } : { color: "text.secondary" }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box component="section" sx={{ height: "100%", bgcolor: wajaColors.foreground, color: "#FFFFFF", p: { xs: 3, md: 4 } }}>
          <Label color="#FDBA74">{vision.title}</Label>
          <Stack spacing={2}>
            {vision.paragraphs.map((paragraph) => (
              <Typography key={paragraph} variant="body1" sx={{ ...typeScale.subTitle, fontWeight: 500, color: "#FFFFFF" }}>
                {paragraph}
              </Typography>
            ))}
            <Typography variant="body1" sx={{ color: wajaColors.border, borderTop: "1px solid rgba(255,255,255,0.25)", pt: 2 }}>
              {vision.highlight}
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

// ---------- What makes WAJA different: photo one side, heading + roles checklist the other ----------
export function WhatMakesUsDifferent({ eyebrow, title, description, rolesLabel, roles, image }: MissionVisionContent["difference"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
      <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 2, md: 1 } }}>
        <MediaFrame
          image={image}
          sizes="(min-width: 900px) 40vw, 100vw"
          placeholderBg={wajaColors.muted}
          placeholderColor={wajaColors.primaryDark}
          sx={{ aspectRatio: "4 / 5" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <Typography variant="subtitle2" component="p" sx={{ color: wajaColors.foreground, fontWeight: 700, mt: 3, mb: 1.5 }}>
          {rolesLabel}
        </Typography>
        <Box
          component="ul"
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, columnGap: 3, m: 0, p: 0, listStyle: "none" }}
        >
          {roles.map((role) => (
            <Box component="li" key={role} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start", py: 1, borderBottom: "1px solid rgba(22,78,99,0.15)" }}>
              <CheckIcon aria-hidden sx={{ fontSize: 18, color: wajaColors.accent, mt: 0.25 }} />
              <Typography variant="body2" sx={{ color: wajaColors.foreground }}>
                {role}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

// ---------- Whole-family approach: calm dark band ----------
export function WholeFamilyBand({ pillars, title, paragraphs }: MissionVisionContent["wholeFamily"]) {
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          component="ul"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: `repeat(${pillars.length}, 1fr)` },
            gap: { xs: 3, md: 4 },
            m: 0,
            p: 0,
            mb: { xs: 5, md: 7 },
            listStyle: "none",
          }}
        >
          {pillars.map((pillar) => (
            <Box component="li" key={pillar.title} sx={{ borderTop: "1px solid rgba(255,255,255,0.35)", pt: 2 }}>
              <Typography sx={{ ...typeScale.subTitle, color: "#FFFFFF" }}>{pillar.title}</Typography>
              <Typography variant="body2" sx={{ color: wajaColors.border }}>
                {pillar.caption}
              </Typography>
            </Box>
          ))}
        </Box>
        <Grid container spacing={{ xs: 3, md: 8 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography component="h2" sx={{ ...typeScale.sectionTitle, color: "#FFFFFF" }}>
              {title}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              {paragraphs.map((paragraph) => (
                <Typography key={paragraph} variant="body1" sx={{ color: wajaColors.border }}>
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ---------- Closing row under a heavy rule ----------
export function MissionClosing({ title, description, primary, secondary }: MissionVisionContent["closing"]) {
  return (
    <Box component="section" sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: { xs: 4, md: 5 } }}>
      <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "flex-end" }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography component="h2" sx={{ ...typeScale.sectionTitle, color: wajaColors.foreground, mb: 1.5 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
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
