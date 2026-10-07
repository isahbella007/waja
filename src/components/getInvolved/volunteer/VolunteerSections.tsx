// Static sections of /get-involved/volunteer
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import PageIntro from "@/components/shared/PageIntro";
import MediaFrame from "@/components/shared/MediaFrame";
import SectionTitle from "@/components/shared/SectionTitle";
import { wajaColors } from "@/theme/theme";
import type { VolunteerPageContent } from "@/constants/getInvolved/volunteer";

export function VolunteerIntro({ eyebrow, title, description, image }: VolunteerPageContent["intro"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
      <Grid size={{ xs: 12, md: 7 }}>
        <PageIntro eyebrow={eyebrow} title={title} description={description} />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <MediaFrame
          image={image}
          sizes="(min-width: 900px) 40vw, 100vw"
          placeholderBg={wajaColors.muted}
          placeholderColor={wajaColors.primaryDark}
          sx={{ aspectRatio: "4 / 3" }}
        />
      </Grid>
    </Grid>
  );
}

// Full-width dark band: three numbered reasons, side by side
export function WhyVolunteerBand({ reasons }: { reasons: VolunteerPageContent["why"] }) {
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          component="ol"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: `repeat(${reasons.length}, 1fr)` },
            gap: { xs: 4, md: 6 },
            m: 0,
            p: 0,
            listStyle: "none",
          }}
        >
          {reasons.map((reason, index) => (
            <Box component="li" key={reason.title}>
              <Typography component="span" aria-hidden sx={{ display: "block", color: "#FDBA74", fontWeight: 700, fontSize: "0.85rem", mb: 1.5 }}>
                {String(index + 1).padStart(2, "0")}
              </Typography>
              <Typography component="h2" variant="h5" sx={{ color: "#FFFFFF", mb: 1 }}>
                {reason.title}
              </Typography>
              <Typography variant="body2" sx={{ color: wajaColors.border, maxWidth: 320 }}>
                {reason.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// Heading on the left, orange-ticked traits on the right
export function LookingFor({ eyebrow, title, description, traits }: VolunteerPageContent["lookingFor"]) {
  return (
    <Grid container spacing={{ xs: 3, md: 8 }} sx={{ alignItems: "flex-start" }}>
      <Grid size={{ xs: 12, md: 5 }}>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", pt: { md: 4 } }}>
          {traits.map((trait) => (
            <Box component="li" key={trait} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start", py: 1 }}>
              <CheckIcon aria-hidden sx={{ fontSize: 22, color: wajaColors.accent, mt: 0.25 }} />
              <Typography variant="body1" sx={{ color: wajaColors.foreground, fontWeight: 600 }}>
                {trait}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
