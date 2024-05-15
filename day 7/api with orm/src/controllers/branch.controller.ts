/** @format */

import { IService } from "../models/service.model";
import branchService from "../services/branch.service";
import { EntityController } from "./entity.controller";

export class BranchController extends EntityController {
  constructor(service: IService) {
    super(service);
  }
}

export default new BranchController(branchService);
