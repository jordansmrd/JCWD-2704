/** @format */

import { Router } from "express";
import userController from "../controllers/user.controller";

export class UserRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.initializedRoutes();
  }
  initializedRoutes() {
    this.router.post("/v1", userController.login);
    this.router.post("/v2", userController.register);
  }

  getRouter() {
    return this.router;
  }
}
export default new UserRouter();
