import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { wajaColors } from "@/theme/theme";

// Shared look for text inputs and selects in site forms
export const INPUT_SX = {
  bgcolor: "#FFFFFF",
  borderRadius: "8px",
  fontSize: "0.95rem",
  "& .MuiOutlinedInput-notchedOutline": { borderColor: wajaColors.border },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: wajaColors.primary },
};

// Visible label above the input, optional hint, and an error linked by id
// (`${id}-error`) so inputs can point aria-describedby at it.
export default function FormField({
  id,
  label,
  optionalLabel,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  /** Shown after the label, e.g. "optional" */
  optionalLabel?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <Box>
      <Typography
        component="label"
        htmlFor={id}
        variant="body2"
        sx={{ display: "block", color: wajaColors.foreground, fontWeight: 600, mb: 0.75 }}
      >
        {label}
        {optionalLabel && (
          <Typography component="span" variant="body2" sx={{ color: "text.secondary", fontWeight: 400, ml: 0.75 }}>
            ({optionalLabel})
          </Typography>
        )}
      </Typography>
      {children}
      {hint && !error && (
        <FormHelperText id={`${id}-hint`} sx={{ mx: 0 }}>
          {hint}
        </FormHelperText>
      )}
      {error && (
        <FormHelperText id={`${id}-error`} error sx={{ mx: 0 }}>
          {error}
        </FormHelperText>
      )}
    </Box>
  );
}
