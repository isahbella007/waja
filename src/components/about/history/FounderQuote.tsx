import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MediaFrame from "@/components/shared/MediaFrame";
import { wajaColors } from "@/theme/theme";
import type { HistoryContent } from "@/constants/about/history";

export default function FounderQuote({ quote, name, role, image }: HistoryContent["founderQuote"]) {
  return (
    <Box
      component="figure"
      sx={{
        m: 0,
        bgcolor: wajaColors.foreground,
        color: "#FFFFFF",
        borderRadius: "16px",
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 5 }} sx={{ alignItems: { md: "center" } }}>
        <MediaFrame
          image={image}
          sizes="160px"
          placeholderBg="rgba(0,0,0,0.2)"
          placeholderColor={wajaColors.border}
          sx={{
            width: { xs: 120, md: 160 },
            height: { xs: 120, md: 160 },
            flexShrink: 0,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
        <Box>
          <Typography
            component="blockquote"
            variant="h5"
            sx={{ m: 0, color: "#FFFFFF", fontWeight: 600, lineHeight: 1.45, fontSize: { xs: "1.15rem", md: "1.35rem" } }}
          >
            “{quote}”
          </Typography>
          <Box component="figcaption" sx={{ mt: 2.5 }}>
            <Typography variant="subtitle2" component="p" sx={{ color: "#FFFFFF", fontWeight: 700 }}>
              {name}
            </Typography>
            <Typography variant="caption" sx={{ color: wajaColors.border }}>
              {role}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
