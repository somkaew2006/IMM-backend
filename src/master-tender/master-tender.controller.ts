import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterTenderService } from './master-tender.service';
import { CreateMasterTenderDto } from './dto/create-master-tender.dto';
import { UpdateMasterTenderDto } from './dto/update-master-tender.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('master-tender')
@Controller('api/master-tender')
export class MasterTenderController {
  constructor(private readonly service: MasterTenderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tender configuration' })
  create(@Body() createDto: CreateMasterTenderDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all active tender configurations' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tender configuration by ID' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tender configuration' })
  update(@Param('id') id: string, @Body() updateDto: UpdateMasterTenderDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Soft delete a tender configuration' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
