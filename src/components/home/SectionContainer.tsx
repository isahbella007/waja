import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { wajaColors } from "@/theme/theme";

export default function SectionContainer({
  children,
  id,
  bgcolor = wajaColors.background,
  py = { xs: 8, md: 12 },
  pt,
  pb,
}: {
  children: ReactNode;
  id?: string;
  bgcolor?: string;
  py?: { xs: number; md: number };
  pt?: { xs: number; md: number };
  pb?: { xs: number; md: number };
}) {
  return (
    <Box component="section" id={id} sx={{ bgcolor, py, pt, pb, scrollMarginTop: "80px" }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
