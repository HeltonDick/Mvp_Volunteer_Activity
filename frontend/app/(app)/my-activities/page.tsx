'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { participantsApi, ApiError } from '@/lib/api';
import type { MyParticipation } from '@/types/participation';

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function MyActivitiesPage() {
  const [participations, setParticipations] = useState<
    MyParticipation[] | null
  >(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    participantsApi
      .myParticipations()
      .then((data) => {
        if (!cancelled) setParticipations(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(
            err instanceof ApiError
              ? err.message
              : 'Não foi possível carregar suas inscrições.',
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
            <h1>Minhas inscrições</h1>
            <p className="page-subtitle">
              Atividades em que você está inscrito.
            </p>
          </div>
        </div>

        {error && <div className="error-banner">{error}</div>}

        {!error && participations === null && (
          <div className="state-panel">Carregando...</div>
        )}

        {participations !== null && participations.length === 0 && (
          <div className="state-panel">
            <h3>Você ainda não se inscreveu em nenhuma atividade</h3>
            <p>
              <Link href="/browse">Ver atividades disponíveis</Link>
            </p>
          </div>
        )}

        {participations !== null && participations.length > 0 && (
          <div className="activity-grid">
            {participations.map((p) => (
              <Link
                key={p.id}
                href={`/browse/${p.activity.id}`}
                className="activity-card"
              >
                <h3>{p.activity.name}</h3>
                <div className="activity-meta">
                  <span>{formatDate(p.activity.date)}</span>
                  <span>{p.activity.location}</span>
                </div>
                <p className="activity-description">
                  {p.activity.description}
                </p>
                <div className="activity-card-footer">
                  <span className="badge-enrolled">Inscrito</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </RequireAuth>
  );
}
