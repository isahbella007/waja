import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SectionContainer from "./SectionContainer";
import { ArrowForward } from "@mui/icons-material";

export const APPROACH = [
  { title: "Hands-on automotive repair training" },
  { title: "Digital diagnostics and AI-supported repair" },
  { title: "EV and hybrid readiness" },
  { title: "Personal development and leadership" },
  { title: "Entrepreneurship and market linkage" },
];

export default function ChangeApproach() {
  return (
    <SectionContainer id="why-waja" pb={{ xs: 4, md: 4 }}>
      <Grid container spacing={6} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            component="p"
            variant="overline"
            sx={{ letterSpacing: 2, fontWeight: 600, color: "warning.main" }}
          >
            Why WAJA Exists
          </Typography>
          <Typography component="h2" variant="h4" sx={{ fontWeight: 700, mt: 1, mb: 2 }}>
            Cars are changing fast. Women shouldn't be left behind
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Many women and orphans in Ghana face barriers to stable income, technical
            education, and long-term economic independence. At the same time, Ghana&apos;s
            automotive sector needs a stronger workforce capable of supporting modern
            vehicles, diagnostics, and future EV systems.
          </Typography>
          {/* <Typography variant="body1" sx={{ mt: 2, fontWeight: 600, color: "text.primary" }}>
            WAJA connects these two needs — training women for real opportunities in the
            automotive industry while helping strengthen Ghana&apos;s future service
            infrastructure.
          </Typography> */}
          <Stack direction="row" spacing={1} sx={{ alignItems: "center", mt: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 600, color: "primary.dark", mb: -0.5 }}>
              Read our story
            </Typography>
            <ArrowForward sx={{ mb: -0.5, color: "primary.dark" }} />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: 3,
                overflow: "hidden",
                mb: 3,
              }}
            >
              <Image
                src="/waja1.jpeg"
                alt="WAJA trainees working on automotive technology"
                fill
                sizes="(max-width: 900px) 100vw, 700px"
                style={{ objectFit: "cover" }}
              />
            </Box>
            
          </Box>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
