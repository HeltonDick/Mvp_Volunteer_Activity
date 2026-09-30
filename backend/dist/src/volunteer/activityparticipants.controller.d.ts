import { ActivityParticipantsService } from './activityparticipants.service';
import { CreateActivityParticipantDto } from './types/create-activityparticipant.dto';
import type { AuthenticatedUser } from '../common/guards/jwt-auth.guard';
export declare class ActivityParticipantsController {
    private readonly service;
    constructor(service: ActivityParticipantsService);
    list(activityId: number): Promise<({
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
    enrollSelf(activityId: number, user: AuthenticatedUser): Promise<{
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
    cancelSelf(activityId: number, user: AuthenticatedUser): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        participantId: number;
        activityId: number;
    }>;
    add(activityId: number, dto: CreateActivityParticipantDto): Promise<{
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
    remove(activityId: number, participantId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        participantId: number;
        activityId: number;
    }>;
}
