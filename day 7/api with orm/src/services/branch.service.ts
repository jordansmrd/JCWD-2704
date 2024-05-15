/** @format */

import { Prisma } from "@prisma/client";
import { EntityService } from "./entity.service";
import { prisma } from "../lib/prisma";

class BranchService extends EntityService {
  constructor(model: Prisma.BranchDelegate) {
    super(model);
  }
}

export default new BranchService(prisma.branch);
