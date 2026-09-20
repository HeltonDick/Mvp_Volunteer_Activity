import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateActivityDto } from './types/create-activitie.dto';
import { UpdateActivityDto } from './types/update-activitie.dto';

@Injectable()
export class ActivitiesService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.activity.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async get(id: number) {
    const activity = await this.prisma.activity.findUnique({ where: { id } });
    if (!activity)
      throw new NotFoundException(`Activity with ID ${id} not found`);
    return activity;
  }

  create(data: CreateActivityDto) {
    return this.prisma.activity.create({ data });
  }

  async update(id: number, data: UpdateActivityDto) {
    const activity = await this.prisma.activity.findUnique({ where: { id } });
    if (!activity)
      throw new NotFoundException(`Activity with ID ${id} not found`);
    return this.prisma.activity.update({ where: { id }, data });
  }

  async delete(id: number) {
    const activity = await this.prisma.activity.findUnique({ where: { id } });
    if (!activity)
      throw new NotFoundException(`Activity with ID ${id} not found`);
    return this.prisma.activity.delete({ where: { id } });
  }
}
