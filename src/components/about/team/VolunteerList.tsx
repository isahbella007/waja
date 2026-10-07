import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import { wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

const RULE = "1px solid rgba(22,78,99,0.2)";

// A ruled "credits" list: name in serif, role beside it. Grows cleanly as volunteers join.
export default function VolunteerList({ people, ...heading }: TeamContent["volunteers"]) {
  return (
    <Grid container spacing={{ xs: 3, md: 8 }}>
      <Grid size={{ xs: 12, md: 5 }}>
        <SectionTitle {...heading} />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", borderTop: `2px solid ${wajaColors.foreground}`, mt: { md: 4 } }}>
          {people.map((person) => (
            <Box
              component="li"
              key={person.id}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "minmax(0, 1fr) minmax(0, 1fr)" },
                columnGap: 3,
                rowGap: 0.25,
                alignItems: "baseline",
                py: 2,
                borderBottom: RULE,
              }}
            >
              <Typography component="span" sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: { xs: "1.25rem", md: "1.4rem" }, color: wajaColors.foreground }}>
                {person.name}
              </Typography>
              <Typography component="span" variant="body2" sx={{ color: "text.secondary" }}>
                {person.role}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
