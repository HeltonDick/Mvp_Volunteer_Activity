import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ActivityParticipantsService } from './activityparticipants.service';
import { CreateActivityParticipantDto } from './types/create-activityparticipant.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { AuthenticatedUser } from '../common/guards/jwt-auth.guard';

@Controller('activities/:activityId/participants')
export class ActivityParticipantsController {
  constructor(private readonly service: ActivityParticipantsService) {}

  @Get()
  list(@Param('activityId', ParseIntPipe) activityId: number) {
    return this.service.listByActivity(activityId);
  }

  // Usuário logado se inscreve em si mesmo
  @Post('me')
  enrollSelf(
    @Param('activityId', ParseIntPipe) activityId: number,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.service.addParticipant(activityId, { participantId: user.id });
  }

  // Usuário logado cancela a própria inscrição
  @Delete('me')
  cancelSelf(
    @Param('activityId', ParseIntPipe) activityId: number,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.service.removeParticipant(activityId, user.id);
  }

  // Admin inscreve qualquer usuário
  @Post()
  @Roles('ADMIN')
  add(
    @Param('activityId', ParseIntPipe) activityId: number,
    @Body() dto: CreateActivityParticipantDto,
  ) {
    return this.service.addParticipant(activityId, dto);
  }

  // Admin remove qualquer participante
  @Delete(':participantId')
  @Roles('ADMIN')
  remove(
    @Param('activityId', ParseIntPipe) activityId: number,
    @Param('participantId', ParseIntPipe) participantId: number,
  ) {
    return this.service.removeParticipant(activityId, participantId);
  }
}
