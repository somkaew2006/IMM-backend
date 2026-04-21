import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductBerthPriceDto } from './dto/create-product-berth-price.dto';
import { UpdateProductBerthPriceDto } from './dto/update-product-berth-price.dto';
import { ProductBerthPrice } from './entities/product-berth-price.entity';

@Injectable()
export class ProductBerthPriceService {
  constructor(
    @InjectRepository(ProductBerthPrice)
    private readonly priceRepository: Repository<ProductBerthPrice>,
  ) {}

  create(createProductBerthPriceDto: CreateProductBerthPriceDto) {
    const price = this.priceRepository.create(createProductBerthPriceDto);
    return this.priceRepository.save(price);
  }

  findAll() {
    return this.priceRepository.find({ relations: ['product'] });
  }

  async findOne(id: number) {
    const price = await this.priceRepository.findOne({
      where: { priceId: id },
      relations: ['product'],
    });
    if (!price) {
      throw new NotFoundException(`Berth Price with ID ${id} not found`);
    }
    return price;
  }

  async update(id: number, updateProductBerthPriceDto: UpdateProductBerthPriceDto) {
    const price = await this.findOne(id);
    Object.assign(price, updateProductBerthPriceDto);
    return this.priceRepository.save(price);
  }

  async remove(id: number) {
    const price = await this.findOne(id);
    return this.priceRepository.softRemove(price);
  }
}
