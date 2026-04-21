import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateProductCategoryDto {
  @ApiProperty({ example: 'Berth' })
  @IsNotEmpty()
  @IsString()
  categoryName: string;

  @ApiPropertyOptional({ default: 'Active' })
  @IsOptional()
  @IsString()
  status?: string;
}
