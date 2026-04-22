import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingSiteRouteDto } from './create-booking-site-route.dto';

export class UpdateBookingSiteRouteDto extends PartialType(CreateBookingSiteRouteDto) {}
