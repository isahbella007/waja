import { redirect } from "next/navigation";
import { GET_INVOLVED_NAV } from "@/constants/navigation";

export default function GetInvolvedPage() {
  redirect(GET_INVOLVED_NAV.children?.[0]?.href ?? "/");
}
