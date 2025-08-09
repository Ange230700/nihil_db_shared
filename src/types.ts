// shared\types.ts

import { UserRole } from "./enums";

export interface JWTUserPayload {
  id: string;
  email: string;
  role: UserRole;
}
