"use client";

import type { ComponentProps } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/about/contact/ContactForm";

// Pre-selects the topic from ?topic=… (e.g. the "Join the advisory board" buttons).
// Must be rendered inside <Suspense> because the page is prerendered.
export default function ContactFormWithTopic(props: Omit<ComponentProps<typeof ContactForm>, "initialTopic">) {
  const topic = useSearchParams().get("topic") ?? undefined;
  // key resets the form state if the topic in the URL changes
  return <ContactForm key={topic} {...props} initialTopic={topic} />;
}
