import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/shared/SectionTitle";
import MediaFrame from "@/components/shared/MediaFrame";
import { wajaColors } from "@/theme/theme";
import type { TeamContent } from "@/constants/about/team";

export default function VolunteerList({ people, ...heading }: TeamContent["volunteers"]) {
  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      <SectionTitle {...heading} />
      <Box
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {people.map((person) => (
          <Box
            component="li"
            key={person.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: "#FFFFFF",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "12px",
              p: 2.5,
            }}
          >
            <MediaFrame
              image={person.image}
              sizes="56px"
              placeholderBg="#CFFAFE"
              placeholderColor={wajaColors.primaryDark}
              sx={{ width: 56, height: 56, flexShrink: 0, borderRadius: "50%", "& .MuiTypography-root": { fontSize: "0.6rem" } }}
            />
            <Box>
              <Typography variant="subtitle1" component="h3" sx={{ color: wajaColors.foreground, fontWeight: 700 }}>
                {person.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {person.role}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
