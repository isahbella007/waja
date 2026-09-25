import { redirect } from "next/navigation";
import { PROGRAMS_NAV } from "@/constants/navigation";

export default function ProgramsPage() {
  redirect(PROGRAMS_NAV.children?.[0]?.href ?? "/");
}
