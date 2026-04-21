import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Vessel } from '../../vessel/entities/vessel.entity';

@Entity('vessel_relation')
export class VesselRelation {
  @PrimaryGeneratedColumn({ name: 'vessel_relation_id' })
  vesselRelationId: number;

  @Column({ name: 'customer_id' })
  customerId: number;

  @Column({ name: 'vessel_id' })
  vesselId: number;

  @Column({ name: 'vessel_relation_type_id' })
  vesselRelationTypeId: number;

  @Column({ name: 'is_primary_owner', default: false })
  isPrimaryOwner: boolean;

  @Column({ name: 'ownership_percentage', type: 'numeric', precision: 5, scale: 2, default: 100 })
  ownershipPercentage: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @ManyToOne(() => Customer, customer => customer.vesselRelations)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => Vessel, vessel => vessel.vesselRelations)
  @JoinColumn({ name: 'vessel_id' })
  vessel: Vessel;
}
