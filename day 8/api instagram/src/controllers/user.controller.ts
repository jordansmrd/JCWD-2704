/** @format */

import { type NextFunction, type Response, type Request } from "express";
import userService from "../services/user.service";

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await userService.userLogin(req);
      res.cookie("auth", token).send({
        message: "user login",
      });
    } catch (error) {
      next(error);
    }
  }
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      await userService.userRegister(req);
      res.status(201).send({
        message: "new user has been register",
      });
    } catch (error) {
      console.log("test");

      next(error);
    }
  }
  async editUser(req: Request, res: Response, next: NextFunction) {
    try {
      await userService.editUser(req);
      res.send({
        message: "user has been edited",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
