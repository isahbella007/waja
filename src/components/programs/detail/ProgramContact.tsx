import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ActionButton from "@/components/shared/ActionButton";
import { toTelHref } from "@/lib/phone";
import { wajaColors } from "@/theme/theme";
import type { ActionLink } from "@/constants/types";
import type { ProgramDetail } from "@/constants/programs/programs";

const CONTACT_LINK_SX = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  color: wajaColors.foreground,
  fontWeight: 600,
  textDecoration: "none",
  borderRadius: "4px",
  "&:hover": { textDecoration: "underline" },
  "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 2 },
};

export default function ProgramContact({
  title,
  description,
  person,
  apply,
  accent,
}: ProgramDetail["contact"] & { apply: ActionLink; accent: string }) {
  return (
    <Box component="section" sx={{ borderTop: `2px solid ${accent}`, pt: { xs: 4, md: 5 } }}>
      <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "flex-start" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography component="h2" variant="h3" sx={{ color: wajaColors.foreground, fontSize: { xs: "1.75rem", md: "2.25rem" }, mb: 1.5 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            {description}
          </Typography>
          <ActionButton
            {...apply}
            variant="contained"
            sx={{ bgcolor: accent, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.foreground } }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ borderLeft: { md: "1px solid rgba(22,78,99,0.25)" }, pl: { md: 5 } }}>
            <Typography sx={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", color: wajaColors.foreground }}>
              {person.name}
            </Typography>
            <Typography variant="body2" sx={{ color: accent, fontWeight: 600, mb: 2 }}>
              {person.role}
            </Typography>
            <Stack spacing={1.25}>
              <Typography component="a" href={`mailto:${person.email}`} variant="body1" sx={CONTACT_LINK_SX}>
                <EmailOutlinedIcon aria-hidden fontSize="small" sx={{ color: accent }} />
                {person.email}
              </Typography>
              <Typography component="a" href={toTelHref(person.phone)} variant="body1" sx={CONTACT_LINK_SX}>
                <PhoneOutlinedIcon aria-hidden fontSize="small" sx={{ color: accent }} />
                {person.phone}
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
