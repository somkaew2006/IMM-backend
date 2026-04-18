import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('accounting_transactions')
export class AccountingTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  description: string;

  @Column('decimal', { precision: 12, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 10 })
  type: 'DEBIT' | 'CREDIT';

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
