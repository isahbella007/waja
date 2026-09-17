"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import SectionContainer from "./SectionContainer";
import { wajaColors } from "@/theme/theme";

export default function EmailSignup() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "submitted" | "error">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // TODO: wire up to real newsletter provider (e.g. Mailchimp, ConvertKit) once available.
    setStatus("submitted");
  }

  return (
    <SectionContainer py={{ xs: 8, md: 10 }}>
      <Stack spacing={3} sx={{ maxWidth: 560, mx: "auto", textAlign: "center" }}>
        <Typography component="h2" variant="h5" sx={{ fontWeight: 700, color: "text.primary" }}>
          Stay in the loop
        </Typography>
        <Typography variant="body1" color="text.secondary">
          [Placeholder] Get program updates, graduate stories, and volunteer opportunities —
          about once a month, never spam.
        </Typography>
        <Stack
          component="form"
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            type="email"
            name="email"
            label="Email address"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            required
            fullWidth
            variant="filled"
            sx={{ bgcolor: wajaColors.card, borderRadius: 1 }}
            error={status === "error"}
            helperText={status === "error" ? "Enter a valid email address." : " "}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "warning.main", "&:hover": { bgcolor: "warning.dark" }, whiteSpace: "nowrap", height: 56 }}
          >
            Sign Up
          </Button>
        </Stack>
        {status === "submitted" && (
          <Alert severity="success" sx={{ textAlign: "left" }}>
            Thanks for signing up! [Placeholder — connect to email provider to send real confirmations.]
          </Alert>
        )}
      </Stack>
    </SectionContainer>
  );
}
