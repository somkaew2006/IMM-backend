import { IsString, IsNumber, IsOptional, IsArray, IsEnum, MaxLength } from 'class-validator';
import { StyleSite, SiteStatus } from '../entities/master-site.entity';

export class CreateMasterSiteDto {
  @IsString()
  @MaxLength(50)
  siteName: string;

  @IsNumber()
  dockId: number;

  @IsOptional()
  @IsNumber()
  loa?: number;

  @IsOptional()
  @IsNumber()
  beam?: number;

  @IsOptional()
  @IsNumber()
  draft?: number;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  powerPhase?: string;

  @IsOptional()
  @IsNumber()
  powerAmpere?: number;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  vesselTypeId?: number[];

  @IsOptional()
  @IsEnum(StyleSite)
  styleSite?: StyleSite;

  @IsOptional()
  @IsEnum(SiteStatus)
  status?: SiteStatus;
}
