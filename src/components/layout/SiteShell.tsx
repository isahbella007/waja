import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { wajaColors } from "@/theme/theme";

// Page frame for top-level pages without sub-sections (Apply, Impact, ...):
// navbar, page content and footer, with no sub-nav.
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Box component="main" id="main-content" sx={{ bgcolor: wajaColors.background }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
