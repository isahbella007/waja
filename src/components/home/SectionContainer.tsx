import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";

export default function SectionContainer({
  children,
  id,
  bgcolor,
  py = { xs: 8, md: 12 },
}: {
  children: ReactNode;
  id?: string;
  bgcolor?: string;
  py?: { xs: number; md: number };
}) {
  return (
    <Box component="section" id={id} sx={{ bgcolor, py, scrollMarginTop: "80px" }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
