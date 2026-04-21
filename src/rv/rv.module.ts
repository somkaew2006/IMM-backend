import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RvService } from './rv.service';
import { RvController } from './rv.controller';
import { Rv } from './entities/rv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rv])],
  controllers: [RvController],
  providers: [RvService],
  exports: [RvService],
})
export class RvModule {}
