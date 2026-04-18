import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { BookingDetail } from './booking-detail.entity';

@Entity('booking_head')
export class BookingHead {
  @PrimaryGeneratedColumn({ name: 'booking_id' })
  bookingId: number;

  @Column({ name: 'booking_no', length: 50, unique: true })
  bookingNo: string;

  @Column({ name: 'booking_date', type: 'date', default: () => 'CURRENT_DATE' })
  bookingDate: Date;

  @Column({ name: 'status', default: 'draft' })
  status: string;

  @Column({ name: 'expiry_date', type: 'timestamp', nullable: true })
  expiryDate: Date;

  @Column({ name: 'stay_type', length: 20, nullable: true })
  stayType: string;

  @Column({ name: 'arrival_date', type: 'timestamp', nullable: true })
  arrivalDate: Date;

  @Column({ name: 'departure_date', type: 'timestamp', nullable: true })
  departureDate: Date;

  @Column({ name: 'customer_id' })
  customerId: number;

  @Column({ name: 'customer_name', length: 255, nullable: true })
  customerName: string;

  @Column({ name: 'is_credit_customer', default: false })
  isCreditCustomer: boolean;

  @Column({ name: 'vessel_id', nullable: true })
  vesselId: number;

  @Column({ name: 'vessel_name', length: 255, nullable: true })
  vesselName: string;

  @Column({ name: 'main_vessel_loa', type: 'numeric', precision: 12, scale: 2, nullable: true })
  mainVesselLoa: number;

  @Column({ name: 'beam', type: 'numeric', precision: 12, scale: 2, nullable: true })
  beam: number;

  @Column({ name: 'draft', type: 'numeric', precision: 12, scale: 2, nullable: true })
  draft: number;

  @Column({ name: 'vessel_type_name', length: 100, nullable: true })
  vesselTypeName: string;

  @Column({ name: 'vessel_size', length: 50, nullable: true })
  vesselSize: string;

  @Column({ name: 'total_item_before_discount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  totalItemBeforeDiscount: number;

  @Column({ name: 'total_item_discount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  totalItemDiscount: number;

  @Column({ name: 'total_item_after_discount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  totalItemAfterDiscount: number;

  @Column({ name: 'final_discount_type', length: 10, default: 'Amount' })
  finalDiscountType: string;

  @Column({ name: 'final_discount_value', type: 'numeric', precision: 12, scale: 2, default: 0 })
  finalDiscountValue: number;

  @Column({ name: 'final_discount_amount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  finalDiscountAmount: number;

  @Column({ name: 'net_amount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  netAmount: number;

  @Column({ name: 'service_charge_percent', type: 'numeric', precision: 5, scale: 2, default: 0 })
  serviceChargePercent: number;

  @Column({ name: 'service_charge', type: 'numeric', precision: 12, scale: 2, default: 0 })
  serviceCharge: number;

  @Column({ name: 'vatable_amount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  vatableAmount: number;

  @Column({ name: 'vat_percent', type: 'numeric', precision: 5, scale: 2, default: 7 })
  vatPercent: number;

  @Column({ name: 'vat_amount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  vatAmount: number;

  @Column({ name: 'grand_total', type: 'numeric', precision: 12, scale: 2, default: 0 })
  grandTotal: number;

  @Column({ name: 'note', type: 'text', default: 'no detail' })
  note: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @OneToMany(() => BookingDetail, detail => detail.bookingHead, { cascade: true })
  details: BookingDetail[];
}
