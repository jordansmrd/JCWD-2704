/** @format */

import type { Post, Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";
import { Request } from "express";

class PostService {
  async getPosts(): Promise<Post[]> {
    const data = await prisma.post.findMany({
      include: {
        Comment: true,
        Like: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return data;
  }
  async getDetailPost(req: Request): Promise<Post | null> {
    const { id } = req.params;
    const data = await prisma.post.findUnique({
      include: {
        Comment: true,
        Like: true,
      },
      where: { id },
    });

    return data;
  }

  async createPost(req: Request): Promise<Post> {
    const { image, caption } = req.body;

    const data: Prisma.PostCreateInput = {
      image,
      caption,
      user: {
        connect: {
          id: req.user?.id,
        },
      },
    };
    return await prisma.post.create({
      data,
    });
  }
  //  middleware > controller > service
  async deletePost(req: Request): Promise<Post> {
    const { id } = req.params;
    return await prisma.post.delete({
      where: { id },
    });
  }

  async update(req: Request): Promise<Post> {
    const { id } = req.params;
    const data: Prisma.PostUpdateInput = { ...req.body };

    return await prisma.post.update({
      data,
      where: { id },
    });
  }
}

export default new PostService();
