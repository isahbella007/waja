"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ActionButton from "@/components/shared/ActionButton";
import { wajaColors } from "@/theme/theme";
import type { CtaBannerContent } from "@/constants/types";

const BUTTON_TONES = {
  primary: { main: wajaColors.primaryDark, hover: wajaColors.foreground },
  accent: { main: wajaColors.accent, hover: wajaColors.accentDark },
} as const;

export type CtaBannerProps = CtaBannerContent & {
  /** Banner background. Defaults to the light cyan used on About pages. */
  background?: string;
  /** Banner border colour. Pass "transparent" to hide it. */
  borderColor?: string;
  /** Colour of the buttons: teal (default) or orange. */
  buttonTone?: keyof typeof BUTTON_TONES;
  /** Text colours, for when the background is dark. */
  titleColor?: string;
  descriptionColor?: string;
};

export default function CtaBanner({
  title,
  description,
  buttons,
  background = "#CFFAFE",
  borderColor = wajaColors.border,
  buttonTone = "primary",
  titleColor = wajaColors.foreground,
  descriptionColor = wajaColors.mutedForeground,
}: CtaBannerProps) {
  const tone = BUTTON_TONES[buttonTone];

  return (
    <Box
      sx={{
        bgcolor: background,
        border: "1px solid",
        borderColor,
        borderRadius: "16px",
        px: { xs: 3, md: 5 },
        py: { xs: 4, md: 5 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{ justifyContent: "space-between", alignItems: { xs: "flex-start", md: "center" } }}
      >
        <Box>
          <Typography component="h2" variant="h4" sx={{ fontWeight: 700, color: titleColor, mb: description ? 1 : 0 }}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body1" sx={{ color: descriptionColor, maxWidth: 640 }}>
              {description}
            </Typography>
          )}
        </Box>
        {buttons.length > 0 && (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ flexShrink: 0, width: { xs: "100%", sm: "auto" } }}
          >
            {buttons.map((button, index) =>
              // First button is filled, any others are outlined in the same tone
              index === 0 ? (
                <ActionButton
                  key={button.label}
                  {...button}
                  variant="contained"
                  sx={{ bgcolor: tone.main, color: "#FFFFFF", "&:hover": { bgcolor: tone.hover } }}
                />
              ) : (
                <ActionButton
                  key={button.label}
                  {...button}
                  variant="outlined"
                  sx={{
                    color: tone.main,
                    borderColor: tone.main,
                    borderWidth: 2,
                    bgcolor: "#FFFFFF",
                    "&:hover": { borderWidth: 2, borderColor: tone.hover, color: tone.hover, bgcolor: "#FFFFFF" },
                  }}
                />
              )
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
