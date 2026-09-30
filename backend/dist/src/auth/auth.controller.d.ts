import { AuthService } from './auth.service';
import { LoginDto } from './types/login.dto';
import { RegisterDto } from './types/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
}
