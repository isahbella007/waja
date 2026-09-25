import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageIntro from "@/components/shared/PageIntro";
import MediaFrame from "@/components/shared/MediaFrame";
import ActionButton from "@/components/shared/ActionButton";
import { wajaColors } from "@/theme/theme";
import type { ProgramsOverviewContent } from "@/constants/programs/overview";

export default function ProgramsIntro({
  lead,
  primaryAction,
  secondaryAction,
  image,
  ...heading
}: ProgramsOverviewContent["intro"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack spacing={2.5}>
          <PageIntro {...heading} />
          {/* <Typography variant="h6" component="p" sx={{ color: wajaColors.foreground, fontWeight: 600 }}>
            {lead} 
          </Typography> */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
            <ActionButton
              {...primaryAction}
              variant="contained"
              sx={{ bgcolor: "primary.dark", "&:hover": { bgcolor: wajaColors.foreground } }}
            />
            <ActionButton
              {...secondaryAction}
              variant="outlined"
              sx={{
                color: "primary.dark",
                borderColor: "primary.dark",
                borderWidth: 2,
                bgcolor: "#FFFFFF",
                "&:hover": { borderWidth: 2, bgcolor: wajaColors.background },
              }}
            />
          </Stack>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <MediaFrame
          image={image}
          sizes="(min-width: 900px) 50vw, 100vw"
          placeholderBg="#CFFAFE"
          placeholderColor={wajaColors.primaryDark}
          sx={{ aspectRatio: "4 / 3", borderRadius: "16px", border: "1px solid", borderColor: "divider" }}
        />
      </Grid>
    </Grid>
  );
}
