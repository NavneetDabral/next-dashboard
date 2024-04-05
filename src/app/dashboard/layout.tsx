export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <h1 className="text-3xl p-4">User Dashboard</h1>
      {children}
    </div>
  );
}
