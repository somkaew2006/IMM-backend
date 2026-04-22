import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MasterSiteService } from './master-site.service';
import { CreateMasterSiteDto } from './dto/create-master-site.dto';
import { UpdateMasterSiteDto } from './dto/update-master-site.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('master-site')
@Controller('api/master-site')
export class MasterSiteController {
  constructor(private readonly masterSiteService: MasterSiteService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new master site' })
  create(@Body() createMasterSiteDto: CreateMasterSiteDto) {
    return this.masterSiteService.create(createMasterSiteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all master sites' })
  findAll() {
    return this.masterSiteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a master site by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.masterSiteService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a master site' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMasterSiteDto: UpdateMasterSiteDto) {
    return this.masterSiteService.update(id, updateMasterSiteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a master site (soft delete)' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.masterSiteService.remove(id);
  }
}
