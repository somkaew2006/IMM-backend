import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselService } from './vessel.service';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('vessel')
@Controller('api/vessel')
export class VesselController {
  constructor(private readonly vesselService: VesselService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new vessel' })
  create(@Body() createVesselDto: CreateVesselDto) {
    return this.vesselService.create(createVesselDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all vessels' })
  findAll() {
    return this.vesselService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vessel by ID' })
  findOne(@Param('id') id: string) {
    return this.vesselService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a vessel' })
  update(@Param('id') id: string, @Body() updateVesselDto: UpdateVesselDto) {
    return this.vesselService.update(+id, updateVesselDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Soft delete a vessel' })
  remove(@Param('id') id: string) {
    return this.vesselService.remove(+id);
  }
}
