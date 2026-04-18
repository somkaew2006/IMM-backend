import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { QuService } from './qu.service';
import { CreateQuDto } from './dto/create-qu.dto';
import { UpdateQuDto } from './dto/update-qu.dto';

@ApiTags('Quotation')
@Controller('api/qu')
export class QuController {
  constructor(private readonly quService: QuService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new quotation' })
  create(@Body() createQuDto: CreateQuDto) {
    return this.quService.create(createQuDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all quotations' })
  findAll() {
    return this.quService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a quotation by ID' })
  findOne(@Param('id') id: string) {
    return this.quService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a quotation' })
  update(@Param('id') id: string, @Body() updateQuDto: UpdateQuDto) {
    return this.quService.update(+id, updateQuDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a quotation' })
  remove(@Param('id') id: string) {
    return this.quService.remove(+id);
  }
}
