import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { BookingHead } from './entities/booking-head.entity';
import { BookingDetail } from './entities/booking-detail.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingHead)
    private bookingHeadRepository: Repository<BookingHead>,
    @InjectRepository(BookingDetail)
    private bookingDetailRepository: Repository<BookingDetail>,
    private dataSource: DataSource,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { details, ...headData } = createBookingDto;

      // 1. Create Head
      const bookingHead = this.bookingHeadRepository.create(headData);
      const savedHead = await queryRunner.manager.save(BookingHead, bookingHead);

      // 2. Create Details
      if (details && details.length > 0) {
        const detailEntities = details.map((detail) => {
          const detailEntity = this.bookingDetailRepository.create(detail);
          detailEntity.bookingId = savedHead.bookingId;
          detailEntity.bookingNo = savedHead.bookingNo || headData.bookingNo;
          return detailEntity;
        });
        await queryRunner.manager.save(BookingDetail, detailEntities);
      }

      await queryRunner.commitTransaction();
      return this.findOne(savedHead.bookingId);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.bookingHeadRepository.find({
      relations: ['details'],
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const booking = await this.bookingHeadRepository.findOne({
      where: { bookingId: id },
      relations: ['details'],
    });

    if (!booking) {
      throw new NotFoundException(`Booking #${id} not found`);
    }

    return booking;
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { details, ...headData } = updateBookingDto;

      // Update Head
      if (Object.keys(headData).length > 0) {
        await queryRunner.manager.update(BookingHead, id, headData);
      }

      // Re-create details if provided in update payload
      if (details) {
        // Delete old details
        await queryRunner.manager.delete(BookingDetail, { bookingId: id });
        
        // Insert new details
        if (details.length > 0) {
          const bookingHeadRef = await queryRunner.manager.findOne(BookingHead, { where: { bookingId: id } });
          const detailEntities = details.map((detail) => {
            const detailEntity = this.bookingDetailRepository.create(detail);
            detailEntity.bookingId = id;
            detailEntity.bookingNo = bookingHeadRef?.bookingNo || '';
            return detailEntity;
          });
          await queryRunner.manager.save(BookingDetail, detailEntities);
        }
      }

      await queryRunner.commitTransaction();
      return this.findOne(id);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number) {
    const booking = await this.findOne(id);
    // Cascade delete is set on the relation, so deleting head deletes details automatically
    return this.bookingHeadRepository.remove(booking);
  }
}
