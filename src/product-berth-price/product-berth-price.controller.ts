import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductBerthPriceService } from './product-berth-price.service';
import { CreateProductBerthPriceDto } from './dto/create-product-berth-price.dto';
import { UpdateProductBerthPriceDto } from './dto/update-product-berth-price.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('product-berth-price')
@Controller('api/product-berth-price')
export class ProductBerthPriceController {
  constructor(private readonly priceService: ProductBerthPriceService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new berth price range for a product' })
  create(@Body() createProductBerthPriceDto: CreateProductBerthPriceDto) {
    return this.priceService.create(createProductBerthPriceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all berth prices' })
  findAll() {
    return this.priceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a berth price by ID' })
  findOne(@Param('id') id: string) {
    return this.priceService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a berth price' })
  update(@Param('id') id: string, @Body() updateProductBerthPriceDto: UpdateProductBerthPriceDto) {
    return this.priceService.update(+id, updateProductBerthPriceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Soft delete a berth price' })
  remove(@Param('id') id: string) {
    return this.priceService.remove(+id);
  }
}
