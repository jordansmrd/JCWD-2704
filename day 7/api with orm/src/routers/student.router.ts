/** @format */

import studentController from "../controllers/student.controller";
import { EntityRouter } from "./entity.router";

class StudentRouter extends EntityRouter {
  constructor() {
    super();
    this.initializedRoutes();
  }
  private initializedRoutes() {
    this.router.get("/", studentController.getAll.bind(studentController));
    this.router.get(
      "/fullname",
      studentController.getByName.bind(studentController)
    );
    this.router.get("/:id", studentController.getById.bind(studentController));

    this.router.post("/", studentController.create.bind(studentController));
    this.router.patch(
      "/:id",
      studentController.updateById.bind(studentController)
    );
    this.router.delete(
      "/:id",
      studentController.deleteById.bind(studentController)
    );
  }
}

export default new StudentRouter();
