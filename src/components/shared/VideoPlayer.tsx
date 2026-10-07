"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import MediaFrame from "@/components/shared/MediaFrame";
import { wajaColors } from "@/theme/theme";
import type { ImageContent, VideoContent } from "@/constants/types";

// Pulls the video id out of the usual YouTube link shapes
function youTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
  return match ? match[1] : null;
}

// Poster + play button; the real player only loads after a press, so a page
// of videos costs almost no mobile data until someone chooses to watch.
// Without a `video` it shows the poster with a "coming soon" strip.
export default function VideoPlayer({
  video,
  poster,
  orientation,
  title,
  playLabel,
  comingSoonLabel,
}: {
  video?: VideoContent;
  poster: ImageContent;
  orientation: "portrait" | "landscape";
  /** Accessible title for the embedded player */
  title: string;
  playLabel: string;
  comingSoonLabel: string;
}) {
  const [playing, setPlaying] = React.useState(false);
  const portrait = orientation === "portrait";
  const frameSx = {
    position: "relative",
    width: portrait ? { xs: "100%", sm: 320 } : "100%",
    maxWidth: "100%",
    aspectRatio: portrait ? "9 / 16" : "16 / 9",
    maxHeight: portrait ? { xs: 560, md: 600 } : undefined,
    bgcolor: wajaColors.foreground,
    overflow: "hidden",
    mx: { xs: "auto", sm: 0 },
  } as const;

  if (playing && video) {
    const id = youTubeId(video.url);
    return (
      <Box sx={frameSx}>
        {id ? (
          <Box
            component="iframe"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&cc_load_policy=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : (
          <Box
            component="video"
            src={video.url}
            controls
            autoPlay
            playsInline
            sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", bgcolor: "#000" }}
          >
            {video.captionsUrl && <track kind="captions" src={video.captionsUrl} srcLang="en" label="English" default />}
          </Box>
        )}
      </Box>
    );
  }

  return (
    <Box sx={frameSx}>
      <MediaFrame
        image={poster}
        sizes={portrait ? "(min-width: 600px) 320px, 100vw" : "(min-width: 1200px) 1100px, 100vw"}
        placeholderBg={wajaColors.muted}
        placeholderColor={wajaColors.primaryDark}
        sx={{ position: "absolute", inset: 0 }}
      />
      {video ? (
        <ButtonBase
          onClick={() => setPlaying(true)}
          aria-label={playLabel}
          sx={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            bgcolor: "rgba(22,78,99,0.15)",
            "&:hover .play-disc": { transform: "scale(1.06)" },
            "&.Mui-focusVisible": { outline: "3px solid #FFFFFF", outlineOffset: -6 },
          }}
        >
          <Box
            className="play-disc"
            sx={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              bgcolor: wajaColors.accent,
              color: "#FFFFFF",
              display: "grid",
              placeItems: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              transition: "transform 200ms ease",
            }}
          >
            <PlayArrowRoundedIcon sx={{ fontSize: 44 }} />
          </Box>
        </ButtonBase>
      ) : (
        <Box sx={{ position: "absolute", left: 0, right: 0, bottom: 0, p: 1.5, bgcolor: "rgba(22,78,99,0.85)" }}>
          <Typography variant="caption" sx={{ color: "#FFFFFF", fontWeight: 600 }}>
            {comingSoonLabel}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
