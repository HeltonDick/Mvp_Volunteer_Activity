import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Informe seu nome' })
  name!: string;

  @ApiProperty()
  @IsEmail({}, { message: 'Informe um e-mail válido' })
  email!: string;

  @ApiProperty()
  @IsString()
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  password!: string;
}
