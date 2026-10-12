"use client";

import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { typeScale, wajaColors } from "@/theme/theme";
import type { EventsPageContent, WajaEvent } from "@/constants/getInvolved/events";

const OVERLINE = { fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5 } as const;

// One event: date, title and story, a photo mosaic (click to enlarge), then its videos
export default function EventFeature({ event, labels }: { event: WajaEvent; labels: EventsPageContent["labels"] }) {
  const [open, setOpen] = React.useState<number | null>(null);
  const photos = event.photos;
  const current = open === null ? null : photos[open];

  const step = (direction: 1 | -1) =>
    setOpen((index) => (index === null ? index : (index + direction + photos.length) % photos.length));

  // Wide photos take two columns of the mosaic, tall ones one
  const columns = photos.map((p) => (p.shape === "wide" ? "2fr" : "1fr")).join(" ");

  return (
    <Box component="article" aria-labelledby={`${event.id}-title`}>
      {/* Header: date and title left, the story right */}
      <Grid container spacing={{ xs: 2, md: 6 }} sx={{ mb: { xs: 3, md: 4 } }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="overline" component="p" sx={{ ...OVERLINE, color: wajaColors.accentDark }}>
            {event.date}
          </Typography>
          <Typography id={`${event.id}-title`} component="h2" sx={{ ...typeScale.sectionTitle, color: wajaColors.foreground }}>
            {event.title}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={1.5} sx={{ pt: { md: 3.5 } }}>
            {event.description.map((paragraph) => (
              <Typography key={paragraph} variant="body1" sx={{ color: "text.secondary" }}>
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Photo mosaic */}
      <Typography variant="overline" component="h3" sx={{ ...OVERLINE, display: "block", color: wajaColors.foreground, mb: 1.5 }}>
        {labels.photos}
      </Typography>
      <Box
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: columns },
          gridAutoRows: { xs: 240, sm: 300, md: 440 },
          gap: { xs: 1, md: 1.5 },
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {photos.map((photo, index) => (
          <Box
            component="li"
            key={photo.src}
            // On phones the wide photo takes the full first row
            sx={{ gridColumn: { xs: photo.shape === "wide" ? "1 / -1" : "auto", md: "auto" } }}
          >
            <ButtonBase
              onClick={() => setOpen(index)}
              aria-label={`${labels.enlarge}: ${photo.caption}`}
              sx={{
                position: "relative",
                display: "block",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                bgcolor: wajaColors.muted,
                "& img": { transition: "transform 400ms ease" },
                "&:hover img": { transform: "scale(1.03)" },
                "&.Mui-focusVisible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 2 },
                "@media (prefers-reduced-motion: reduce)": { "& img": { transition: "none" }, "&:hover img": { transform: "none" } },
              }}
            >
              {photo.src && (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={photo.shape === "wide" ? "(min-width: 900px) 50vw, 100vw" : "(min-width: 900px) 25vw, 50vw"}
                  style={{ objectFit: "cover", objectPosition: photo.position ?? "center" }}
                />
              )}
              {/* Caption on a soft gradient so it reads over any photo */}
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  p: { xs: 1.25, md: 2 },
                  pt: 5,
                  background: "linear-gradient(to top, rgba(10,30,40,0.75), rgba(10,30,40,0))",
                  color: "#FFFFFF",
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                {photo.caption}
              </Box>
            </ButtonBase>
          </Box>
        ))}
      </Box>

      {/* Videos */}
      {event.videos.length > 0 && (
        <Box sx={{ mt: { xs: 5, md: 6 } }}>
          <Typography variant="overline" component="h3" sx={{ ...OVERLINE, display: "block", color: wajaColors.foreground, mb: 1.5 }}>
            {labels.videos}
          </Typography>
          <Box
            component="ul"
            sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: `repeat(${Math.min(event.videos.length, 2)}, 1fr)` }, gap: { xs: 3, md: 3 }, m: 0, p: 0, listStyle: "none" }}
          >
            {event.videos.map((v) => (
              <Box component="li" key={v.title}>
                <VideoPlayer
                  video={v.video}
                  poster={v.poster}
                  orientation="landscape"
                  title={`${event.title}: ${v.title}`}
                  playLabel={labels.play.replace("{title}", v.title)}
                  comingSoonLabel={labels.comingSoon}
                />
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "baseline", mt: 1.25 }}>
                  <Typography component="p" sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 600, fontSize: "1.1rem", color: wajaColors.foreground }}>
                    {v.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {v.duration}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Enlarged photo, with previous / next */}
      <Dialog
        open={current !== null}
        onClose={() => setOpen(null)}
        maxWidth="lg"
        fullWidth
        aria-label={current?.caption}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        slotProps={{ paper: { sx: { bgcolor: "#0B1F28", m: { xs: 1, md: 4 }, borderRadius: "4px" } } }}
      >
        {current && (
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "relative", width: "100%", height: { xs: "70vh", md: "80vh" } }}>
              <Image src={current.src as string} alt={current.alt} fill sizes="100vw" style={{ objectFit: "contain" }} />
            </Box>
            <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: 600, px: 2, py: 1.5 }}>
              {current.caption}
              <Box component="span" sx={{ color: wajaColors.border, fontWeight: 400, ml: 1 }}>
                {(open ?? 0) + 1} / {photos.length}
              </Box>
            </Typography>
            <IconButton aria-label={labels.close} onClick={() => setOpen(null)} sx={{ position: "absolute", top: 8, right: 8, color: "#FFFFFF", bgcolor: "rgba(0,0,0,0.4)", "&:hover": { bgcolor: "rgba(0,0,0,0.6)" } }}>
              <CloseIcon />
            </IconButton>
            {photos.length > 1 && (
              <>
                <IconButton aria-label="Previous photo" onClick={() => step(-1)} sx={{ position: "absolute", top: "40%", left: 8, color: "#FFFFFF", bgcolor: "rgba(0,0,0,0.4)", "&:hover": { bgcolor: "rgba(0,0,0,0.6)" } }}>
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton aria-label="Next photo" onClick={() => step(1)} sx={{ position: "absolute", top: "40%", right: 8, color: "#FFFFFF", bgcolor: "rgba(0,0,0,0.4)", "&:hover": { bgcolor: "rgba(0,0,0,0.6)" } }}>
                  <ChevronRightIcon />
                </IconButton>
              </>
            )}
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
