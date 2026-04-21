import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselRelationService } from './vessel-relation.service';
import { CreateVesselRelationDto } from './dto/create-vessel-relation.dto';
import { UpdateVesselRelationDto } from './dto/update-vessel-relation.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('vessel-relation')
@Controller('api/vessel-relation')
export class VesselRelationController {
  constructor(private readonly vesselRelationService: VesselRelationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new vessel relation (owner/operator)' })
  create(@Body() createVesselRelationDto: CreateVesselRelationDto) {
    return this.vesselRelationService.create(createVesselRelationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all vessel relations' })
  findAll() {
    return this.vesselRelationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vessel relation by ID' })
  findOne(@Param('id') id: string) {
    return this.vesselRelationService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a vessel relation' })
  update(@Param('id') id: string, @Body() updateVesselRelationDto: UpdateVesselRelationDto) {
    return this.vesselRelationService.update(+id, updateVesselRelationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Soft delete a vessel relation' })
  remove(@Param('id') id: string) {
    return this.vesselRelationService.remove(+id);
  }
}
