"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ActionButton from "@/components/shared/ActionButton";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import { buildDonateHref, type GiveFrequency, type GivePageContent } from "@/constants/getInvolved/give";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.2)";

// Real radio inputs, visually hidden; the row/pill around them is the visible control
const HIDDEN_INPUT = {
  position: "absolute",
  opacity: 0,
  width: "1px",
  height: "1px",
  margin: 0,
} as const;

export default function GiveNow({
  eyebrow,
  tiers,
  defaultValue,
  panelEyebrow,
  frequencyLabel,
  frequencies,
  secureNote,
  taxNote,
  alternative,
}: GivePageContent["giveNow"]) {
  const [value, setValue] = React.useState(defaultValue);
  const [frequency, setFrequency] = React.useState<GiveFrequency>(frequencies[0]?.value ?? "monthly");

  const tier = tiers.find((t) => t.value === value) ?? tiers[0];
  const buttonTemplate = frequencies.find((f) => f.value === frequency)?.button ?? "{amount}";

  return (
    <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "stretch" }}>
      {/* Amount list */}
      <Grid size={{ xs: 12, md: 7 }}>
        <Box component="fieldset" sx={{ border: 0, m: 0, p: 0, minWidth: 0 }}>
          <Typography
            component="legend"
            variant="overline"
            sx={{ color: wajaColors.accentDark, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1.5, p: 0 }}
          >
            {eyebrow}
          </Typography>
          <Box sx={{ borderTop: `2px solid ${wajaColors.foreground}` }}>
            {tiers.map((t) => {
              const selected = t.value === value;
              return (
                <Box
                  component="label"
                  key={t.value}
                  sx={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "150px 1fr" },
                    columnGap: 3,
                    rowGap: 0.5,
                    alignItems: "center",
                    py: { xs: 2, md: 2.5 },
                    px: 2,
                    cursor: "pointer",
                    borderBottom: RULE,
                    borderLeft: "3px solid",
                    borderLeftColor: selected ? wajaColors.accent : "transparent",
                    bgcolor: selected ? "#FFFFFF" : "transparent",
                    boxShadow: selected ? "0 4px 14px rgba(22,78,99,0.08)" : "none",
                    transition: "background-color 150ms ease, border-color 150ms ease",
                    "&:hover": { bgcolor: selected ? "#FFFFFF" : "rgba(255,255,255,0.6)" },
                    "&:has(input:focus-visible)": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 2 },
                  }}
                >
                  <Box
                    component="input"
                    type="radio"
                    name="gift-amount"
                    value={t.value}
                    checked={selected}
                    onChange={() => setValue(t.value)}
                    sx={HIDDEN_INPUT}
                  />
                  <Typography
                    component="span"
                    sx={{ fontFamily: SERIF, fontSize: { xs: "2rem", md: "2.4rem" }, lineHeight: 1, color: wajaColors.foreground }}
                  >
                    {t.amount}
                  </Typography>
                  <Typography component="span" variant="body2" sx={{ color: wajaColors.foreground }}>
                    {t.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Grid>

      {/* Your gift panel */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Box
          sx={{
            height: "100%",
            bgcolor: wajaColors.foreground,
            color: "#FFFFFF",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="overline" component="p" sx={{ color: "#FDBA74", letterSpacing: "0.14em", lineHeight: 1.5, mb: 1 }}>
            {panelEyebrow}
          </Typography>
          {/* Announce the chosen amount and description when they change */}
          <Box aria-live="polite">
            <Typography sx={{ fontFamily: SERIF, fontSize: { xs: "2.75rem", md: "3.25rem" }, lineHeight: 1, color: "#FFFFFF", mb: 1.5 }}>
              {tier.amount}
            </Typography>
            <Typography variant="body1" sx={{ color: wajaColors.border, mb: 3 }}>
              {tier.description}
            </Typography>
          </Box>

          <Box component="fieldset" sx={{ border: 0, m: 0, p: 0, mb: 2.5 }}>
            <Box component="legend" sx={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              {frequencyLabel}
            </Box>
            <Box sx={{ display: "inline-flex", p: 0.5, bgcolor: "rgba(0,0,0,0.2)", borderRadius: "8px" }}>
              {frequencies.map((f) => {
                const selected = f.value === frequency;
                return (
                  <Box
                    component="label"
                    key={f.value}
                    sx={{
                      position: "relative",
                      px: 2,
                      py: 0.75,
                      minHeight: 36,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      bgcolor: selected ? "#FFFFFF" : "transparent",
                      color: selected ? wajaColors.foreground : "#FFFFFF",
                      transition: "background-color 150ms ease, color 150ms ease",
                      "&:has(input:focus-visible)": { outline: "3px solid #FFFFFF", outlineOffset: 2 },
                    }}
                  >
                    <Box
                      component="input"
                      type="radio"
                      name="gift-frequency"
                      value={f.value}
                      checked={selected}
                      onChange={() => setFrequency(f.value)}
                      sx={HIDDEN_INPUT}
                    />
                    {f.label}
                  </Box>
                );
              })}
            </Box>
          </Box>

          <ActionButton
            label={buttonTemplate.replace("{amount}", tier.amount)}
            href={buildDonateHref(tier.value, frequency)}
            variant="contained"
            fullWidth
            sx={{ bgcolor: wajaColors.accent, color: "#FFFFFF", mb: 2.5, "&:hover": { bgcolor: wajaColors.accentDark } }}
          />

          <Box sx={{ mt: "auto" }}>
            <Typography variant="caption" component="p" sx={{ color: "#FFFFFF", fontWeight: 600 }}>
              {secureNote}
            </Typography>
            <Typography variant="caption" component="p" sx={{ color: wajaColors.border, mb: 1.5 }}>
              {taxNote}
            </Typography>
            <ArrowLink {...alternative} color="#FFFFFF" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
