import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountingModule } from './accounting/accounting.module';
import { BookingModule } from './booking/booking.module';
import { QuModule } from './qu/qu.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { VesselModule } from './vessel/vessel.module';
import { VesselRelationModule } from './vessel-relation/vessel-relation.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductBerthPriceModule } from './product-berth-price/product-berth-price.module';
import { CommonModule } from './common/common.module';
import { MasterDocumentNumberModule } from './master-document-number/master-document-number.module';
import { RvModule } from './rv/rv.module';
import { MasterTenderModule } from './master-tender/master-tender.module';
import { MasterSiteModule } from './master-site/master-site.module';
import { BookingSiteRouteModule } from './booking-site-route/booking-site-route.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    CommonModule,
    AccountingModule,
    BookingModule,
    QuModule,
    ProductModule,
    CustomerModule,
    VesselModule,
    VesselRelationModule,
    ProductCategoryModule,
    ProductBerthPriceModule,
    MasterDocumentNumberModule,
    RvModule,
    MasterTenderModule,
    MasterSiteModule,
    BookingSiteRouteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
