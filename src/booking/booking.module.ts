import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { BookingHead } from './entities/booking-head.entity';
import { BookingDetail } from './entities/booking-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookingHead, BookingDetail])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
