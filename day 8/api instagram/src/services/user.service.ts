/** @format */

import type { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";
import { comparePassword, hashPassword } from "../libs/bcrypt";
import type { TUser } from "../models/user.model";
import { Request } from "express";
import { createToken } from "../libs/jwt";

class UserService {
  async userLogin(req: Request) {
    const { username_email, password } = req.body;

    const where: Prisma.UserScalarWhereWithAggregatesInput = {
      OR: [
        { email: String(username_email) },
        { username: String(username_email) },
      ],
    };
    const select: Prisma.UserSelectScalar = {
      id: true,
      email: true,
      fullname: true,
      avatar_url: true,
      password: true,
      bio: true,
    };

    const data: TUser = await prisma.user.findFirst({
      select,
      where,
    });

    if (!data?.password) throw new Error("Wrong Email or Username");
    const checkUser = await comparePassword(data.password, password);
    if (!checkUser) throw new Error("Wrong Password");

    delete data.password;

    return createToken(data, "10");
  }
  async userRegister(req: Request) {
    const { email, password, username, fullname, gender } = req.body;

    const existingUser = await prisma.user.findMany({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser.length) throw new Error("username/email already used");
    const hashPass = await hashPassword(password);

    const data: Prisma.UserCreateInput = {
      email,
      username,
      fullname,
      gender,
      password: hashPass,
    };

    await prisma.user.create({
      data,
    });
  }
  async getUserByUsername(req: Request) {
    const { username } = req.params;
    const data: TUser = await prisma.user.findFirst({
      include: {
        Post: true,
      },
      where: {
        username,
      },
    });
    if (!data) throw new Error("user not found");
    return data;
  }
  async editUser(req: Request) {
    const { id } = req.params;
    const { fullname, bio, avatar_url, gender } = req.body;
    const data: Prisma.UserUpdateInput = { fullname, bio, gender, avatar_url };
    await prisma.user.update({
      data,
      where: { id },
    });
  }
}

export default new UserService();
