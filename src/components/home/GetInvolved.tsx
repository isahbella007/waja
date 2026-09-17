"use client";

import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ArrowForward } from "@mui/icons-material";
import SectionContainer from "./SectionContainer";
import { wajaColors } from "@/theme/theme";

const WAYS_TO_HELP = [
  {
    title: "Apply",
    description: "Join our next cohort and train for a career in automotive technology.",
    descriptionShort: "Join our next cohort",
    cta: "Apply now",
    href: "#apply",
  },
  {
    title: "Partner",
    description: "Work with us as a company, school or foundation to expand opportunity.",
    descriptionShort: "Companies, schools and foundations",
    cta: "Partner with us",
    href: "#partner",
  },
  {
    title: "Volunteer",
    description: "Share your skills as a mentor, trainer or advisor.",
    descriptionShort: "Mentor, train or advise",
    cta: "Volunteer",
    href: "#volunteer",
  },
  {
    title: "Give in kind",
    description: "Donate tools, equipment or vehicles for training.",
    descriptionShort: "Tools, equipment or vehicles",
    cta: "Give equipment",
    href: "#give-in-kind",
  },
];

const FAQS = [
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. WAJA is a registered U.S. 501(c)(3) nonprofit (EIN [EIN]), so gifts are deductible to the extent allowed by law.",
  },
  {
    q: "Where does my money go?",
    a: "Training tools and operation",
  },
  {
    q: "Can I give monthly?",
    a: "Yes. Monthly gifts help us plan training cohorts ahead, and you can change or cancel anytime.",
  },
  {
    q: "Will I hear how my gift helped?",
    a: "Every supporter receives updates on trainee progress and program results.",
  },
];

const AMOUNTS = [25, 50, 100] as const;

export default function GetInvolved() {
  const [frequency, setFrequency] = useState<"monthly" | "one-time">("monthly");
  const [amount, setAmount] = useState<number | "other">(50);
  const [customAmount, setCustomAmount] = useState("");

  const displayAmount = amount === "other" ? customAmount || "0" : amount;
  const donateLabel = `Donate $${displayAmount}${frequency === "monthly" ? " monthly" : ""}`;

  return (
    <SectionContainer id="get-involved" pb={{ xs: 4, md: 4 }}>
      <Stack spacing={1} sx={{ mb: { xs: 5, md: 7 } }}>
        <Typography
          component="p"
          variant="overline"
          sx={{ letterSpacing: 2, fontWeight: 600, color: "warning.main" }}
        >
          Get Involved
        </Typography>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
          There&apos;s a place for you in this.
        </Typography>
      </Stack>

      <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
        {WAYS_TO_HELP.map((way) => (
          <Grid key={way.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              variant="outlined"
              sx={{ height: "100%", borderColor: "divider" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, color: "primary.dark", mb: 1 }}>
                  {way.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, display: { xs: "none", md: "block" } }}
                >
                  {way.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, display: { xs: "block", md: "none" } }}
                >
                  {way.descriptionShort}
                </Typography>
                <Stack
                  direction="row"
                  spacing={0.5}
                  component="a"
                  href={way.href}
                  sx={{ alignItems: "center", color: "primary.dark", textDecoration: "none" }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "primary.dark" }}>
                    {way.cta}
                  </Typography>
                  <ArrowForward sx={{ fontSize: 16, color: "primary.dark" }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            id="donate-form"
            sx={{
              bgcolor: wajaColors.foreground,
              borderRadius: 4,
              p: { xs: 4, md: 5 },
              height: "100%",
              scrollMarginTop: "80px",
            }}
          >
            <Typography component="h3" variant="h5" sx={{ fontWeight: 700, color: "#FFFFFF", mb: 1.5 }}>
              Invest in her future.
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)", mb: 3 }}>
              Your gift funds training, tools and mentorship for women and orphans in Ghana.
            </Typography>

            <Stack
              direction="row"
              sx={{
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                p: 0.5,
                mb: 2,
              }}
            >
              {(["monthly", "one-time"] as const).map((option) => (
                <ButtonBase
                  key={option}
                  onClick={() => setFrequency(option)}
                  sx={{
                    flex: 1,
                    py: 1,
                    borderRadius: 1.5,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textTransform: "capitalize",
                    color: frequency === option ? wajaColors.foreground : "#FFFFFF",
                    bgcolor: frequency === option ? "#FFFFFF" : "transparent",
                  }}
                >
                  {option === "monthly" ? "Monthly" : "One-time"}
                </ButtonBase>
              ))}
            </Stack>

            <Grid container spacing={1} sx={{ mb: 2 }}>
              {AMOUNTS.map((value) => (
                <Grid key={value} size={4}>
                  <ButtonBase
                    onClick={() => setAmount(value)}
                    sx={{
                      width: "100%",
                      py: 1.25,
                      borderRadius: 2,
                      border: "1px solid",
                      borderColor: amount === value ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                      fontWeight: 700,
                      color: amount === value ? wajaColors.foreground : "#FFFFFF",
                      bgcolor: amount === value ? "#FFFFFF" : "transparent",
                    }}
                  >
                    ${value}
                  </ButtonBase>
                </Grid>
              ))}
              <Grid size={4}>
                <ButtonBase
                  onClick={() => setAmount("other")}
                  sx={{
                    width: "100%",
                    py: 1.25,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: amount === "other" ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                    fontWeight: 700,
                    color: amount === "other" ? wajaColors.foreground : "#FFFFFF",
                    bgcolor: amount === "other" ? "#FFFFFF" : "transparent",
                  }}
                >
                  Other
                </ButtonBase>
              </Grid>
            </Grid>

            {amount === "other" && (
              <TextField
                size="small"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value.replace(/[^0-9]/g, ""))}
                sx={{
                  mb: 2,
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(255,255,255,0.08)",
                    color: "#FFFFFF",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.4)" },
                  },
                }}
              />
            )}

            <Typography variant="body2" sx={{ color: "warning.main", fontWeight: 600, mb: 2 }}>
              ${displayAmount} {frequency === "monthly" ? "a month" : "one-time"}
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "warning.main",
                fontSize: "1rem",
                py: 1.5,
                "&:hover": { bgcolor: "warning.dark" },
              }}
            >
              {donateLabel}
            </Button>

            <Typography variant="caption" sx={{ display: "block", mt: 2, color: "rgba(255,255,255,0.6)" }}>
              Secure form powered by Bloomerang. Tax-deductible to the extent allowed by law.
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Typography component="h3" variant="h6" sx={{ fontWeight: 700, color: "primary.dark", mb: 2 }}>
            Questions before you give
          </Typography>
          <Stack spacing={2}>
            {FAQS.map((faq) => (
              <Card key={faq.q} variant="outlined" sx={{ borderColor: "divider" }}>
                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "primary.dark", mb: 0.5 }}>
                    {faq.q}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {faq.a}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
