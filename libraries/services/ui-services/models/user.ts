/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { UserTitle } from './userTitle';
import type { GenericTokenEntity } from './genericTokenEntity';
import type { UserType } from './userType';

export interface User {
  age?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  phoneNumber?: string;
  title?: UserTitle;
  tokens?: GenericTokenEntity[];
  type?: UserType;
}
