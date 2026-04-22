import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn } from 'typeorm';

export enum BookingSiteRouteStatus {
  RESERVED = 'reserved',
  CHECKED_IN = 'checked_in',
  CHECKED_OUT = 'checked_out',
  CANCELLED = 'cancelled',
}

@Entity('booking_site_route')
export class BookingSiteRoute {
  @PrimaryGeneratedColumn({ name: 'route_id' })
  routeId: number;

  @Column({ name: 'ref_booking_id' })
  refBookingId: number;

  @Column({ name: 'site_id', nullable: true })
  siteId: number;

  @Column({ name: 'site_name', length: 100 })
  siteName: string;

  @Column({ name: 'vessel_id', nullable: true })
  vesselId: number;

  @Column({ name: 'vessel_name', length: 255, nullable: true })
  vesselName: string;

  @Column({ name: 'vessel_loa_snapshot', type: 'numeric', precision: 12, scale: 2, nullable: true })
  vesselLoaSnapshot: number;

  @Column({ name: 'beam', type: 'numeric', precision: 12, scale: 2, nullable: true })
  beam: number;

  @Column({ name: 'draft', type: 'numeric', precision: 12, scale: 2, nullable: true })
  draft: number;

  @Column({ name: 'vessel_type_name', length: 100, nullable: true })
  vesselTypeName: string;

  @Column({ name: 'vessel_size', length: 50, nullable: true })
  vesselSize: string;

  @Column({ name: 'arrival_date', type: 'timestamp', nullable: true })
  arrivalDate: Date;

  @Column({ name: 'departure_date', type: 'timestamp', nullable: true })
  departureDate: Date;

  @Column({ name: 'total_day', nullable: true })
  totalDay: number;

  @Column({
    name: 'status',
    type: 'enum',
    enum: BookingSiteRouteStatus,
    default: BookingSiteRouteStatus.RESERVED,
  })
  status: BookingSiteRouteStatus;

  @Column({ name: 'stay_type', length: 20, nullable: true })
  stayType: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
