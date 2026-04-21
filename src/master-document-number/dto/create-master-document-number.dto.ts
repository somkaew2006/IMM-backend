import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMasterDocumentNumberDto {
  @ApiProperty({ example: 'BOOKING' })
  @IsNotEmpty()
  @IsString()
  docType: string;

  @ApiProperty({ example: 'BK' })
  @IsNotEmpty()
  @IsString()
  prefix: string;

  @ApiPropertyOptional({ default: 5 })
  @IsOptional()
  @IsNumber()
  runningLength?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  currentYear?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  currentMonth?: string;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  currentNumber?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
