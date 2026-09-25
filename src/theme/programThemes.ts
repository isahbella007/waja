// Each program has its own colour, used on its Overview panel, its cover,
// its section numbers and the "turn the page" band that leads to it.
// Assigned by program order and repeats if more programs are added.

export type ProgramTheme = {
  /** Panel / cover / band background */
  surface: string;
  /** Text on the surface */
  onSurface: string;
  /** Secondary text on the surface */
  muted: string;
  /** Thin rules on the surface */
  rule: string;
  /** The program's colour when used on the light page background (numbers, rules, links) */
  accent: string;
  /** Pale wash of the program colour for alternating leaflet panels */
  tint: string;
};

const PROGRAM_THEMES: ProgramTheme[] = [
  // One: workshop teal
  { surface: "#0E7490", onSurface: "#FFFFFF", muted: "#CFFAFE", rule: "rgba(255,255,255,0.35)", accent: "#0E7490", tint: "#E2F2F6" },
  // Two: burnt orange
  { surface: "#C2410C", onSurface: "#FFFFFF", muted: "#FFEDD5", rule: "rgba(255,255,255,0.35)", accent: "#C2410C", tint: "#FBEADF" },
  // Three: warm sand
  { surface: "#F3E3C3", onSurface: "#164E63", muted: "#57534E", rule: "rgba(22,78,99,0.3)", accent: "#92400E", tint: "#F6ECD6" },
];

export function getProgramTheme(index: number): ProgramTheme {
  return PROGRAM_THEMES[index % PROGRAM_THEMES.length];
}
