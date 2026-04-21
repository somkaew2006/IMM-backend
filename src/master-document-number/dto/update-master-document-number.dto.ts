import { PartialType } from '@nestjs/swagger';
import { CreateMasterDocumentNumberDto } from './create-master-document-number.dto';

export class UpdateMasterDocumentNumberDto extends PartialType(CreateMasterDocumentNumberDto) {}
