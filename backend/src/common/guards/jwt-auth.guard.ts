import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import type { AppRole } from '../decorators/roles.decorator';

export interface AuthenticatedUser {
  id: number;
  email: string;
  role: AppRole;
}

interface JwtPayload {
  sub: number;
  email: string;
  role: AppRole;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);
    if (!token) {
      throw new UnauthorizedException('Token de acesso não informado');
    }

    try {
      const payload = this.jwtService.verify<JwtPayload>(token);
      request.user = {
        id: payload.sub,
        email: payload.email,
        role: payload.role,
      } satisfies AuthenticatedUser;
      return true;
    } catch {
      throw new UnauthorizedException('Token de acesso inválido ou expirado');
    }
  }

  private extractToken(request: {
    headers?: { authorization?: string };
  }): string | null {
    const header = request.headers?.authorization;
    if (!header) return null;
    const [type, token] = header.split(' ');
    return type === 'Bearer' ? token : null;
  }
}
