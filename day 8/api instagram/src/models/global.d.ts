/** @format */

import { TUser } from "./user.model";

declare global {
  namespace Express {
    interface Request {
      user: TUser;
      token: string;
    }
  }
}
