/** @format */

import { Request } from "express";
import { Prisma } from "@prisma/client";

export class EntityService {
  public model: Prisma.BranchDelegate;
  constructor(model: Prisma.BranchDelegate | Prisma.StudentDelegate) {
    this.model = model as Prisma.BranchDelegate;
  }
  async getAll(req: Request) {
    return await this.model.findMany();
  }
  async getById(req: Request) {
    const id: number = Number(req.params.id);
    return await this.model.findFirst({
      where: {
        id,
      },
    });
  }
  async create(req: Request) {
    return await this.model.create({
      data: req.body,
    });
  }
  async delete(req: Request) {
    const id: number = Number(req.params.id);
    return await this.model.delete({
      where: {
        id,
      },
    });
  }
  async update(req: Request) {
    const id: number = Number(req.params.id);
    return await this.model.update({
      data: req.body,
      where: {
        id,
      },
    });
  }
}
