/** @format */

import { TExpense } from "../models/expenses.model";

export const generate = (arr: TExpense[]) =>
  arr.length ? arr[arr.length - 1].id + 1 : 1;
