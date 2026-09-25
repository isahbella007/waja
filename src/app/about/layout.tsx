import SectionShell from "@/components/layout/SectionShell";
import { ABOUT_NAV } from "@/constants/navigation";

export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return <SectionShell section={ABOUT_NAV}>{children}</SectionShell>;
}
