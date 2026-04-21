import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateMasterTenderDto {
  @ApiProperty({ example: 'CASH' })
  @IsNotEmpty()
  @IsString()
  tenderCode: string;

  @ApiProperty({ example: 'Cash' })
  @IsNotEmpty()
  @IsString()
  tenderName: string;

  @ApiProperty({ example: 'Cash' })
  @IsNotEmpty()
  @IsString()
  tenderType: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isCash?: boolean;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isRequireBank?: boolean;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isRequireRefNo?: boolean;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isRequireDate?: boolean;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  chargePercent?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  glAccountCode?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}
