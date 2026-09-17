import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Verified from "@mui/icons-material/Verified";
import Groups from "@mui/icons-material/Groups";
import Flag from "@mui/icons-material/Flag";
import Handshake from "@mui/icons-material/Handshake";
import { wajaColors } from "@/theme/theme";
import { Shield } from "@mui/icons-material";

const TRUST_ITEMS = [
  {
    icon: Verified,
    label: "Registered U.S. 501(c)(3) · EIN [Placeholder EIN]",
  },
  {
    icon: Groups,
    label: "14 women trained",
  },
  {
    icon: Flag,
    label: "1 cohort(s) completed",
  },
  {
    icon: Shield,
    label: "Founded in 2024",
  },
  {
    icon: Handshake,
    label: "3 Supporters",
  },
];

export default function TrustBar() {
  return (
    <Box
      component="section"
      sx={{
        background: `linear-gradient(115deg, ${wajaColors.accent} 0%, ${wajaColors.accentDark} 100%)`,
        py: { xs: 4, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1.5, md: 2 }}
          sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between", flexWrap: "wrap" }}
        >
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Stack key={item.label} direction="row" spacing={{ xs: 1.5, md: 2 }} sx={{ alignItems: "center" }}>
                {index > 0 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "rgba(255,255,255,0.3)", display: { xs: "none", md: "block" } }}
                  />
                )}
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <Icon sx={{ fontSize: 18, color: "#FFFFFF" }} />
                  <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
