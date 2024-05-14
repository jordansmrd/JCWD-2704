/** @format */

import { NextFunction, Request, Response } from "express";
import todoService from "../services/todo.service";
todoService;
export default class TodoController {
  async getByTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await todoService.getTodo(req);
      res.send({
        message: "fetch Todo data",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async createTodo(req: Request, res: Response, next: NextFunction) {
    try {
      await todoService.create(req);
      res.send({
        message: "new Todo has been created",
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteTodo(req: Request, res: Response, next: NextFunction) {
    try {
      await todoService.delete(req);
      res.send({
        message: "Todo has been deleted",
      });
    } catch (error) {
      next(error);
    }
  }
  async updateTodo(req: Request, res: Response, next: NextFunction) {
    try {
      await todoService.update(req);
      res.send({
        message: "Todo has been updated",
      });
    } catch (error) {
      next(error);
    }
  }
}
