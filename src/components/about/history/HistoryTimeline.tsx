import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import { wajaColors } from "@/theme/theme";
import type { HistoryContent } from "@/constants/about/history";

export default function HistoryTimeline({ entries, ...heading }: HistoryContent["timeline"]) {
  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      <SectionTitle {...heading} />
      <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none" }}>
        {entries.map((entry, index) => (
          <Box
            component="li"
            key={`${entry.year}-${entry.title}`}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "72px 16px 1fr", md: "160px 24px 1fr" },
              columnGap: 2,
              py: 3,
              borderTop: index === 0 ? "none" : "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: wajaColors.primaryDark, fontWeight: 700, fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              {entry.year}
            </Typography>
            <Box
              aria-hidden
              sx={{ width: 8, height: 8, mt: 1.25, borderRadius: "50%", bgcolor: wajaColors.accent, justifySelf: "center" }}
            />
            <Box>
              <Typography variant="subtitle1" component="h3" sx={{ color: wajaColors.foreground, fontWeight: 700 }}>
                {entry.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                {entry.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
