'use client';

import { useEffect, useState } from 'react';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { usersApi, ApiError } from '@/lib/api';
import type { AdminUser } from '@/types/user';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR');
}

function UsersList() {
  const [users, setUsers] = useState<AdminUser[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    usersApi
      .list()
      .then((data) => {
        if (!cancelled) setUsers(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(
            err instanceof ApiError
              ? err.message
              : 'Não foi possível carregar os usuários.',
          );
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Usuários</h1>
          <p className="page-subtitle">
            Todos os usuários cadastrados no sistema.
          </p>
        </div>
      </div>

      {error && <div className="error-banner">{error}</div>}
      {!error && users === null && (
        <div className="state-panel">Carregando...</div>
      )}

      {users !== null && (
        <table className="list-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Papel</th>
              <th>Cadastrado em</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td className="cell-name">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role === 'ADMIN' ? 'Administrador' : 'Usuário'}</td>
                <td className="cell-muted">{formatDate(u.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default function UsersPage() {
  return (
    <RequireAuth role="ADMIN">
      <UsersList />
    </RequireAuth>
  );
}
