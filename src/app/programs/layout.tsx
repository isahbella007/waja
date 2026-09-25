import SectionShell from "@/components/layout/SectionShell";
import { PROGRAMS_NAV, PROGRAMS_SUBNAV_ACTION } from "@/constants/navigation";

export default function ProgramsLayout({ children }: LayoutProps<"/programs">) {
  return (
    <SectionShell section={PROGRAMS_NAV} action={PROGRAMS_SUBNAV_ACTION}>
      {children}
    </SectionShell>
  );
}
