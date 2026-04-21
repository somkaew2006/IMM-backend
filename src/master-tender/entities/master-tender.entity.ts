import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('master_tender')
export class MasterTender {
  @PrimaryGeneratedColumn({ name: 'tender_id' })
  tenderId: number;

  @Column({ name: 'tender_code', length: 20, unique: true })
  tenderCode: string;

  @Column({ name: 'tender_name', length: 100 })
  tenderName: string;

  @Column({ name: 'tender_type', length: 20 })
  tenderType: string;

  @Column({ name: 'is_cash', default: false })
  isCash: boolean;

  @Column({ name: 'is_require_bank', default: false })
  isRequireBank: boolean;

  @Column({ name: 'is_require_ref_no', default: false })
  isRequireRefNo: boolean;

  @Column({ name: 'is_require_date', default: false })
  isRequireDate: boolean;

  @Column({ name: 'charge_percent', type: 'numeric', precision: 5, scale: 2, default: 0 })
  chargePercent: number;

  @Column({ name: 'gl_account_code', length: 50, nullable: true })
  glAccountCode: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'sort_order', default: 0 })
  sortOrder: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
