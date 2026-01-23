/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  fullName: string;

  @ApiProperty({ example: 'joedoe@tech.com' })
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @ApiProperty({ example: '11999999999' })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty({ example: 'https://linkedin.com/in/JohnDoe' })
  @IsUrl()
  @IsOptional()
  linkedInUrl?: string;

  @ApiProperty({ example: 'Backend' })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({ example: 'Pleno' })
  @IsString()
  @IsNotEmpty()
  experienceLevel: string;
}
