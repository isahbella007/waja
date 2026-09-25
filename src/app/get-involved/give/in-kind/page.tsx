import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageIntro from "@/components/shared/PageIntro";
import RuledLinkList from "@/components/shared/RuledLinkList";
import ArrowLink from "@/components/shared/ArrowLink";
import { RULE, SERIF } from "@/components/getInvolved/give/GiveSections";
import { ClosingInvitation } from "@/components/getInvolved/give/MajorGiftSections";
import { IN_KIND_PAGE } from "@/constants/getInvolved/give";
import { CONTACT_DETAILS } from "@/constants/contact";
import { wajaColors } from "@/theme/theme";

export const metadata: Metadata = {
  title: IN_KIND_PAGE.seo.title,
  description: IN_KIND_PAGE.seo.description,
};

const SECTION_PY = { xs: 6, md: 10 };
const SECTION_GAP = { xs: 8, md: 12 };
// Offset for in-page jumps so headings clear the sticky navbar
const ANCHOR = { scrollMarginTop: "96px" };

export default function InKindPage() {
  const { intro, items, training, closing } = IN_KIND_PAGE;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Stack spacing={SECTION_GAP}>
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "flex-end" }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <PageIntro eyebrow={intro.eyebrow} title={intro.title} description={intro.description} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <RuledLinkList label={intro.jumpLabel} links={intro.jumpLinks} />
            </Grid>
          </Grid>

          {/* Items: heading + note on one line, then a big numbered list in two columns */}
          <Box id="items" sx={ANCHOR}>
            <Grid
              container
              spacing={{ xs: 2, md: 6 }}
              sx={{ alignItems: "flex-end", pb: 2.5, borderBottom: `2px solid ${wajaColors.foreground}` }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography component="h2" variant="h3" sx={{ color: wajaColors.foreground, fontSize: { xs: "1.9rem", md: "2.5rem" }, lineHeight: 1.15 }}>
                  {items.title}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {items.description}
                </Typography>
              </Grid>
            </Grid>
            <Box
              component="ol"
              sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, columnGap: 6, m: 0, p: 0, listStyle: "none" }}
            >
              {items.list.map((item, index) => (
                <Box component="li" key={item} sx={{ display: "flex", gap: 3, alignItems: "baseline", py: { xs: 2, md: 2.75 }, borderBottom: RULE }}>
                  <Typography component="span" aria-hidden sx={{ fontFamily: SERIF, color: wajaColors.accentDark, fontSize: "1rem", minWidth: 28 }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography component="span" sx={{ fontFamily: SERIF, fontSize: { xs: "1.5rem", md: "1.9rem" }, lineHeight: 1.15, color: wajaColors.foreground }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>

      {/* Where donations go: full-width dark band */}
      <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 8 }} sx={{ alignItems: "flex-end" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" component="p" sx={{ color: "#FDBA74", letterSpacing: "0.14em", lineHeight: 1.5, mb: 1 }}>
                {training.eyebrow}
              </Typography>
              <Typography
                component="h2"
                sx={{ fontFamily: SERIF, fontWeight: 400, fontSize: { xs: "2.4rem", md: "3.5rem" }, lineHeight: 1.05, color: "#FFFFFF" }}
              >
                {training.title}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ color: wajaColors.border, fontSize: "1.1rem", mb: 2 }}>
                {training.description}
              </Typography>
              <ArrowLink {...training.programLink} color="#FFFFFF" />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: SECTION_PY }}>
        <Box id="offer" sx={ANCHOR}>
          <ClosingInvitation {...closing} email={CONTACT_DETAILS.email} />
        </Box>
      </Container>
    </>
  );
}
