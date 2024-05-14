/** @format */

import { NextFunction, Request, Response } from "express";
import { execute_query } from "../lib/mysql";
import { TUser } from "../models/user.model";

export const checkEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const q = `select * from user where email = '${email}'`;
    const isEmailExist = (await execute_query(q)) as TUser[];
    if (isEmailExist.length) throw new Error("email already exist");
    next();
  } catch (error) {
    next(error);
  }
};
