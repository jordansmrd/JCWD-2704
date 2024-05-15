/** @format */

import { Request } from "express";
import { TBranch } from "./branch.model";

export interface IService {
  getAll: (req: Request) => Promise<TBranch[]>;
  getById: (req: Request) => Promise<TBranch | null>;
  create: (req: Request) => Promise<TBranch>;
  delete: (req: Request) => Promise<TBranch>;
  update: (req: Request) => Promise<TBranch>;
}
