import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselService } from './vessel.service';
import { VesselController } from './vessel.controller';
import { Vessel } from './entities/vessel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vessel])],
  controllers: [VesselController],
  providers: [VesselService],
  exports: [VesselService],
})
export class VesselModule {}
