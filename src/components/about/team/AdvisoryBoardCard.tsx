"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

export default function AdvisoryBoardCard({
  badge,
  title,
  description,
  button,
  benefitsLabel,
  benefits,
}: TeamContent["advisoryBoard"]) {
  return (
    <Box
      component="section"
      aria-labelledby="advisory-board-title"
      sx={{
        bgcolor: wajaColors.foreground,
        color: "#FFFFFF",
        borderRadius: "16px",
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
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
              mb: 1.5,
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
            variant="h4"
            sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.75rem" }, lineHeight: 1.25, mb: 2 }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: wajaColors.border, mb: 3 }}>
            {description}
          </Typography>
          <Button
            component={Link}
            href={button.href}
            variant="contained"
            sx={{
              bgcolor: "#FFFFFF",
              color: wajaColors.foreground,
              "&:hover": { bgcolor: wajaColors.background },
            }}
          >
            {button.label}
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle2" component="p" sx={{ color: "#FFFFFF", fontWeight: 700, mb: 1 }}>
            {benefitsLabel}
          </Typography>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
            {benefits.map((benefit) => (
              <Box
                component="li"
                key={benefit}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  py: 1.5,
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <CheckRoundedIcon aria-hidden fontSize="small" sx={{ color: wajaColors.secondary, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
