/** @format */

import express, { Application, NextFunction, Request, Response } from "express";
import { PORT } from "./configs/config";
import branchRouter from "./routers/branch.router";
import studentRouter from "./routers/student.router";

export class App {
  private app: Application;
  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.errorHandler();
  }

  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("welcome to api with prisma API");
    });

    this.app.use("/branches", branchRouter.getRouter());
    this.app.use("/students", studentRouter.getRouter());
  }
  private errorHandler() {
    this.app.use(
      (error: unknown, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof Error)
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
  public start() {
    this.app.listen(PORT, () => {
      console.log("api is running on port", PORT);
    });
  }
}
