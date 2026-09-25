"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import type { GivePageContent } from "@/constants/getInvolved/give";

const RULE = "1px solid rgba(22,78,99,0.2)";

// Ruled rows: role | description | arrow. Each whole row is one link.
export default function LargerScale({ title, link, roles }: GivePageContent["largerScale"]) {
  return (
    <Box component="section">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ justifyContent: "space-between", alignItems: { sm: "flex-end" }, pb: 2.5, borderBottom: `2px solid ${wajaColors.foreground}` }}
      >
        <Typography component="h2" variant="h3" sx={{ color: wajaColors.foreground, fontSize: { xs: "1.9rem", md: "2.5rem" }, lineHeight: 1.15 }}>
          {title}
        </Typography>
        <ArrowLink {...link} />
      </Stack>
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
        {roles.map((role) => (
          <Box component="li" key={role.title} sx={{ borderBottom: RULE }}>
            <Box
              component={Link}
              href={role.href}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 24px", md: "260px 1fr 24px" },
                columnGap: 3,
                rowGap: 0.5,
                alignItems: "center",
                py: { xs: 2.5, md: 3 },
                color: wajaColors.foreground,
                textDecoration: "none",
                "&:hover .role-title": { color: wajaColors.primaryDark },
                "&:hover .role-arrow": { transform: "translateX(4px)" },
                "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 2 },
              }}
            >
              <Typography
                component="span"
                className="role-title"
                sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: { xs: "1.3rem", md: "1.45rem" }, lineHeight: 1.2 }}
              >
                {role.title}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.secondary", gridColumn: { xs: "1", md: "auto" }, gridRow: { xs: "2", md: "auto" } }}
              >
                {role.description}
              </Typography>
              <EastIcon
                className="role-arrow"
                aria-hidden
                sx={{ fontSize: 20, color: wajaColors.accent, justifySelf: "end", gridColumn: { xs: "2", md: "auto" }, gridRow: { xs: "1", md: "auto" }, transition: "transform 200ms ease" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
