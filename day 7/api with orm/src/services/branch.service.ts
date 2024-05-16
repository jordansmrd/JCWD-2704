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
    const filter: Prisma.BranchScalarWhereWithAggregatesInput = {};
    if (name) filter.name = { contains: String(name) };
    if (location) filter.location = { contains: String(location) };
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

  // page  = 1
  // skip = take * (page-1)
  // take = 10

  async getData(req: Request) {
    const data = await this.model.findMany({
      skip: 1, //offset
      take: 2, // limit
      select: {
        name: true,
        location: true,
        Manager: {
          select: {
            name: true,
          },
        },
        Class: {
          select: {
            name: true,
            startAt: true,
            endAt: true,
          },
        },
      },
    });

    await prisma.$transaction(async (prisma) => {
      try {
        const newBranch = await prisma.branch.create({
          data: {
            name: "test 2",
            location: "test location",
          },
        });

        await prisma.manager.create({
          data: {
            name: "test manager 3",
            id: newBranch.id,
          },
        });
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    });

    return data;
  }
}

export default new BranchService(prisma.branch);
