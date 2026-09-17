import { createTheme } from "@mui/material/styles";

// Design tokens sourced from design-system/waja/MASTER.md
// Non-profit/Charity palette: compassion blue + action orange
export const wajaColors = {
  primary: "#0891B2",
  primaryDark: "#0E7490",
  onPrimary: "#FFFFFF",
  secondary: "#22D3EE",
  onSecondary: "#0F172A",
  accent: "#EA580C",
  accentDark: "#C2410C",
  onAccent: "#FFFFFF",
  background: "#ECFEFF",
  foreground: "#164E63",
  card: "#FFFFFF",
  cardForeground: "#164E63",
  muted: "#E8F1F6",
  mutedForeground: "#475569",
  border: "#A5F3FC",
  destructive: "#DC2626",
  onDestructive: "#FFFFFF",
  ring: "#0891B2",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: wajaColors.primary,
      dark: wajaColors.primaryDark,
      contrastText: wajaColors.onPrimary,
    },
    secondary: {
      main: wajaColors.secondary,
      contrastText: wajaColors.onSecondary,
    },
    warning: {
      main: wajaColors.accent,
      dark: wajaColors.accentDark,
      contrastText: wajaColors.onAccent,
    },
    error: {
      main: wajaColors.destructive,
      contrastText: wajaColors.onDestructive,
    },
    background: {
      default: "#FFFFFF",
      paper: wajaColors.card,
    },
    text: {
      primary: wajaColors.foreground,
      secondary: wajaColors.mutedForeground,
    },
    divider: wajaColors.border,
  },
  typography: {
    fontFamily: "var(--font-body), Arial, Helvetica, sans-serif",
    h1: { fontFamily: "var(--font-heading), sans-serif", fontWeight: 700 },
    h2: { fontFamily: "var(--font-heading), sans-serif", fontWeight: 700 },
    h3: { fontFamily: "var(--font-heading), sans-serif", fontWeight: 600 },
    h4: { fontFamily: "var(--font-heading), sans-serif", fontWeight: 600 },
    h5: { fontFamily: "var(--font-heading), sans-serif", fontWeight: 600 },
    h6: { fontFamily: "var(--font-heading), sans-serif", fontWeight: 600 },
    button: { fontFamily: "var(--font-heading), sans-serif", fontWeight: 600, textTransform: "none" },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          padding: "12px 24px",
          borderRadius: 8,
          transition: "all 200ms ease",
          minHeight: 44,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "all 200ms ease",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          minWidth: 44,
          minHeight: 44,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
