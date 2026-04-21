import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductBerthPriceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @ApiProperty({ example: 0 })
  @IsNotEmpty()
  @IsNumber()
  startLength: number;

  @ApiProperty({ example: 10 })
  @IsNotEmpty()
  @IsNumber()
  endLength: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  dailyPrice?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  monthlyPrice?: number;

  @ApiPropertyOptional({ default: 'Active' })
  @IsOptional()
  @IsString()
  status?: string;
}
