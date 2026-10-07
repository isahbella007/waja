import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import ActionButton from "@/components/shared/ActionButton";
import { typeScale, wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

const RULE = "1px solid rgba(22,78,99,0.2)";

// Advisory board on the light background: invitation on the left, what the board brings on the right
export default function AdvisoryBoard({ badge, title, description, button, benefitsLabel, benefits }: TeamContent["advisoryBoard"]) {
  return (
    <Grid component="section" container spacing={{ xs: 4, md: 8 }} aria-labelledby="advisory-board-title">
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          component="span"
          sx={{
            display: "inline-block",
            bgcolor: wajaColors.accent,
            color: "#FFFFFF",
            borderRadius: "999px",
            px: 1.25,
            py: 0.25,
            mb: 2,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </Box>
        <Typography
          id="advisory-board-title"
          component="h2"
          variant="h3"
          sx={{ color: wajaColors.foreground, ...typeScale.sectionTitle, mb: 2 }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          {description}
        </Typography>
        <ActionButton
          {...button}
          variant="contained"
          sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.primaryDark } }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="overline" component="p" sx={{ color: wajaColors.accentDark, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1 }}>
          {benefitsLabel}
        </Typography>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", borderTop: `2px solid ${wajaColors.foreground}` }}>
          {benefits.map((benefit) => (
            <Box component="li" key={benefit} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start", py: 1.75, borderBottom: RULE }}>
              <CheckIcon aria-hidden sx={{ fontSize: 20, color: wajaColors.accent, mt: 0.25 }} />
              <Typography variant="body1" sx={{ color: wajaColors.foreground }}>
                {benefit}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
