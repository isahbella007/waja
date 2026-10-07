"use client";

import * as React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NativeSelect from "@mui/material/NativeSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormField, { INPUT_SX } from "@/components/shared/form/FormField";
import { submitContact } from "@/app/about/contact/actions";
import { validateContact, type ContactErrors, type ContactValues } from "@/lib/contactMessage";
import { wajaColors } from "@/theme/theme";
import type { ContactPageContent } from "@/constants/about/contact";

type Status = "idle" | "sent" | "mailto" | "error";

export default function ContactForm({
  content,
  recipient,
  initialTopic,
}: {
  content: ContactPageContent["form"];
  recipient: string;
  initialTopic?: string;
}) {
  const defaultTopic = content.topics.some((t) => t.value === initialTopic)
    ? (initialTopic as string)
    : content.topics[0]?.value ?? "";
  const emptyValues: ContactValues = { name: "", email: "", topic: defaultTopic, message: "" };

  const [values, setValues] = React.useState<ContactValues>(emptyValues);
  const [errors, setErrors] = React.useState<ContactErrors>({});
  const [honeypot, setHoneypot] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [pending, startTransition] = React.useTransition();
  const titleRef = React.useRef<HTMLHeadingElement>(null);

  const errorText: Record<keyof ContactValues, (code: ContactErrors[keyof ContactValues]) => string | undefined> = {
    name: (code) => (code ? content.name.requiredError : undefined),
    email: (code) => (code === "invalidEmail" ? content.email.invalidError : code ? content.email.requiredError : undefined),
    topic: () => undefined,
    message: (code) => (code ? content.message.requiredError : undefined),
  };

  const update = (key: keyof ContactValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const showErrors = (next: ContactErrors) => {
    setErrors(next);
    const first = (Object.keys(next) as (keyof ContactValues)[])[0];
    if (first) document.getElementById(`contact-${first}`)?.focus();
  };

  // Used only while email sending isn't set up: hand the message to the visitor's email app
  const openEmailApp = () => {
    const topicLabel = content.topics.find((t) => t.value === values.topic)?.label ?? values.topic;
    const subject = `${topicLabel}: message from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    if (Object.keys(nextErrors).length > 0) {
      showErrors(nextErrors);
      return;
    }
    setStatus("idle");
    startTransition(async () => {
      const result = await submitContact(values, honeypot);
      if (result.status === "invalid") {
        showErrors(result.errors);
      } else if (result.status === "unavailable") {
        openEmailApp();
        setStatus("mailto");
      } else if (result.status === "error") {
        setStatus("error");
      } else {
        setStatus("sent");
        setValues(emptyValues);
        // Move focus to the confirmation so screen-reader users hear it
        window.setTimeout(() => titleRef.current?.focus(), 0);
      }
    });
  };

  const inputA11y = (key: keyof ContactValues) => ({
    id: `contact-${key}`,
    name: key,
    "aria-invalid": Boolean(errors[key]) || undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
  });

  const cardSx = {
    bgcolor: "#FFFFFF",
    border: "1px solid",
    borderColor: "divider",
    borderRadius: "16px",
    p: { xs: 3, md: 4 },
  };

  // ---------- Sent: replace the form with a confirmation ----------
  if (status === "sent") {
    return (
      <Box sx={cardSx} role="status">
        <Typography ref={titleRef} tabIndex={-1} component="h2" variant="h4" sx={{ color: wajaColors.foreground, fontWeight: 700, mb: 1.5, outline: "none" }}>
          {content.success.title}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          {content.success.body}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => setStatus("idle")}
          sx={{ color: "primary.dark", borderColor: "primary.dark", borderWidth: 2, "&:hover": { borderWidth: 2 } }}
        >
          {content.success.again}
        </Button>
      </Box>
    );
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} aria-labelledby="contact-form-title" sx={cardSx}>
      <Typography id="contact-form-title" component="h2" variant="h4" sx={{ color: wajaColors.foreground, fontWeight: 700, mb: 3 }}>
        {content.title}
      </Typography>

      {/* Hidden from people; bots tend to fill it */}
      <Box aria-hidden sx={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </Box>

      <Stack spacing={2.5}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
          <FormField id="contact-name" label={content.name.label} error={errorText.name(errors.name)}>
            <OutlinedInput
              fullWidth
              size="small"
              autoComplete="name"
              placeholder={content.name.placeholder}
              value={values.name}
              onChange={update("name")}
              inputProps={inputA11y("name")}
              error={Boolean(errors.name)}
              sx={INPUT_SX}
            />
          </FormField>
          <FormField id="contact-email" label={content.email.label} error={errorText.email(errors.email)}>
            <OutlinedInput
              fullWidth
              size="small"
              type="email"
              autoComplete="email"
              placeholder={content.email.placeholder}
              value={values.email}
              onChange={update("email")}
              inputProps={inputA11y("email")}
              error={Boolean(errors.email)}
              sx={INPUT_SX}
            />
          </FormField>
        </Box>

        <FormField id="contact-topic" label={content.topic.label}>
          <NativeSelect
            fullWidth
            value={values.topic}
            onChange={update("topic")}
            inputProps={{ id: "contact-topic", name: "topic" }}
            input={<OutlinedInput size="small" sx={INPUT_SX} />}
          >
            {content.topics.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </NativeSelect>
        </FormField>

        <FormField id="contact-message" label={content.message.label} error={errorText.message(errors.message)}>
          <OutlinedInput
            fullWidth
            multiline
            minRows={4}
            placeholder={content.message.placeholder}
            value={values.message}
            onChange={update("message")}
            inputProps={inputA11y("message")}
            error={Boolean(errors.message)}
            sx={INPUT_SX}
          />
        </FormField>

        {status === "error" && (
          <Alert severity="error" variant="outlined">
            {content.failed}{" "}
            <Box component="a" href={`mailto:${recipient}`} sx={{ color: "inherit", fontWeight: 600 }}>
              {recipient}
            </Box>
          </Alert>
        )}

        <Box>
          <Button
            type="submit"
            variant="contained"
            disabled={pending}
            sx={{ bgcolor: "primary.dark", "&:hover": { bgcolor: wajaColors.foreground } }}
          >
            {pending ? content.sendingLabel : content.submitLabel}
          </Button>
        </Box>

        {/* Kept mounted (even when empty) so screen readers announce the note */}
        <Typography variant="caption" role="status" sx={{ color: "text.secondary" }}>
          {status === "mailto" ? content.sentNote : ""}
        </Typography>
      </Stack>
    </Box>
  );
}
