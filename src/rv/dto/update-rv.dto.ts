import { PartialType } from '@nestjs/swagger';
import { CreateRvDto } from './create-rv.dto';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateRvDto extends PartialType(CreateRvDto) {
  @IsOptional()
  @IsNumber()
  updatedBy?: number;
}
