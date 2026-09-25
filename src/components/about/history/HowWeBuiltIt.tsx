import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import { wajaColors } from "@/theme/theme";
import type { HistoryContent } from "@/constants/about/history";

export default function HowWeBuiltIt({ items, ...heading }: HistoryContent["approach"]) {
  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      <SectionTitle {...heading} />
      <Box
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
          gap: 2,
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {items.map((item) => (
          <Box
            component="li"
            key={item.title}
            sx={{
              bgcolor: "#FFFFFF",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "12px",
              p: 3,
            }}
          >
            <Typography variant="subtitle1" component="h3" sx={{ color: wajaColors.foreground, fontWeight: 700, mb: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
