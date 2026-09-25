import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import SubNav from "@/components/layout/SubNav";
import { wajaColors } from "@/theme/theme";
import type { ActionLink, NavItem } from "@/constants/types";

// Page frame for a top-level nav section (About, Programs, ...): navbar,
// the section's sub-nav, the page content and the footer.
export default function SectionShell({
  section,
  action,
  children,
}: {
  section: NavItem;
  action?: ActionLink;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <SubNav items={section.children ?? []} label={`${section.label} sections`} action={action} />
      <Box component="main" id="main-content" sx={{ bgcolor: wajaColors.background }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
