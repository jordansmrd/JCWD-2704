/** @format */
import mysql from "mysql2";
import { DB_CONFIG } from "../config/config";
import { TUser } from "../models/user.model";
import { TCategory } from "../models/category.model";

export const db = mysql.createPool(DB_CONFIG);
// create connection vs create pool

export const test_connection = () =>
  db.getConnection((error, connection) => {
    if (error) {
      return console.log(error);
    }
    console.log("success connection", connection.threadId);
  });

export const execute_query = async (
  query: string
): Promise<TUser | TUser[] | TCategory | TCategory[] | undefined> =>
  await new Promise((resolve, reject) => {
    db.query(query, (err: unknown, result: TUser[]) => {
      if (err instanceof Error) reject(err);
      resolve(result);
    });
  });
