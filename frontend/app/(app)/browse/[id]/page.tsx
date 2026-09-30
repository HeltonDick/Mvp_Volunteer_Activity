'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { Button } from '@/components/ui/Button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { activitiesApi, participantsApi, ApiError } from '@/lib/api';
import type { Activity } from '@/types/activity';
import type { Participant } from '@/types/participation';

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function ActivityDetail() {
  const params = useParams<{ id: string }>();
  const activityId = Number(params.id);
  const { user } = useCurrentUser();

  const [activity, setActivity] = useState<Activity | null>(null);
  const [participants, setParticipants] = useState<Participant[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function loadData() {
    try {
      const [activityData, participantsData] = await Promise.all([
        activitiesApi.get(activityId),
        participantsApi.listByActivity(activityId),
      ]);
      setActivity(activityData);
      setParticipants(participantsData);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : 'Não foi possível carregar a atividade.',
      );
    }
  }

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activityId]);

  const isEnrolled =
    participants?.some((p) => p.participantId === user?.id) ?? false;

  async function handleEnroll() {
    setActionError(null);
    setSubmitting(true);
    try {
      await participantsApi.enroll(activityId);
      await loadData();
    } catch (err) {
      setActionError(
        err instanceof ApiError ? err.message : 'Não foi possível se inscrever.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function handleCancel() {
    setActionError(null);
    setSubmitting(true);
    try {
      await participantsApi.cancel(activityId);
      await loadData();
    } catch (err) {
      setActionError(
        err instanceof ApiError
          ? err.message
          : 'Não foi possível cancelar a inscrição.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/browse">Atividades</Link> / Detalhes
      </div>

      {error && <div className="error-banner">{error}</div>}
      {!error && !activity && <div className="state-panel">Carregando...</div>}

      {activity && (
        <>
          <div className="page-header">
            <div>
              <h1>{activity.name}</h1>
              <div className="detail-meta-row">
                <span>{formatDate(activity.date)}</span>
                <span>{activity.location}</span>
              </div>
            </div>

            {isEnrolled ? (
              <Button variant="danger" onClick={handleCancel} disabled={submitting}>
                {submitting ? 'Cancelando...' : 'Cancelar inscrição'}
              </Button>
            ) : (
              <Button onClick={handleEnroll} disabled={submitting}>
                {submitting ? 'Inscrevendo...' : 'Inscrever-se'}
              </Button>
            )}
          </div>

          {actionError && <div className="error-banner">{actionError}</div>}

          <p>{activity.description}</p>

          <div className="detail-section">
            <h2>Participantes inscritos ({participants?.length ?? 0})</h2>

            {participants && participants.length === 0 && (
              <p className="cell-muted">Ninguém inscrito ainda.</p>
            )}

            {participants && participants.length > 0 && (
              <div className="participants-list">
                {participants.map((p) => (
                  <div key={p.id} className="participant-row">
                    <span>{p.participant.name}</span>
                    <span className="cell-muted">{p.participant.email}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default function ActivityDetailPage() {
  return (
    <RequireAuth>
      <ActivityDetail />
    </RequireAuth>
  );
}
