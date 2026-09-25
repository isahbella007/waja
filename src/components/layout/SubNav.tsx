"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { wajaColors } from "@/theme/theme";
import type { ActionLink, NavItem } from "@/constants/types";

const ACTION_SX = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  py: 1.5,
  px: 0,
  border: 0,
  bgcolor: "transparent",
  cursor: "pointer",
  whiteSpace: "nowrap",
  textDecoration: "none",
  fontFamily: "var(--font-body), sans-serif",
  fontWeight: 600,
  color: wajaColors.primaryDark,
  "&:hover": { color: wajaColors.primary },
  "&:hover svg": { transform: "translateX(2px)" },
  "&:focus-visible": { outline: "3px solid", outlineColor: "primary.main", outlineOffset: 2, borderRadius: "4px" },
};

export default function SubNav({
  items,
  label,
  action,
}: {
  items: NavItem[];
  label: string;
  /** Optional link on the right, e.g. "Apply →". Without href it doesn't navigate yet. */
  action?: ActionLink;
}) {
  const pathname = usePathname();

  return (
    <Box
      component="nav"
      aria-label={label}
      sx={{ bgcolor: "#FFFFFF", borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Box
          component="ul"
          sx={{
            flexGrow: 1,
            minWidth: 0,
            display: "flex",
            gap: { xs: 3, md: 4 },
            m: 0,
            p: 0,
            listStyle: "none",
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Box component="li" key={item.href} sx={{ flexShrink: 0 }}>
                <Typography
                  component={Link}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  variant="body2"
                  sx={{
                    display: "block",
                    py: 1.5,
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    fontWeight: active ? 600 : 500,
                    color: active ? wajaColors.primary : "text.primary",
                    borderBottom: "2px solid",
                    borderColor: active ? wajaColors.primary : "transparent",
                    // Sit the underline on top of the container's bottom line
                    mb: "-1px",
                    transition: "color 200ms ease, border-color 200ms ease",
                    "&:hover": { color: wajaColors.primary },
                    "&:focus-visible": {
                      outline: "3px solid",
                      outlineColor: "primary.main",
                      outlineOffset: 2,
                      borderRadius: "4px",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
        {action &&
          (action.href ? (
            <Typography component={Link} href={action.href} variant="body2" sx={ACTION_SX}>
              {action.label}
              <ArrowForwardIcon aria-hidden sx={{ fontSize: 16, transition: "transform 200ms ease" }} />
            </Typography>
          ) : (
            <Typography component="button" type="button" variant="body2" sx={ACTION_SX}>
              {action.label}
              <ArrowForwardIcon aria-hidden sx={{ fontSize: 16, transition: "transform 200ms ease" }} />
            </Typography>
          ))}
      </Container>
    </Box>
  );
}
