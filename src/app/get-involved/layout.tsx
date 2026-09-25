import SectionShell from "@/components/layout/SectionShell";
import { GET_INVOLVED_NAV } from "@/constants/navigation";

export default function GetInvolvedLayout({ children }: LayoutProps<"/get-involved">) {
  return <SectionShell section={GET_INVOLVED_NAV}>{children}</SectionShell>;
}
