"use client";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import MediaFrame from "@/components/shared/MediaFrame";
import { wajaColors } from "@/theme/theme";
import type { TeamMember } from "@/constants/about/team";

export default function TeamBioDialog({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Keep the last member rendered while the dialog animates closed
  const [shown, setShown] = React.useState<TeamMember | null>(member);
  if (member && member !== shown) setShown(member);

  return (
    <Dialog
      open={Boolean(member)}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      scroll="paper"
      aria-labelledby="team-bio-title"
      slotProps={{ paper: { sx: { borderRadius: fullScreen ? 0 : "16px" } } }}
    >
      {shown && (
        <>
          <DialogTitle
            component="div"
            id="team-bio-title"
            sx={{ display: "flex", alignItems: "center", gap: 2, pr: 7, borderBottom: "1px solid", borderColor: "divider" }}
          >
            <MediaFrame
              image={shown.image}
              sizes="64px"
              placeholderBg="#CFFAFE"
              placeholderColor={wajaColors.primaryDark}
              sx={{ width: 64, height: 64, flexShrink: 0, borderRadius: "50%", "& .MuiTypography-root": { fontSize: "0.6rem" } }}
            />
            <div>
              <Typography variant="h5" component="h2" sx={{ color: wajaColors.foreground, fontWeight: 700 }}>
                {shown.name}
              </Typography>
              <Typography variant="body2" sx={{ color: wajaColors.accent, fontWeight: 600 }}>
                {shown.role}
              </Typography>
            </div>
            <IconButton aria-label="Close bio" onClick={onClose} sx={{ position: "absolute", right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ pt: "24px !important", pb: 4 }}>
            <Stack spacing={2}>
              {shown.bio.map((paragraph) => (
                <Typography key={paragraph} variant="body1" sx={{ color: "text.secondary" }}>
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}
