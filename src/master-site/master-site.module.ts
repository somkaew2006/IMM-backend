import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterSiteService } from './master-site.service';
import { MasterSiteController } from './master-site.controller';
import { MasterSite } from './entities/master-site.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterSite])],
  controllers: [MasterSiteController],
  providers: [MasterSiteService],
  exports: [MasterSiteService],
})
export class MasterSiteModule {}
