import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/acrivities.module';
import { PrismaModule } from './prisma/prima.module';

@Module({
  imports: [ActivitiesModule, PrismaModule],
})
export class AppModule {}
