import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activitie.dto';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {}
