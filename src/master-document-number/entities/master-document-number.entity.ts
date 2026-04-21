import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity('master_document_number')
export class MasterDocumentNumber {
  @PrimaryGeneratedColumn({ name: 'seq_id' })
  seqId: number;

  @Column({ name: 'doc_type', length: 50, unique: true })
  docType: string;

  @Column({ name: 'prefix', length: 10 })
  prefix: string;

  @Column({ name: 'running_length', default: 5 })
  runningLength: number;

  @Column({ name: 'current_year', length: 4, default: () => "to_char(CURRENT_DATE, 'YYYY')" })
  currentYear: string;

  @Column({ name: 'current_month', length: 2, default: () => "to_char(CURRENT_DATE, 'MM')" })
  currentMonth: string;

  @Column({ name: 'current_number', default: 0 })
  currentNumber: number;

  @Column({ name: 'description', length: 255, nullable: true })
  description: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
