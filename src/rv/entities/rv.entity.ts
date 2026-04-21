import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('rv')
export class Rv {
  @PrimaryGeneratedColumn({ name: 'rv_id' })
  rvId: number;

  @Column({ name: 'rv_no', length: 50, unique: true })
  rvNo: string;

  @Column({ name: 'rv_date', type: 'date', default: () => 'CURRENT_DATE' })
  rvDate: Date;

  @Column({ name: 'customer_id' })
  customerId: number;

  @Column({ name: 'ref_qu_id', nullable: true })
  refQuId: number;

  @Column({ name: 'receive_date', type: 'date', nullable: true })
  receiveDate: Date;

  @Column({ name: 'receive_amount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  receiveAmount: number;

  @Column({ name: 'used_amount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  usedAmount: number;

  @Column({ name: 'remain_amount', type: 'numeric', precision: 12, scale: 2, insert: false, update: false })
  remainAmount: number;

  @Column({ name: 'tender_id' })
  tenderId: number;

  @Column({ name: 'tender_code', length: 100, nullable: true })
  tenderCode: string;

  @Column({ name: 'bank_account_id', nullable: true })
  bankAccountId: number;

  @Column({ name: 'bank_ref', length: 100, nullable: true })
  bankRef: string;

  @Column({ name: 'card_type', length: 20, nullable: true })
  cardType: string;

  @Column({ name: 'card_last4', length: 4, nullable: true })
  cardLast4: string;

  @Column({ name: 'currency_code', length: 3, default: 'THB' })
  currencyCode: string;

  @Column({ name: 'exchange_rate', type: 'numeric', precision: 10, scale: 4, default: 1 })
  exchangeRate: number;

  @Column({ name: 'bank_fee_amount', type: 'numeric', precision: 12, scale: 2, default: 0 })
  bankFeeAmount: number;

  @Column({ name: 'status', length: 20, default: 'Active' })
  status: string;

  @Column({ name: 'note', type: 'text', nullable: true })
  note: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'created_by', nullable: true })
  createdBy: number;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: number;
}
