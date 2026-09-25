import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SectionTitle from "@/components/shared/SectionTitle";
import { wajaColors } from "@/theme/theme";
import type { ProgramsOverviewContent, SkillIcon } from "@/constants/programs/overview";

const ICONS: Record<SkillIcon, typeof BoltOutlinedIcon> = {
  diagnostics: DesktopWindowsOutlinedIcon,
  ai: AutoAwesomeOutlinedIcon,
  ev: BoltOutlinedIcon,
  electrical: ElectricalServicesOutlinedIcon,
  records: DescriptionOutlinedIcon,
  operations: ListAltOutlinedIcon,
};

export default function SkillAreas({ items, ...heading }: ProgramsOverviewContent["skills"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 8 }}>
      <Grid size={{ xs: 12, md: 5 }}>
        {/* Heading stays in view while the list scrolls past on desktop */}
        <Box sx={{ position: { md: "sticky" }, top: { md: 120 } }}>
          <SectionTitle {...heading} />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 7 }}>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", borderTop: "1px solid", borderColor: "divider" }}>
          {items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <Box
                component="li"
                key={item.title}
                sx={{
                  display: "grid",
                  // Icon | title | description. On phones the description drops under the title.
                  gridTemplateColumns: { xs: "24px 1fr", sm: "28px minmax(0, 2fr) minmax(0, 3fr)" },
                  columnGap: { xs: 2, md: 3 },
                  rowGap: 0.75,
                  alignItems: "start",
                  py: { xs: 2.5, md: 3 },
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Icon aria-hidden sx={{ fontSize: 24, color: wajaColors.accent, mt: 0.25 }} />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ color: wajaColors.foreground, fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.35 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", gridColumn: { xs: "2", sm: "auto" } }}>
                  {item.description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
