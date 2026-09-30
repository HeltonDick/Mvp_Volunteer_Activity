import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './types/create-user.dto';
import { UpdateUserDto } from './types/update-user.dto';

const SALT_ROUNDS = 10;

function sanitize<T extends { password: string }>(user: T) {
  const { password: _password, ...rest } = user;
  return rest;
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    const users = await this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return users.map(sanitize);
  }

  async get(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return sanitize(user);
  }

  async create(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
    const user = await this.prisma.user.create({
      data: { ...data, password: hashedPassword },
    });
    return sanitize(user);
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);

    const updateData = { ...data };
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, SALT_ROUNDS);
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data: updateData,
    });
    return sanitize(updated);
  }

  async delete(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    const deleted = await this.prisma.user.delete({ where: { id } });
    return sanitize(deleted);
  }
}
