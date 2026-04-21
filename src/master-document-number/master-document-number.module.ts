import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterDocumentNumberService } from './master-document-number.service';
import { MasterDocumentNumberController } from './master-document-number.controller';
import { MasterDocumentNumber } from './entities/master-document-number.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterDocumentNumber])],
  controllers: [MasterDocumentNumberController],
  providers: [MasterDocumentNumberService],
  exports: [MasterDocumentNumberService],
})
export class MasterDocumentNumberModule {}
