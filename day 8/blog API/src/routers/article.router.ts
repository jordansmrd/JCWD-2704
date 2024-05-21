/** @format */

import { Router } from "express";
import articleController from "../controllers/article.controller";

export class ArticleRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.initializedRoutes();
  }
  initializedRoutes() {
    this.router.get("/", articleController.getAll);
    this.router.get("/:id", articleController.getById);
    this.router.post("/", articleController.create);
    this.router.patch("/:id", articleController.update);
    this.router.delete("/:id", articleController.delete);
  }

  getRouter() {
    return this.router;
  }
}
export default new ArticleRouter();
