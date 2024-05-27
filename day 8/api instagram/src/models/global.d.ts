/** @format */

import { User } from "@prisma/client";
import { TUser } from "./user.model";

declare global {
  namespace Express {
    interface Request {
      user: TUser;
      token: string;
      validateUser: User;
    }
  }
}
