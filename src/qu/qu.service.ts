import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateQuDto } from './dto/create-qu.dto';
import { UpdateQuDto } from './dto/update-qu.dto';
import { QuHead } from './entities/qu-head.entity';
import { QuDetail } from './entities/qu-detail.entity';
import { SequenceService } from '../common/sequence.service';

@Injectable()
export class QuService {
  constructor(
    @InjectRepository(QuHead)
    private quHeadRepository: Repository<QuHead>,
    @InjectRepository(QuDetail)
    private quDetailRepository: Repository<QuDetail>,
    private dataSource: DataSource,
    private sequenceService: SequenceService,
  ) { }

  private calculateTotals(quHead: QuHead, details: QuDetail[]) {
    let totalItemBeforeDiscount = 0;
    let totalItemDiscount = 0;

    details.forEach(detail => {
      // Detail calculations
      const qty = Number(detail.qty) || 0;
      const loa = Number(detail.loa) || 0;
      const unitPrice = Number(detail.unitPrice) || 0;

      detail.totalBeforeDiscount = qty * loa * unitPrice;

      const discValue = Number(detail.discountValue) || 0;
      if (detail.discountType === 'Percent') {
        detail.discountAmount = (detail.totalBeforeDiscount * discValue) / 100;
      } else {
        detail.discountAmount = discValue;
      }

      detail.totalAfterDiscount = detail.totalBeforeDiscount - detail.discountAmount;

      totalItemBeforeDiscount += detail.totalBeforeDiscount;
      totalItemDiscount += detail.discountAmount;

      // Temporary placeholders for allocated values (can be refined later)
      detail.netRevenue = detail.totalAfterDiscount;
      detail.taxBase = detail.netRevenue;
      detail.vatAmount = (detail.taxBase * (Number(detail.vatPercent) || 0)) / 100;
      detail.lineTotal = detail.taxBase + detail.vatAmount;
    });

    quHead.totalItemBeforeDiscount = totalItemBeforeDiscount;
    quHead.totalItemDiscount = totalItemDiscount;
    quHead.totalItemAfterDiscount = totalItemBeforeDiscount - totalItemDiscount;

    // Final Discount
    const finalDiscValue = Number(quHead.finalDiscountValue) || 0;
    if (quHead.finalDiscountType === 'Percent') {
      quHead.finalDiscountAmount = (quHead.totalItemBeforeDiscount * finalDiscValue) / 100;
    } else {
      quHead.finalDiscountAmount = finalDiscValue;
    }

    quHead.netAmount = quHead.totalItemAfterDiscount - quHead.finalDiscountAmount;

    const scPercent = Number(quHead.serviceChargePercent) || 0;
    quHead.serviceCharge = (quHead.netAmount * scPercent) / 100;

    quHead.vatableAmount = quHead.netAmount + quHead.serviceCharge;

    const vatPercent = Number(quHead.vatPercent) || 0;
    quHead.vatAmount = (quHead.vatableAmount * vatPercent) / 100;

    quHead.grandTotal = quHead.vatableAmount + quHead.vatAmount;
  }

  async create(createQuDto: CreateQuDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { details, ...headData } = createQuDto;

      // Auto-generate quNo if not provided
      if (!headData.quNo) {
        headData.quNo = await this.sequenceService.generateNextNumber('QUOTATION');
      }

      const quHead = this.quHeadRepository.create(headData);
      const detailEntities = details.map(d => this.quDetailRepository.create(d));

      this.calculateTotals(quHead, detailEntities);

      const savedHead = await queryRunner.manager.save(QuHead, quHead);

      detailEntities.forEach(d => {
        d.quId = savedHead.quId;
        d.quNo = savedHead.quNo;
      });

      await queryRunner.manager.save(QuDetail, detailEntities);

      await queryRunner.commitTransaction();
      return this.findOne(savedHead.quId);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.quHeadRepository.find({
      relations: ['details'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const qu = await this.quHeadRepository.findOne({
      where: { quId: id },
      relations: ['details'],
    });

    if (!qu) throw new NotFoundException(`Quotation #${id} not found`);
    return qu;
  }

  async update(id: number, updateQuDto: UpdateQuDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { details, ...headData } = updateQuDto;

      let quHead = await queryRunner.manager.findOne(QuHead, {
        where: { quId: id },
        relations: ['details']
      });
      if (!quHead) throw new NotFoundException(`Quotation #${id} not found`);

      Object.assign(quHead, headData);

      let detailEntities: QuDetail[] = [];
      if (details) {
        await queryRunner.manager.delete(QuDetail, { quId: id });
        detailEntities = details.map(d => this.quDetailRepository.create({ ...d, quId: id, quNo: quHead.quNo }));
      } else {
        detailEntities = quHead.details;
      }

      this.calculateTotals(quHead, detailEntities);

      await queryRunner.manager.save(QuHead, quHead);
      if (details) {
        await queryRunner.manager.save(QuDetail, detailEntities);
      }

      await queryRunner.commitTransaction();
      return this.findOne(id);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number) {
    const qu = await this.findOne(id);
    return this.quHeadRepository.remove(qu);
  }
}
