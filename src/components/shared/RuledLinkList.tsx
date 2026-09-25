"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import { wajaColors } from "@/theme/theme";
import type { CtaLink } from "@/constants/types";

// Stacked text links between thin rules, each with an arrow: a quiet
// "jump to" menu that sits beside a page heading.
export default function RuledLinkList({ label, links }: { label: string; links: CtaLink[] }) {
  return (
    <Box component="nav" aria-label={label} sx={{ borderTop: `2px solid ${wajaColors.foreground}` }}>
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
        {links.map((link) => (
          <Box component="li" key={link.href} sx={{ borderBottom: "1px solid rgba(22,78,99,0.2)" }}>
            <Typography
              component={Link}
              href={link.href}
              variant="body1"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                py: 1.5,
                color: wajaColors.foreground,
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { color: wajaColors.primaryDark },
                "&:hover svg": { transform: "translateX(3px)" },
                "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 2 },
              }}
            >
              {link.label}
              <EastIcon aria-hidden sx={{ fontSize: 16, color: wajaColors.accent, transition: "transform 200ms ease" }} />
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
