/** @format */

import { Request, Response } from "express";
import { IService } from "../models/service.model";
import studentService from "../services/student.service";
import { EntityController } from "./entity.controller";
import { NextFunction } from "express-serve-static-core";

export class StudentController extends EntityController {
  constructor(service: IService) {
    super(service);
  }
  async getByName(req: Request, res: Response, next: NextFunction) {
    try {
      if (this.service.getByFullname) {
        const data = await this.service?.getByFullname(req);
        res.send({
          message: "fetch student by fullname",
          data,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default new StudentController(studentService);
