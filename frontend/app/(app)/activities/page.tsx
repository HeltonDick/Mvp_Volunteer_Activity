'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { Button } from '@/components/ui/Button';
import { ActivitiesTable } from '@/components/activities/ActivitiesTable';
import { activitiesApi, ApiError } from '@/lib/api';
import type { Activity } from '@/types/activity';

function ActivitiesList() {
  const [activities, setActivities] = useState<Activity[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    activitiesApi
      .list()
      .then((data) => {
        if (!cancelled) setActivities(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(
            err instanceof ApiError
              ? err.message
              : 'Não foi possível carregar as atividades.',
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  function handleDeleted(id: number) {
    setActivities((prev) => prev?.filter((a) => a.id !== id) ?? prev);
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Atividades</h1>
          <p className="page-subtitle">
            Todas as atividades voluntárias cadastradas.
          </p>
        </div>
        <Link href="/activities/new">
          <Button>Nova atividade</Button>
        </Link>
      </div>

      {error && <div className="error-banner">{error}</div>}

      {!error && activities === null && (
        <div className="state-panel">Carregando atividades...</div>
      )}

      {activities !== null && activities.length === 0 && (
        <div className="state-panel">
          <h3>Nenhuma atividade cadastrada</h3>
          <p>Crie a primeira atividade para começar.</p>
        </div>
      )}

      {activities !== null && activities.length > 0 && (
        <ActivitiesTable activities={activities} onDeleted={handleDeleted} />
      )}
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <RequireAuth role="ADMIN">
      <ActivitiesList />
    </RequireAuth>
  );
}
