/** @format */

import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../configs/config";
import { TUser } from "../models/user.model";

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "") || "";
    req.user = verify(token, SECRET_KEY) as TUser;

    next();
  } catch (error) {
    next(error);
  }
};
