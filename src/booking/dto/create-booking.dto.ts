export class CreateBookingDetailDto {
  productId?: number;
  productName: string;
  qty?: number;
  loa?: number;
  unitPrice?: number;
  unitName?: string;
  totalBeforeDiscount?: number;
  discountType?: string;
  discountValue?: number;
  discountAmount?: number;
  totalAfterDiscount?: number;
  allocatedFinalDiscount?: number;
  netRevenue?: number;
  isServiceCharge?: boolean;
  allocatedServiceCharge?: number;
  isTaxable?: boolean;
  vatPercent?: number;
  taxBase?: number;
  vatAmount?: number;
  lineTotal?: number;
}

export class CreateBookingDto {
  bookingNo: string;
  bookingDate?: Date;
  status?: string;
  expiryDate?: Date;
  stayType?: string;
  arrivalDate?: Date;
  departureDate?: Date;
  customerId: number;
  customerName?: string;
  isCreditCustomer?: boolean;
  vesselId?: number;
  vesselName?: string;
  mainVesselLoa?: number;
  beam?: number;
  draft?: number;
  vesselTypeName?: string;
  vesselSize?: string;
  totalItemBeforeDiscount?: number;
  totalItemDiscount?: number;
  totalItemAfterDiscount?: number;
  finalDiscountType?: string;
  finalDiscountValue?: number;
  finalDiscountAmount?: number;
  netAmount?: number;
  serviceChargePercent?: number;
  serviceCharge?: number;
  vatableAmount?: number;
  vatPercent?: number;
  vatAmount?: number;
  grandTotal?: number;
  note?: string;

  details: CreateBookingDetailDto[];
}
