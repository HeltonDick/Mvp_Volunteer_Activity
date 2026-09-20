import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateActivityDto {
  @ApiProperty() @IsString() @IsNotEmpty() name!: string;
  @ApiProperty() @IsString() @IsNotEmpty() description!: string;
  @ApiProperty() @IsDate() @IsNotEmpty() date!: Date;
  @ApiProperty() @IsString() @IsNotEmpty() location!: string;
  @ApiPropertyOptional() @IsOptional() @IsInt() @Min(1) authorId?: number;
}
