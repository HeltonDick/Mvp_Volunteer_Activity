import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsEmail({}, { message: 'Informe um e-mail válido' })
  email!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Informe sua senha' })
  password!: string;
}
