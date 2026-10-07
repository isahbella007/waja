"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import { typeScale, wajaColors } from "@/theme/theme";
import type { VolunteerPageContent } from "@/constants/getInvolved/volunteer";

const RULE = "1px solid rgba(22,78,99,0.2)";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LABEL_SX = {
  display: "block",
  color: wajaColors.foreground,
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  mb: 0.5,
} as const;

// Underlined inputs, like writing on a printed form
const UNDERLINE_INPUT_SX = {
  width: "100%",
  fontSize: "0.95rem",
  color: wajaColors.foreground,
  borderBottom: `1px solid ${wajaColors.foreground}55`,
  py: 0.5,
  "&.Mui-focused": { borderBottomColor: wajaColors.primaryDark, boxShadow: `0 1px 0 ${wajaColors.primaryDark}` },
  "&.Mui-error": { borderBottomColor: wajaColors.destructive },
};

type FormValues = { name: string; email: string; location: string; time: string; message: string };
type FormErrors = Partial<Record<"name" | "email" | "roles", string>>;

// ---------- Role picker: vertical tabs on the left, details on the right ----------
function RolePicker({
  content,
  activeId,
  onActivate,
  onChoose,
}: {
  content: VolunteerPageContent["roles"];
  activeId: string;
  onActivate: (id: string) => void;
  onChoose: (id: string) => void;
}) {
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = Math.max(0, content.list.findIndex((r) => r.id === activeId));
  const role = content.list[activeIndex];

  // Arrow keys move between tabs, as screen-reader users expect
  const onKeyDown = (event: React.KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next: number | undefined;
    if (event.key in keys) next = (activeIndex + keys[event.key] + content.list.length) % content.list.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = content.list.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    onActivate(content.list[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      <SectionTitle eyebrow={content.eyebrow} title={content.title} />
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box role="tablist" aria-orientation="vertical" aria-label={content.eyebrow} onKeyDown={onKeyDown}>
            {content.list.map((r, index) => {
              const selected = r.id === activeId;
              return (
                <Box
                  key={r.id}
                  component="button"
                  type="button"
                  role="tab"
                  id={`role-tab-${r.id}`}
                  aria-selected={selected}
                  aria-controls="role-panel"
                  tabIndex={selected ? 0 : -1}
                  ref={(el: HTMLButtonElement | null) => {
                    tabRefs.current[index] = el;
                  }}
                  onClick={() => onActivate(r.id)}
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 2.5,
                    width: "100%",
                    textAlign: "left",
                    font: "inherit",
                    cursor: "pointer",
                    border: 0,
                    borderBottom: RULE,
                    borderLeft: "3px solid",
                    borderLeftColor: selected ? wajaColors.accent : "transparent",
                    bgcolor: selected ? "#FFFFFF" : "transparent",
                    boxShadow: selected ? "0 4px 14px rgba(22,78,99,0.08)" : "none",
                    px: 2,
                    py: { xs: 1.75, md: 2 },
                    transition: "background-color 150ms ease, border-color 150ms ease",
                    "&:hover": { bgcolor: selected ? "#FFFFFF" : "rgba(255,255,255,0.6)" },
                    "&:focus-visible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 2 },
                  }}
                >
                  <Typography component="span" sx={{ fontSize: "0.8rem", fontWeight: 700, color: selected ? wajaColors.accentDark : wajaColors.mutedForeground }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "var(--font-heading), Georgia, serif",
                      fontSize: { xs: "1.15rem", md: "1.3rem" },
                      lineHeight: 1.25,
                      color: wajaColors.foreground,
                      fontWeight: selected ? 600 : 400,
                    }}
                  >
                    {r.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box role="tabpanel" id="role-panel" aria-labelledby={`role-tab-${role.id}`} tabIndex={0} sx={{ outline: "none" }}>
            <Typography variant="overline" component="p" sx={{ color: wajaColors.accentDark, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.5, mb: 1 }}>
              {`${String(activeIndex + 1).padStart(2, "0")} · ${content.detailEyebrow}`}
            </Typography>
            <Typography variant="body1" sx={{ color: wajaColors.foreground, fontSize: "1.05rem", mb: 2 }}>
              {role.summary}
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", borderTop: RULE, mb: 3 }}>
              {role.tasks.map((task) => (
                <Box component="li" key={task} sx={{ display: "flex", gap: 1.5, alignItems: "baseline", py: 1.25, borderBottom: RULE }}>
                  <Box component="span" aria-hidden sx={{ color: wajaColors.accent, fontWeight: 700 }}>
                    —
                  </Box>
                  <Typography component="span" variant="body2" sx={{ color: wajaColors.foreground }}>
                    {task}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1.5, sm: 2.5 }} sx={{ alignItems: { sm: "center" } }}>
              <Button
                variant="contained"
                onClick={() => onChoose(role.id)}
                sx={{ bgcolor: wajaColors.accent, color: "#FFFFFF", alignSelf: "flex-start", "&:hover": { bgcolor: wajaColors.accentDark } }}
              >
                {content.choose}
              </Button>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {role.note}
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

// ---------- Interest form ----------
function InterestForm({
  content,
  roles,
  chosen,
  onToggle,
  email,
  headingRef,
}: {
  content: VolunteerPageContent["form"];
  roles: VolunteerPageContent["roles"]["list"];
  chosen: string[];
  onToggle: (id: string) => void;
  email: string;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  const [values, setValues] = React.useState<FormValues>({ name: "", email: "", location: "", time: "", message: "" });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [sent, setSent] = React.useState(false);

  const set = (key: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = content.errors.name;
    if (!values.email.trim()) next.email = content.errors.email;
    else if (!EMAIL_PATTERN.test(values.email.trim())) next.email = content.errors.invalidEmail;
    if (chosen.length === 0) next.roles = content.errors.roles;
    setErrors(next);
    const first = (["name", "email", "roles"] as const).find((key) => next[key]);
    if (first) {
      document.getElementById(first === "roles" ? `vol-role-${roles[0]?.id}` : `vol-${first}`)?.focus();
      return;
    }

    // No mail service yet, so hand the message to the visitor's email app
    const roleTitles = roles.filter((r) => chosen.includes(r.id)).map((r) => r.title);
    const lines = [
      `${content.name.label}: ${values.name.trim()}`,
      `${content.email.label}: ${values.email.trim()}`,
      `${content.roles.label}: ${roleTitles.join(", ")}`,
      values.location.trim() && `${content.location.label}: ${values.location.trim()}`,
      values.time.trim() && `${content.time.label}: ${values.time.trim()}`,
      values.message.trim() && `\n${values.message.trim()}`,
    ].filter(Boolean);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${content.emailSubject}: ${values.name.trim()}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  const field = (key: keyof FormValues, label: string, placeholder: string, props: { type?: string; autoComplete?: string; error?: string } = {}) => (
    <Box>
      <Typography component="label" htmlFor={`vol-${key}`} sx={LABEL_SX}>
        {label}
      </Typography>
      <InputBase
        id={`vol-${key}`}
        name={key}
        type={props.type ?? "text"}
        autoComplete={props.autoComplete}
        placeholder={placeholder}
        value={values[key]}
        onChange={set(key)}
        error={Boolean(props.error)}
        inputProps={{ "aria-invalid": Boolean(props.error) || undefined, "aria-describedby": props.error ? `vol-${key}-error` : undefined }}
        sx={UNDERLINE_INPUT_SX}
      />
      {props.error && (
        <FormHelperText id={`vol-${key}-error`} error sx={{ mx: 0 }}>
          {props.error}
        </FormHelperText>
      )}
    </Box>
  );

  return (
    <Box sx={{ bgcolor: "#CFFAFE", px: { xs: 2.5, sm: 4, md: 6 }, py: { xs: 4, md: 6 } }}>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            ref={headingRef}
            tabIndex={-1}
            component="h2"
            variant="h3"
            sx={{ color: wajaColors.foreground, ...typeScale.sectionTitle, mb: 1.5, outline: "none" }}
          >
            {content.title}
          </Typography>
          <Typography variant="body2" sx={{ color: wajaColors.foreground, mb: 2 }}>
            {content.description}
          </Typography>
          <Typography variant="body2" sx={{ color: wajaColors.foreground }}>
            {content.emailPrompt}{" "}
            <Box component="a" href={`mailto:${email}`} sx={{ color: wajaColors.primaryDark, fontWeight: 600 }}>
              {email}
            </Box>
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3 }}>
                {field("name", content.name.label, content.name.placeholder, { autoComplete: "name", error: errors.name })}
                {field("email", content.email.label, content.email.placeholder, { type: "email", autoComplete: "email", error: errors.email })}
              </Box>

              <Box component="fieldset" sx={{ border: 0, m: 0, p: 0, minWidth: 0 }} aria-describedby={errors.roles ? "vol-roles-error" : undefined}>
                <Typography component="legend" sx={{ ...LABEL_SX, p: 0, mb: 1.25 }}>
                  {content.roles.label}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {roles.map((r) => {
                    const on = chosen.includes(r.id);
                    return (
                      <Box
                        key={r.id}
                        id={`vol-role-${r.id}`}
                        component="button"
                        type="button"
                        aria-pressed={on}
                        onClick={() => onToggle(r.id)}
                        sx={{
                          font: "inherit",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          px: 1.75,
                          py: 0.75,
                          minHeight: 36,
                          borderRadius: "999px",
                          border: `1px solid ${on ? wajaColors.foreground : `${wajaColors.foreground}55`}`,
                          bgcolor: on ? wajaColors.foreground : "#FFFFFF",
                          color: on ? "#FFFFFF" : wajaColors.foreground,
                          transition: "background-color 150ms ease, color 150ms ease",
                          "&:hover": { borderColor: wajaColors.foreground },
                          "&:focus-visible": { outline: `3px solid ${wajaColors.primary}`, outlineOffset: 2 },
                        }}
                      >
                        {r.title}
                      </Box>
                    );
                  })}
                </Box>
                {errors.roles && (
                  <FormHelperText id="vol-roles-error" error sx={{ mx: 0 }}>
                    {errors.roles}
                  </FormHelperText>
                )}
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3 }}>
                {field("location", content.location.label, content.location.placeholder, { autoComplete: "address-level2" })}
                {field("time", content.time.label, content.time.placeholder)}
              </Box>
              {field("message", content.message.label, content.message.placeholder)}

              <Box>
                <Button type="submit" variant="contained" sx={{ bgcolor: wajaColors.foreground, color: "#FFFFFF", "&:hover": { bgcolor: wajaColors.primaryDark } }}>
                  {content.submit}
                </Button>
              </Box>
              <Typography variant="caption" role="status" sx={{ color: wajaColors.foreground }}>
                {sent ? content.sentNote : ""}
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

// ---------- Picker + "who we're looking for" + form, sharing the chosen roles ----------
export default function VolunteerRolesAndForm({
  roles,
  form,
  email,
  children,
}: {
  roles: VolunteerPageContent["roles"];
  form: VolunteerPageContent["form"];
  email: string;
  /** Rendered between the picker and the form */
  children: React.ReactNode;
}) {
  const [activeId, setActiveId] = React.useState(roles.list[0]?.id ?? "");
  const [chosen, setChosen] = React.useState<string[]>([]);
  const formRef = React.useRef<HTMLDivElement>(null);
  const headingRef = React.useRef<HTMLHeadingElement>(null);

  const toggle = (id: string) => setChosen((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  // "This sounds like me": tick the role in the form and bring the form into view
  const choose = (id: string) => {
    setChosen((prev) => (prev.includes(id) ? prev : [...prev, id]));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    formRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    headingRef.current?.focus({ preventScroll: true });
  };

  return (
    <Stack spacing={{ xs: 8, md: 12 }}>
      <RolePicker content={roles} activeId={activeId} onActivate={setActiveId} onChoose={choose} />
      {children}
      <Box ref={formRef} id="volunteer-form" sx={{ scrollMarginTop: "96px" }}>
        <InterestForm content={form} roles={roles.list} chosen={chosen} onToggle={toggle} email={email} headingRef={headingRef} />
      </Box>
    </Stack>
  );
}
