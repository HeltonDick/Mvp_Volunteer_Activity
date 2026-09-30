'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import type { AuthUser } from '@/types/auth';

interface RequireAuthProps {
  children: React.ReactNode;
  role?: AuthUser['role'];
}

export function RequireAuth({ children, role }: RequireAuthProps) {
  const router = useRouter();
  const { user, loading } = useCurrentUser();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    if (role && user.role !== role) {
      router.replace('/');
    }
  }, [loading, user, role, router]);

  const blocked = loading || !user || (role && user.role !== role);

  if (blocked) {
    return <div className="state-panel">Carregando...</div>;
  }

  return <>{children}</>;
}
