import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMasterDocumentNumberDto } from './dto/create-master-document-number.dto';
import { UpdateMasterDocumentNumberDto } from './dto/update-master-document-number.dto';
import { MasterDocumentNumber } from './entities/master-document-number.entity';

@Injectable()
export class MasterDocumentNumberService {
  constructor(
    @InjectRepository(MasterDocumentNumber)
    private readonly repository: Repository<MasterDocumentNumber>,
  ) {}

  create(createDto: CreateMasterDocumentNumberDto) {
    const sequence = this.repository.create(createDto);
    return this.repository.save(sequence);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const sequence = await this.repository.findOne({ where: { seqId: id } });
    if (!sequence) {
      throw new NotFoundException(`Sequence configuration with ID ${id} not found`);
    }
    return sequence;
  }

  async update(id: number, updateDto: UpdateMasterDocumentNumberDto) {
    const sequence = await this.findOne(id);
    Object.assign(sequence, updateDto);
    return this.repository.save(sequence);
  }

  async remove(id: number) {
    const sequence = await this.findOne(id);
    return this.repository.remove(sequence);
  }
}
