import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SHEET_PX } from "@/components/shared/PamphletSheet";
import type { ProgramTheme } from "@/theme/programThemes";
import type { ProgramDetail } from "@/constants/programs/programs";

// Full-width pull quote in the program's colour
export default function ProgramQuote({
  text,
  name,
  role,
  theme,
}: NonNullable<ProgramDetail["quote"]> & { theme: ProgramTheme }) {
  return (
    <Box component="section" sx={{ bgcolor: theme.surface, color: theme.onSurface, px: SHEET_PX, py: { xs: 7, md: 11 } }}>
      <Box>
        <Box component="figure" sx={{ m: 0, maxWidth: 900 }}>
          <Typography
            component="blockquote"
            sx={{
              m: 0,
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: { xs: "1.75rem", md: "2.75rem" },
              lineHeight: 1.2,
              color: theme.onSurface,
            }}
          >
            “{text}”
          </Typography>
          <Box component="figcaption" sx={{ mt: 3, pt: 2, borderTop: "1px solid", borderColor: theme.rule, maxWidth: 360 }}>
            <Typography variant="subtitle1" component="p" sx={{ color: theme.onSurface, fontWeight: 700 }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: theme.muted }}>
              {role}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
