export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER';
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}
