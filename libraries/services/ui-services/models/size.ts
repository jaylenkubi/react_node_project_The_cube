/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { SneakerEntity } from './sneakerEntity';
import type { SizeSneakerSize } from './sizeSneakerSize';

export interface Size {
  price?: string;
  quantityInStock?: number;
  sneaker?: SneakerEntity;
  sneakerId?: number;
  sneakerSize?: SizeSneakerSize;
}
