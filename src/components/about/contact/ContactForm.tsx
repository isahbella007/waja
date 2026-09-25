"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NativeSelect from "@mui/material/NativeSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormField, { INPUT_SX } from "@/components/shared/form/FormField";
import { wajaColors } from "@/theme/theme";
import type { ContactPageContent } from "@/constants/about/contact";

type Values = { name: string; email: string; topic: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const [values, setValues] = React.useState<Values>({ name: "", email: "", topic: defaultTopic, message: "" });
  const [errors, setErrors] = React.useState<Errors>({});
  const [sent, setSent] = React.useState(false);

  const update = (key: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = content.name.requiredError;
    if (!values.email.trim()) next.email = content.email.requiredError;
    else if (!EMAIL_PATTERN.test(values.email.trim())) next.email = content.email.invalidError;
    if (!values.message.trim()) next.message = content.message.requiredError;
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    const firstInvalid = (Object.keys(nextErrors) as (keyof Values)[])[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // No mail service yet, so hand the message to the visitor's email app
    const topicLabel = content.topics.find((t) => t.value === values.topic)?.label ?? values.topic;
    const subject = `${topicLabel}: message from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputA11y = (key: keyof Values) => ({
    id: `contact-${key}`,
    name: key,
    "aria-invalid": Boolean(errors[key]) || undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
  });

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      sx={{
        bgcolor: "#FFFFFF",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "16px",
        p: { xs: 3, md: 4 },
      }}
    >
      <Typography id="contact-form-title" component="h2" variant="h4" sx={{ color: wajaColors.foreground, fontWeight: 700, mb: 3 }}>
        {content.title}
      </Typography>

      <Stack spacing={2.5}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
          <FormField id="contact-name" label={content.name.label} error={errors.name}>
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
          <FormField id="contact-email" label={content.email.label} error={errors.email}>
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

        <FormField id="contact-message" label={content.message.label} error={errors.message}>
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

        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "primary.dark", "&:hover": { bgcolor: wajaColors.foreground } }}
          >
            {content.submitLabel}
          </Button>
        </Box>

        {/* Kept mounted (even when empty) so screen readers announce the note */}
        <Typography variant="caption" role="status" sx={{ color: "text.secondary" }}>
          {sent ? content.sentNote : ""}
        </Typography>
      </Stack>
    </Box>
  );
}
