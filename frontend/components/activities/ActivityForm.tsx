'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import type { Activity, ActivityFormValues } from '@/types/activity';
import { ApiError } from '@/lib/api';

interface ActivityFormProps {
  initialValues?: Partial<ActivityFormValues>;
  submitLabel: string;
  onSubmit: (values: ActivityFormValues) => Promise<Activity>;
}

// Converte um ISO ("2026-09-21T14:00:00.000Z") para o formato aceito
// pelo input datetime-local ("2026-09-21T14:00").
function toDateTimeLocal(value?: string) {
  if (!value) return '';
  return value.slice(0, 16);
}

export function ActivityForm({
  initialValues,
  submitLabel,
  onSubmit,
}: ActivityFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<ActivityFormValues>({
    name: initialValues?.name ?? '',
    description: initialValues?.description ?? '',
    date: toDateTimeLocal(initialValues?.date),
    location: initialValues?.location ?? '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof ActivityFormValues>(
    key: K,
    value: ActivityFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    if (!values.name.trim() || !values.description.trim() || !values.location.trim() || !values.date) {
      setError('Preencha todos os campos antes de salvar.');
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(values);
      router.push('/activities');
      router.refresh();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Não foi possível salvar a atividade.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <div className="error-banner">{error}</div>}

      <div className="field">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          value={values.name}
          onChange={(e) => update('name', e.target.value)}
          placeholder="Ex: Mutirão de limpeza da praça"
        />
      </div>

      <div className="field">
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          value={values.description}
          onChange={(e) => update('description', e.target.value)}
          placeholder="O que os voluntários vão fazer"
        />
      </div>

      <div className="field">
        <label htmlFor="location">Local</label>
        <input
          id="location"
          value={values.location}
          onChange={(e) => update('location', e.target.value)}
          placeholder="Ex: Praça Central, Rio do Sul"
        />
      </div>

      <div className="field">
        <label htmlFor="date">Data e horário</label>
        <input
          id="date"
          type="datetime-local"
          value={values.date}
          onChange={(e) => update('date', e.target.value)}
        />
      </div>

      <div className="form-actions">
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Salvando...' : submitLabel}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => router.push('/activities')}
          disabled={submitting}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
}
