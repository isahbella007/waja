import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { wajaColors } from "@/theme/theme";
import type { MissionVisionContent } from "@/constants/about/missionVision";

export default function WhatMakesUsDifferent({
  eyebrow,
  title,
  description,
  rolesLabel,
  roles,
}: MissionVisionContent["difference"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack spacing={2}>
          {eyebrow && (
            <Typography
              variant="overline"
              sx={{ color: wajaColors.accent, fontWeight: 700, letterSpacing: "0.12em", lineHeight: 1.5 }}
            >
              {eyebrow}
            </Typography>
          )}
          <Typography
            component="h2"
            variant="h3"
            sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, color: wajaColors.foreground }}
          >
            {title}
          </Typography>
          {description && (
            <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 480 }}>
              {description}
            </Typography>
          )}
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="subtitle2" component="p" sx={{ color: wajaColors.foreground, fontWeight: 700, mb: 1.5 }}>
          {rolesLabel}
        </Typography>
        <Box
          component="ul"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 1.5,
            m: 0,
            p: 0,
            listStyle: "none",
          }}
        >
          {roles.map((role) => (
            <Box
              component="li"
              key={role}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "#FFFFFF",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "10px",
                px: 2,
                py: 1.5,
              }}
            >
              <CheckRoundedIcon aria-hidden fontSize="small" sx={{ color: wajaColors.primary, flexShrink: 0 }} />
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
