/** @format */

import express, { Application, NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import "dotenv/config";
import userRouter from "./routers/user.router";
import articleRouter from "./routers/article.router";

const app: Application = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded());

export const prisma = new PrismaClient();

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to blog api");
});

app.use("/users", userRouter.getRouter());
app.use("/articles", articleRouter.getRouter());

//error handler
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error)
    res.status(500).send({
      message: error.message,
    });
});

app.listen(PORT, () => {
  console.log("API IS RUNNING ON PORT", PORT);
});
