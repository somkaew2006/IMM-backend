import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterSiteDto } from './create-master-site.dto';

export class UpdateMasterSiteDto extends PartialType(CreateMasterSiteDto) {}
