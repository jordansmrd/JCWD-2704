/** @format */

import { Router } from "express";
import ExpenseController from "../controllers/expenses.controller";
import expenseValidator from "../middlewares/expense.validator";

class ExpenseRouter {
  private router: Router;
  private expenseController: ExpenseController;
  constructor() {
    this.router = Router();
    this.expenseController = new ExpenseController();
    this.initializedRoutes();
  }

  private initializedRoutes(): void {
    this.router.get("/", this.expenseController.getAll);
    this.router.post(
      "/",
      expenseValidator.inputValidator,
      this.expenseController.createExpense
    );
    this.router.patch(
      "/:id",
      expenseValidator.inputValidator,
      this.expenseController.editExpense
    );
    this.router.delete("/:id", this.expenseController.deleteExpense);
    this.router.get(
      "/total-category",
      this.expenseController.getTotalByCategory
    );
    this.router.get("/total-date", this.expenseController.getTotalByDateRange);
    this.router.get("/:id", this.expenseController.getById);
  }

  getRouter(): Router {
    return this.router;
  }
}

export default new ExpenseRouter();

// route => cb => handle data => res.sen
// app.use handle route
// router handle method dari routenya
// controller
// service
