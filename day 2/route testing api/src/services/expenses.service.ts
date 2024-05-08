/** @format */
import { Request } from "express";
import { expenses } from "../json/data.json";
import { generate } from "../utils/generate";
import { TExpense } from "../models/expenses.model";
import { checkDate } from "../utils/validator";

class ExpenseService {
  getAll(req: Request) {
    return expenses;
  }
  getById(req: Request) {
    const { id } = req.params;
    const findExpense = expenses.find((e) => e.id == Number(id));
    if (!findExpense) throw new Error("Expense Not Found");
    return findExpense;
  }
  create(req: Request) {
    const { title, category, date, type, nominal }: TExpense = req.body;
    const id = generate([...expenses]);
    const newExpense = {
      id,
      title,
      date,
      category,
      type,
      nominal: Number(nominal),
    };
    expenses.push(newExpense);
  }
  edit(req: Request) {
    const { id } = req.params;
    const { date, category, type, title, nominal } = req.body;

    const idx = expenses.findIndex((e) => e.id == Number(id));
    if (idx == -1) throw new Error("id not found");

    const prev = { ...expenses[idx] };
    const editExpense: TExpense = {
      id: prev.id,
      date: date || prev.date,
      category: category || prev.category,
      type: type || prev.type,
      title: title || prev.title,
      nominal: Number(nominal) || prev.nominal,
    };
    expenses[idx] = editExpense;
  }
  delete(req: Request) {
    const { id } = req.params;

    const idx = expenses.findIndex((e) => e.id == Number(id));
    if (idx == -1) throw new Error("id not found");
    expenses.splice(idx, 1);
  }
  getTotalExpenseByCategory(req: Request) {
    const { category } = req.query;
    if (!category) throw new Error("category not found");
    const total = expenses.reduce(
      (sum, cur) =>
        cur.category.toLowerCase() == String(category).toLowerCase()
          ? Number(sum) + Number(cur.nominal)
          : sum,
      0
    );
    return total;
  }

  getTotalExpenseByDate(req: Request) {
    const { dateFrom, dateTo } = req.query;
    const dfrom = new Date(String(dateFrom));
    const dto = new Date(String(dateTo));

    if (!checkDate(String(dateFrom)) || !checkDate(String(dateTo)))
      throw new Error("invalid date");

    if (dfrom > dto) throw new Error("'date from' older than 'date to'");

    const total = expenses.reduce((sum, curr) => {
      const date = new Date(curr.date);
      return date >= dfrom && date <= dto
        ? Number(sum) + Number(curr.nominal)
        : sum;
    }, 0);
    return total;
  }
}

export default new ExpenseService();
