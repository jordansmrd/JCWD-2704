/** @format */

import express, { Application, NextFunction, Request, Response } from "express";
import { PORT } from "./config/config";
import ExpenseRouter from "./routers/expenses.router";

export default class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.errorHandler();
  }
  private routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.sendFile(__dirname + "/template/index.html");
    });

    this.app.use("/expenses", ExpenseRouter.getRouter());
  }
  private errorHandler(): void {
    this.app.use("/*", (req, res, next) => {
      res.status(404).send({ message: "Not found" });
    });

    this.app.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send({
          message: error.message,
        });
      }
    );
  }
  private configure() {
    this.app.use(express.json());
    this.app.use(express.urlencoded());
  }
  public start(): void {
    this.app.listen(PORT, () => {
      console.log("api is running on port", PORT);
    });
  }
}

// app
// app.use akses body
// routes
// error handler

// app.listen
