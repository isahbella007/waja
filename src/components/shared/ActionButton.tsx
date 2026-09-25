"use client";

import Link from "next/link";
import Button, { type ButtonProps } from "@mui/material/Button";
import type { ActionLink } from "@/constants/types";

// MUI Button that links with next/link when an href is set, and otherwise
// renders a plain button (for actions whose page doesn't exist yet).
export default function ActionButton({
  label,
  href,
  ...buttonProps
}: ActionLink & Omit<ButtonProps, "href" | "children">) {
  if (href) {
    return (
      <Button component={Link} href={href} {...buttonProps}>
        {label}
      </Button>
    );
  }
  return (
    <Button type="button" {...buttonProps}>
      {label}
    </Button>
  );
}
