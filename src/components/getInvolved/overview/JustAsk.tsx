import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import type { GetInvolvedOverviewContent } from "@/constants/getInvolved/overview";

export default function JustAsk({
  title,
  description,
  contactLink,
  email,
}: GetInvolvedOverviewContent["ask"] & { email: string }) {
  return (
    <Box component="section" sx={{ borderTop: `2px solid ${wajaColors.foreground}`, pt: { xs: 4, md: 5 } }}>
      <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "flex-end" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            component="h2"
            variant="h3"
            sx={{ color: wajaColors.foreground, fontSize: { xs: "1.9rem", md: "2.5rem" }, lineHeight: 1.15, mb: 1.5 }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 560 }}>
            {description}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={1} sx={{ alignItems: { md: "flex-end" } }}>
            <Typography
              component="a"
              href={`mailto:${email}`}
              variant="body1"
              sx={{
                color: wajaColors.primaryDark,
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "4px",
                "&:hover": { textDecoration: "underline" },
                "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 2 },
              }}
            >
              {email}
            </Typography>
            <ArrowLink {...contactLink} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
