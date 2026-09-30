'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { authApi, ApiError } from '@/lib/api';
import { saveSession } from '@/lib/auth';
import { isValidEmail } from '@/lib/validation';

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const next: FormErrors = {};
    if (!email.trim()) next.email = 'Informe seu e-mail';
    else if (!isValidEmail(email)) next.email = 'E-mail inválido';
    if (!password) next.password = 'Informe sua senha';

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const { user, token } = await authApi.login({ email, password });
      saveSession(token, user);
      router.push('/');
      router.refresh();
    } catch (err) {
      setFormError(
        err instanceof ApiError ? err.message : 'Não foi possível entrar.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-card">
      <h1>Entrar</h1>
      <p className="page-subtitle">Acesse sua conta para gerenciar atividades.</p>

      <form className="form auth-form" onSubmit={handleSubmit} noValidate>
        {formError && <div className="error-banner">{formError}</div>}

        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {errors.password && (
            <span className="field-error">{errors.password}</span>
          )}
        </div>

        <div className="form-actions">
          <Button type="submit" disabled={submitting}>
            {submitting ? 'Entrando...' : 'Entrar'}
          </Button>
        </div>
      </form>

      <p className="auth-footer">
        Ainda não tem conta? <Link href="/register">Criar conta</Link>
      </p>
    </div>
  );
}
