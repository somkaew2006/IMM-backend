import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { Vessel } from './entities/vessel.entity';

@Injectable()
export class VesselService {
  constructor(
    @InjectRepository(Vessel)
    private readonly vesselRepository: Repository<Vessel>,
  ) {}

  create(createVesselDto: CreateVesselDto) {
    const vessel = this.vesselRepository.create(createVesselDto);
    return this.vesselRepository.save(vessel);
  }

  findAll() {
    return this.vesselRepository.find({
      relations: ['vesselRelations', 'vesselRelations.customer'],
    });
  }

  async findOne(id: number) {
    const vessel = await this.vesselRepository.findOne({
      where: { vesselId: id },
      relations: ['vesselRelations', 'vesselRelations.customer'],
    });
    if (!vessel) {
      throw new NotFoundException(`Vessel with ID ${id} not found`);
    }
    return vessel;
  }

  async update(id: number, updateVesselDto: UpdateVesselDto) {
    const vessel = await this.findOne(id);
    Object.assign(vessel, updateVesselDto);
    return this.vesselRepository.save(vessel);
  }

  async remove(id: number) {
    const vessel = await this.findOne(id);
    return this.vesselRepository.softRemove(vessel);
  }
}
