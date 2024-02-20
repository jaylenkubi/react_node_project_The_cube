/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { SizeEntityCreatedAt } from './sizeEntityCreatedAt';
import type { SizeEntityDeletedAt } from './sizeEntityDeletedAt';
import type { SneakerEntity } from './sneakerEntity';
import type { SizeEntitySneakerSize } from './sizeEntitySneakerSize';
import type { SizeEntityUpdatedAt } from './sizeEntityUpdatedAt';

export interface SizeEntity {
  _id?: number;
  createdAt?: SizeEntityCreatedAt;
  deletedAt?: SizeEntityDeletedAt;
  price?: unknown;
  quantityInStock?: number;
  sneaker?: SneakerEntity;
  sneakerId?: number;
  sneakerSize?: SizeEntitySneakerSize;
  updatedAt?: SizeEntityUpdatedAt;
}
