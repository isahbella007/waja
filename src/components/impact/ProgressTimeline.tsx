"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import { typeScale, wajaColors } from "@/theme/theme";
import type { ImpactPageContent, ImpactYear } from "@/constants/impact";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.2)";

const VISUALLY_HIDDEN = {
  position: "absolute",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
} as const;

function YearStats({ year, light = false }: { year: ImpactYear; light?: boolean }) {
  return (
    <Box component="dl" sx={{ m: 0, borderTop: RULE }}>
      {year.stats.map((stat) => (
        // Label first in the markup; row-reverse shows the figure on the left
        <Box key={stat.label} sx={{ display: "flex", flexDirection: "row-reverse", justifyContent: "flex-end", alignItems: "baseline", gap: 2.5, py: 1.5, borderBottom: RULE }}>
          <Typography component="dt" variant="body2" sx={{ color: wajaColors.foreground }}>
            {stat.label}
          </Typography>
          <Typography component="dd" sx={{ m: 0, fontFamily: SERIF, fontWeight: 600, fontSize: light ? "1.4rem" : "1.75rem", lineHeight: 1, color: wajaColors.primaryDark, minWidth: 52 }}>
            {stat.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

// Desktop: a scroll story. The years run down the right; whichever is in the middle
// of the screen becomes active and the left (sticky) panel shows its story.
// Phones: a plain vertical timeline with every year's details inline.
export default function ProgressTimeline({ eyebrow, title, current, nowLabel, years }: ImpactPageContent["progress"]) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const active = years[activeIndex] ?? years[0];

  React.useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    if (items.length === 0) return;
    // A thin band across the middle of the screen: the year inside it is "active"
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(index)) setActiveIndex(index);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [years.length]);

  const jumpTo = (index: number) => {
    setActiveIndex(index);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    itemRefs.current[index]?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  };

  return (
    <Box>
      <SectionTitle eyebrow={eyebrow} title={title} />

      <Grid container spacing={{ xs: 0, md: 8 }} sx={{ mt: { xs: 3, md: 5 } }}>
        {/* Left: the active year's story (desktop only; screen readers get it from the list) */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: "none", md: "block" } }}>
          <Box aria-hidden sx={{ position: "sticky", top: 140 }}>
            <Typography variant="overline" component="p" sx={{ color: wajaColors.accentDark, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5 }}>
              {active.tag}
            </Typography>
            <Typography sx={{ fontFamily: SERIF, fontWeight: 600, fontSize: "4rem", lineHeight: 1, color: wajaColors.foreground, mb: 2 }}>
              {active.year}
            </Typography>
            <Typography sx={{ ...typeScale.subTitle, color: wajaColors.foreground, mb: 1.5 }}>{active.title}</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              {active.description}
            </Typography>
            <YearStats year={active} />
          </Box>
        </Grid>

        {/* Right: the vertical timeline */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", position: "relative" }}>
            {years.map((year, index) => {
              const isActive = index === activeIndex;
              const isNow = year.year === current;
              const isAhead = Number(year.year) > Number(current);
              const isLast = index === years.length - 1;
              return (
                <Box
                  component="li"
                  key={year.year}
                  data-index={index}
                  ref={(el: HTMLLIElement | null) => {
                    itemRefs.current[index] = el;
                  }}
                  aria-current={isNow ? "step" : undefined}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    columnGap: { xs: 2, md: 3 },
                    // Tall rows on desktop so scrolling steps through the years
                    minHeight: { md: "34vh" },
                  }}
                >
                  {/* Line and marker */}
                  <Box aria-hidden sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        bottom: isLast ? "auto" : 0,
                        height: isLast ? 18 : "auto",
                        width: "2px",
                        bgcolor: isAhead ? "transparent" : wajaColors.foreground,
                        borderLeft: isAhead ? `2px dashed ${wajaColors.foreground}55` : "none",
                      }}
                    />
                    <Box
                      sx={{
                        position: "relative",
                        mt: 1,
                        width: isActive ? 18 : 12,
                        height: isActive ? 18 : 12,
                        borderRadius: "50%",
                        bgcolor: isActive || isNow ? wajaColors.accent : isAhead ? wajaColors.background : wajaColors.foreground,
                        border: `2px solid ${isActive || isNow ? wajaColors.accent : wajaColors.foreground}`,
                        boxShadow: isActive ? `0 0 0 6px ${wajaColors.accent}33` : "none",
                        transition: "all 200ms ease",
                      }}
                    />
                  </Box>

                  <Box sx={{ pb: { xs: 4, md: 6 } }}>
                    <ButtonBase
                      onClick={() => jumpTo(index)}
                      sx={{
                        display: "block",
                        textAlign: "left",
                        borderRadius: "4px",
                        "&.Mui-focusVisible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 4 },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5, flexWrap: "wrap" }}>
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: SERIF,
                            fontWeight: 600,
                            fontSize: { xs: "1.75rem", md: "2.25rem" },
                            lineHeight: 1,
                            color: isActive ? wajaColors.foreground : `${wajaColors.foreground}66`,
                            transition: "color 200ms ease",
                          }}
                        >
                          {year.year}
                        </Typography>
                        <Typography component="span" sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: wajaColors.mutedForeground }}>
                          {year.tag}
                        </Typography>
                        {isNow && (
                          <Typography component="span" sx={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF", bgcolor: wajaColors.accent, px: 1, py: 0.25, borderRadius: "999px" }}>
                            {nowLabel}
                          </Typography>
                        )}
                      </Box>
                      <Typography component="h3" variant="h6" sx={{ color: isActive ? wajaColors.foreground : wajaColors.mutedForeground, mt: 1, transition: "color 200ms ease" }}>
                        {year.title}
                      </Typography>
                    </ButtonBase>

                    {/* Details: shown inline on phones; on desktop they live in the left panel,
                        so here they're kept for screen readers only */}
                    <Box sx={{ mt: 1.5, ...{ "@media (min-width: 900px)": VISUALLY_HIDDEN } }}>
                      <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                        {year.description}
                      </Typography>
                      <YearStats year={year} light />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
