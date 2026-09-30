'use client';

import { useEffect, useState } from 'react';
import { getStoredUser } from '@/lib/auth';
import type { AuthUser } from '@/types/auth';

export function useCurrentUser() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(getStoredUser());
    setLoading(false);
  }, []);

  return { user, loading };
}
