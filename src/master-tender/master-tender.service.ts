import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMasterTenderDto } from './dto/create-master-tender.dto';
import { UpdateMasterTenderDto } from './dto/update-master-tender.dto';
import { MasterTender } from './entities/master-tender.entity';

@Injectable()
export class MasterTenderService {
  constructor(
    @InjectRepository(MasterTender)
    private readonly repository: Repository<MasterTender>,
  ) {}

  create(createDto: CreateMasterTenderDto) {
    const tender = this.repository.create(createDto);
    return this.repository.save(tender);
  }

  findAll() {
    return this.repository.find({
      order: { sortOrder: 'ASC' },
    });
  }

  async findOne(id: number) {
    const tender = await this.repository.findOne({ where: { tenderId: id } });
    if (!tender) {
      throw new NotFoundException(`Tender configuration with ID ${id} not found`);
    }
    return tender;
  }

  async update(id: number, updateDto: UpdateMasterTenderDto) {
    const tender = await this.findOne(id);
    Object.assign(tender, updateDto);
    return this.repository.save(tender);
  }

  async remove(id: number) {
    const tender = await this.findOne(id);
    return this.repository.softRemove(tender);
  }
}
