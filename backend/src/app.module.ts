import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/acrivities.module';
import { PrismaModule } from './prisma/prima.module';
import { UsersModule } from './users/users.module';
import { ActivityParticipantsModule } from './volunteer/activityparticipant.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ActivitiesModule,
    PrismaModule,
    UsersModule,
    ActivityParticipantsModule,
    AuthModule,
  ],
})
export class AppModule {}
