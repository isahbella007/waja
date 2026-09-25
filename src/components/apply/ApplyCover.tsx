import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ActionButton from "@/components/shared/ActionButton";
import { SHEET_PX } from "@/components/shared/PamphletSheet";
import { wajaColors } from "@/theme/theme";
import type { ApplyPageContent } from "@/constants/apply/applyPage";

// Dark cover panel at the top of the Apply leaflet
export default function ApplyCover({
  eyebrow,
  title,
  description,
  badges,
  primaryAction,
  secondaryAction,
}: ApplyPageContent["cover"]) {
  return (
    <Box component="header" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", px: SHEET_PX, pt: { xs: 5, md: 8 }, pb: { xs: 6, md: 9 } }}>
      <Typography variant="overline" component="p" sx={{ color: "#FDBA74", letterSpacing: "0.16em", lineHeight: 1.5, mb: 1.5 }}>
        {eyebrow}
      </Typography>
      <Typography
        component="h1"
        variant="h2"
        sx={{ color: "#FFFFFF", fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 400, lineHeight: 1.05, maxWidth: 760, mb: 2.5 }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: wajaColors.border, fontSize: "1.1rem", maxWidth: 620, mb: 3 }}>
        {description}
      </Typography>

      <Box
        component="ul"
        sx={{ display: "flex", flexWrap: "wrap", gap: 1, m: 0, p: 0, mb: 4, listStyle: "none" }}
      >
        {badges.map((badge) => (
          <Box
            component="li"
            key={badge}
            sx={{
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: "999px",
              px: 1.5,
              py: 0.5,
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            {badge}
          </Box>
        ))}
      </Box>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
        <ActionButton
          {...primaryAction}
          variant="contained"
          sx={{ bgcolor: wajaColors.accent, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.accentDark } }}
        />
        <ActionButton
          {...secondaryAction}
          variant="outlined"
          sx={{
            color: "#FFFFFF",
            borderColor: "rgba(255,255,255,0.6)",
            borderWidth: 2,
            "&:hover": { borderWidth: 2, borderColor: "#FFFFFF", bgcolor: "rgba(255,255,255,0.08)" },
          }}
        />
      </Stack>
    </Box>
  );
}
