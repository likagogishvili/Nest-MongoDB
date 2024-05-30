import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Username' })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'Email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'First Name' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Last Name' })
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Gender' })
  gender: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Region' })
  region: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Display Name' })
  displayName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Avatar URL' })
  avatarUrl?: string;
}
