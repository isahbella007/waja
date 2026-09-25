"use client";

import Link from "next/link";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { wajaColors } from "@/theme/theme";
import type { CtaLink } from "@/constants/types";

// Small text link with a trailing arrow, e.g. "Contact us →"
export default function ArrowLink({ label, href, color = wajaColors.primaryDark }: CtaLink & { color?: string }) {
  return (
    <Typography
      component={Link}
      href={href}
      variant="body2"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        color,
        fontFamily: "var(--font-body), sans-serif",
        fontWeight: 600,
        textDecoration: "none",
        borderRadius: "4px",
        "&:hover": { color: wajaColors.primary },
        "&:hover svg": { transform: "translateX(2px)" },
        "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 2 },
      }}
    >
      {label}
      <ArrowForwardIcon aria-hidden sx={{ fontSize: 16, transition: "transform 200ms ease" }} />
    </Typography>
  );
}
