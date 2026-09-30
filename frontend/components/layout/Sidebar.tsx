'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { clearSession } from '@/lib/auth';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const ADMIN_NAV = [
  { label: 'Início', href: '/' },
  { label: 'Atividades', href: '/activities' },
  { label: 'Usuários', href: '/users' },
];

const USER_NAV = [
  { label: 'Início', href: '/' },
  { label: 'Atividades', href: '/browse' },
  { label: 'Minhas inscrições', href: '/my-activities' },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useCurrentUser();

  const navItems = user?.role === 'ADMIN' ? ADMIN_NAV : USER_NAV;

  function handleLogout() {
    clearSession();
    router.push('/login');
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        Volunteer
        <span>gestão de atividades</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const isActive =
            item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`sidebar-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-account">
        {user ? (
          <>
            <div className="sidebar-account-name">
              {user.name}
              {user.role === 'ADMIN' && (
                <span className="sidebar-role-badge">admin</span>
              )}
            </div>
            <button className="sidebar-logout" onClick={handleLogout}>
              Sair
            </button>
          </>
        ) : (
          <Link href="/login" className="sidebar-link">
            Entrar
          </Link>
        )}
      </div>
    </aside>
  );
}
