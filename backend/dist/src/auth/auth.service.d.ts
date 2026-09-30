import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './types/login.dto';
import { RegisterDto } from './types/register.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: "ADMIN" | "USER";
        };
        token: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: "ADMIN" | "USER";
        };
        token: string;
    }>;
    private buildAuthResponse;
}
