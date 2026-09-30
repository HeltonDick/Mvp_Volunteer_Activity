import type {
  Activity,
  CreateActivityInput,
  UpdateActivityInput,
} from '@/types/activity';
import type { AuthResponse, LoginInput, RegisterInput } from '@/types/auth';
import type { MyParticipation, Participant } from '@/types/participation';
import type { AdminUser } from '@/types/user';
import { getToken } from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  if (!API_URL) {
    throw new ApiError(
      0,
      'NEXT_PUBLIC_API_URL não está configurado no .env.local',
    );
  }

  const token = getToken();

  const res = await fetch(`${API_URL}${path}`, {
    cache: 'no-store',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const message =
      (body && (body.message || body.error)) || `Erro ${res.status}`;
    throw new ApiError(res.status, Array.isArray(message) ? message.join(', ') : message);
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return res.json() as Promise<T>;
}

export const activitiesApi = {
  list: () => request<Activity[]>('/activities'),
  get: (id: number) => request<Activity>(`/activities/${id}`),
  create: (data: CreateActivityInput) =>
    request<Activity>('/activities', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: number, data: UpdateActivityInput) =>
    request<Activity>(`/activities/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  remove: (id: number) =>
    request<void>(`/activities/${id}`, { method: 'DELETE' }),
};

export const authApi = {
  register: (data: RegisterInput) =>
    request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  login: (data: LoginInput) =>
    request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

export const participantsApi = {
  listByActivity: (activityId: number) =>
    request<Participant[]>(`/activities/${activityId}/participants`),
  enroll: (activityId: number) =>
    request<Participant>(`/activities/${activityId}/participants/me`, {
      method: 'POST',
    }),
  cancel: (activityId: number) =>
    request<void>(`/activities/${activityId}/participants/me`, {
      method: 'DELETE',
    }),
  myParticipations: () =>
    request<MyParticipation[]>('/me/participations'),
};

export const usersApi = {
  list: () => request<AdminUser[]>('/users'),
};
