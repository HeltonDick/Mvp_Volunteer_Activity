import { Sidebar } from '@/components/layout/Sidebar';
import { RequireAuth } from '@/components/auth/RequireAuth';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireAuth>
      <div className="app-shell">
        <Sidebar />
        <main className="main">{children}</main>
      </div>
    </RequireAuth>
  );
}
