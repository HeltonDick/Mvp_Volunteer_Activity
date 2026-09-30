'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { ActivityForm } from '@/components/activities/ActivityForm';
import { activitiesApi, ApiError } from '@/lib/api';
import type { Activity, ActivityFormValues } from '@/types/activity';

function EditActivityForm() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [activity, setActivity] = useState<Activity | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    activitiesApi
      .get(id)
      .then((data) => {
        if (!cancelled) setActivity(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(
            err instanceof ApiError
              ? err.message
              : 'Não foi possível carregar a atividade.',
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  async function handleSubmit(values: ActivityFormValues) {
    return activitiesApi.update(id, {
      ...values,
      date: new Date(values.date).toISOString(),
    });
  }

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/activities">Atividades</Link> / Editar
      </div>
      <div className="page-header">
        <h1>Editar atividade</h1>
      </div>

      {error && <div className="error-banner">{error}</div>}

      {!error && !activity && (
        <div className="state-panel">Carregando atividade...</div>
      )}

      {activity && (
        <ActivityForm
          initialValues={activity}
          submitLabel="Salvar alterações"
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default function EditActivityPage() {
  return (
    <RequireAuth role="ADMIN">
      <EditActivityForm />
    </RequireAuth>
  );
}
