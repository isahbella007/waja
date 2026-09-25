import { redirect } from "next/navigation";
import { ABOUT_NAV } from "@/constants/navigation";

export default function AboutPage() {
  redirect(ABOUT_NAV.children?.[0]?.href ?? "/");
}
