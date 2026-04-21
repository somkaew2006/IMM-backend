import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateRvDto } from './dto/create-rv.dto';
import { UpdateRvDto } from './dto/update-rv.dto';
import { Rv } from './entities/rv.entity';
import { QuHead } from '../qu/entities/qu-head.entity';
import { SequenceService } from '../common/sequence.service';

@Injectable()
export class RvService {
  constructor(
    @InjectRepository(Rv)
    private readonly rvRepository: Repository<Rv>,
    private readonly dataSource: DataSource,
    private readonly sequenceService: SequenceService,
  ) { }

  async create(createRvDto: CreateRvDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const rvNo = await this.sequenceService.generateNextNumber('RECEIPT');
      const rv = this.rvRepository.create({
        ...createRvDto,
        rvNo,
      });

      const savedRv = await queryRunner.manager.save(Rv, rv);

      // If there is a Quotation reference, update its status to Complete
      if (createRvDto.refQuId) {
        const qu = await queryRunner.manager.findOne(QuHead, {
          where: { quId: createRvDto.refQuId }
        });

        if (qu) {
          qu.status = 'complete';
          await queryRunner.manager.save(QuHead, qu);
        }
      }

      await queryRunner.commitTransaction();
      return savedRv;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.rvRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const rv = await this.rvRepository.findOne({ where: { rvId: id } });
    if (!rv) {
      throw new NotFoundException(`Receipt Voucher with ID ${id} not found`);
    }
    return rv;
  }

  async update(id: number, updateRvDto: UpdateRvDto) {
    const rv = await this.findOne(id);
    Object.assign(rv, updateRvDto);
    return this.rvRepository.save(rv);
  }

  async remove(id: number) {
    const rv = await this.findOne(id);
    // Setting status to Void instead of full deletion if required, 
    // but here we do standard removal or soft delete if needed.
    // Given the schema doesn't have deleted_at, I'll just remove it.
    return this.rvRepository.remove(rv);
  }
}
