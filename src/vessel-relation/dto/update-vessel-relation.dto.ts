import { PartialType } from '@nestjs/swagger';
import { CreateVesselRelationDto } from './create-vessel-relation.dto';

export class UpdateVesselRelationDto extends PartialType(CreateVesselRelationDto) {}
