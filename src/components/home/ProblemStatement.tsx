import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SectionContainer from "./SectionContainer";

export default function ProblemStatement() {
  return (
    <SectionContainer bgcolor="#ECFEFF" py={{ xs: 8, md: 10 }}>
      <Stack spacing={3} sx={{ maxWidth: 820, mx: "auto", textAlign: "center" }}>
        <Typography
          component="p"
          variant="overline"
          sx={{ letterSpacing: 2, fontWeight: 600, color: "primary.main" }}
        >
          The Shift
        </Typography>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
          Modern vehicles are no longer only mechanical.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
          They rely on sensors, software, onboard computers, electrical systems,
          diagnostic data, and increasingly electric and hybrid technologies. WAJA is
          making sure women in Ghana and West Africa are not left behind. Through a
          technology-enabled training model, WAJA prepares women to understand,
          diagnose, and service modern vehicles using both hands-on repair skills and
          digital tools.
        </Typography>
      </Stack>
    </SectionContainer>
  );
}
