/** @format */

import { IService } from "../models/service.model";
import { EntityController } from "./entity.controller";

export class BranchController extends EntityController {
  constructor(service: IService) {
    super(service);
  }
}
