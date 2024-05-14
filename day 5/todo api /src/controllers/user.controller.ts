/** @format */

import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";
export default class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await userService.userLogin(req);
      res.send({
        message: "user login",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      await userService.userRegister(req);
      res.status(201).send({
        message: "new user has been registered",
      });
    } catch (error) {
      next(error);
    }
  }
}
