import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SectionContainer from "./SectionContainer";
import { wajaColors } from "@/theme/theme";

const PARTNERS = [
  "[Placeholder] Partner Co.",
  "[Placeholder] Civic Foundation",
  "[Placeholder] Regional Bank",
  "[Placeholder] Tech Alliance",
  "[Placeholder] Community Trust",
  "[Placeholder] Local Union",
];

export default function SupportersPartners() {
  return (
    <SectionContainer id="partners"  pb={{ xs: 4, md: 4 }}>
      <Stack spacing={1} sx={{ mb: { xs: 4, md: 6 }, textAlign: "center" }}>
        <Typography
          component="p"
          variant="overline"
          sx={{ letterSpacing: 2, fontWeight: 600, color: "primary.main" }}
        >
          Our Community
        </Typography>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
          Backed by supporters and partners who believe in this work
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mx: "auto" }}>
          [Placeholder] WAJA partners with garages, employers, foundations, and
          community organizations across Ghana and West Africa who share our commitment
          to opportunity.
        </Typography>
      </Stack>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {PARTNERS.map((partner) => (
          <Grid key={partner} size={{ xs: 6, sm: 4, md: 2 }}>
            <Box
              sx={{
                height: 88,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: wajaColors.card,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                px: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                {partner}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
