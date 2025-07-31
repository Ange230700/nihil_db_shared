// shared\types.ts

import { UserRole } from "nihildbshared/enums";

export interface JWTUserPayload {
  id: string;
  email: string;
  role: UserRole;
}
