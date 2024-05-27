/** @format */

import { Router } from "express";
import postController from "../controllers/post.controller";
import { verifyUser } from "../middlewares/auth.middleware";
import { blobUploader, uploader } from "../libs/multer";

class PostRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.initializedRoutes();
  }

  initializedRoutes() {
    this.router.get("/", postController.getAll);
    this.router.get("/image/:id", postController.renderAvatar);

    this.router.get("/:id", postController.getById);
    this.router.post(
      "/",
      verifyUser,
      uploader("POST", "posts").single("image"),
      postController.create
    );
    this.router.post(
      "/blob",
      verifyUser,
      blobUploader().single("image"),
      postController.createWithBlob
    );
    this.router.delete("/:id", postController.delete);
    this.router.patch("/:id", postController.update);
  }

  getRouter() {
    return this.router;
  }
}
export default new PostRouter();
