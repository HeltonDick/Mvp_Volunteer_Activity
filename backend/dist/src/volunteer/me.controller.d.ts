import { ActivityParticipantsService } from './activityparticipants.service';
import type { AuthenticatedUser } from '../common/guards/jwt-auth.guard';
export declare class MeController {
    private readonly participantsService;
    constructor(participantsService: ActivityParticipantsService);
    listMyParticipations(user: AuthenticatedUser): Promise<({
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
}
