import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsBoolean, IsEnum } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'P001' })
  @IsNotEmpty()
  @IsString()
  productCode: string;

  @ApiProperty({ example: 'Product Name' })
  @IsNotEmpty()
  @IsString()
  productName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  productDescription?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  categoryId?: number;

  @ApiProperty({ example: 'Service' })
  @IsNotEmpty()
  @IsString()
  productType: string;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  standardPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  unitName?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isTaxable?: boolean;

  @ApiPropertyOptional({ default: 7 })
  @IsOptional()
  @IsNumber()
  vatPercent?: number;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isWht?: boolean;

  @ApiPropertyOptional({ default: 3 })
  @IsOptional()
  @IsNumber()
  whtPercent?: number;

  @ApiPropertyOptional({ default: 'Active' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  createdBy?: number;
}
