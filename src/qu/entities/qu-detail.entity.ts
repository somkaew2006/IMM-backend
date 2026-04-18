import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { QuHead } from './qu-head.entity';

@Entity('qu_detail')
export class QuDetail {
  @PrimaryGeneratedColumn({ name: 'item_id' })
  itemId: number;

  @Column({ name: 'qu_id' })
  quId: number;

  @Column({ name: 'qu_no', length: 50, nullable: true })
  quNo: string;

  @Column({ name: 'product_id', nullable: true })
  productId: number;

  @Column({ name: 'product_name', length: 255 })
  productName: string;

  @Column({ name: 'qty', type: 'numeric', precision: 12, scale: 2, default: 1 })
  qty: number;

  @Column({ name: 'loa', type: 'numeric', precision: 12, scale: 2, default: 0 })
  loa: number;

  @Column({ name: 'unit_price', type: 'numeric', precision: 12, scale: 2, default: 0 })
  unitPrice: number;

  @Column({ name: 'unit_name', length: 50, nullable: true })
  unitName: string;

  @Column({ name: 'total_before_discount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  totalBeforeDiscount: number;

  @Column({ name: 'discount_type', length: 10, default: 'Amount' })
  discountType: string;

  @Column({ name: 'discount_value', type: 'numeric', precision: 12, scale: 2, default: 0 })
  discountValue: number;

  @Column({ name: 'discount_amount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  discountAmount: number;

  @Column({ name: 'total_after_discount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  totalAfterDiscount: number;

  @Column({ name: 'allocated_final_discount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  allocatedFinalDiscount: number;

  @Column({ name: 'net_revenue', type: 'numeric', precision: 12, scale: 2, default: 0 })
  netRevenue: number;

  @Column({ name: 'is_service_charge', default: true })
  isServiceCharge: boolean;

  @Column({ name: 'allocated_service_charge', type: 'numeric', precision: 12, scale: 2, default: 0 })
  allocatedServiceCharge: number;

  @Column({ name: 'is_taxable', default: true })
  isTaxable: boolean;

  @Column({ name: 'vat_percent', type: 'numeric', precision: 5, scale: 2, default: 7 })
  vatPercent: number;

  @Column({ name: 'tax_base', type: 'numeric', precision: 12, scale: 2, default: 0 })
  taxBase: number;

  @Column({ name: 'vat_amount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  vat_amount: number;

  @Column({ name: 'line_total', type: 'numeric', precision: 12, scale: 2, default: 0 })
  lineTotal: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @ManyToOne(() => QuHead, head => head.details, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'qu_id' })
  quHead: QuHead;
}
