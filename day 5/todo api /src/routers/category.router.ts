/** @format */

import { Router } from "express";
import CategoryController from "../controllers/category.controller";

class UserRouter {
  private router: Router;
  private categoryController: CategoryController;
  constructor() {
    this.router = Router();
    this.categoryController = new CategoryController();
    this.initializedRoutes();
  }

  private initializedRoutes() {
    this.router.get("/", this.categoryController.getByCategory);
    this.router.post("/", this.categoryController.createCategory);
    this.router.delete("/:id", this.categoryController.deleteCategory);
    this.router.patch("/:id", this.categoryController.updateCategory);
  }

  getRouter() {
    return this.router;
  }
}

export default new UserRouter();
