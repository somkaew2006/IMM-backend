import { PartialType } from '@nestjs/swagger';
import { CreateQuDto } from './create-qu.dto';

export class UpdateQuDto extends PartialType(CreateQuDto) {}
