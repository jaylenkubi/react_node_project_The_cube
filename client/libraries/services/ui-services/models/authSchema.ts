/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { TokenSchema } from './tokenSchema';
import type { UserEntity } from './userEntity';

export interface AuthSchema {
  tokens: TokenSchema;
  user: UserEntity;
}
