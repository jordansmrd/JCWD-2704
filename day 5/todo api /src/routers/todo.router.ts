/** @format */

import { Router } from "express";
import TodoController from "../controllers/todo.controller";

class TodoRouter {
  private router: Router;
  private todoController: TodoController;
  constructor() {
    this.router = Router();
    this.todoController = new TodoController();
    this.initializedRoutes();
  }

  private initializedRoutes() {
    this.router.get("/", this.todoController.getByTodo);
    this.router.post("/", this.todoController.createTodo);
    this.router.delete("/:id", this.todoController.deleteTodo);
    this.router.patch("/:id", this.todoController.updateTodo);
  }
  getRouter() {
    return this.router;
  }
}

export default new TodoRouter();
