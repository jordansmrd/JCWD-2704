/** @format */

import branchController from "../controllers/branch.controller";
import { EntityRouter } from "./entity.router";

class BranchRouter extends EntityRouter {
  constructor() {
    super();
    this.initializedRoutes();
  }
  private initializedRoutes() {
    this.router.get("/", branchController.getAll.bind(branchController));
    this.router.get(
      "/name-location",
      branchController.getByNameOrLocation.bind(branchController)
    );

    this.router.get("/:id", branchController.getById.bind(branchController));
    this.router.post("/", branchController.create.bind(branchController));
    this.router.patch(
      "/:id",
      branchController.updateById.bind(branchController)
    );
    this.router.delete(
      "/:id",
      branchController.deleteById.bind(branchController)
    );
  }
}

export default new BranchRouter();
