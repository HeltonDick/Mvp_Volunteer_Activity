'use client';

import Link from 'next/link';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export default function HomePage() {
  const { user } = useCurrentUser();
  const isAdmin = user?.role === 'ADMIN';

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Painel</h1>
          <p className="page-subtitle">
            Escolha uma área para consultar ou gerenciar os registros.
          </p>
        </div>
      </div>

      <div className="card-grid">
        {isAdmin ? (
          <>
            <Link href="/activities" className="entity-card">
              <h3>Atividades</h3>
              <p>Criar, editar e remover atividades voluntárias.</p>
            </Link>
            <Link href="/users" className="entity-card">
              <h3>Usuários</h3>
              <p>Ver todos os usuários cadastrados no sistema.</p>
            </Link>
          </>
        ) : (
          <>
            <Link href="/browse" className="entity-card">
              <h3>Atividades</h3>
              <p>Ver atividades disponíveis e se inscrever.</p>
            </Link>
            <Link href="/my-activities" className="entity-card">
              <h3>Minhas inscrições</h3>
              <p>Acompanhar as atividades em que você está inscrito.</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
