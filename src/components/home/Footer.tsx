import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const SOCIALS = [
  { icon: FacebookIcon, label: "WAJA on Facebook", href: "#" },
  { icon: InstagramIcon, label: "WAJA on Instagram", href: "#" },
  { icon: XIcon, label: "WAJA on X", href: "#" },
  { icon: LinkedInIcon, label: "WAJA on LinkedIn", href: "#" },
];

const POLICY_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Donor Bill of Rights", href: "#" },
  { label: "Financial Statements", href: "#" },
];

const QUICK_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Our Story", href: "#graduate-story" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
];

const VANITY_DIGITS: Record<string, string> = {
  A: "2", B: "2", C: "2", D: "3", E: "3", F: "3", G: "4", H: "4", I: "4",
  J: "5", K: "5", L: "5", M: "6", N: "6", O: "6", P: "7", Q: "7", R: "7", S: "7",
  T: "8", U: "8", V: "8", W: "9", X: "9", Y: "9", Z: "9",
};

function toTelHref(phone: string) {
  const chars = phone.replace(/[^0-9A-Za-z+]/g, "").split("");
  const digits = chars.map((c) => (c === "+" ? c : VANITY_DIGITS[c.toUpperCase()] ?? c)).join("");
  return `tel:${digits}`;
}

const OFFICES = [
  {
    title: "Headquarters",
    location: "Washington DC, US",
    phone: "(800) 237-WAJA",
    email: "info@gowaja.org",
    address: "2812 Georgia Avenue NW, Washington, DC 20001",
  },
  {
    title: "GH",
    location: "Accra, Ghana",
    phone: "+233 (0) 302 54 WAJA",
    email: "info@gowaja.org",
    address: "HQ3M+MXC, Graphic Rd, Accra, Ghana",
  },
];

const FOOTER_LINK_SX = {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": { color: "#FFFFFF" },
  "&:focus-visible": { outline: "2px solid #FFFFFF", outlineOffset: 2 },
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#164E63", color: "rgba(255,255,255,0.85)", pt: { xs: 8, md: 10 }, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#FFFFFF", mb: 2 }}>
              WAJA
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, maxWidth: 320 }}>
              Automotive and business training for women in Ghana.
            </Typography>
            <Stack direction="row" spacing={1}>
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <IconButton
                    key={social.label}
                    aria-label={social.label}
                    href={social.href}
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      "&:hover": { color: "#FFFFFF", borderColor: "#FFFFFF" },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>

          {OFFICES.map((office) => (
            <Grid key={office.title} size={{ xs: 6, md: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#FFFFFF", mb: 0.5 }}>
                {office.title}
              </Typography>
              <Typography variant="caption" sx={{ display: "block", color: "rgba(255,255,255,0.55)", mb: 1.5 }}>
                {office.location}
              </Typography>
              <Stack spacing={1.25}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                  <LocationOnIcon fontSize="small" sx={{ mt: 0.3, flexShrink: 0 }} />
                  <Typography variant="body2">{office.address}</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                  <PhoneIcon fontSize="small" sx={{ flexShrink: 0 }} />
                  <Typography component="a" href={toTelHref(office.phone)} variant="body2" sx={{ color: "inherit", textDecoration: "none" }}>
                    {office.phone}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                  <EmailIcon fontSize="small" sx={{ flexShrink: 0 }} />
                  <Typography component="a" href={`mailto:${office.email}`} variant="body2" sx={{ color: "inherit", textDecoration: "none" }}>
                    {office.email}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}

          <Grid size={{ xs: 12, md: 3 }}>
            <Grid container spacing={3}>
              <Grid size={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#FFFFFF", mb: 2 }}>
                  Explore
                </Typography>
                <Stack spacing={1.25}>
                  {QUICK_LINKS.map((link) => (
                    <Typography key={link.href} component="a" href={link.href} variant="body2" sx={FOOTER_LINK_SX}>
                      {link.label}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid size={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#FFFFFF", mb: 2 }}>
                  Policies
                </Typography>
                <Stack spacing={1.25}>
                  {POLICY_LINKS.map((link) => (
                    <Typography key={link.label} component="a" href={link.href} variant="body2" sx={FOOTER_LINK_SX}>
                      {link.label}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 4 }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" } }}
        >
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
            © {new Date().getFullYear()} WAJA. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)", maxWidth: 520 }}>
            WAJA is a U.S. 501(c)(3) nonprofit organization advancing workforce
            development, technology access, and economic opportunity for women and
            orphans in Ghana and West Africa. EIN: [Placeholder EIN]. Donations are
            tax-deductible to the extent allowed by law.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
