import type { Activity } from './activity';

export interface Participant {
  id: number;
  activityId: number;
  participantId: number;
  createdAt: string;
  participant: {
    id: number;
    name: string;
    email: string;
  };
}

export interface MyParticipation {
  id: number;
  activityId: number;
  participantId: number;
  createdAt: string;
  activity: Activity;
}
