// shared\types.ts

import { UserRole } from "@nihil/shared/enums";

export interface JWTUserPayload {
  id: string;
  email: string;
  role: UserRole;
}
