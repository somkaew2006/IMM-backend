import { PartialType } from '@nestjs/swagger';
import { CreateMasterTenderDto } from './create-master-tender.dto';

export class UpdateMasterTenderDto extends PartialType(CreateMasterTenderDto) {}
