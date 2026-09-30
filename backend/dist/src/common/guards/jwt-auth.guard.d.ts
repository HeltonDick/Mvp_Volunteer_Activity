import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import type { AppRole } from '../decorators/roles.decorator';
export interface AuthenticatedUser {
    id: number;
    email: string;
    role: AppRole;
}
export declare class JwtAuthGuard implements CanActivate {
    private readonly jwtService;
    private readonly reflector;
    constructor(jwtService: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
    private extractToken;
}
