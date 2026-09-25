"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import { wajaColors } from "@/theme/theme";
import type { InvolvementWay } from "@/constants/getInvolved/overview";

const RULE = "1px solid rgba(22,78,99,0.2)";

// Four numbered, ruled rows: number | title + audience | description + links | arrow
export default function WaysToGetInvolved({ ways }: { ways: InvolvementWay[] }) {
  return (
    <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", borderTop: RULE }}>
      {ways.map((way, index) => (
        <Box
          component="li"
          key={way.id}
          id={way.id}
          sx={{
            scrollMarginTop: "96px",
            display: "grid",
            gridTemplateColumns: { xs: "40px 1fr", md: "72px minmax(0, 1fr) minmax(0, 1.2fr) 40px" },
            columnGap: { xs: 2, md: 3 },
            rowGap: 2,
            py: { xs: 4, md: 5 },
            borderBottom: RULE,
          }}
        >
          <Typography
            component="p"
            aria-hidden
            sx={{ color: wajaColors.accentDark, fontWeight: 700, fontSize: "0.95rem", pt: { md: 1.25 } }}
          >
            {String(index + 1).padStart(2, "0")}
          </Typography>

          <Box>
            <Typography
              component={Link}
              href={way.href}
              variant="h3"
              sx={{
                display: "inline-block",
                color: wajaColors.foreground,
                fontSize: { xs: "1.9rem", md: "2.4rem" },
                lineHeight: 1.1,
                textDecoration: "none",
                mb: 0.75,
                borderRadius: "4px",
                "&:hover": { color: wajaColors.primaryDark },
                "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 3 },
              }}
            >
              {way.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {way.audience}
            </Typography>
          </Box>

          {/* Description spans under the title on phones */}
          <Box sx={{ gridColumn: { xs: "2", md: "auto" } }}>
            <Typography variant="body1" sx={{ color: wajaColors.foreground, mb: 1.5 }}>
              {way.description}
            </Typography>
            <Box component="ul" sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, rowGap: 1, m: 0, p: 0, listStyle: "none" }}>
              {way.links.map((link) => (
                <Box component="li" key={link.href}>
                  <Typography
                    component={Link}
                    href={link.href}
                    variant="body2"
                    sx={{
                      color: wajaColors.primaryDark,
                      textDecoration: "underline",
                      textDecorationColor: "rgba(14,116,144,0.35)",
                      textUnderlineOffset: "4px",
                      "&:hover": { textDecorationColor: wajaColors.primaryDark },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Duplicate of the title link for pointer users; hidden from keyboard and screen readers */}
          <Box
            component={Link}
            href={way.href}
            aria-hidden
            tabIndex={-1}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              pt: 1.5,
              color: wajaColors.accent,
              "&:hover svg": { transform: "translateX(4px)" },
            }}
          >
            <EastIcon sx={{ fontSize: 22, transition: "transform 200ms ease" }} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
