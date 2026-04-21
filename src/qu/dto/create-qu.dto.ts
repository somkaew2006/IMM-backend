import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsBoolean, IsArray, ValidateNested, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuDetailDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  productId?: number;

  @IsOptional()
  @IsString()
  productName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  qty?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  loa?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  unitPrice?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  unitName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  totalBeforeDiscount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  discountType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  discountValue?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  discountAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  totalAfterDiscount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  allocatedFinalDiscount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  netRevenue?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isServiceCharge?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  allocatedServiceCharge?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isTaxable?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  vatPercent?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  taxBase?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  vatAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  lineTotal?: number;
}

export class CreateQuDto {
  @IsOptional()
  @IsString()
  quNo: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  quDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  refBookingId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  refBookingNo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expiryDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  stayType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  arrivalDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  departureDate?: Date;

  @IsOptional()
  @IsNumber()
  customerId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  customerName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isCreditCustomer?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  vesselId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  vesselName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  mainVesselLoa?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  beam?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  draft?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  vesselTypeName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  vesselSize?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  totalItemBeforeDiscount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  totalItemDiscount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  totalItemAfterDiscount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  finalDiscountType?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  finalDiscountValue?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  finalDiscountAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  netAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  serviceChargePercent?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  serviceCharge?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  vatableAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  vatPercent?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  vatAmount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  grandTotal?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  note?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuDetailDto)
  details: CreateQuDetailDto[];
}
