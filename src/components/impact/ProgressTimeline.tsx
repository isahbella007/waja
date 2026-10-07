"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import { wajaColors } from "@/theme/theme";
import type { ImpactPageContent } from "@/constants/impact";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.2)";

// Year tabs along a rule; the chosen year's story and figures show below
export default function ProgressTimeline({ eyebrow, title, current, years }: ImpactPageContent["progress"]) {
  const [active, setActive] = React.useState(current);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = Math.max(0, years.findIndex((y) => y.year === active));
  const year = years[activeIndex];

  const onKeyDown = (event: React.KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    let next: number | undefined;
    if (event.key in keys) next = (activeIndex + keys[event.key] + years.length) % years.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = years.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActive(years[next].year);
    tabRefs.current[next]?.focus();
  };

  return (
    <Box>
      <SectionTitle eyebrow={eyebrow} title={title} />

      <Box
        role="tablist"
        aria-label={eyebrow}
        onKeyDown={onKeyDown}
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${years.length}, minmax(64px, 1fr))`,
          mt: { xs: 3, md: 4 },
          borderBottom: RULE,
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {years.map((y, index) => {
          const selected = y.year === active;
          return (
            <Box
              key={y.year}
              component="button"
              type="button"
              role="tab"
              id={`year-tab-${y.year}`}
              aria-selected={selected}
              aria-controls="year-panel"
              tabIndex={selected ? 0 : -1}
              ref={(el: HTMLButtonElement | null) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => setActive(y.year)}
              sx={{
                font: "inherit",
                textAlign: "left",
                cursor: "pointer",
                bgcolor: "transparent",
                border: 0,
                borderBottom: "3px solid",
                borderBottomColor: selected ? wajaColors.accent : "transparent",
                mb: "-1px",
                px: 0,
                pb: 1.25,
                pt: 1,
                "&:hover .year-number": { color: wajaColors.foreground },
                "&:focus-visible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 2 },
              }}
            >
              <Typography
                component="span"
                className="year-number"
                sx={{
                  display: "block",
                  fontFamily: SERIF,
                  fontSize: { xs: "1.4rem", md: "2.1rem" },
                  lineHeight: 1.1,
                  color: selected ? wajaColors.foreground : "rgba(22,78,99,0.4)",
                  transition: "color 150ms ease",
                }}
              >
                {y.year}
              </Typography>
              <Typography
                component="span"
                sx={{ display: "block", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: selected ? wajaColors.foreground : wajaColors.mutedForeground }}
              >
                {y.tag}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box role="tabpanel" id="year-panel" aria-labelledby={`year-tab-${year.year}`} tabIndex={0} sx={{ outline: "none", pt: { xs: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 3, md: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" component="p" sx={{ color: wajaColors.accentDark, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1 }}>
              {`${year.year} · ${year.tag}`}
            </Typography>
            <Typography component="h3" variant="h4" sx={{ color: wajaColors.foreground, fontSize: { xs: "1.5rem", md: "1.75rem" }, lineHeight: 1.2, mb: 1.5 }}>
              {year.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {year.description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="dl" sx={{ m: 0, borderTop: RULE }}>
              {year.stats.map((stat) => (
                // Label first in the markup; row-reverse shows the figure on the left
                <Box key={stat.label} sx={{ display: "flex", flexDirection: "row-reverse", justifyContent: "flex-end", alignItems: "baseline", gap: 3, py: 1.75, borderBottom: RULE }}>
                  <Typography component="dt" variant="body2" sx={{ color: wajaColors.foreground }}>
                    {stat.label}
                  </Typography>
                  <Typography component="dd" sx={{ m: 0, fontFamily: SERIF, fontSize: "1.75rem", lineHeight: 1, color: wajaColors.primaryDark, minWidth: 56 }}>
                    {stat.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
