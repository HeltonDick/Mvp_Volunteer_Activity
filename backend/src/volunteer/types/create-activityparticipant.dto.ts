import { IsInt, Min } from 'class-validator';

export class CreateActivityParticipantDto {
  @IsInt()
  @Min(1)
  participantId!: number;
}
