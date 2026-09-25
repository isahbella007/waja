// Sections of /get-involved/give/major-gifts
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import ActionButton from "@/components/shared/ActionButton";
import ArrowLink from "@/components/shared/ArrowLink";
import { RULE, SERIF } from "@/components/getInvolved/give/GiveSections";
import { wajaColors } from "@/theme/theme";
import type { MajorGiftsContent } from "@/constants/getInvolved/give";

const ACCENT = wajaColors.accentDark;
const HEADING_SX = { color: wajaColors.foreground, fontSize: { xs: "1.9rem", md: "2.5rem" }, lineHeight: 1.15 };

// Heading on the left, ruled "title | description" rows on the right
export function ApproachRows({ eyebrow, title, principles }: MajorGiftsContent["approach"]) {
  return (
    <Grid container spacing={{ xs: 3, md: 6 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <SectionTitle eyebrow={eyebrow} title={title} />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Box component="dl" sx={{ m: 0, borderTop: RULE }}>
          {principles.map((principle) => (
            <Box
              key={principle.title}
              sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "200px 1fr" }, gap: { xs: 0.5, sm: 4 }, py: 2.5, borderBottom: RULE }}
            >
              <Typography component="dt" variant="subtitle1" sx={{ color: wajaColors.foreground, fontWeight: 700, lineHeight: 1.35 }}>
                {principle.title}
              </Typography>
              <Typography component="dd" variant="body2" sx={{ m: 0, color: "text.secondary" }}>
                {principle.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

// Title + note on one line, then three labelled columns
export function OpportunityColumns({ title, description, areas }: MajorGiftsContent["opportunities"]) {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 6 }} sx={{ alignItems: "flex-end", pb: 2.5, borderBottom: `2px solid ${wajaColors.foreground}` }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography component="h2" variant="h3" sx={HEADING_SX}>
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
          gridTemplateColumns: { xs: "1fr", md: `repeat(${areas.length}, 1fr)` },
          gap: { xs: 5, md: 5 },
          pt: { xs: 3, md: 4 },
        }}
      >
        {areas.map((area) => (
          <Box key={area.title}>
            <Typography variant="overline" component="p" sx={{ color: ACCENT, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5 }}>
              {area.tag}
            </Typography>
            <Typography component="h3" sx={{ fontFamily: SERIF, fontSize: { xs: "1.5rem", md: "1.65rem" }, lineHeight: 1.2, color: wajaColors.foreground, mb: 1 }}>
              {area.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5, minHeight: { md: "4.5em" } }}>
              {area.description}
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", borderTop: RULE }}>
              {area.items.map((item) => (
                <Typography component="li" variant="body2" key={item} sx={{ py: 1.25, borderBottom: RULE, color: wajaColors.foreground }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// Gift levels as a dark, full-width "rate card"
export function GiftLevelsBand({ title, currencyNote, tiers, note }: MajorGiftsContent["levels"]) {
  const lightRule = "1px solid rgba(255,255,255,0.2)";
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "flex-end", gap: 2, pb: 2.5, borderBottom: "1px solid rgba(255,255,255,0.35)" }}
        >
          <Typography component="h2" variant="h3" sx={{ ...HEADING_SX, color: "#FFFFFF" }}>
            {title}
          </Typography>
          <Typography variant="caption" sx={{ color: wajaColors.border, whiteSpace: "nowrap", pb: 0.5 }}>
            {currencyNote}
          </Typography>
        </Stack>
        <Box component="dl" sx={{ m: 0 }}>
          {tiers.map((tier) => (
            <Box
              key={tier.amount}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "240px 220px 1fr" },
                columnGap: 4,
                rowGap: 0.5,
                alignItems: "center",
                py: { xs: 2.5, md: 3.5 },
                borderBottom: lightRule,
              }}
            >
              <Typography component="dt" sx={{ fontFamily: SERIF, fontSize: { xs: "2.1rem", md: "2.5rem" }, lineHeight: 1, color: "#FDBA74" }}>
                {tier.amount}
              </Typography>
              <Typography component="dd" variant="subtitle1" sx={{ m: 0, color: "#FFFFFF", fontWeight: 700, lineHeight: 1.3 }}>
                {tier.name}
              </Typography>
              <Typography component="dd" variant="body2" sx={{ m: 0, color: wajaColors.border }}>
                {tier.description}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: "#FFFFFF", mt: 3, maxWidth: 620 }}>
          {note}
        </Typography>
      </Container>
    </Box>
  );
}

// Heading on the left, expectations in two ruled columns on the right
export function Stewardship({ eyebrow, title, description, expectations }: MajorGiftsContent["stewardship"]) {
  return (
    <Grid container spacing={{ xs: 3, md: 6 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Box
          component="ul"
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, columnGap: 5, m: 0, p: 0, listStyle: "none", pt: { md: 4 } }}
        >
          {expectations.map((item) => (
            <Typography component="li" variant="body2" key={item} sx={{ py: 1.5, borderTop: RULE, color: wajaColors.foreground }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

// Ruled rows: route | description | action link
export function HowToGiveRows({ title, options }: MajorGiftsContent["howToGive"]) {
  return (
    <Box>
      <Typography component="h2" variant="h3" sx={{ ...HEADING_SX, pb: 2.5, borderBottom: `2px solid ${wajaColors.foreground}` }}>
        {title}
      </Typography>
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
        {options.map((option) => (
          <Box
            component="li"
            key={option.title}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "280px 1fr auto" },
              columnGap: 4,
              rowGap: 1,
              alignItems: "center",
              py: { xs: 2.5, md: 3 },
              borderBottom: RULE,
            }}
          >
            <Typography component="h3" sx={{ fontFamily: SERIF, fontSize: { xs: "1.35rem", md: "1.5rem" }, lineHeight: 1.2, color: wajaColors.foreground }}>
              {option.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {option.description}
            </Typography>
            <Box sx={{ justifySelf: { md: "end" } }}>
              <ArrowLink {...option.action} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// Closing invitation: heavy rule, heading and text left, button and email right
export function ClosingInvitation({
  title,
  description,
  action,
  email,
}: MajorGiftsContent["closing"] & { email: string }) {
  return (
    <Box component="section" sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: { xs: 4, md: 5 } }}>
      <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "flex-end" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography component="h2" variant="h3" sx={{ ...HEADING_SX, mb: 1.5 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 560 }}>
            {description}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={1.25} sx={{ alignItems: { md: "flex-end" } }}>
            <ActionButton
              {...action}
              variant="contained"
              sx={{ bgcolor: wajaColors.accent, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.accentDark } }}
            />
            <Typography
              component="a"
              href={`mailto:${email}`}
              variant="body2"
              sx={{
                color: wajaColors.primaryDark,
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "4px",
                "&:hover": { textDecoration: "underline" },
                "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 2 },
              }}
            >
              {email}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
