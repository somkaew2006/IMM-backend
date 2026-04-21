import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateVesselDto {
  @ApiProperty({ example: 'Vessel Name' })
  @IsNotEmpty()
  @IsString()
  vesselName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  vesselTypeId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  vesselSizeId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  nationalityId?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  loa?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  beam?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  draft?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  powerAmpere?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  powerPhase?: string;
}
