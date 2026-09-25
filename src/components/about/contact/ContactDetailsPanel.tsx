import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { wajaColors } from "@/theme/theme";
import { toMapsHref, toTelHref } from "@/lib/phone";
import type { ContactDetails, SocialPlatform } from "@/constants/contact";
import type { ContactPageContent } from "@/constants/about/contact";

const SOCIAL_ICONS: Record<SocialPlatform, typeof FacebookIcon> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  youtube: YouTubeIcon,
};

const VALUE_LINK_SX = {
  color: wajaColors.primaryDark,
  fontWeight: 600,
  textDecoration: "none",
  borderRadius: "4px",
  "&:hover": { textDecoration: "underline" },
  "&:focus-visible": { outline: "3px solid", outlineColor: wajaColors.primary, outlineOffset: 2 },
};

function InfoCard({ label, note, children }: { label: string; note?: string; children: ReactNode }) {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", border: "1px solid", borderColor: "divider", borderRadius: "12px", p: 2.5 }}>
      <Typography
        component="h3"
        variant="overline"
        sx={{ display: "block", color: wajaColors.accent, fontWeight: 700, letterSpacing: "0.12em", lineHeight: 1.5, mb: 0.5 }}
      >
        {label}
      </Typography>
      {children}
      {note && (
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.75 }}>
          {note}
        </Typography>
      )}
    </Box>
  );
}

function ValueLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <Typography
      component="a"
      href={href}
      variant="body1"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      sx={VALUE_LINK_SX}
    >
      {children}
    </Typography>
  );
}

export default function ContactDetailsPanel({
  details,
  labels,
}: {
  details: ContactDetails;
  labels: ContactPageContent["details"];
}) {
  const { unitedStates, ghana } = details.offices;

  return (
    <Stack spacing={2} component="aside" aria-label="Contact details">
      <InfoCard label={labels.email.label} note={labels.email.note}>
        <ValueLink href={`mailto:${details.email}`}>{details.email}</ValueLink>
      </InfoCard>

      <InfoCard label={labels.phone.label} note={labels.phone.note}>
        <Stack spacing={0.5}>
          {[unitedStates, ghana].map((office) => (
            <Box key={office.country}>
              <Typography component="span" variant="body2" sx={{ color: "text.secondary", mr: 1 }}>
                {office.country}
              </Typography>
              <ValueLink href={toTelHref(office.phone)}>{office.phone}</ValueLink>
            </Box>
          ))}
        </Stack>
      </InfoCard>

      <InfoCard label={labels.ghana.label} note={labels.ghana.note}>
        <ValueLink href={toMapsHref(ghana.address)} external>
          {ghana.address}
        </ValueLink>
      </InfoCard>

      <InfoCard label={labels.unitedStates.label} note={labels.unitedStates.note}>
        <ValueLink href={toMapsHref(unitedStates.address)} external>
          {unitedStates.address}
        </ValueLink>
      </InfoCard>

      
    </Stack>
  );
}
