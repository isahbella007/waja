import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import MediaFrame from "@/components/shared/MediaFrame";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import type { GetInvolvedOverviewContent } from "@/constants/getInvolved/overview";

export default function Supporters({ eyebrow, title, link, list, note }: GetInvolvedOverviewContent["supporters"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <SectionTitle eyebrow={eyebrow} title={title} />
        <Box sx={{ mt: 2 }}>
          <ArrowLink {...link} />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        {/* Logo wall: one shared outer border, thin dividers between cells */}
        <Box
          component="ul"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", sm: `repeat(${Math.min(list.length, 4)}, 1fr)` },
            m: 0,
            p: 0,
            listStyle: "none",
            borderTop: `1px solid ${wajaColors.border}`,
            borderLeft: `1px solid ${wajaColors.border}`,
          }}
        >
          {list.map((supporter, index) => (
            <Box
              component="li"
              key={`${supporter.name}-${index}`}
              sx={{ borderRight: `1px solid ${wajaColors.border}`, borderBottom: `1px solid ${wajaColors.border}` }}
            >
              <MediaFrame
                image={supporter.logo}
                sizes="(min-width: 900px) 16vw, 45vw"
                placeholderColor={wajaColors.mutedForeground}
                sx={{ aspectRatio: "16 / 9", "& img": { objectFit: "contain !important", p: 2 } }}
              />
            </Box>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
          {note}
        </Typography>
      </Grid>
    </Grid>
  );
}
