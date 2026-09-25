"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionTitle from "@/components/shared/SectionTitle";
import { wajaColors } from "@/theme/theme";
import { getProgramTheme } from "@/theme/programThemes";
import type { ProgramsOverviewContent } from "@/constants/programs/overview";
import type { Program } from "@/constants/programs/programs";

const VISUALLY_HIDDEN = {
  position: "absolute",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
} as const;

export default function ProgramPathway({
  eyebrow,
  steps,
  programs,
  openLabel,
  ...heading
}: ProgramsOverviewContent["pathway"] & { programs: Program[]; openLabel: string }) {
  return (
    <Stack spacing={{ xs: 4, md: 5 }}>
      <Box>
        {eyebrow && (
          <Typography
            variant="overline"
            component="p"
            sx={{ color: wajaColors.accent, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1.5 }}
          >
            {eyebrow}
          </Typography>
        )}
        <Box
          component="ol"
          aria-label="Pathway steps"
          sx={{
            // 3 × 2 grid on phones, one evenly spaced row from tablet up
            display: "grid",
            gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: `repeat(${steps.length}, auto)` },
            justifyContent: { sm: "space-between" },
            rowGap: 1.5,
            m: 0,
            px: 0,
            py: { xs: 1.5, md: 2 },
            listStyle: "none",
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderColor: "rgba(22,78,99,0.35)",
          }}
        >
          {steps.map((step) => (
            <Box
              component="li"
              key={step}
              sx={{
                color: wajaColors.foreground,
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                fontWeight: 400,
              }}
            >
              {step}
            </Box>
          ))}
        </Box>
      </Box>

      {/* <SectionTitle {...heading} /> */}

      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          // Room for the panel shadows inside the scroll area
          pb: 2,
          listStyle: "none",
          // Swipeable row on phones and tablets, three columns on desktop
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: { md: `repeat(${Math.min(programs.length, 3)}, 1fr)` },
          gap: { xs: 2, md: 3 },
          overflowX: { xs: "auto", md: "visible" },
          scrollSnapType: { xs: "x mandatory", md: "none" },
          overscrollBehaviorX: "contain",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {programs.map((program, index) => {
          const theme = getProgramTheme(index);
          return (
            <Box
              component="li"
              key={program.slug}
              sx={{
                position: "relative",
                flex: { xs: "0 0 85%", sm: "0 0 55%" },
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                bgcolor: theme.surface,
                color: theme.onSurface,
                p: { xs: 3, md: 3.5 },
                boxShadow: "0 10px 25px rgba(22,78,99,0.12)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
                "&:hover": { transform: "translateY(-4px)", boxShadow: "0 16px 32px rgba(22,78,99,0.18)" },
                "&:focus-within": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 3 },
                "@media (prefers-reduced-motion: reduce)": { transition: "none", "&:hover": { transform: "none" } },
              }}
            >
              <Typography variant="overline" component="p" sx={{ color: theme.muted, letterSpacing: "0.14em", lineHeight: 1.5 }}>
                {program.label}
              </Typography>
              <Typography
                component="p"
                aria-hidden
                sx={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontWeight: 400,
                  fontSize: { xs: "3rem", md: "3.75rem" },
                  lineHeight: 1.05,
                  color: theme.onSurface,
                  pb: 2.5,
                  mb: 2.5,
                  borderBottom: "1px solid",
                  borderColor: theme.rule,
                }}
              >
                {program.number}
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{ color: theme.onSurface, fontWeight: 700, lineHeight: 1.3, mb: 1 }}
              >
                {program.title}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.onSurface, fontWeight: 600, mb: 1 }}>
                {program.subtitle}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.muted, mb: 3, flexGrow: 1 }}>
                {program.summary}
              </Typography>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: 2,
                  borderTop: "1px solid",
                  borderColor: theme.rule,
                }}
              >
                <Typography variant="caption" sx={{ color: theme.onSurface, fontWeight: 600 }}>
                  {program.tag}
                </Typography>
                <Typography
                  component={Link}
                  href={`/programs/${program.slug}`}
                  transitionTypes={["page-open"]}
                  variant="caption"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: theme.onSurface,
                    fontWeight: 700,
                    textDecoration: "none",
                    "&:focus-visible": { outline: "none" },
                    // Stretch the link over the whole panel so any click opens it
                    "&::after": { content: '""', position: "absolute", inset: 0 },
                  }}
                >
                  {openLabel}
                  <Box component="span" sx={VISUALLY_HIDDEN}>
                    {`: ${program.title}`}
                  </Box>
                  <ArrowForwardIcon aria-hidden sx={{ fontSize: 14 }} />
                </Typography>
              </Stack>
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
}
