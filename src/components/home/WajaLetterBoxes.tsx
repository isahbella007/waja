"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { wajaColors } from "@/theme/theme";
import { HERO, WAJA_NAME_PARTS } from "@/constants/home/hero";

const LETTER_COLOR = "#EA580C";
// One box glows, then the next: a full pass takes CALL_STEP × 4
const CALL_STEP = 1.2;

const FACE = {
  position: "absolute",
  inset: 0,
  display: "grid",
  placeItems: "center",
  borderRadius: "4px",
  backfaceVisibility: "hidden",
} as const;

// Large screens: W, A, J, A on four cards. A glow passes from card to card to invite a hover;
// hovering (or focusing) a card flips it to a white back with its word, and once all four
// have been flipped the full name appears underneath.
export default function WajaLetterBoxes() {
  const [opened, setOpened] = React.useState<Set<number>>(() => new Set());
  const allOpen = opened.size === WAJA_NAME_PARTS.length;

  const open = (index: number) =>
    setOpened((current) => (current.has(index) ? current : new Set(current).add(index)));

  return (
    <Box sx={{ maxWidth: { md: 300, lg: 340 }, ml: "auto" }}>
      <Box
        component="ul"
        aria-label={HERO.nameLabel}
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, m: 0, p: 0, listStyle: "none" }}
      >
        {WAJA_NAME_PARTS.map((part, index) => (
          <Box
            component="li"
            key={part.word}
            tabIndex={0}
            aria-label={`${part.letter}: ${part.word}`}
            onMouseEnter={() => open(index)}
            onFocus={() => open(index)}
            sx={{
              aspectRatio: "1 / 1",
              perspective: "800px",
              cursor: "default",
              borderRadius: "4px",
              "&:hover .waja-card, &:focus-visible .waja-card": { transform: "rotateY(180deg)" },
              "&:focus-visible": { outline: `2px solid ${wajaColors.border}`, outlineOffset: 3 },
            }}
          >
            <Box
              className="waja-card"
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                transition: "transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                "@media (prefers-reduced-motion: reduce)": { transition: "none" },
              }}
            >
              {/* Front: the letter */}
              <Box
                aria-hidden
                sx={{
                  ...FACE,
                  border: "1px solid rgba(165,243,252,0.3)",
                  bgcolor: "rgba(11,31,40,0.45)",
                  // Stops calling once anyone has flipped a card
                  animation: opened.size === 0 ? `waja-box-call ${CALL_STEP * 4}s ease-in-out ${1 + index * CALL_STEP}s infinite` : "none",
                  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                }}
              >
                <Box
                  component="span"
                  sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 500, fontSize: { md: "4rem", lg: "4.5rem" }, lineHeight: 1, color: LETTER_COLOR }}
                >
                  {part.letter}
                </Box>
              </Box>

              {/* Back: white, with the letter small and its word */}
              <Box
                aria-hidden
                sx={{
                  ...FACE,
                  bgcolor: "#FFFFFF",
                  transform: "rotateY(180deg)",
                  alignContent: "center",
                  gap: 0.5,
                  px: 1,
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 600, fontSize: "1.75rem", lineHeight: 1, color: LETTER_COLOR }}
                >
                  {part.letter}
                </Box>
                <Box component="span" sx={{ fontSize: { md: "0.95rem", lg: "1.05rem" }, fontWeight: 700, color: wajaColors.foreground }}>
                  {part.word}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* The hint gives way to the full name once every card has been flipped */}
      <Typography
        aria-live="polite"
        sx={{
          mt: 2,
          minHeight: "1.6em",
          textAlign: "center",
          fontSize: allOpen ? "1rem" : "0.85rem",
          fontWeight: allOpen ? 600 : 400,
          letterSpacing: allOpen ? "0.03em" : 0,
          color: allOpen ? "#FDBA74" : "rgba(165,243,252,0.75)",
          transition: "color 300ms ease",
        }}
      >
        {allOpen ? HERO.nameComplete : HERO.nameHint}
      </Typography>
    </Box>
  );
}
