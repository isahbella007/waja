"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";

const NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Our Story", href: "#graduate-story" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid",
          borderColor: "divider",
          boxShadow: scrolled ? "0 4px 6px rgba(0,0,0,0.06)" : "none",
          transition: "box-shadow 200ms ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1, gap: 2 }}>
            <Typography
              component="a"
              href="#main-content"
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                flexGrow: 1,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              WAJA
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
              {NAV_LINKS.map((link) => (
                <Typography
                  key={link.href}
                  component="a"
                  href={link.href}
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                    "&:focus-visible": {
                      outline: "3px solid",
                      outlineColor: "primary.main",
                      outlineOffset: 2,
                      borderRadius: "4px",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
              <Button
                variant="contained"
                href="#donate"
                startIcon={<FavoriteIcon />}
                sx={{
                  bgcolor: "warning.main",
                  "&:hover": { bgcolor: "warning.dark" },
                }}
              >
                Donate
              </Button>
            </Box>

            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="navigation" aria-label="Mobile">
          <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 1 }}>
            <IconButton aria-label="Close navigation menu" onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          {NAV_LINKS.map((link) => (
            <List key={link.href} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </List>
          ))}
          <Box sx={{ px: 2, mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              href="#donate"
              onClick={() => setMobileOpen(false)}
              startIcon={<FavoriteIcon />}
              sx={{ bgcolor: "warning.main", "&:hover": { bgcolor: "warning.dark" } }}
            >
              Donate
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
