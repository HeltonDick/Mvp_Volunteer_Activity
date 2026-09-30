'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { activitiesApi, ApiError } from '@/lib/api';
import type { Activity } from '@/types/activity';

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function BrowseActivitiesPage() {
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

  return (
    <RequireAuth>
      <div>
        <div className="page-header">
          <div>
            <h1>Atividades disponíveis</h1>
            <p className="page-subtitle">
              Escolha uma atividade para ver detalhes e se inscrever.
            </p>
          </div>
        </div>

        {error && <div className="error-banner">{error}</div>}

        {!error && activities === null && (
          <div className="state-panel">Carregando atividades...</div>
        )}

        {activities !== null && activities.length === 0 && (
          <div className="state-panel">
            <h3>Nenhuma atividade disponível no momento</h3>
          </div>
        )}

        {activities !== null && activities.length > 0 && (
          <div className="activity-grid">
            {activities.map((activity) => (
              <Link
                key={activity.id}
                href={`/browse/${activity.id}`}
                className="activity-card"
              >
                <h3>{activity.name}</h3>
                <div className="activity-meta">
                  <span>{formatDate(activity.date)}</span>
                  <span>{activity.location}</span>
                </div>
                <p className="activity-description">{activity.description}</p>
                <div className="activity-card-footer">
                  <span className="btn btn-ghost">Ver detalhes</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </RequireAuth>
  );
}
