/** @format */

import { NextFunction, Request, Response } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const where: Prisma.UserWhereInput = {
        email: String(email),
        password: String(password),
      };

      const data = await prisma.user.findFirst({
        select: { email: true, full_name: true, id: true },
        where,
      });

      if (!data) throw new Error("wrong email or password");
      return res.send({
        message: "user login",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, full_name } = req.body;
      const data: Prisma.UserCreateInput = { email, password, full_name };
      await prisma.user.create({ data });

      return res.status(201).send({ message: "new user has been created" });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
