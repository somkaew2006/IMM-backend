import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { VesselRelation } from '../../vessel-relation/entities/vessel-relation.entity';

@Entity('vessel')
export class Vessel {
  @PrimaryGeneratedColumn({ name: 'vessel_id' })
  vesselId: number;

  @Column({ name: 'vessel_name', length: 255 })
  vesselName: string;

  @Column({ name: 'vessel_type_id', nullable: true })
  vesselTypeId: number;

  @Column({ name: 'vessel_size_id', nullable: true })
  vesselSizeId: number;

  @Column({ name: 'nationality_id', nullable: true })
  nationalityId: number;

  @Column({ name: 'loa', type: 'numeric', precision: 12, scale: 2, default: 0 })
  loa: number;

  @Column({ name: 'beam', type: 'numeric', precision: 12, scale: 2, default: 0 })
  beam: number;

  @Column({ name: 'draft', type: 'numeric', precision: 12, scale: 2, default: 0 })
  draft: number;

  @Column({ name: 'power_ampere', type: 'numeric', precision: 12, scale: 2, default: 0 })
  powerAmpere: number;

  @Column({ name: 'power_phase', length: 50, nullable: true })
  powerPhase: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @OneToMany(() => VesselRelation, relation => relation.vessel)
  vesselRelations: VesselRelation[];
}
