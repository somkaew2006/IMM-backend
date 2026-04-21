import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterTenderService } from './master-tender.service';
import { MasterTenderController } from './master-tender.controller';
import { MasterTender } from './entities/master-tender.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterTender])],
  controllers: [MasterTenderController],
  providers: [MasterTenderService],
  exports: [MasterTenderService],
})
export class MasterTenderModule {}
