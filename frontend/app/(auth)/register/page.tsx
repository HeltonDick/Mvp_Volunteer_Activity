'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { authApi, ApiError } from '@/lib/api';
import { saveSession } from '@/lib/auth';
import { isValidEmail } from '@/lib/validation';

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const next: FormErrors = {};
    if (!name.trim()) next.name = 'Informe seu nome';
    if (!email.trim()) next.email = 'Informe seu e-mail';
    else if (!isValidEmail(email)) next.email = 'E-mail inválido';
    if (!password) next.password = 'Informe uma senha';
    else if (password.length < 6)
      next.password = 'A senha precisa ter pelo menos 6 caracteres';
    if (confirmPassword !== password)
      next.confirmPassword = 'As senhas não coincidem';

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const { user, token } = await authApi.register({ name, email, password });
      saveSession(token, user);
      router.push('/');
      router.refresh();
    } catch (err) {
      setFormError(
        err instanceof ApiError
          ? err.message
          : 'Não foi possível criar sua conta.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-card">
      <h1>Criar conta</h1>
      <p className="page-subtitle">
        Cadastre-se para gerenciar atividades voluntárias.
      </p>

      <form className="form auth-form" onSubmit={handleSubmit} noValidate>
        {formError && <div className="error-banner">{formError}</div>}

        <div className="field">
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

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
            autoComplete="new-password"
          />
          {errors.password && (
            <span className="field-error">{errors.password}</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <span className="field-error">{errors.confirmPassword}</span>
          )}
        </div>

        <div className="form-actions">
          <Button type="submit" disabled={submitting}>
            {submitting ? 'Criando conta...' : 'Criar conta'}
          </Button>
        </div>
      </form>

      <p className="auth-footer">
        Já tem uma conta? <Link href="/login">Entrar</Link>
      </p>
    </div>
  );
}
