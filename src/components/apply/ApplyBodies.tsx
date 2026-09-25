// Content inside each numbered section of the Apply leaflet (/apply)
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RuledList from "@/components/shared/RuledList";
import ArrowLink from "@/components/shared/ArrowLink";
import { wajaColors } from "@/theme/theme";
import type { ApplyPageContent } from "@/constants/apply/applyPage";
import type { CtaLink } from "@/constants/types";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.18)";

function SubHeading({ children }: { children: string }) {
  return (
    <Typography component="h3" variant="h6" sx={{ color: wajaColors.foreground, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

export function OverviewBody({
  items,
  programsLabel,
  programLinks,
  accent,
}: ApplyPageContent["overview"] & { programLinks: CtaLink[]; accent: string }) {
  return (
    <Stack spacing={3}>
      <RuledList items={items} accent={accent} numbered />
      <Box>
        <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, mb: 1 }}>
          {programsLabel}
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 3 }}>
          {programLinks.map((link) => (
            <ArrowLink key={link.href} {...link} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

export function EligibilityBody({ items, note, commitment, accent }: ApplyPageContent["eligibility"] & { accent: string }) {
  return (
    <Stack spacing={3}>
      <RuledList items={items} accent={accent} />
      <Typography sx={{ fontFamily: SERIF, fontSize: { xs: "1.35rem", md: "1.6rem" }, color: wajaColors.foreground, lineHeight: 1.3 }}>
        {note}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {commitment}
      </Typography>
    </Stack>
  );
}

export function WaysToApplyBody({ options, help, accent }: ApplyPageContent["waysToApply"] & { accent: string }) {
  return (
    <Stack spacing={3}>
      <Box
        component="ol"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: `repeat(${options.length}, 1fr)` },
          gap: { xs: 0, md: 4 },
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {options.map((option, index) => (
          <Box component="li" key={option.title} sx={{ borderTop: `2px solid ${accent}`, pt: 2, pb: { xs: 3, md: 0 } }}>
            <Typography component="p" aria-hidden sx={{ fontFamily: SERIF, color: accent, fontSize: "1rem", mb: 0.5 }}>
              {String(index + 1).padStart(2, "0")}
            </Typography>
            <Typography component="h3" variant="h6" sx={{ color: wajaColors.foreground, mb: 1 }}>
              {option.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {option.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2 }} sx={{ alignItems: { sm: "center" } }}>
        <Typography variant="body1" sx={{ color: wajaColors.foreground }}>
          {help.text}
        </Typography>
        <ArrowLink {...help.link} />
      </Stack>
    </Stack>
  );
}

export function AssistedBody({ intro, barriers, whoMay, requirements, consent, accent }: ApplyPageContent["assisted"] & { accent: string }) {
  return (
    <Stack spacing={5}>
      <Stack spacing={2.5}>
        <Typography variant="body1" sx={{ color: wajaColors.foreground, fontSize: "1.1rem" }}>
          {intro}
        </Typography>
        <RuledList items={barriers} accent={accent} />
      </Stack>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 5, lg: 5 } }}>
        <Box>
          <SubHeading>{whoMay.title}</SubHeading>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", borderTop: RULE }}>
            {whoMay.items.map((item) => (
              <Typography component="li" variant="body1" key={item} sx={{ py: 1.25, borderBottom: RULE, color: wajaColors.foreground }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box>
          <SubHeading>{requirements.title}</SubHeading>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", borderTop: RULE }}>
            {requirements.items.map((item) => (
              <Typography component="li" variant="body1" key={item} sx={{ py: 1.25, borderBottom: RULE, color: wajaColors.foreground }}>
                {item}
              </Typography>
            ))}
          </Box>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
            {requirements.note}
          </Typography>
        </Box>
      </Box>

      {/* The consent notice reads like a boxed notice on a printed form */}
      <Box sx={{ border: `1px solid ${accent}`, borderLeftWidth: 4, p: { xs: 2.5, md: 3.5 }, bgcolor: "rgba(255,255,255,0.6)" }}>
        <SubHeading>{consent.title}</SubHeading>
        <Typography variant="body1" sx={{ color: wajaColors.foreground, mb: 1 }}>
          {consent.intro}
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 3, color: wajaColors.foreground }}>
          {consent.items.map((item) => (
            <Typography component="li" variant="body1" key={item} sx={{ mb: 0.5 }}>
              {item}
            </Typography>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: accent, fontWeight: 700, mt: 2 }}>
          {consent.warning}
        </Typography>
      </Box>
    </Stack>
  );
}

export function AfterApplyingBody({ steps, note, accent }: ApplyPageContent["afterApplying"] & { accent: string }) {
  return (
    <Stack spacing={3}>
      <Box
        component="ol"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: `repeat(${steps.length}, 1fr)` },
          gap: { xs: 0, sm: 3 },
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {steps.map((step, index) => (
          <Box
            component="li"
            key={step}
            sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: { xs: 2, lg: 1 }, alignItems: "baseline", py: { xs: 1.5, lg: 0 }, borderBottom: { xs: RULE, lg: "none" } }}
          >
            <Typography component="span" aria-hidden sx={{ fontFamily: SERIF, fontWeight: 300, color: accent, fontSize: { xs: "1.75rem", lg: "2.5rem" }, lineHeight: 1 }}>
              {index + 1}
            </Typography>
            <Typography component="span" variant="body1" sx={{ color: wajaColors.foreground, fontWeight: 600 }}>
              {step}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {note}
      </Typography>
    </Stack>
  );
}

export function PrivacyBody({ intro, items, accent }: ApplyPageContent["privacy"] & { accent: string }) {
  return (
    <Stack spacing={2}>
      <Typography variant="body1" sx={{ color: wajaColors.foreground }}>
        {intro}
      </Typography>
      <RuledList items={items} accent={accent} />
    </Stack>
  );
}

export function FaqBody({ items }: ApplyPageContent["faq"]) {
  return (
    <Box component="dl" sx={{ m: 0, borderTop: RULE }}>
      {items.map((item) => (
        <Box key={item.question} sx={{ py: 2.5, borderBottom: RULE }}>
          <Typography component="dt" sx={{ fontFamily: SERIF, fontSize: { xs: "1.2rem", md: "1.35rem" }, color: wajaColors.foreground, mb: 0.75 }}>
            {item.question}
          </Typography>
          <Typography component="dd" variant="body1" sx={{ m: 0, color: "text.secondary" }}>
            {item.answer}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
