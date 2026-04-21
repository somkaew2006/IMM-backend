import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateRvDto {

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  rvDate?: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  refQuId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  receiveDate?: Date;

  @ApiProperty({ default: 0 })
  @IsNotEmpty()
  @IsNumber()
  receiveAmount: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  usedAmount?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  tenderId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tenderCode?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  bankAccountId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  bankRef?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cardType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cardLast4?: string;

  @ApiPropertyOptional({ default: 'THB' })
  @IsOptional()
  @IsString()
  currencyCode?: string;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @IsNumber()
  exchangeRate?: number;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @IsNumber()
  bankFeeAmount?: number;

  @ApiPropertyOptional({ default: 'Active' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  note?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  createdBy?: number;
}
