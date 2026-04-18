import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQuDetailDto {
  @ApiPropertyOptional()
  productId?: number;

  productName: string;

  @ApiPropertyOptional()
  qty?: number;

  @ApiPropertyOptional()
  loa?: number;

  @ApiPropertyOptional()
  unitPrice?: number;

  @ApiPropertyOptional()
  unitName?: string;

  @ApiPropertyOptional()
  totalBeforeDiscount?: number;

  @ApiPropertyOptional()
  discountType?: string;

  @ApiPropertyOptional()
  discountValue?: number;

  @ApiPropertyOptional()
  discountAmount?: number;

  @ApiPropertyOptional()
  totalAfterDiscount?: number;

  @ApiPropertyOptional()
  allocatedFinalDiscount?: number;

  @ApiPropertyOptional()
  netRevenue?: number;

  @ApiPropertyOptional()
  isServiceCharge?: boolean;

  @ApiPropertyOptional()
  allocatedServiceCharge?: number;

  @ApiPropertyOptional()
  isTaxable?: boolean;

  @ApiPropertyOptional()
  vatPercent?: number;

  @ApiPropertyOptional()
  taxBase?: number;

  @ApiPropertyOptional()
  vatAmount?: number;

  @ApiPropertyOptional()
  lineTotal?: number;
}

export class CreateQuDto {
  quNo: string;

  @ApiPropertyOptional()
  quDate?: Date;

  @ApiPropertyOptional()
  refBookingId?: number;

  @ApiPropertyOptional()
  status?: string;

  @ApiPropertyOptional()
  expiryDate?: Date;

  @ApiPropertyOptional()
  stayType?: string;

  @ApiPropertyOptional()
  arrivalDate?: Date;

  @ApiPropertyOptional()
  departureDate?: Date;

  customerId: number;

  @ApiPropertyOptional()
  customerName?: string;

  @ApiPropertyOptional()
  isCreditCustomer?: boolean;

  @ApiPropertyOptional()
  vesselId?: number;

  @ApiPropertyOptional()
  vesselName?: string;

  @ApiPropertyOptional()
  mainVesselLoa?: number;

  @ApiPropertyOptional()
  beam?: number;

  @ApiPropertyOptional()
  draft?: number;

  @ApiPropertyOptional()
  vesselTypeName?: string;

  @ApiPropertyOptional()
  vesselSize?: string;

  @ApiPropertyOptional()
  totalItemBeforeDiscount?: number;

  @ApiPropertyOptional()
  totalItemDiscount?: number;

  @ApiPropertyOptional()
  totalItemAfterDiscount?: number;

  @ApiPropertyOptional()
  finalDiscountType?: string;

  @ApiPropertyOptional()
  finalDiscountValue?: number;

  @ApiPropertyOptional()
  finalDiscountAmount?: number;

  @ApiPropertyOptional()
  netAmount?: number;

  @ApiPropertyOptional()
  serviceChargePercent?: number;

  @ApiPropertyOptional()
  serviceCharge?: number;

  @ApiPropertyOptional()
  vatableAmount?: number;

  @ApiPropertyOptional()
  vatPercent?: number;

  @ApiPropertyOptional()
  vatAmount?: number;

  @ApiPropertyOptional()
  grandTotal?: number;

  @ApiPropertyOptional()
  note?: string;

  details: CreateQuDetailDto[];
}
