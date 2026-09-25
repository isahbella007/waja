import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Inner horizontal padding shared by everything printed on the sheet
export const SHEET_PX = { xs: 2.5, sm: 4, md: 7 };

const PAPER = "#FFFDF8";

// Fine print grain, tiled over the whole sheet (including the coloured cover)
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Two soft folds at one-third and two-thirds, like a tri-fold leaflet opened flat
const crease = (at: string) =>
  `linear-gradient(to right, transparent calc(${at} - 14px), rgba(0,0,0,0.045) ${at}, rgba(255,255,255,0.35) calc(${at} + 1px), transparent calc(${at} + 14px))`;

export default function PamphletSheet({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 }, py: { xs: 2, md: 5 } }}>
      <Box
        sx={{
          position: "relative",
          bgcolor: PAPER,
          overflow: "hidden",
          borderRadius: "2px",
          // Layered shadow: a tight contact shadow plus a soft lift, like paper on a desk
          boxShadow: "0 1px 2px rgba(22,78,99,0.12), 0 12px 32px rgba(22,78,99,0.14), 0 30px 60px -20px rgba(22,78,99,0.18)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: GRAIN,
            pointerEvents: "none",
            zIndex: 2,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            display: { xs: "none", md: "block" },
            backgroundImage: `${crease("33.333%")}, ${crease("66.666%")}`,
            pointerEvents: "none",
            zIndex: 2,
          },
        }}
      >
        {children}
      </Box>
    </Container>
  );
}

// One full-width panel of the sheet; tinted panels alternate with plain paper
export function SheetPanel({ tint, children }: { tint?: string; children: ReactNode }) {
  return <Box sx={{ bgcolor: tint ?? "transparent", px: SHEET_PX, py: { xs: 5, md: 8 } }}>{children}</Box>;
}
