import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselRelationService } from './vessel-relation.service';
import { VesselRelationController } from './vessel-relation.controller';
import { VesselRelation } from './entities/vessel-relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VesselRelation])],
  controllers: [VesselRelationController],
  providers: [VesselRelationService],
  exports: [VesselRelationService],
})
export class VesselRelationModule {}
