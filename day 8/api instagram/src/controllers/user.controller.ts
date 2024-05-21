/** @format */

import { type NextFunction, type Response, type Request } from "express";
import userService from "../services/user.service";

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { accessToken, refreshToken } = await userService.userLogin(req);
      res
        .cookie("access_token", accessToken)
        .cookie("refresh_token", refreshToken)
        .send({
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
  async getByUsername(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await userService.getUserByUsername(req);
      res.send({
        message: "user login",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async validateUser(req: Request, res: Response, next: NextFunction) {
    try {
      res.send({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
