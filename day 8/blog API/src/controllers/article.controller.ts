/** @format */
import { NextFunction, Request, Response } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";

class ArticleController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await prisma.article.findMany();
      res.send({
        message: "fetch articles",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await prisma.article.findFirst({
        include: {
          user: {
            select: {
              full_name: true,
            },
          },
        },
        where: {
          id: Number(id),
        },
      });
      if (!data) throw new Error("article not found");

      res.send({
        message: "fetch articles",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, content, user_id, category } = req.body;
      const user = {
        connect: {
          id: Number(user_id),
        },
      };
      const data: Prisma.ArticleCreateInput = {
        title,
        content,
        category,
        user,
      };
      await prisma.article.create({
        data,
      });
      res.status(201).send({
        message: "create articles",
      });
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, content, category } = req.body;
      const data: Prisma.ArticleUpdateInput = {};

      if (title) data.title = String(title);
      if (content) data.content = String(content);
      if (category) data.category = category;

      await prisma.article.update({
        data,
        where: {
          id: Number(id),
        },
      });
      res.send({ message: "article has been updated" });
    } catch (error) {
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await prisma.article.delete({
        where: {
          id: Number(id),
        },
      });
      res.send("article has been deleted");
    } catch (error) {
      next(error);
    }
  }
}
export default new ArticleController();
