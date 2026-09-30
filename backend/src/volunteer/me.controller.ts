import { Controller, Get } from '@nestjs/common';
import { ActivityParticipantsService } from './activityparticipants.service';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { AuthenticatedUser } from '../common/guards/jwt-auth.guard';

@Controller('me')
export class MeController {
  constructor(
    private readonly participantsService: ActivityParticipantsService,
  ) {}

  @Get('participations')
  listMyParticipations(@CurrentUser() user: AuthenticatedUser) {
    return this.participantsService.listForUser(user.id);
  }
}
