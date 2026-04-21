import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVesselRelationDto } from './dto/create-vessel-relation.dto';
import { UpdateVesselRelationDto } from './dto/update-vessel-relation.dto';
import { VesselRelation } from './entities/vessel-relation.entity';

@Injectable()
export class VesselRelationService {
  constructor(
    @InjectRepository(VesselRelation)
    private readonly vesselRelationRepository: Repository<VesselRelation>,
  ) {}

  create(createVesselRelationDto: CreateVesselRelationDto) {
    const relation = this.vesselRelationRepository.create(createVesselRelationDto);
    return this.vesselRelationRepository.save(relation);
  }

  findAll() {
    return this.vesselRelationRepository.find({
      relations: ['customer', 'vessel'],
    });
  }

  async findOne(id: number) {
    const relation = await this.vesselRelationRepository.findOne({
      where: { vesselRelationId: id },
      relations: ['customer', 'vessel'],
    });
    if (!relation) {
      throw new NotFoundException(`Vessel Relation with ID ${id} not found`);
    }
    return relation;
  }

  async update(id: number, updateVesselRelationDto: UpdateVesselRelationDto) {
    const relation = await this.findOne(id);
    Object.assign(relation, updateVesselRelationDto);
    return this.vesselRelationRepository.save(relation);
  }

  async remove(id: number) {
    const relation = await this.findOne(id);
    return this.vesselRelationRepository.softRemove(relation);
  }
}
