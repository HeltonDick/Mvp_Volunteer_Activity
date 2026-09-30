import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './types/create-activitie.dto';
import { UpdateActivityDto } from './types/update-activitie.dto';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    list(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        name: string;
        description: string;
        date: Date;
        location: string;
        authorId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    get(id: number): Promise<{
        name: string;
        description: string;
        date: Date;
        location: string;
        authorId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(data: CreateActivityDto): import("../generated/prisma/models").Prisma__activityClient<{
        name: string;
        description: string;
        date: Date;
        location: string;
        authorId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: number, dto: UpdateActivityDto): Promise<{
        name: string;
        description: string;
        date: Date;
        location: string;
        authorId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        name: string;
        description: string;
        date: Date;
        location: string;
        authorId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
