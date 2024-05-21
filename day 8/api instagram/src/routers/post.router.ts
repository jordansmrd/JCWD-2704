/** @format */

import { Router } from "express";
import postController from "../controllers/post.controller";
import { verifyUser } from "../middlewares/auth.middleware";

class PostRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.initializedRoutes();
  }

  initializedRoutes() {
    this.router.get("/", postController.getAll);
    this.router.get("/:id", postController.getById);
    this.router.post("/", verifyUser, postController.create);
    this.router.delete("/:id", postController.delete);
    this.router.patch("/:id", postController.update);
  }

  getRouter() {
    return this.router;
  }
}
export default new PostRouter();
