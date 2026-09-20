import { Injectable } from '@nestjs/common';
import type { Activity } from './activity.type';

@Injectable()
export class ActivitiesService {
  private readonly activities: Activity[] = [
    {
      id: 1,
      name: 'Activity 1',
      description: 'Description for Activity 1',
    },
    {
      id: 2,
      name: 'Activity 2',
      description: 'Description for Activity 2',
    },
  ];

  findall(): Activity[] {
    return this.activities;
  }
}
