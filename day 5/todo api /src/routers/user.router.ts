/** @format */

import { Router } from "express";
import UserController from "../controllers/user.controller";
import { checkEmail } from "../middleware/user.middleware";

class UserRouter {
  private router: Router;
  private userController: UserController;
  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializedRoutes();
  }

  private initializedRoutes() {
    this.router.get("/", this.userController.login);
    this.router.post("/", checkEmail, this.userController.register);
  }

  getRouter() {
    return this.router;
  }
}

export default new UserRouter();
