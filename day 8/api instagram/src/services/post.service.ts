/** @format */

import type { Post, Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";
import { Request } from "express";
import sharp from "sharp";

class PostService {
  async getPosts(): Promise<Post[]> {
    const data = await prisma.post.findMany({
      include: {
        user: true,
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
    const { caption } = req.body;

    const { file } = req;

    if (!file) throw new Error("No File Uploaded");

    const data: Prisma.PostCreateInput = {
      image: file.filename,
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

  async createPostWithBlob(req: Request) {
    const { caption } = req.body;

    const { file } = req;

    const buffer = await sharp(req.file?.buffer).png().toBuffer();
    console.log(buffer);

    if (!file) throw new Error("No File Uploaded");

    const data: Prisma.Post2CreateInput = {
      image: "test",
      image_blob: buffer,
      caption,
      user: {
        connect: {
          id: req.user?.id,
        },
      },
    };
    return await prisma.post2.create({
      data,
    });
  }
  async deletePost(req: Request): Promise<Post> {
    const { id } = req.params;
    return await prisma.post.delete({
      where: { id },
    });
  }

  async render(req: Request) {
    const data = await prisma.post2.findUnique({
      where: {
        id: req.params.id,
      },
    });
    return data?.image_blob;
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
