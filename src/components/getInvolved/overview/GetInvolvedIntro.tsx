import Grid from "@mui/material/Grid";
import PageIntro from "@/components/shared/PageIntro";
import RuledLinkList from "@/components/shared/RuledLinkList";
import type { GetInvolvedOverviewContent, InvolvementWay } from "@/constants/getInvolved/overview";

// Heading on the left, a ruled jump list to the four ways on the right
export default function GetInvolvedIntro({
  eyebrow,
  title,
  description,
  jumpLabel,
  ways,
}: GetInvolvedOverviewContent["intro"] & { ways: InvolvementWay[] }) {
  return (
    <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "flex-end" }}>
      <Grid size={{ xs: 12, md: 8 }}>
        <PageIntro eyebrow={eyebrow} title={title} description={description} />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <RuledLinkList label={jumpLabel} links={ways.map((way) => ({ label: way.title, href: `#${way.id}` }))} />
      </Grid>
    </Grid>
  );
}
