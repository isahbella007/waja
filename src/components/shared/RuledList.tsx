import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { wajaColors } from "@/theme/theme";

const SERIF = "var(--font-heading), Georgia, serif";
const RULE = "1px solid rgba(22,78,99,0.18)";

// Ruled list in two columns from tablet up, optionally numbered
export default function RuledList({ items, accent, numbered }: { items: string[]; accent: string; numbered?: boolean }) {
  return (
    <Box
      component={numbered ? "ol" : "ul"}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        columnGap: 4,
        m: 0,
        p: 0,
        listStyle: "none",
        borderTop: RULE,
      }}
    >
      {items.map((item, index) => (
        <Box
          component="li"
          key={item}
          sx={{ display: "flex", alignItems: "baseline", gap: 2, py: 1.75, borderBottom: RULE }}
        >
          <Typography
            component="span"
            aria-hidden
            sx={{ fontFamily: SERIF, color: accent, fontSize: "0.95rem", minWidth: numbered ? 24 : 12, flexShrink: 0 }}
          >
            {numbered ? String(index + 1).padStart(2, "0") : "—"}
          </Typography>
          <Typography component="span" variant="body1" sx={{ color: wajaColors.foreground }}>
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
