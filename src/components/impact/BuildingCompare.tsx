"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { wajaColors } from "@/theme/theme";
import type { ImpactPageContent } from "@/constants/impact";

type Mode = "today" | "vision";

// One large image of the building, with a Today / The vision switch and a row of
// views (front, entrance, ...). Both photos of the current view are stacked and
// cross-fade, so switching is instant and the layout never jumps.
export default function BuildingCompare({
  todayLabel,
  visionLabel,
  todayCaption,
  visionCaption,
  visionBadge,
  viewsLabel,
  views,
}: ImpactPageContent["centre"]["compare"]) {
  const [mode, setMode] = React.useState<Mode>("today");
  const [viewId, setViewId] = React.useState(views[0]?.id);
  const view = views.find((v) => v.id === viewId) ?? views[0];
  if (!view) return null;

  const pill = (value: Mode, label: string) => {
    const selected = mode === value;
    return (
      <ButtonBase
        key={value}
        onClick={() => setMode(value)}
        aria-pressed={selected}
        sx={{
          px: 2.25,
          py: 0.9,
          borderRadius: "999px",
          fontSize: "0.875rem",
          fontWeight: 700,
          bgcolor: selected ? wajaColors.foreground : "transparent",
          color: selected ? "#FFFFFF" : wajaColors.foreground,
          transition: "background-color 150ms ease, color 150ms ease",
          "&.Mui-focusVisible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 2 },
        }}
      >
        {label}
      </ButtonBase>
    );
  };

  return (
    <Box>
      {/* Today / The vision switch */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "space-between", alignItems: { sm: "center" }, mb: 2 }}>
        <Box role="group" aria-label={`${todayLabel} or ${visionLabel}`} sx={{ display: "inline-flex", p: 0.5, border: `1px solid ${wajaColors.foreground}33`, borderRadius: "999px", alignSelf: "flex-start" }}>
          {pill("today", todayLabel)}
          {pill("vision", visionLabel)}
        </Box>
        <Typography variant="body2" aria-live="polite" sx={{ color: "text.secondary", maxWidth: 520 }}>
          {mode === "today" ? todayCaption : visionCaption}
        </Typography>
      </Stack>

      {/* The stage: both images for this view, cross-fading */}
      <Box sx={{ position: "relative", aspectRatio: { xs: "4 / 3", md: "16 / 9" }, overflow: "hidden", bgcolor: wajaColors.muted }}>
        {(["today", "vision"] as const).map((m) => {
          const image = m === "today" ? view.today : view.vision;
          const shown = mode === m;
          return (
            <Box
              key={`${view.id}-${m}`}
              aria-hidden={!shown}
              sx={{
                position: "absolute",
                inset: 0,
                opacity: shown ? 1 : 0,
                transition: "opacity 350ms ease",
                "@media (prefers-reduced-motion: reduce)": { transition: "none" },
              }}
            >
              {image.src && (
                <Image
                  src={image.src}
                  alt={shown ? image.alt : ""}
                  fill
                  sizes="(min-width: 1200px) 1150px, 100vw"
                  style={{ objectFit: "cover", objectPosition: image.position ?? "center" }}
                />
              )}
            </Box>
          );
        })}
        {mode === "vision" && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: "rgba(22,78,99,0.85)",
              color: "#FFFFFF",
              px: 1.25,
              py: 0.5,
              borderRadius: "4px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {visionBadge}
          </Box>
        )}
      </Box>

      {/* Views: small thumbnails of the currently selected mode */}
      <Box
        role="group"
        aria-label={viewsLabel}
        sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: `repeat(${views.length}, 1fr)` }, gap: 1.5, mt: 1.5 }}
      >
        {views.map((v) => {
          const selected = v.id === view.id;
          const thumb = mode === "today" ? v.today : v.vision;
          return (
            <ButtonBase
              key={v.id}
              onClick={() => setViewId(v.id)}
              aria-pressed={selected}
              sx={{
                display: "block",
                textAlign: "left",
                borderTop: "3px solid",
                borderTopColor: selected ? wajaColors.accent : "transparent",
                opacity: selected ? 1 : 0.7,
                transition: "opacity 150ms ease, border-color 150ms ease",
                "&:hover": { opacity: 1 },
                "&.Mui-focusVisible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 2 },
              }}
            >
              <Box sx={{ position: "relative", aspectRatio: "16 / 9", bgcolor: wajaColors.muted }}>
                {thumb.src && <Image src={thumb.src} alt="" fill sizes="(min-width: 600px) 25vw, 50vw" style={{ objectFit: "cover" }} />}
              </Box>
              <Typography component="span" variant="body2" sx={{ display: "block", mt: 0.75, fontWeight: selected ? 700 : 500, color: wajaColors.foreground }}>
                {v.label}
              </Typography>
            </ButtonBase>
          );
        })}
      </Box>
    </Box>
  );
}
