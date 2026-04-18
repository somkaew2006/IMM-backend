import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuService } from './qu.service';
import { QuController } from './qu.controller';
import { QuHead } from './entities/qu-head.entity';
import { QuDetail } from './entities/qu-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuHead, QuDetail])],
  controllers: [QuController],
  providers: [QuService],
})
export class QuModule {}
