import { IsOptional, IsString, IsNumber, IsBoolean, IsArray, ValidateNested, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookingDetailDto {
  @IsOptional()
  @IsNumber()
  productId?: number;

  @IsOptional()
  @IsString()
  productName: string;

  @IsOptional()
  @IsNumber()
  qty?: number;

  @IsOptional()
  @IsNumber()
  loa?: number;

  @IsOptional()
  @IsNumber()
  unitPrice?: number;

  @IsOptional()
  @IsString()
  unitName?: string;

  @IsOptional()
  @IsNumber()
  totalBeforeDiscount?: number;

  @IsOptional()
  @IsString()
  discountType?: string;

  @IsOptional()
  @IsNumber()
  discountValue?: number;

  @IsOptional()
  @IsNumber()
  discountAmount?: number;

  @IsOptional()
  @IsNumber()
  totalAfterDiscount?: number;

  @IsOptional()
  @IsNumber()
  allocatedFinalDiscount?: number;

  @IsOptional()
  @IsNumber()
  netRevenue?: number;

  @IsOptional()
  @IsBoolean()
  isServiceCharge?: boolean;

  @IsOptional()
  @IsNumber()
  allocatedServiceCharge?: number;

  @IsOptional()
  @IsBoolean()
  isTaxable?: boolean;

  @IsOptional()
  @IsNumber()
  vatPercent?: number;

  @IsOptional()
  @IsNumber()
  taxBase?: number;

  @IsOptional()
  @IsNumber()
  vatAmount?: number;

  @IsOptional()
  @IsNumber()
  lineTotal?: number;
}

export class CreateBookingDto {
  @IsOptional()
  @IsString()
  bookingNo: string;

  @IsOptional()
  @IsDateString()
  bookingDate?: Date;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: Date;

  @IsOptional()
  @IsString()
  stayType?: string;

  @IsOptional()
  @IsDateString()
  arrivalDate?: Date;

  @IsOptional()
  @IsDateString()
  departureDate?: Date;

  @IsOptional()
  @IsNumber()
  customerId: number;

  @IsOptional()
  @IsString()
  customerName?: string;

  @IsOptional()
  @IsBoolean()
  isCreditCustomer?: boolean;

  @IsOptional()
  @IsNumber()
  vesselId?: number;

  @IsOptional()
  @IsString()
  vesselName?: string;

  @IsOptional()
  @IsNumber()
  mainVesselLoa?: number;

  @IsOptional()
  @IsNumber()
  beam?: number;

  @IsOptional()
  @IsNumber()
  draft?: number;

  @IsOptional()
  @IsString()
  vesselTypeName?: string;

  @IsOptional()
  @IsString()
  vesselSize?: string;

  @IsOptional()
  @IsNumber()
  totalItemBeforeDiscount?: number;

  @IsOptional()
  @IsNumber()
  totalItemDiscount?: number;

  @IsOptional()
  @IsNumber()
  totalItemAfterDiscount?: number;

  @IsOptional()
  @IsString()
  finalDiscountType?: string;

  @IsOptional()
  @IsNumber()
  finalDiscountValue?: number;

  @IsOptional()
  @IsNumber()
  finalDiscountAmount?: number;

  @IsOptional()
  @IsNumber()
  netAmount?: number;

  @IsOptional()
  @IsNumber()
  serviceChargePercent?: number;

  @IsOptional()
  @IsNumber()
  serviceCharge?: number;

  @IsOptional()
  @IsNumber()
  vatableAmount?: number;

  @IsOptional()
  @IsNumber()
  vatPercent?: number;

  @IsOptional()
  @IsNumber()
  vatAmount?: number;

  @IsOptional()
  @IsNumber()
  grandTotal?: number;

  @IsOptional()
  @IsString()
  note?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBookingDetailDto)
  details: CreateBookingDetailDto[];
}
