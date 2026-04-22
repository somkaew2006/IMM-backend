import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingSiteRoute } from './entities/booking-site-route.entity';
import { CreateBookingSiteRouteDto } from './dto/create-booking-site-route.dto';
import { UpdateBookingSiteRouteDto } from './dto/update-booking-site-route.dto';

@Injectable()
export class BookingSiteRouteService {
  constructor(
    @InjectRepository(BookingSiteRoute)
    private readonly bookingSiteRouteRepository: Repository<BookingSiteRoute>,
  ) {}

  async create(createDto: CreateBookingSiteRouteDto): Promise<BookingSiteRoute> {
    const route = this.bookingSiteRouteRepository.create(createDto);
    return await this.bookingSiteRouteRepository.save(route);
  }

  async findAll(): Promise<BookingSiteRoute[]> {
    return await this.bookingSiteRouteRepository.find();
  }

  async findByBookingId(bookingId: number): Promise<BookingSiteRoute[]> {
    return await this.bookingSiteRouteRepository.find({
      where: { refBookingId: bookingId },
    });
  }

  async findOne(id: number): Promise<BookingSiteRoute> {
    const route = await this.bookingSiteRouteRepository.findOne({
      where: { routeId: id },
    });
    if (!route) {
      throw new NotFoundException(`BookingSiteRoute with ID ${id} not found`);
    }
    return route;
  }

  async update(id: number, updateDto: UpdateBookingSiteRouteDto): Promise<BookingSiteRoute> {
    const route = await this.findOne(id);
    const updated = Object.assign(route, updateDto);
    return await this.bookingSiteRouteRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const route = await this.findOne(id);
    await this.bookingSiteRouteRepository.softRemove(route);
  }
}
