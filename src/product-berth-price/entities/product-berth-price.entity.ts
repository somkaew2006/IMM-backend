import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity('product_berth_price')
export class ProductBerthPrice {
  @PrimaryGeneratedColumn({ name: 'price_id' })
  priceId: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column({ name: 'start_length', type: 'numeric', precision: 12, scale: 2, default: 0 })
  startLength: number;

  @Column({ name: 'end_length', type: 'numeric', precision: 12, scale: 2, default: 0 })
  endLength: number;

  @Column({ name: 'daily_price', type: 'numeric', precision: 12, scale: 2, default: 0 })
  dailyPrice: number;

  @Column({ name: 'monthly_price', type: 'numeric', precision: 12, scale: 2, default: 0 })
  monthlyPrice: number;

  @Column({ name: 'status', length: 20, default: 'Active' })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @ManyToOne(() => Product, product => product.berthPrices)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
