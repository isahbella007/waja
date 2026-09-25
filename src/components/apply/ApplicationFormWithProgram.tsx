"use client";

import type { ComponentProps } from "react";
import { useSearchParams } from "next/navigation";
import ApplicationForm from "@/components/apply/ApplicationForm";

// Pre-selects the program from ?program=… (the "Apply to this program" buttons).
// Must be rendered inside <Suspense> because the page is prerendered.
export default function ApplicationFormWithProgram(props: Omit<ComponentProps<typeof ApplicationForm>, "initialProgram">) {
  const program = useSearchParams().get("program") ?? undefined;
  return <ApplicationForm key={program} {...props} initialProgram={program} />;
}
