import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { VesselRelation } from '../../vessel-relation/entities/vessel-relation.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn({ name: 'customer_id' })
  customerId: number;

  @Column({ name: 'customer_name', length: 255 })
  customerName: string;

  @Column({ name: 'customer_type_id', nullable: true })
  customerTypeId: number;

  @Column({ name: 'nationality_id', nullable: true })
  nationalityId: number;

  @Column({ name: 'tax_id', length: 20, nullable: true })
  taxId: string;

  @Column({ name: 'branch_type', length: 20, default: 'HQ' })
  branchType: string;

  @Column({ name: 'branch_code', length: 10, default: '00000' })
  branchCode: string;

  @Column({ name: 'billing_address_line1', type: 'text', nullable: true })
  billingAddressLine1: string;

  @Column({ name: 'billing_address_line2', type: 'text', nullable: true })
  billingAddressLine2: string;

  @Column({ name: 'city', length: 100, nullable: true })
  city: string;

  @Column({ name: 'state_province', length: 100, nullable: true })
  stateProvince: string;

  @Column({ name: 'postal_code', length: 20, nullable: true })
  postalCode: string;

  @Column({ name: 'country', length: 100, nullable: true })
  country: string;

  @Column({ name: 'contact_person', length: 150, nullable: true })
  contactPerson: string;

  @Column({ name: 'email', length: 100, nullable: true })
  email: string;

  @Column({ name: 'phone', length: 50, nullable: true })
  phone: string;

  @Column({ name: 'is_credit_customer', default: false })
  isCreditCustomer: boolean;

  @Column({ name: 'credit_term_days', default: 0 })
  creditTermDays: number;

  @Column({ name: 'advance_credit_balance', type: 'numeric', precision: 12, scale: 2, default: 0 })
  advanceCreditBalance: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @OneToMany(() => VesselRelation, relation => relation.customer)
  vesselRelations: VesselRelation[];
}
