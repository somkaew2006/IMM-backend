import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterDocumentNumberService } from './master-document-number.service';
import { CreateMasterDocumentNumberDto } from './dto/create-master-document-number.dto';
import { UpdateMasterDocumentNumberDto } from './dto/update-master-document-number.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('master-document-number')
@Controller('api/master-document-number')
export class MasterDocumentNumberController {
  constructor(private readonly service: MasterDocumentNumberService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new document number sequence configuration' })
  create(@Body() createDto: CreateMasterDocumentNumberDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sequence configurations' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a sequence configuration by ID' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a sequence configuration' })
  update(@Param('id') id: string, @Body() updateDto: UpdateMasterDocumentNumberDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a sequence configuration' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
