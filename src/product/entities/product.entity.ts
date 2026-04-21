import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { ProductCategory } from '../../product-category/entities/product-category.entity';
import { ProductBerthPrice } from '../../product-berth-price/entities/product-berth-price.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn({ name: 'product_id' })
  productId: number;

  @Column({ name: 'product_code', length: 50, unique: true })
  productCode: string;

  @Column({ name: 'product_name', length: 255 })
  productName: string;

  @Column({ name: 'product_description', type: 'text', nullable: true })
  productDescription: string;

  @Column({ name: 'category_id', nullable: true })
  categoryId: number;

  @Column({ name: 'product_type', length: 20 })
  productType: string;

  @Column({ name: 'standard_price', type: 'numeric', precision: 12, scale: 2, default: 0 })
  standardPrice: number;

  @Column({ name: 'unit_name', length: 50, nullable: true })
  unitName: string;

  @Column({ name: 'is_taxable', default: true })
  isTaxable: boolean;

  @Column({ name: 'vat_percent', type: 'numeric', precision: 5, scale: 2, default: 7 })
  vatPercent: number;

  @Column({ name: 'is_wht', default: false })
  isWht: boolean;

  @Column({ name: 'wht_percent', type: 'numeric', precision: 5, scale: 2, default: 3 })
  whtPercent: number;

  @Column({ name: 'status', length: 20, default: 'Active' })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @Column({ name: 'created_by', nullable: true })
  createdBy: number;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: number;

  @ManyToOne(() => ProductCategory, category => category.products)
  @JoinColumn({ name: 'category_id' })
  category: ProductCategory;

  @OneToMany(() => ProductBerthPrice, price => price.product)
  berthPrices: ProductBerthPrice[];
}
