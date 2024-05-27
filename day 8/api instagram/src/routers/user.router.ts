/** @format */

import { NextFunction, Request, Response, Router } from "express";
import userController from "../controllers/user.controller";
import { verifyUser } from "../middlewares/auth.middleware";
import { user_validator } from "../middlewares/joi.validator.middleware";
import { uploader } from "../libs/multer";

class UserRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.initializedRoutes();
  }
  initializedRoutes() {
    this.router.get("/validate", verifyUser, userController.validateUser);
    this.router.patch("/verify", userController.sendVerif);

    this.router.get("/:username", userController.getByUsername);
    this.router.post("/v1", userController.login);
    this.router.post(
      "/v2",
      uploader("AVATAR", "avatars").single("image"),
      user_validator,
      userController.register
    );
  }

  getRouter() {
    return this.router;
  }
}
export default new UserRouter();
