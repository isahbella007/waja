import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SectionContainer from "./SectionContainer";
import { wajaColors } from "@/theme/theme";
import { APPROACH } from "./ChangeApproach";

export default function ChangeWeWant() {
  return (
    <SectionContainer id="change-we-want" py={{ xs: 4, md: 4 }}>
      <Box
        sx={{
          bgcolor: wajaColors.foreground,
          borderRadius: 4,
          p: { xs: 4, md: 6 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              component="p"
              variant="overline"
              sx={{ letterSpacing: 2, fontWeight: 600, color: "warning.main" }}
            >
              The Change We Want
            </Typography>
            <Typography component="h2" variant="h4" sx={{ fontWeight: 700, color: "#FFFFFF", mt: 1, mb: 2 }}>
              Women with the skills, income and confidence to lead in a changing industry.
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.75)" }}>
              Greater access to technical education, real jobs, sustainable income and a
              place in Ghana&apos;s automotive future.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              component="p"
              variant="overline"
              sx={{ letterSpacing: 2, fontWeight: 600, color: "rgba(255,255,255,0.6)", mb: 1, display: "block" }}
            >
              How We Get There
            </Typography>
            <Stack spacing={0}>
              {APPROACH.map((item, index) => (
                <Stack
                  key={item.title}
                  direction="row"
                  spacing={2}
                  sx={{
                    alignItems: "center",
                    py: 2,
                    borderBottom:
                      index === APPROACH.length - 1 ? "none" : "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: "warning.main", minWidth: 28 }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography sx={{ color: "#FFFFFF", fontWeight: 500 }}>{item.title}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </SectionContainer>
  );
}
