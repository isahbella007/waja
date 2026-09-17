"use client";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SectionContainer from "./SectionContainer";

const WAYS_TO_HELP = [
  {
    icon: FavoriteIcon,
    title: "Donate",
    description: "[Placeholder] Fund mentorship, materials, and apprenticeship stipends directly.",
    cta: "Donate Now",
    href: "#donate-form",
  },
  {
    icon: VolunteerActivismIcon,
    title: "Volunteer",
    description: "[Placeholder] Become a mentor or tutor — a few hours a month changes a trajectory.",
    cta: "Apply to Mentor",
    href: "#",
  },
  {
    icon: HandshakeIcon,
    title: "Partner",
    description: "[Placeholder] Hire apprentices, host a site visit, or sponsor a cohort.",
    cta: "Become a Partner",
    href: "#",
  },
];

const FAQS = [
  {
    q: "Is my donation tax-deductible?",
    a: "[Placeholder] Yes. WAJA is a registered 501(c)(3) nonprofit organization, and donations are tax-deductible to the extent allowed by law.",
  },
  {
    q: "How much of my donation goes directly to programs?",
    a: "[Placeholder] Add your actual program-expense ratio here, sourced from your latest audited financials or Form 990.",
  },
  {
    q: "Can I donate monthly instead of a one-time gift?",
    a: "[Placeholder] Yes, recurring monthly giving is available and can be managed or canceled anytime from your donor account.",
  },
  {
    q: "How do I apply to volunteer or mentor?",
    a: "[Placeholder] Use the \"Apply to Mentor\" link above to start an application; our team follows up with next steps and background check requirements.",
  },
];

export default function GetInvolved() {
  return (
    <SectionContainer id="get-involved">
      <Stack spacing={1} sx={{ mb: { xs: 5, md: 7 }, textAlign: "center" }}>
        <Typography
          component="p"
          variant="overline"
          sx={{ letterSpacing: 2, fontWeight: 600, color: "primary.main" }}
        >
          Get Involved
        </Typography>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
          Ways to help
        </Typography>
      </Stack>

      <Grid container spacing={4} sx={{ mb: { xs: 8, md: 10 } }} id="donate">
        {WAYS_TO_HELP.map((way) => {
          const Icon = way.icon;
          return (
            <Grid key={way.title} size={{ xs: 12, md: 4 }}>
              <Card
                variant="outlined"
                id={way.title === "Donate" ? "donate-form" : undefined}
                sx={{ height: "100%", borderColor: "divider", textAlign: "center" }}
              >
                <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Icon sx={{ fontSize: 40, color: "warning.main", mb: 2 }} />
                  <Typography component="h3" variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {way.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {way.description}
                  </Typography>
                  <Button
                    variant="contained"
                    href={way.href}
                    sx={{
                      bgcolor: "warning.main",
                      "&:hover": { bgcolor: "warning.dark" },
                    }}
                  >
                    {way.cta}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Stack spacing={1} sx={{ mb: 3, textAlign: "center" }}>
        <Typography component="h3" variant="h5" sx={{ fontWeight: 700 }}>
          Frequently asked questions
        </Typography>
      </Stack>
      <Stack sx={{ maxWidth: 760, mx: "auto" }}>
        {FAQS.map((faq) => (
          <Accordion key={faq.q} disableGutters elevation={0} sx={{ border: "1px solid", borderColor: "divider", "&:before": { display: "none" }, mb: 1.5, borderRadius: 2, overflow: "hidden" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-content-${faq.q}`}
              id={`faq-header-${faq.q}`}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </SectionContainer>
  );
}
