/** @format */

import type { NextFunction, Response, Request } from "express";
import postService from "../services/post.service";

class PostController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await postService.getPosts();
      return res.send({
        message: "fetch posts",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      //   const data = await postService.getDetailPost(req);
      return res.send({
        message: "fetch post by id",
        // data,
      });
    } catch (error) {
      next(error);
    }
  }
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await postService.createPost(req);
      return res.send({
        message: "post has been created",
      });
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      await postService.update(req);
      return res.send({
        message: "post has been updated",
      });
    } catch (error) {
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await postService.deletePost(req);
      return res.send({
        message: "post has been deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new PostController();
