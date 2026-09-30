import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateActivityParticipantDto } from './types/create-activityparticipant.dto';

@Injectable()
export class ActivityParticipantsService {
  constructor(private readonly prisma: PrismaService) {}

  async listByActivity(activityId: number) {
    await this.ensureActivityExists(activityId);

    return this.prisma.activity_participant.findMany({
      where: { activityId },
      include: {
        participant: { select: { id: true, name: true, email: true } },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async listForUser(participantId: number) {
    return this.prisma.activity_participant.findMany({
      where: { participantId },
      include: { activity: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async addParticipant(activityId: number, dto: CreateActivityParticipantDto) {
    await this.ensureActivityExists(activityId);

    const user = await this.prisma.user.findUnique({
      where: { id: dto.participantId },
    });
    if (!user) {
      throw new NotFoundException(
        `Usuário com ID ${dto.participantId} não encontrado`,
      );
    }

    const existing = await this.prisma.activity_participant.findUnique({
      where: {
        activityId_participantId: {
          activityId,
          participantId: dto.participantId,
        },
      },
    });
    if (existing) {
      throw new ConflictException(
        'Esse usuário já está inscrito nessa atividade',
      );
    }

    return this.prisma.activity_participant.create({
      data: {
        activityId,
        participantId: dto.participantId,
      },
      include: {
        participant: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async removeParticipant(activityId: number, participantId: number) {
    const existing = await this.prisma.activity_participant.findUnique({
      where: {
        activityId_participantId: { activityId, participantId },
      },
    });
    if (!existing) {
      throw new NotFoundException('Participação não encontrada');
    }

    return this.prisma.activity_participant.delete({
      where: { id: existing.id },
    });
  }

  private async ensureActivityExists(activityId: number) {
    const activity = await this.prisma.activity.findUnique({
      where: { id: activityId },
    });
    if (!activity) {
      throw new NotFoundException(`Activity with ID ${activityId} not found`);
    }
  }
}
