"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityParticipantsModule = void 0;
const common_1 = require("@nestjs/common");
const activityparticipants_controller_1 = require("./activityparticipants.controller");
const me_controller_1 = require("./me.controller");
const activityparticipants_service_1 = require("./activityparticipants.service");
let ActivityParticipantsModule = class ActivityParticipantsModule {
};
exports.ActivityParticipantsModule = ActivityParticipantsModule;
exports.ActivityParticipantsModule = ActivityParticipantsModule = __decorate([
    (0, common_1.Module)({
        controllers: [activityparticipants_controller_1.ActivityParticipantsController, me_controller_1.MeController],
        providers: [activityparticipants_service_1.ActivityParticipantsService],
    })
], ActivityParticipantsModule);
//# sourceMappingURL=activityparticipant.module.js.map