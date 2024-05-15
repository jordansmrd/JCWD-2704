/** @format */

import autoBind from "auto-bind";
import { BranchController } from "../controllers/branch.controller";
import branchService from "../services/branch.service";
import { EntityRouter } from "./entity.router";

class BranchRouter extends EntityRouter {
  private branchController: BranchController;
  constructor() {
    super();
    this.branchController = new BranchController(branchService);
    this.initializedRoutes();
    this.initializedRoutes.bind(this.branchController);
  }
  private initializedRoutes() {
    this.router.get(
      "/",
      this.branchController.getAll.bind(this.branchController)
    );
    this.router.get(
      "/:id",
      this.branchController.getById.bind(this.branchController)
    );
    this.router.post(
      "/",
      this.branchController.create.bind(this.branchController)
    );
    this.router.patch(
      "/:id",
      this.branchController.updateById.bind(this.branchController)
    );
    this.router.delete(
      "/:id",
      this.branchController.deleteById.bind(this.branchController)
    );
  }
}

export default new BranchRouter();
