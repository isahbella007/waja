"use client";

import * as React from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import NativeSelect from "@mui/material/NativeSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import FormField, { INPUT_SX } from "@/components/shared/form/FormField";
import { submitApplication, type SubmitApplicationResult } from "@/app/apply/form/actions";
import {
  APPLICATION_STEP_COUNT,
  EMPTY_APPLICATION,
  stepOfField,
  validateApplicationStep,
  type ApplicationErrors,
  type ApplicationField,
  type ApplicationValues,
} from "@/lib/application";
import { toTelHref } from "@/lib/phone";
import { wajaColors } from "@/theme/theme";
import type { ApplyFormContent } from "@/constants/apply/applyForm";

export type ProgramOption = { value: string; label: string };

const GRID_2 = { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 };

const CHOICE_SX = {
  m: 0,
  px: 2,
  py: 1,
  border: "1px solid",
  borderColor: wajaColors.border,
  borderRadius: "10px",
  bgcolor: "#FFFFFF",
  alignItems: "flex-start",
  "& .MuiRadio-root, & .MuiCheckbox-root": { mt: -0.5 },
  "&:has(input:checked)": { borderColor: wajaColors.primary, bgcolor: wajaColors.background },
};

export default function ApplicationForm({
  content,
  programs,
  initialProgram,
  privacyHref,
  contact,
}: {
  content: ApplyFormContent;
  programs: ProgramOption[];
  initialProgram?: string;
  privacyHref: string;
  contact: { email: string; phone: string };
}) {
  const [values, setValues] = React.useState<ApplicationValues>(() => ({
    ...EMPTY_APPLICATION,
    program: programs.some((p) => p.value === initialProgram) ? (initialProgram as string) : "",
  }));
  const [step, setStep] = React.useState(0);
  const [errors, setErrors] = React.useState<ApplicationErrors>({});
  const [honeypot, setHoneypot] = React.useState("");
  const [result, setResult] = React.useState<SubmitApplicationResult | null>(null);
  const [pending, startTransition] = React.useTransition();
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const moved = React.useRef(false);

  const behalf = values.filledBy === "behalf";
  const t = content;

  // Move focus to the new step's heading so keyboard and screen-reader users follow along
  React.useEffect(() => {
    if (!moved.current) return;
    headingRef.current?.focus();
    headingRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [step, result]);

  const set = <K extends ApplicationField>(field: K, value: ApplicationValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const errorText = (field: ApplicationField) => {
    const code = errors[field];
    return code ? t.errors[code] : undefined;
  };

  const focusFirstError = (errs: ApplicationErrors) => {
    const first = Object.keys(errs)[0];
    if (first) window.setTimeout(() => document.getElementById(`app-${first}`)?.focus(), 0);
  };

  const goTo = (next: number) => {
    moved.current = true;
    setErrors({});
    setStep(next);
  };

  const handleNext = () => {
    const stepErrors = validateApplicationStep(step, values);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      focusFirstError(stepErrors);
      return;
    }
    goTo(step + 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (step < APPLICATION_STEP_COUNT - 1) {
      handleNext();
      return;
    }
    const stepErrors = validateApplicationStep(step, values);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      focusFirstError(stepErrors);
      return;
    }
    startTransition(async () => {
      const response = await submitApplication(values, honeypot);
      if (response.status === "invalid") {
        // Server disagreed (shouldn't normally happen): jump to the first problem
        const first = Object.keys(response.errors)[0] as ApplicationField | undefined;
        moved.current = true;
        if (first) setStep(stepOfField(first));
        setErrors(response.errors);
        return;
      }
      moved.current = true;
      setResult(response);
    });
  };

  const textInput = (
    field: ApplicationField,
    props: { type?: string; autoComplete?: string; placeholder?: string; multiline?: boolean; hint?: boolean } = {},
  ) => {
    const id = `app-${field}`;
    const hasError = Boolean(errors[field]);
    const describedBy = hasError ? `${id}-error` : props.hint ? `${id}-hint` : undefined;
    return (
      <OutlinedInput
        fullWidth
        size="small"
        multiline={props.multiline}
        minRows={props.multiline ? 3 : undefined}
        type={props.type ?? "text"}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        value={values[field] as string}
        onChange={(e) => set(field, e.target.value as never)}
        error={hasError}
        inputProps={{ id, name: field, "aria-invalid": hasError || undefined, "aria-describedby": describedBy }}
        sx={INPUT_SX}
      />
    );
  };

  const selectInput = (field: ApplicationField, placeholder: string, options: string[]) => {
    const id = `app-${field}`;
    const hasError = Boolean(errors[field]);
    return (
      <NativeSelect
        fullWidth
        value={values[field] as string}
        onChange={(e) => set(field, e.target.value as never)}
        inputProps={{ id, name: field, "aria-invalid": hasError || undefined, "aria-describedby": hasError ? `${id}-error` : undefined }}
        input={<OutlinedInput size="small" error={hasError} sx={INPUT_SX} />}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </NativeSelect>
    );
  };

  const consentBox = (field: "consentPrivacy" | "consentBehalf", label: React.ReactNode) => {
    const id = `app-${field}`;
    const hasError = Boolean(errors[field]);
    return (
      <Box>
        <FormControlLabel
          sx={CHOICE_SX}
          control={
            <Checkbox
              checked={values[field]}
              onChange={(e) => set(field, e.target.checked)}
              slotProps={{ input: { id, "aria-invalid": hasError || undefined, "aria-describedby": hasError ? `${id}-error` : undefined } }}
            />
          }
          label={<Typography variant="body1" sx={{ color: wajaColors.foreground, py: 0.5 }}>{label}</Typography>}
        />
        {hasError && (
          <FormHelperText id={`${id}-error`} error sx={{ mx: 0 }}>
            {errorText(field)}
          </FormHelperText>
        )}
      </Box>
    );
  };

  const stepHeading = (text: string) => (
    <Typography
      ref={headingRef}
      tabIndex={-1}
      component="h2"
      variant="h4"
      sx={{ color: wajaColors.foreground, fontSize: { xs: "1.5rem", md: "1.9rem" }, outline: "none", scrollMarginTop: "96px" }}
    >
      {text}
    </Typography>
  );

  // ---------- Result screens ----------
  if (result) {
    const tone =
      result.status === "success"
        ? { title: t.results.successTitle, body: t.results.successBody, showContact: false }
        : result.status === "unavailable"
          ? { title: t.results.unavailableTitle, body: t.results.unavailableBody, showContact: true }
          : { title: t.results.errorTitle, body: t.results.errorBody, showContact: true };
    return (
      <Stack spacing={2} role="status">
        {stepHeading(tone.title)}
        <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 620 }}>
          {tone.body}
        </Typography>
        {tone.showContact && (
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
            <Button variant="contained" href={`mailto:${contact.email}`} sx={{ bgcolor: "primary.dark" }}>
              {contact.email}
            </Button>
            <Button variant="outlined" href={toTelHref(contact.phone)} sx={{ borderWidth: 2, "&:hover": { borderWidth: 2 } }}>
              {contact.phone}
            </Button>
          </Stack>
        )}
        {result.status === "error" && (
          <Box>
            <Button onClick={() => setResult(null)}>{t.back}</Button>
          </Box>
        )}
      </Stack>
    );
  }

  const hasErrors = Object.values(errors).some(Boolean);
  const programLabel = programs.find((p) => p.value === values.program)?.label ?? t.program.unsure;

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      {/* Progress: full stepper from tablet up, a simple counter on phones */}
      <Stepper activeStep={step} alternativeLabel sx={{ display: { xs: "none", sm: "flex" }, mb: 5 }}>
        {t.steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="overline" component="p" sx={{ display: { sm: "none" }, color: wajaColors.accent, letterSpacing: "0.12em", mb: 1 }}>
        {t.stepCounter.replace("{current}", String(step + 1)).replace("{total}", String(APPLICATION_STEP_COUNT))} ·{" "}
        {t.steps[step]}
      </Typography>

      {/* Hidden from people; bots tend to fill it */}
      <Box aria-hidden sx={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
        <label htmlFor="app-website">Website</label>
        <input id="app-website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </Box>

      <Stack spacing={3}>
        {step === 0 && (
          <>
            {stepHeading(t.steps[0])}
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ color: wajaColors.foreground, fontWeight: 600, mb: 1.5, "&.Mui-focused": { color: wajaColors.foreground } }}>
                {t.filledBy.legend}
              </FormLabel>
              <RadioGroup
                name="filledBy"
                value={values.filledBy}
                onChange={(e) => set("filledBy", e.target.value as ApplicationValues["filledBy"])}
                sx={{ gap: 1.5 }}
              >
                <FormControlLabel value="self" control={<Radio />} sx={CHOICE_SX} label={<Typography sx={{ py: 0.5 }}>{t.filledBy.self}</Typography>} />
                <FormControlLabel
                  value="behalf"
                  control={<Radio />}
                  sx={CHOICE_SX}
                  label={
                    <Box sx={{ py: 0.5 }}>
                      <Typography>{t.filledBy.behalf}</Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {t.filledBy.behalfHint}
                      </Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>

            {behalf && (
              <Stack spacing={2} sx={{ pt: 1 }}>
                <Typography component="h3" variant="h6" sx={{ color: wajaColors.foreground }}>
                  {t.registrant.heading}
                </Typography>
                <Box sx={GRID_2}>
                  <FormField id="app-registrantFirstName" label={t.registrant.firstName} error={errorText("registrantFirstName")}>
                    {textInput("registrantFirstName", { autoComplete: "given-name" })}
                  </FormField>
                  <FormField id="app-registrantLastName" label={t.registrant.lastName} error={errorText("registrantLastName")}>
                    {textInput("registrantLastName", { autoComplete: "family-name" })}
                  </FormField>
                </Box>
                <Box sx={GRID_2}>
                  <FormField id="app-registrantRole" label={t.registrant.role} error={errorText("registrantRole")}>
                    {selectInput("registrantRole", t.registrant.rolePlaceholder, t.registrant.roles)}
                  </FormField>
                  <FormField
                    id="app-registrantOrganization"
                    label={t.registrant.organization}
                    optionalLabel={t.optional}
                    hint={t.registrant.organizationHint}
                    error={errorText("registrantOrganization")}
                  >
                    {textInput("registrantOrganization", { autoComplete: "organization", hint: true })}
                  </FormField>
                </Box>
                <Box sx={GRID_2}>
                  <FormField id="app-registrantEmail" label={t.registrant.email} hint={t.applicant.contactHint} error={errorText("registrantEmail")}>
                    {textInput("registrantEmail", { type: "email", autoComplete: "email", hint: true })}
                  </FormField>
                  <FormField id="app-registrantPhone" label={t.registrant.phone} error={errorText("registrantPhone")}>
                    {textInput("registrantPhone", { type: "tel", autoComplete: "tel", placeholder: t.applicant.phonePlaceholder })}
                  </FormField>
                </Box>
              </Stack>
            )}
          </>
        )}

        {step === 1 && (
          <>
            {stepHeading(behalf ? t.applicant.headingBehalf : t.applicant.headingSelf)}
            <Box sx={GRID_2}>
              <FormField id="app-firstName" label={t.applicant.firstName} error={errorText("firstName")}>
                {textInput("firstName", { autoComplete: behalf ? "off" : "given-name" })}
              </FormField>
              <FormField id="app-lastName" label={t.applicant.lastName} error={errorText("lastName")}>
                {textInput("lastName", { autoComplete: behalf ? "off" : "family-name" })}
              </FormField>
            </Box>
            <Box sx={GRID_2}>
              <FormField
                id="app-email"
                label={t.applicant.email}
                optionalLabel={behalf ? t.optional : undefined}
                hint={t.applicant.contactHint}
                error={errorText("email")}
              >
                {textInput("email", { type: "email", autoComplete: behalf ? "off" : "email", hint: true })}
              </FormField>
              <FormField id="app-phone" label={t.applicant.phone} optionalLabel={behalf ? t.optional : undefined} error={errorText("phone")}>
                {textInput("phone", { type: "tel", autoComplete: behalf ? "off" : "tel", placeholder: t.applicant.phonePlaceholder })}
              </FormField>
            </Box>
            <FormField id="app-street" label={t.applicant.street} error={errorText("street")}>
              {textInput("street", { autoComplete: behalf ? "off" : "address-line1" })}
            </FormField>
            <FormField id="app-line2" label={t.applicant.line2} optionalLabel={t.optional}>
              {textInput("line2", { autoComplete: behalf ? "off" : "address-line2" })}
            </FormField>
            <Box sx={GRID_2}>
              <FormField id="app-city" label={t.applicant.city} error={errorText("city")}>
                {textInput("city", { autoComplete: behalf ? "off" : "address-level2" })}
              </FormField>
              <FormField id="app-region" label={t.applicant.region} error={errorText("region")}>
                {selectInput("region", t.applicant.regionPlaceholder, t.applicant.regions)}
              </FormField>
            </Box>
            <FormField
              id="app-digitalAddress"
              label={t.applicant.digitalAddress}
              optionalLabel={t.optional}
              hint={t.applicant.digitalAddressHint}
            >
              {textInput("digitalAddress", { hint: true })}
            </FormField>
          </>
        )}

        {step === 2 && (
          <>
            {stepHeading(t.steps[2])}
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ color: wajaColors.foreground, fontWeight: 600, mb: 1.5, "&.Mui-focused": { color: wajaColors.foreground } }}>
                {t.program.legend}
                <Typography component="span" variant="body2" sx={{ color: "text.secondary", ml: 0.75 }}>
                  ({t.optional})
                </Typography>
              </FormLabel>
              <RadioGroup name="program" value={values.program} onChange={(e) => set("program", e.target.value)} sx={{ gap: 1 }}>
                {[...programs, { value: "unsure", label: t.program.unsure }].map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    sx={CHOICE_SX}
                    label={<Typography sx={{ py: 0.5 }}>{option.label}</Typography>}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" error={Boolean(errors.employed)}>
              <FormLabel component="legend" sx={{ color: wajaColors.foreground, fontWeight: 600, mb: 1, "&.Mui-focused": { color: wajaColors.foreground } }}>
                {t.program.employed}
              </FormLabel>
              <RadioGroup
                row
                name="employed"
                value={values.employed}
                onChange={(e) => set("employed", e.target.value as ApplicationValues["employed"])}
                sx={{ gap: 1.5 }}
                aria-describedby={errors.employed ? "app-employed-error" : undefined}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio slotProps={{ input: { id: "app-employed" } }} />}
                  sx={{ ...CHOICE_SX, pr: 3 }}
                  label={<Typography sx={{ py: 0.5 }}>{t.program.yes}</Typography>}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  sx={{ ...CHOICE_SX, pr: 3 }}
                  label={<Typography sx={{ py: 0.5 }}>{t.program.no}</Typography>}
                />
              </RadioGroup>
              {errors.employed && (
                <FormHelperText id="app-employed-error" sx={{ mx: 0 }}>
                  {errorText("employed")}
                </FormHelperText>
              )}
            </FormControl>

            <FormField id="app-goals" label={t.program.goals} hint={t.program.goalsHint} error={errorText("goals")}>
              {textInput("goals", { multiline: true, hint: true })}
            </FormField>
            <FormField id="app-needs" label={t.program.needs} optionalLabel={t.optional} hint={t.program.needsHint}>
              {textInput("needs", { multiline: true, hint: true })}
            </FormField>
          </>
        )}

        {step === 3 && (
          <>
            {stepHeading(t.review.heading)}
            <Box component="dl" sx={{ m: 0, borderTop: "1px solid rgba(22,78,99,0.18)" }}>
              {[
                { label: t.review.applicantLabel, value: `${values.firstName} ${values.lastName}`.trim(), step: 1 },
                { label: t.review.contactLabel, value: [values.email, values.phone].filter(Boolean).join(" · ") || "—", step: 1 },
                { label: t.review.programLabel, value: values.program ? programLabel : t.program.unsure, step: 2 },
                ...(behalf
                  ? [
                      {
                        label: t.review.filledByLabel,
                        value: [`${values.registrantFirstName} ${values.registrantLastName}`.trim(), values.registrantRole, values.registrantOrganization]
                          .filter(Boolean)
                          .join(" · "),
                        step: 0,
                      },
                    ]
                  : []),
              ].map((row) => (
                <Box
                  key={row.label}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr auto", sm: "160px 1fr auto" },
                    gap: 1,
                    alignItems: "baseline",
                    py: 1.5,
                    borderBottom: "1px solid rgba(22,78,99,0.18)",
                  }}
                >
                  <Typography component="dt" variant="body2" sx={{ color: "text.secondary", gridColumn: { xs: "1 / -1", sm: "auto" } }}>
                    {row.label}
                  </Typography>
                  <Typography component="dd" variant="body1" sx={{ m: 0, color: wajaColors.foreground, fontWeight: 600, wordBreak: "break-word" }}>
                    {row.value}
                  </Typography>
                  <Button size="small" onClick={() => goTo(row.step)} sx={{ minHeight: 0, py: 0.5, px: 1 }}>
                    {t.review.edit}
                    <Box component="span" sx={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                      {` ${row.label}`}
                    </Box>
                  </Button>
                </Box>
              ))}
            </Box>

            {behalf && (
              <Stack spacing={1.5}>
                <Typography variant="body1" sx={{ color: wajaColors.foreground, fontWeight: 600 }}>
                  {t.review.behalfConsentIntro}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 3, color: "text.secondary" }}>
                  {t.review.behalfConsentItems.map((item) => (
                    <Typography component="li" variant="body1" key={item} sx={{ mb: 0.5 }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
                {consentBox("consentBehalf", t.review.behalfConsent)}
              </Stack>
            )}

            {consentBox(
              "consentPrivacy",
              <>
                {t.review.privacyConsent}{" "}
                <Box
                  component="a"
                  href={privacyHref}
                  target="_blank"
                  rel="noopener"
                  sx={{ color: wajaColors.primaryDark, fontWeight: 600 }}
                >
                  {t.review.privacyLinkLabel}
                </Box>
              </>,
            )}
          </>
        )}

        {hasErrors && (
          <Alert severity="error" variant="outlined" sx={{ bgcolor: "#FFFFFF" }}>
            {t.errors.summary}
          </Alert>
        )}

        <Stack direction="row" spacing={1.5} sx={{ justifyContent: "space-between", pt: 1 }}>
          {step > 0 ? (
            <Button type="button" variant="outlined" onClick={() => goTo(step - 1)} sx={{ borderWidth: 2, "&:hover": { borderWidth: 2 } }}>
              {t.back}
            </Button>
          ) : (
            <span />
          )}
          <Button
            type="submit"
            variant="contained"
            disabled={pending}
            sx={{
              bgcolor: step === APPLICATION_STEP_COUNT - 1 ? wajaColors.accent : "primary.dark",
              "&:hover": { bgcolor: step === APPLICATION_STEP_COUNT - 1 ? wajaColors.accentDark : wajaColors.foreground },
            }}
          >
            {step < APPLICATION_STEP_COUNT - 1 ? t.next : pending ? t.submitting : t.submit}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
