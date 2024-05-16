/** @format */

import { Prisma } from "@prisma/client";
import { EntityService } from "./entity.service";
import { prisma } from "../lib/prisma";
import { Request } from "express";

class BranchService extends EntityService {
  constructor(model: Prisma.BranchDelegate) {
    super(model);
  }

  async getByNameAndLocation(req: Request) {
    const { name, location } = req.query;
    const filter: Prisma.BranchWhereInput = {};
    if (name) filter.name = String(name);
    if (location) filter.location = String(location);
    const data = await this.model.findMany({
      select: {
        id: true,
        name: true,
        location: true,
      },
      where: filter,
    });

    return data;
  }
}

export default new BranchService(prisma.branch);
