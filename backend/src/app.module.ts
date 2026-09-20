import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/acrivities.module';

@Module({
  imports: [ActivitiesModule],
})
export class AppModule {}
