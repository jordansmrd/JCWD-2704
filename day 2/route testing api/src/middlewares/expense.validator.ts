/** @format */

import { NextFunction, Request, Response } from "express";
import { checkDate } from "../utils/validator";
import { TExpense } from "../models/expenses.model";

class ExpenseValidator {
  inputValidator(req: Request, res: Response, next: NextFunction) {
    try {
      const { date, type }: TExpense = req.body;
      if (!checkDate(date)) throw new Error("Invalid Date");
      if (type.toLowerCase() != "expense" && type.toLowerCase() != "income")
        throw new Error("Invalid type of expenses");
      next();
    } catch (error) {
      next(error);
    }
  }
}

export default new ExpenseValidator();
