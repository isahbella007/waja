import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PageIntro from "@/components/shared/PageIntro";
import ArrowLink from "@/components/shared/ArrowLink";
import { GET_INVOLVED_OVERVIEW } from "@/constants/getInvolved/overview";

// Temporary pages for Give, Partner, Volunteer and Events until each is designed.
// Slug comes from each way's href, e.g. /get-involved/give -> "give".
const slugOf = (href: string) => href.split("/").pop() ?? "";

// Ways that now have their own designed pages (static folders win over this route)
const BUILT = new Set(["give"]);

export const dynamicParams = false;

export function generateStaticParams() {
  return GET_INVOLVED_OVERVIEW.ways
    .map((way) => ({ slug: slugOf(way.href) }))
    .filter(({ slug }) => !BUILT.has(slug));
}

export async function generateMetadata({ params }: PageProps<"/get-involved/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const way = GET_INVOLVED_OVERVIEW.ways.find((w) => slugOf(w.href) === slug);
  return way ? { title: `${way.title} | WAJA`, description: way.description } : {};
}

export default async function GetInvolvedWayPage({ params }: PageProps<"/get-involved/[slug]">) {
  const { slug } = await params;
  const way = GET_INVOLVED_OVERVIEW.ways.find((w) => slugOf(w.href) === slug);
  if (!way) notFound();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <PageIntro eyebrow={way.audience} title={way.title} description={way.description} />
      <Typography variant="body1" sx={{ color: "text.secondary", mt: 3, maxWidth: 600 }}>
        {GET_INVOLVED_OVERVIEW.comingSoon}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <ArrowLink {...GET_INVOLVED_OVERVIEW.ask.contactLink} />
      </Box>
    </Container>
  );
}
