import { Module } from '@nestjs/common';
import { ActivityParticipantsController } from './activityparticipants.controller';
import { MeController } from './me.controller';
import { ActivityParticipantsService } from './activityparticipants.service';

@Module({
  controllers: [ActivityParticipantsController, MeController],
  providers: [ActivityParticipantsService],
})
export class ActivityParticipantsModule {}
