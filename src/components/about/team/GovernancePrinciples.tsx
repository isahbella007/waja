import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import SectionTitle from "@/components/shared/SectionTitle";
import { wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

export default function GovernancePrinciples({ principles, ...heading }: TeamContent["governance"]) {
  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      <SectionTitle {...heading} />
      <Box
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {principles.map((principle) => (
          <Box
            component="li"
            key={principle.title}
            sx={{
              display: "flex",
              gap: 2,
              bgcolor: "#FFFFFF",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "12px",
              p: 3,
            }}
          >
            <Box
              aria-hidden
              sx={{
                width: 36,
                height: 36,
                flexShrink: 0,
                display: "grid",
                placeItems: "center",
                borderRadius: "8px",
                bgcolor: wajaColors.background,
                color: wajaColors.primary,
              }}
            >
              <VerifiedUserOutlinedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box>
              <Typography variant="subtitle1" component="h3" sx={{ color: wajaColors.foreground, fontWeight: 700, mb: 0.5 }}>
                {principle.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {principle.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
