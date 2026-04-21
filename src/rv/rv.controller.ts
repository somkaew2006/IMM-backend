import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RvService } from './rv.service';
import { CreateRvDto } from './dto/create-rv.dto';
import { UpdateRvDto } from './dto/update-rv.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('rv')
@Controller('api/rv')
export class RvController {
  constructor(private readonly rvService: RvService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Receipt Voucher (RV)' })
  create(@Body() createRvDto: CreateRvDto) {
    return this.rvService.create(createRvDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Receipt Vouchers' })
  findAll() {
    return this.rvService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Receipt Voucher by ID' })
  findOne(@Param('id') id: string) {
    return this.rvService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Receipt Voucher' })
  update(@Param('id') id: string, @Body() updateRvDto: UpdateRvDto) {
    return this.rvService.update(+id, updateRvDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Receipt Voucher' })
  remove(@Param('id') id: string) {
    return this.rvService.remove(+id);
  }
}
