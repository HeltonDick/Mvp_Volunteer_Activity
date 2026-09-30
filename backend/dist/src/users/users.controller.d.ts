import { UsersService } from './users.service';
import { CreateUserDto } from './types/create-user.dto';
import { UpdateUserDto } from './types/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    list(): Promise<Omit<{
        password: string;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        role: import("../generated/prisma/enums").Role;
    }, "password">[]>;
    get(id: number): Promise<Omit<{
        password: string;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        role: import("../generated/prisma/enums").Role;
    }, "password">>;
    create(data: CreateUserDto): Promise<Omit<{
        password: string;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        role: import("../generated/prisma/enums").Role;
    }, "password">>;
    update(id: number, data: UpdateUserDto): Promise<Omit<{
        password: string;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        role: import("../generated/prisma/enums").Role;
    }, "password">>;
    delete(id: number): Promise<Omit<{
        password: string;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        role: import("../generated/prisma/enums").Role;
    }, "password">>;
}
