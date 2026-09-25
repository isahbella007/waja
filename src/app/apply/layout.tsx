import Box from "@mui/material/Box";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { wajaColors } from "@/theme/theme";

// Apply has no sub-sections, so no sub-nav: just the navbar, page and footer
export default function ApplyLayout({ children }: LayoutProps<"/apply">) {
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
