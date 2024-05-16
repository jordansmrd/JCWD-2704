/** @format */

import { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { IService } from "../models/service.model";
import branchService from "../services/branch.service";
import { EntityController } from "./entity.controller";

export class BranchController extends EntityController {
  constructor(service: IService) {
    super(service);
  }

  async getByNameOrLocation(req: Request, res: Response, next: NextFunction) {
    try {
      if (this.service.getByNameAndLocation) {
        const data = await this.service?.getByNameAndLocation(req);
        res.send({
          message: "fetching data with name or location",
          data,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default new BranchController(branchService);

// prisma.branch.findMany({
//   select: {
//     id: true,
//     name: true,
//     location: true,
//   },
//   where: {
//     id: 2,
//   },
// }); //select all

// prisma.branch.findUnique({
//   where: {
//     id: 3,
//   },
// });

// prisma.branch.create({
//   data: {
//     name: "",
//     location: "",
//   },
// });

// prisma.branch.createMany({
//   data: [
//     {
//       name: "",
//       location: "",
//     },
//     {
//         name:"",
//         location:""
//     }
//   ],
// });

// prisma.branch.delete({
//     where: {
//         id: 1
//     }
// })

// prisma.branch.update({
//     data:{
//     name:"batam"
//     },
//     where:{
//         id: 1
//     }
// })
