import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ActionButton from "@/components/shared/ActionButton";
import { wajaColors } from "@/theme/theme";
import type { GetInvolvedOverviewContent } from "@/constants/getInvolved/overview";

// Full-width dark band: what money is needed for right now
export default function FundingBand({ eyebrow, title, description, button, items }: GetInvolvedOverviewContent["funding"]) {
  return (
    <Box component="section" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" component="p" sx={{ color: "#FDBA74", letterSpacing: "0.14em", lineHeight: 1.5, mb: 1 }}>
              {eyebrow}
            </Typography>
            <Typography
              component="h2"
              variant="h3"
              sx={{ color: "#FFFFFF", fontSize: { xs: "1.9rem", md: "2.5rem" }, lineHeight: 1.15, mb: 2 }}
            >
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: wajaColors.border, mb: 3.5, maxWidth: 480 }}>
              {description}
            </Typography>
            <ActionButton
              {...button}
              variant="contained"
              sx={{ bgcolor: wajaColors.accent, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.accentDark } }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="ul"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                columnGap: 4,
                m: 0,
                p: 0,
                listStyle: "none",
                borderTop: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              {items.map((item) => (
                <Typography
                  component="li"
                  variant="body2"
                  key={item}
                  sx={{ py: 1.5, borderBottom: "1px solid rgba(255,255,255,0.18)", color: "#FFFFFF" }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
