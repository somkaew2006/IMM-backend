import { PartialType } from '@nestjs/swagger';
import { CreateProductBerthPriceDto } from './create-product-berth-price.dto';

export class UpdateProductBerthPriceDto extends PartialType(CreateProductBerthPriceDto) {}
