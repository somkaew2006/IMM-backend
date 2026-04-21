import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateVesselRelationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  vesselId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  vesselRelationTypeId: number;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isPrimaryOwner?: boolean;

  @ApiPropertyOptional({ default: 100 })
  @IsOptional()
  @IsNumber()
  ownershipPercentage?: number;
}
