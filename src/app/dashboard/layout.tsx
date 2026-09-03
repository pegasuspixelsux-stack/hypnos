export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return <section className="flex flex-1 flex-col">{children}</section>;
}
