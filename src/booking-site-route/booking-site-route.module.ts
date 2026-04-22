import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingSiteRouteService } from './booking-site-route.service';
import { BookingSiteRouteController } from './booking-site-route.controller';
import { BookingSiteRoute } from './entities/booking-site-route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookingSiteRoute])],
  controllers: [BookingSiteRouteController],
  providers: [BookingSiteRouteService],
  exports: [BookingSiteRouteService],
})
export class BookingSiteRouteModule {}
