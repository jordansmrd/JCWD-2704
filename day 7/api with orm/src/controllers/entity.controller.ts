/** @format */

import { NextFunction, Request, Response } from "express";
import { IService } from "../models/service.model";

export class EntityController {
  public service: IService;
  public get: any;
  constructor(service: IService) {
    this.service = service;
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.service.getAll(req);
      res.send({
        message: "fetch data",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.service.getById(req);

      res.send({
        message: "fetch data",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await this.service.create(req);
      res.status(201).send({
        message: "new data has been created",
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      await this.service.delete(req);
      res.send({ message: "data has been deleted" });
    } catch (error) {
      next(error);
    }
  }
  async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      await this.service.update(req);
      res.send({ message: "data has been updated" });
    } catch (error) {
      next(error);
    }
  }
}
