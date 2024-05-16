/** @format */

import { Prisma } from "@prisma/client";
import { EntityService } from "./entity.service";
import { prisma } from "../lib/prisma";
import { Request } from "express";
import { Result } from "@prisma/client/runtime/library";

class StudentService extends EntityService {
  private model2: Prisma.StudentDelegate;
  constructor(model: Prisma.StudentDelegate) {
    super(model);
    this.model2 = model;
  }

  async getByFullname(req: Request) {
    const data = await this.model2.findMany({
      where: {
        fullname: {
          contains: String(req.query.fullname),
        },
      },
    });
    return data;
  }
}

export default new StudentService(prisma.student);
