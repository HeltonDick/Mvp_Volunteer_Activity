import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './types/create-activitie.dto';
import { UpdateActivityDto } from './types/update-activitie.dto';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get() list() {
    return this.activitiesService.list();
  }

  @Get(':id') get(@Param('id', ParseIntPipe) id: number) {
    return this.activitiesService.get(id);
  }

  @Post() create(@Body() data: CreateActivityDto) {
    return this.activitiesService.create(data);
  }

  @Patch(':id') update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateActivityDto,
  ) {
    return this.activitiesService.update(id, dto);
  }

  @Delete(':id') delete(@Param('id', ParseIntPipe) id: number) {
    return this.activitiesService.delete(id);
  }
}
