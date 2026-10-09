import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import type { GetInvolvedOverviewContent, Supporter } from "@/constants/getInvolved/overview";

// Each partner gets real space: their logo on a clean white panel (shown whole,
// never cropped), then their kind of partnership and their name.
function PartnerTile({ partner }: { partner: Supporter }) {
  const logo = (
    <Box
      sx={{
        position: "relative",
        aspectRatio: "3 / 2",
        bgcolor: "#FFFFFF",
        border: "1px solid rgba(22,78,99,0.12)",
        boxShadow: "0 1px 2px rgba(22,78,99,0.06)",
        transition: "box-shadow 200ms ease, transform 200ms ease",
      }}
    >
      {partner.logo.src && (
        <Box sx={{ position: "absolute", inset: { xs: "14%", md: "16%" } }}>
          <Image src={partner.logo.src} alt={partner.logo.alt} fill sizes="(min-width: 900px) 25vw, (min-width: 600px) 45vw, 90vw" style={{ objectFit: "contain" }} />
        </Box>
      )}
    </Box>
  );

  const text = (
    <Box sx={{ pt: 2 }}>
      <Typography variant="overline" component="p" sx={{ color: wajaColors.accentDark, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5 }}>
        {partner.category}
      </Typography>
      <Typography component="h3" sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 600, fontSize: { xs: "1.2rem", md: "1.3rem" }, lineHeight: 1.25, color: wajaColors.foreground }}>
        {partner.name}
      </Typography>
      {partner.support && (
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.75 }}>
          {partner.support}
        </Typography>
      )}
    </Box>
  );

  if (partner.website) {
    return (
      <Box
        component="a"
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "block",
          textDecoration: "none",
          borderRadius: "2px",
          "&:hover > div:first-of-type": { boxShadow: "0 10px 24px rgba(22,78,99,0.12)", transform: "translateY(-2px)" },
          "&:focus-visible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 4 },
        }}
      >
        {logo}
        {text}
      </Box>
    );
  }
  return (
    <Box>
      {logo}
      {text}
    </Box>
  );
}

export default function Supporters({ eyebrow, title, description, link, list, note }: GetInvolvedOverviewContent["supporters"]) {
  return (
    <Box component="section">
      <Grid container spacing={{ xs: 2, md: 6 }} sx={{ alignItems: "flex-end", mb: { xs: 4, md: 5 } }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { md: "flex-end" } }}>
          <ArrowLink {...link} />
        </Grid>
      </Grid>

      <Box
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: `repeat(${Math.min(list.length, 4)}, 1fr)` },
          gap: { xs: 4, md: 4 },
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {list.map((partner) => (
          <Box component="li" key={partner.name}>
            <PartnerTile partner={partner} />
          </Box>
        ))}
      </Box>

      <Typography variant="caption" component="p" sx={{ color: "text.secondary", mt: 3 }}>
        {note}
      </Typography>
    </Box>
  );
}
