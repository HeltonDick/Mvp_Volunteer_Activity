'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { activitiesApi, ApiError } from '@/lib/api';
import type { Activity } from '@/types/activity';

interface ActivitiesTableProps {
  activities: Activity[];
  onDeleted: (id: number) => void;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function ActivitiesTable({ activities, onDeleted }: ActivitiesTableProps) {
  const [pendingId, setPendingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete(activity: Activity) {
    const confirmed = window.confirm(
      `Remover a atividade "${activity.name}"? Essa ação não pode ser desfeita.`,
    );
    if (!confirmed) return;

    setError(null);
    setPendingId(activity.id);
    try {
      await activitiesApi.remove(activity.id);
      onDeleted(activity.id);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Não foi possível remover a atividade.');
    } finally {
      setPendingId(null);
    }
  }

  return (
    <div>
      {error && <div className="error-banner">{error}</div>}

      <table className="list-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Local</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>
                <div className="cell-name">{activity.name}</div>
                <div className="cell-muted">{activity.description}</div>
              </td>
              <td>{activity.location}</td>
              <td className="cell-muted">{formatDate(activity.date)}</td>
              <td>
                <div className="row-actions">
                  <Link
                    href={`/activities/${activity.id}/edit`}
                    className="btn btn-ghost"
                  >
                    Editar
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(activity)}
                    disabled={pendingId === activity.id}
                  >
                    {pendingId === activity.id ? 'Removendo...' : 'Excluir'}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
