import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

export enum StyleSite {
  ONE = 'one',
  TWO = 'two',
}

export enum SiteStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity('master_site')
export class MasterSite {
  @PrimaryGeneratedColumn({ name: 'site_id' })
  siteId: number;

  @Column({ name: 'site_name', length: 50, unique: true })
  siteName: string;

  @Column({ name: 'dock_id' })
  dockId: number;

  @Column({ name: 'loa', type: 'double precision', default: 0 })
  loa: number;

  @Column({ name: 'beam', type: 'double precision', default: 0 })
  beam: number;

  @Column({ name: 'draft', type: 'double precision', default: 0 })
  draft: number;

  @Column({ name: 'power_phase', length: 20, default: '1 Phase' })
  powerPhase: string;

  @Column({ name: 'power_ampere', type: 'double precision', default: 0 })
  powerAmpere: number;

  @Column({ name: 'vessel_type_id', type: 'int', array: true, nullable: true })
  vesselTypeId: number[];

  @Column({
    name: 'style_site',
    type: 'enum',
    enum: StyleSite,
    default: StyleSite.ONE,
  })
  styleSite: StyleSite;

  @Column({
    name: 'status',
    type: 'enum',
    enum: SiteStatus,
    default: SiteStatus.ACTIVE,
  })
  status: SiteStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
