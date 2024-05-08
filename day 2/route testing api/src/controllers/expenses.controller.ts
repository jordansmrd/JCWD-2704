/** @format */

import { NextFunction, Request, Response } from "express";
import ExpenseService from "../services/expenses.service";

export default class ExpenseController {
  getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = ExpenseService.getAll(req);
      res.send({
        message: "fetch expenses",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  getById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = ExpenseService.getById(req);
      res.send({
        message: "fetch expenses by id ",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  createExpense(req: Request, res: Response, next: NextFunction) {
    try {
      ExpenseService.create(req);

      res.status(201).send({
        message: "new expense has been created",
      });
    } catch (error) {
      next(error);
    }
  }

  editExpense(req: Request, res: Response, next: NextFunction) {
    try {
      ExpenseService.edit(req);
      res.status(200).send({
        message: "expense has been updated",
      });
    } catch (error) {
      next(error);
    }
  }

  deleteExpense(req: Request, res: Response, next: NextFunction) {
    try {
      ExpenseService.delete(req);
      res.status(200).send({
        message: "expense data has been deleted",
      });
    } catch (error) {
      next(error);
    }
  }
  getTotalByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const total = ExpenseService.getTotalExpenseByCategory(req);
      res.status(200).send({
        message: "total expense by category",
        total,
      });
    } catch (error) {
      next(error);
    }
  }

  getTotalByDateRange(req: Request, res: Response, next: NextFunction) {
    try {
      const total = ExpenseService.getTotalExpenseByDate(req);
      res.status(200).send({
        message: "total expense by category",
        total,
      });
    } catch (error) {
      next(error);
    }
  }
}
