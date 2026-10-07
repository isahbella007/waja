"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import MediaFrame from "@/components/shared/MediaFrame";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { typeScale, wajaColors } from "@/theme/theme";
import type { StoriesPageContent, Story } from "@/constants/stories";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.2)";

// One featured player, with every story listed underneath as ruled rows.
// Picking a row loads that story into the player, so only one video ever loads.
export default function StoriesBrowser({ stories, labels }: { stories: Story[]; labels: StoriesPageContent["labels"] }) {
  const [activeId, setActiveId] = React.useState(stories[0]?.id);
  const featuredRef = React.useRef<HTMLDivElement>(null);
  const nameRef = React.useRef<HTMLHeadingElement>(null);
  const story = stories.find((s) => s.id === activeId) ?? stories[0];
  if (!story) return null;

  const select = (id: string) => {
    setActiveId(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    featuredRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    nameRef.current?.focus({ preventScroll: true });
  };

  return (
    <Box>
      {/* Featured story */}
      <Box
        ref={featuredRef}
        sx={{
          scrollMarginTop: "96px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 3, sm: 5, md: 8 },
          alignItems: { sm: "center" },
        }}
      >
        {/* Keyed so switching stories resets the player back to its poster */}
        <VideoPlayer
          key={story.id}
          video={story.video}
          poster={story.poster}
          orientation={story.orientation}
          title={`${story.name}: ${story.quote}`}
          playLabel={labels.play.replace("{name}", story.name)}
          comingSoonLabel={labels.comingSoon}
        />

        <Box sx={{ flex: 1, minWidth: 0 }} aria-live="polite">
          <Typography variant="overline" component="p" sx={{ color: wajaColors.accentDark, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1 }}>
            {labels.nowPlaying} · {story.duration}
          </Typography>
          <Typography
            ref={nameRef}
            tabIndex={-1}
            component="h2"
            sx={{ ...typeScale.sectionTitle, color: wajaColors.foreground, outline: "none" }}
          >
            {story.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            {story.role}
          </Typography>
          <Typography
            component="blockquote"
            sx={{
              m: 0,
              mb: 3,
              pl: 2.5,
              borderLeft: `3px solid ${wajaColors.accent}`,
              fontFamily: SERIF,
              fontWeight: 300,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              lineHeight: 1.35,
              color: wajaColors.foreground,
            }}
          >
            “{story.quote}”
          </Typography>

          {/* Transcript: lets people follow the story without playing the video */}
          <Box
            component="details"
            sx={{
              borderTop: RULE,
              borderBottom: RULE,
              "& summary": {
                cursor: "pointer",
                py: 1.5,
                fontWeight: 600,
                fontSize: "0.9rem",
                color: wajaColors.primaryDark,
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                "&::-webkit-details-marker": { display: "none" },
                "&::after": { content: '"+"', fontSize: "1.1rem", lineHeight: 1 },
                "&:focus-visible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 2 },
              },
              "&[open] summary::after": { content: '"−"' },
            }}
          >
            <Box component="summary">{labels.transcript}</Box>
            <Box sx={{ pb: 2 }}>
              {story.transcript.map((paragraph) => (
                <Typography key={paragraph} variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* All stories */}
      <Typography variant="overline" component="h2" sx={{ display: "block", color: wajaColors.accentDark, fontWeight: 600, letterSpacing: "0.12em", mt: { xs: 7, md: 10 }, mb: 1.5 }}>
        {labels.moreStories}
      </Typography>
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", borderTop: `2px solid ${wajaColors.foreground}` }}>
        {stories.map((s) => {
          const current = s.id === story.id;
          return (
            <Box component="li" key={s.id} sx={{ borderBottom: RULE }}>
              <ButtonBase
                onClick={() => select(s.id)}
                aria-current={current ? "true" : undefined}
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: { xs: "64px 1fr", md: "72px 240px 1fr auto" },
                  columnGap: { xs: 2, md: 4 },
                  rowGap: 0.5,
                  alignItems: "center",
                  textAlign: "left",
                  py: 2,
                  px: 1,
                  borderLeft: "3px solid",
                  borderLeftColor: current ? wajaColors.accent : "transparent",
                  bgcolor: current ? "#FFFFFF" : "transparent",
                  "&:hover": { bgcolor: current ? "#FFFFFF" : "rgba(255,255,255,0.6)" },
                  "&.Mui-focusVisible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 2 },
                }}
              >
                <MediaFrame
                  image={s.poster}
                  sizes="72px"
                  placeholderBg={wajaColors.muted}
                  placeholderColor={wajaColors.primaryDark}
                  sx={{ width: { xs: 64, md: 72 }, aspectRatio: "3 / 4", gridRow: { xs: "span 2", md: "auto" }, "& .MuiTypography-root": { fontSize: "0.55rem" } }}
                />
                <Box>
                  <Typography component="span" sx={{ display: "block", fontFamily: SERIF, fontSize: "1.2rem", lineHeight: 1.2, color: wajaColors.foreground }}>
                    {s.name}
                  </Typography>
                  <Typography component="span" variant="caption" sx={{ color: "text.secondary" }}>
                    {s.role}
                  </Typography>
                </Box>
                <Typography component="span" variant="body2" sx={{ color: wajaColors.foreground, gridColumn: { xs: "2", md: "auto" } }}>
                  “{s.quote}”
                </Typography>
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.75, color: wajaColors.primaryDark, fontWeight: 600, fontSize: "0.85rem", whiteSpace: "nowrap" }}>
                  <PlayArrowRoundedIcon aria-hidden sx={{ fontSize: 20, color: wajaColors.accent }} />
                  {current ? labels.nowPlaying : `${labels.watch} · ${s.duration}`}
                </Box>
              </ButtonBase>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
