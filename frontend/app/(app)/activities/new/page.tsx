'use client';

import Link from 'next/link';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { ActivityForm } from '@/components/activities/ActivityForm';
import { activitiesApi } from '@/lib/api';
import type { ActivityFormValues } from '@/types/activity';

function NewActivityForm() {
  async function handleSubmit(values: ActivityFormValues) {
    return activitiesApi.create({
      ...values,
      date: new Date(values.date).toISOString(),
    });
  }

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/activities">Atividades</Link> / Nova
      </div>
      <div className="page-header">
        <h1>Nova atividade</h1>
      </div>

      <ActivityForm submitLabel="Criar atividade" onSubmit={handleSubmit} />
    </div>
  );
}

export default function NewActivityPage() {
  return (
    <RequireAuth role="ADMIN">
      <NewActivityForm />
    </RequireAuth>
  );
}
