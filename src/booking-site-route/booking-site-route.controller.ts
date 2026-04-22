import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { BookingSiteRouteService } from './booking-site-route.service';
import { CreateBookingSiteRouteDto } from './dto/create-booking-site-route.dto';
import { UpdateBookingSiteRouteDto } from './dto/update-booking-site-route.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('booking-site-route')
@Controller('api/booking-site-route')
export class BookingSiteRouteController {
  constructor(private readonly bookingSiteRouteService: BookingSiteRouteService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking site route' })
  create(@Body() createDto: CreateBookingSiteRouteDto) {
    return this.bookingSiteRouteService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all booking site routes or filter by booking id' })
  findAll(@Query('bookingId') bookingId?: string) {
    if (bookingId) {
      return this.bookingSiteRouteService.findByBookingId(+bookingId);
    }
    return this.bookingSiteRouteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a booking site route by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookingSiteRouteService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a booking site route' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateBookingSiteRouteDto) {
    return this.bookingSiteRouteService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a booking site route (soft delete)' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.bookingSiteRouteService.remove(id);
  }
}
