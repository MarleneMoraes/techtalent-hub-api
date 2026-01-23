import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role, ExperienceLevel } from '@prisma/client';

export class CreateCandidateDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty({ message: 'Full name is required' })
  fullName: string;

  @ApiProperty({ example: 'joedoe@tech.com' })
  @IsEmail({}, { message: 'Invalid e-mail' })
  email: string;

  @ApiProperty({ example: '11999999999' })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty({ example: 'https://linkedin.com/in/JohnDoe' })
  @IsUrl()
  @IsOptional()
  linkedInUrl?: string;

  @ApiProperty({ 
    example: 'BACKEND', 
    enum: Role 
  })
  @IsEnum(Role, { message: 'Invalid role. Choose from: BACKEND, FRONTEND, FULLSTACK, etc.' })
  @IsNotEmpty()
  role: Role;

  @ApiProperty({ 
    example: 'MID_LEVEL', 
    enum: ExperienceLevel 
  })
  @IsEnum(ExperienceLevel, { message: 'Invalid level. Choose from: JUNIOR, MID_LEVEL, SENIOR' })
  @IsNotEmpty()
  experienceLevel: ExperienceLevel;
}