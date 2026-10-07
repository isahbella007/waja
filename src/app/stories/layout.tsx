import SiteShell from "@/components/layout/SiteShell";

export default function StoriesLayout({ children }: LayoutProps<"/stories">) {
  return <SiteShell>{children}</SiteShell>;
}
