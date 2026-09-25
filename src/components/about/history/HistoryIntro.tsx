import Grid from "@mui/material/Grid";
import PageIntro from "@/components/shared/PageIntro";
import MediaFrame from "@/components/shared/MediaFrame";
import { wajaColors } from "@/theme/theme";
import type { HistoryContent } from "@/constants/about/history";

export default function HistoryIntro({ image, ...heading }: HistoryContent["intro"]) {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
      <Grid size={{ xs: 12, md: 7 }}>
        <PageIntro {...heading} />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <MediaFrame
          image={image}
          sizes="(min-width: 900px) 40vw, 100vw"
          placeholderBg="#CFFAFE"
          placeholderColor={wajaColors.primaryDark}
          sx={{
            aspectRatio: "4 / 3",
            borderRadius: "16px",
            border: "1px solid",
            borderColor: "divider",
          }}
        />
      </Grid>
    </Grid>
  );
}
