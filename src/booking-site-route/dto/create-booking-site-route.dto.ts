import { IsString, IsNumber, IsOptional, IsEnum, IsDateString, MaxLength } from 'class-validator';
import { BookingSiteRouteStatus } from '../entities/booking-site-route.entity';

export class CreateBookingSiteRouteDto {
  @IsNumber()
  refBookingId: number;

  @IsOptional()
  @IsNumber()
  siteId?: number;

  @IsString()
  @MaxLength(100)
  siteName: string;

  @IsOptional()
  @IsNumber()
  vesselId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  vesselName?: string;

  @IsOptional()
  @IsNumber()
  vesselLoaSnapshot?: number;

  @IsOptional()
  @IsNumber()
  beam?: number;

  @IsOptional()
  @IsNumber()
  draft?: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  vesselTypeName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  vesselSize?: string;

  @IsOptional()
  @IsDateString()
  arrivalDate?: string;

  @IsOptional()
  @IsDateString()
  departureDate?: string;

  @IsOptional()
  @IsNumber()
  totalDay?: number;

  @IsOptional()
  @IsEnum(BookingSiteRouteStatus)
  status?: BookingSiteRouteStatus;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  stayType?: string;


}
