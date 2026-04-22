import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MasterSite } from './entities/master-site.entity';
import { CreateMasterSiteDto } from './dto/create-master-site.dto';
import { UpdateMasterSiteDto } from './dto/update-master-site.dto';

@Injectable()
export class MasterSiteService {
  constructor(
    @InjectRepository(MasterSite)
    private readonly masterSiteRepository: Repository<MasterSite>,
  ) {}

  async create(createMasterSiteDto: CreateMasterSiteDto): Promise<MasterSite> {
    const masterSite = this.masterSiteRepository.create(createMasterSiteDto);
    return await this.masterSiteRepository.save(masterSite);
  }

  async findAll(): Promise<MasterSite[]> {
    return await this.masterSiteRepository.find();
  }

  async findOne(id: number): Promise<MasterSite> {
    const masterSite = await this.masterSiteRepository.findOne({
      where: { siteId: id },
    });
    if (!masterSite) {
      throw new NotFoundException(`MasterSite with ID ${id} not found`);
    }
    return masterSite;
  }

  async update(id: number, updateMasterSiteDto: UpdateMasterSiteDto): Promise<MasterSite> {
    const masterSite = await this.findOne(id);
    const updated = Object.assign(masterSite, updateMasterSiteDto);
    return await this.masterSiteRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const masterSite = await this.findOne(id);
    await this.masterSiteRepository.softRemove(masterSite);
  }
}
