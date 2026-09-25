"use client";

import Link from "next/link";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { wajaColors } from "@/theme/theme";
import type { ActionLink } from "@/constants/types";

// Small text link with a trailing arrow, e.g. "Contact us →".
// Without an href (a destination that doesn't exist yet) it renders as a plain button.
export default function ArrowLink({ label, href, color = wajaColors.primaryDark }: ActionLink & { color?: string }) {
  const sx = {
    display: "inline-flex",
    alignItems: "center",
    gap: 0.5,
    p: 0,
    border: 0,
    bgcolor: "transparent",
    cursor: "pointer",
    color,
    fontFamily: "var(--font-body), sans-serif",
    fontWeight: 600,
    textDecoration: "none",
    borderRadius: "4px",
    "&:hover": { color: wajaColors.primary },
    "&:hover svg": { transform: "translateX(2px)" },
    "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 2 },
  };
  const content = (
    <>
      {label}
      <ArrowForwardIcon aria-hidden sx={{ fontSize: 16, transition: "transform 200ms ease" }} />
    </>
  );

  return href ? (
    <Typography component={Link} href={href} variant="body2" sx={sx}>
      {content}
    </Typography>
  ) : (
    <Typography component="button" type="button" variant="body2" sx={sx}>
      {content}
    </Typography>
  );
}
