"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityParticipantsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ActivityParticipantsService = class ActivityParticipantsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listByActivity(activityId) {
        await this.ensureActivityExists(activityId);
        return this.prisma.activity_participant.findMany({
            where: { activityId },
            include: {
                participant: { select: { id: true, name: true, email: true } },
            },
            orderBy: { createdAt: 'asc' },
        });
    }
    async listForUser(participantId) {
        return this.prisma.activity_participant.findMany({
            where: { participantId },
            include: { activity: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async addParticipant(activityId, dto) {
        await this.ensureActivityExists(activityId);
        const user = await this.prisma.user.findUnique({
            where: { id: dto.participantId },
        });
        if (!user) {
            throw new common_1.NotFoundException(`Usuário com ID ${dto.participantId} não encontrado`);
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
            throw new common_1.ConflictException('Esse usuário já está inscrito nessa atividade');
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
    async removeParticipant(activityId, participantId) {
        const existing = await this.prisma.activity_participant.findUnique({
            where: {
                activityId_participantId: { activityId, participantId },
            },
        });
        if (!existing) {
            throw new common_1.NotFoundException('Participação não encontrada');
        }
        return this.prisma.activity_participant.delete({
            where: { id: existing.id },
        });
    }
    async ensureActivityExists(activityId) {
        const activity = await this.prisma.activity.findUnique({
            where: { id: activityId },
        });
        if (!activity) {
            throw new common_1.NotFoundException(`Activity with ID ${activityId} not found`);
        }
    }
};
exports.ActivityParticipantsService = ActivityParticipantsService;
exports.ActivityParticipantsService = ActivityParticipantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ActivityParticipantsService);
//# sourceMappingURL=activityparticipants.service.js.map