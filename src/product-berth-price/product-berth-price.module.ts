import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBerthPriceService } from './product-berth-price.service';
import { ProductBerthPriceController } from './product-berth-price.controller';
import { ProductBerthPrice } from './entities/product-berth-price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductBerthPrice])],
  controllers: [ProductBerthPriceController],
  providers: [ProductBerthPriceService],
  exports: [ProductBerthPriceService],
})
export class ProductBerthPriceModule {}
