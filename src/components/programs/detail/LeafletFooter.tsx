"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SHEET_PX } from "@/components/shared/PamphletSheet";
import { wajaColors } from "@/theme/theme";

export type LeafletFooterLink = {
  eyebrow: string;
  label: string;
  href: string;
  color: string;
  // Page-flip animation to play (see globals.css); omit for a normal navigation
  transition?: "page-back" | "page-turn";
};

function FooterLink({ link, direction }: { link: LeafletFooterLink; direction: "back" | "forward" }) {
  const forward = direction === "forward";
  const Arrow = forward ? ArrowForwardIcon : ArrowBackIcon;

  return (
    <Box
      component={Link}
      href={link.href}
      transitionTypes={link.transition ? [link.transition] : undefined}
      sx={{
        display: "inline-flex",
        flexDirection: forward ? "row-reverse" : "row",
        alignItems: "center",
        gap: 1.5,
        textAlign: forward ? { xs: "left", sm: "right" } : "left",
        textDecoration: "none",
        color: link.color,
        borderRadius: "4px",
        "&:hover .footer-arrow": { transform: `translateX(${forward ? 4 : -4}px)` },
        "&:hover .footer-label": { textDecoration: "underline" },
        "&:focus-visible": { outline: "3px solid", outlineColor: link.color, outlineOffset: 3 },
      }}
    >
      <Arrow
        className="footer-arrow"
        aria-hidden
        sx={{ fontSize: 22, transition: "transform 200ms ease", "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}
      />
      <Box component="span">
        <Typography
          component="span"
          variant="overline"
          sx={{ display: "block", color: wajaColors.mutedForeground, letterSpacing: "0.14em", lineHeight: 1.4 }}
        >
          {link.eyebrow}
        </Typography>
        <Typography
          component="span"
          className="footer-label"
          sx={{ display: "block", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.35rem", lineHeight: 1.2 }}
        >
          {link.label}
        </Typography>
      </Box>
    </Box>
  );
}

// Foot of the leaflet: previous leaflet (or overview) on the left, next leaflet
// on the right, and a small printed line between them.
export default function LeafletFooter({
  previous,
  next,
  printed,
  rule,
  label,
}: {
  previous: LeafletFooterLink;
  next: LeafletFooterLink;
  printed: string;
  rule: string;
  label: string;
}) {
  return (
    <Box
      component="nav"
      aria-label={label}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr auto 1fr" },
        gridTemplateAreas: { xs: '"previous" "next" "printed"', sm: '"previous printed next"' },
        alignItems: "end",
        gap: { xs: 2.5, sm: 3 },
        mx: SHEET_PX,
        pt: 2.5,
        pb: 3,
        borderTop: `1px solid ${rule}`,
      }}
    >
      <Box sx={{ gridArea: "previous" }}>
        <FooterLink link={previous} direction="back" />
      </Box>
      <Typography
        variant="overline"
        component="p"
        sx={{
          gridArea: "printed",
          color: wajaColors.mutedForeground,
          letterSpacing: "0.14em",
          lineHeight: 1.5,
          textAlign: { sm: "center" },
          pb: { sm: 0.5 },
        }}
      >
        {printed}
      </Typography>
      <Box sx={{ gridArea: "next", justifySelf: { sm: "end" } }}>
        <FooterLink link={next} direction="forward" />
      </Box>
    </Box>
  );
}
