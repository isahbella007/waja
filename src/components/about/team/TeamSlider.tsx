"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SectionTitle from "@/components/shared/SectionTitle";
import MediaFrame from "@/components/shared/MediaFrame";
import TeamBioDialog from "@/components/about/team/TeamBioDialog";
import { wajaColors } from "@/theme/theme";
import type { SectionHeading } from "@/constants/types";
import type { TeamMember } from "@/constants/about/team";

const GAP_PX = 20;

const VISUALLY_HIDDEN = {
  position: "absolute",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
} as const;

const ARROW_SX = {
  border: "1px solid",
  borderColor: "divider",
  bgcolor: "#FFFFFF",
  color: wajaColors.foreground,
  "&:hover": { bgcolor: wajaColors.background, borderColor: wajaColors.primary },
  "&.Mui-disabled": { bgcolor: "#FFFFFF", opacity: 0.4 },
};

export default function TeamSlider({
  heading,
  members,
  readBioLabel,
}: {
  heading: SectionHeading;
  members: TeamMember[];
  readBioLabel: string;
}) {
  const trackRef = React.useRef<HTMLUListElement>(null);
  const [selected, setSelected] = React.useState<TeamMember | null>(null);
  const [scrollState, setScrollState] = React.useState({ canPrev: false, canNext: false });

  const updateScrollState = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // 1px tolerance for sub-pixel rounding at the ends
    setScrollState({
      canPrev: track.scrollLeft > 1,
      canNext: track.scrollLeft + track.clientWidth < track.scrollWidth - 1,
    });
  }, []);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateScrollState();
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateScrollState]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + GAP_PX), behavior: "smooth" });
  };

  const hasOverflow = scrollState.canPrev || scrollState.canNext;

  return (
    <Stack spacing={{ xs: 3, md: 4 }} component="section" aria-roledescription="carousel" aria-label={heading.title}>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "flex-end" }}>
        <SectionTitle {...heading} />
        {hasOverflow && (
          <Stack direction="row" spacing={1} sx={{ flexShrink: 0 }}>
            <IconButton
              aria-label="Previous team members"
              onClick={() => scrollByCard(-1)}
              disabled={!scrollState.canPrev}
              sx={ARROW_SX}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              aria-label="Next team members"
              onClick={() => scrollByCard(1)}
              disabled={!scrollState.canNext}
              sx={ARROW_SX}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        )}
      </Stack>

      <Box
        ref={trackRef}
        component="ul"
        onScroll={updateScrollState}
        tabIndex={hasOverflow ? 0 : undefined}
        sx={{
          display: "flex",
          gap: `${GAP_PX}px`,
          m: 0,
          p: 0,
          // Room so card borders/focus rings aren't clipped by the scroll container
          py: 0.5,
          listStyle: "none",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          overscrollBehaviorX: "contain",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 4, borderRadius: "12px" },
          "@media (prefers-reduced-motion: reduce)": { scrollBehavior: "auto" },
        }}
      >
        {members.map((member, index) => (
          <Box
            component="li"
            key={member.id}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${members.length}`}
            sx={{
              // One card plus a peek on phones, two on tablets, three on desktop
              flex: {
                xs: "0 0 85%",
                sm: `0 0 calc((100% - ${GAP_PX}px) / 2)`,
                md: `0 0 calc((100% - ${GAP_PX * 2}px) / 3)`,
              },
              scrollSnapAlign: "start",
              display: "flex",
              flexDirection: "column",
              bgcolor: "#FFFFFF",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <MediaFrame
              image={member.image}
              sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 85vw"
              placeholderBg="#CFFAFE"
              placeholderColor={wajaColors.primaryDark}
              sx={{ aspectRatio: "16 / 10" }}
            />
            <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Typography variant="h6" component="h3" sx={{ color: wajaColors.foreground, fontWeight: 700, lineHeight: 1.3 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: wajaColors.accent, fontWeight: 600, mb: 1 }}>
                {member.role}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, flexGrow: 1 }}>
                {member.summary}
              </Typography>
              {member.bio.length > 0 && (
                <ButtonBase
                  onClick={() => setSelected(member)}
                  aria-haspopup="dialog"
                  sx={{
                    alignSelf: "flex-start",
                    gap: 0.5,
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: wajaColors.foreground,
                    borderRadius: "4px",
                    "&:hover": { color: wajaColors.primary },
                    "&:hover .arrow": { transform: "translateX(2px)" },
                    "&.Mui-focusVisible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 2 },
                  }}
                >
                  {readBioLabel}
                  <Box component="span" sx={VISUALLY_HIDDEN}>
                    {` about ${member.name}`}
                  </Box>
                  <ArrowForwardIcon className="arrow" aria-hidden sx={{ fontSize: 16, transition: "transform 200ms ease" }} />
                </ButtonBase>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <TeamBioDialog member={selected} onClose={() => setSelected(null)} />
    </Stack>
  );
}
