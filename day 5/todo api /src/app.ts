/** @format */

import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { PORT } from "./config/config";
import { test_connection } from "./lib/mysql";
import userRouter from "./routers/user.router";
import categoryRouter from "./routers/category.router";
import todoRouter from "./routers/todo.router";

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.errorHandler();
  }

  private errorHandler() {
    this.app.use("/*", (req, res, next) => {
      res.status(404).send({ message: "Not found" });
    });

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

  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("welcome to todo list API");
    });
    this.app.use("/users", userRouter.getRouter());
    this.app.use("/categories", categoryRouter.getRouter());
    this.app.use("/todos", todoRouter.getRouter());
  }

  public start() {
    this.app.listen(PORT, () => {
      console.log("API IS RUNNING ON PORT", PORT);
      test_connection();
    });
  }
}
