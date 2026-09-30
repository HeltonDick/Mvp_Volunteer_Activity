import { PrismaService } from '../prisma/prisma.service';
import { CreateActivityParticipantDto } from './types/create-activityparticipant.dto';
export declare class ActivityParticipantsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listByActivity(activityId: number): Promise<({
        participant: {
            name: string;
            id: number;
            email: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        participantId: number;
        activityId: number;
    })[]>;
    listForUser(participantId: number): Promise<({
        activity: {
            name: string;
            description: string;
            date: Date;
            location: string;
            authorId: number | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        participantId: number;
        activityId: number;
    })[]>;
    addParticipant(activityId: number, dto: CreateActivityParticipantDto): Promise<{
        participant: {
            name: string;
            id: number;
            email: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        participantId: number;
        activityId: number;
    }>;
    removeParticipant(activityId: number, participantId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        participantId: number;
        activityId: number;
    }>;
    private ensureActivityExists;
}
