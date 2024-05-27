/** @format */

import { NextFunction, Request, Response } from "express";
import { schema } from "../libs/joi";
export async function user_validator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    req.validateUser = await schema.validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
}
