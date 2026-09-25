"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SHEET_PX } from "@/components/shared/PamphletSheet";
import type { ProgramTheme } from "@/theme/programThemes";
import type { Program, ProgramFact } from "@/constants/programs/programs";

export default function ProgramCover({
  program,
  intro,
  facts,
  theme,
  runningHeader,
  back,
}: {
  program: Program;
  intro: string;
  facts?: ProgramFact[];
  theme: ProgramTheme;
  runningHeader: string;
  back: { label: string; href: string };
}) {
  return (
    <Box component="header" sx={{ bgcolor: theme.surface, color: theme.onSurface }}>
      <Box sx={{ px: SHEET_PX, pt: { xs: 3, md: 4 }, pb: { xs: 6, md: 9 } }}>
        {/* Running header, like the top line of a printed leaflet */}
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            pb: 1.5,
            mb: { xs: 5, md: 8 },
            borderBottom: "1px solid",
            borderColor: theme.rule,
          }}
        >
          <Typography variant="overline" component="p" sx={{ color: theme.muted, letterSpacing: "0.14em", lineHeight: 1.5 }}>
            {runningHeader}
          </Typography>
          <Typography
            component={Link}
            href={back.href}
            variant="body2"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: theme.onSurface,
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
              borderRadius: "4px",
              "&:hover": { textDecoration: "underline" },
              "&:focus-visible": { outline: "3px solid", outlineColor: theme.onSurface, outlineOffset: 2 },
            }}
          >
            <ArrowBackIcon aria-hidden sx={{ fontSize: 16 }} />
            {back.label}
          </Typography>
        </Stack>

        <Typography variant="overline" component="p" sx={{ color: theme.muted, letterSpacing: "0.16em", lineHeight: 1.5 }}>
          {program.label}
        </Typography>
        {/* <Typography
          component="p"
          aria-hidden
          sx={{
            fontFamily: "var(--font-heading), Georgia, serif",
            fontWeight: 300,
            fontSize: { xs: "4.5rem", sm: "6rem", md: "8rem" },
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: theme.onSurface,
            pb: { xs: 3, md: 4 },
            mb: { xs: 3, md: 4 },
            borderBottom: "1px solid",
            borderColor: theme.rule,
          }}
        >
          {program.number}
        </Typography> */}

        <Box sx={{ maxWidth: 820 }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{ color: theme.onSurface, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.1, mb: 1.5 }}
          >
            {program.title}
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: theme.onSurface, fontWeight: 500, mb: 2.5 }}>
            {program.subtitle}
          </Typography>
          <Typography variant="body1" sx={{ color: theme.muted, fontSize: "1.1rem", maxWidth: 640 }}>
            {intro}
          </Typography>
        </Box>

        {facts && facts.length > 0 && (
          <Box
            component="dl"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: `repeat(${facts.length}, 1fr)` },
              gap: { xs: 2.5, md: 4 },
              m: 0,
              mt: { xs: 5, md: 7 },
              pt: { xs: 3, md: 4 },
              borderTop: "1px solid",
              borderColor: theme.rule,
            }}
          >
            {facts.map((fact) => (
              <Box key={fact.label}>
                <Typography
                  component="dt"
                  variant="overline"
                  sx={{ display: "block", color: theme.muted, letterSpacing: "0.14em", lineHeight: 1.5, mb: 0.5 }}
                >
                  {fact.label}
                </Typography>
                <Typography component="dd" variant="body1" sx={{ m: 0, color: theme.onSurface, fontWeight: 600 }}>
                  {fact.value}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
