/** @format */

import { Request } from "express";
import { TBranch } from "./branch.model";
import { Branch, Student } from "@prisma/client";

export interface IService {
  getAll: (req: Request) => Promise<Branch[]>;
  getById: (req: Request) => Promise<TBranch | null>;
  create: (req: Request) => Promise<TBranch>;
  delete: (req: Request) => Promise<TBranch>;
  update: (req: Request) => Promise<TBranch>;
  getByFullname?: (req: Request) => Promise<Student[]>;
  getByNameAndLocation?: (req: Request) => Promise<TBranch[]>;
}
