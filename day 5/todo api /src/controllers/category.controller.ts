/** @format */

import { NextFunction, Request, Response } from "express";
import categoryService from "../services/category.service";
export default class CategoryController {
  async getByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await categoryService.getCategory(req);
      res.send({
        message: "fetch category data",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      await categoryService.create(req);
      res.send({
        message: "new category has been created",
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      await categoryService.delete(req);
      res.send({
        message: "category has been deleted",
      });
    } catch (error) {
      next(error);
    }
  }
  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      await categoryService.update(req);
      res.send({
        message: "category has been updated",
      });
    } catch (error) {
      next(error);
    }
  }
}
