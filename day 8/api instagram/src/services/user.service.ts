/** @format */

import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";
import { comparePassword, hashPassword } from "../libs/bcrypt";
import type { TUser } from "../models/user.model";
import { Request } from "express";
import { createToken } from "../libs/jwt";
import { transporter } from "../libs/nodemailer";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../configs/config";
import { render } from "mustache";
import fs from "fs";

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
      username: true,
      email: true,
      fullname: true,
      avatar_url: true,
      password: true,
      is_verified: true,
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

    const accessToken = createToken(data, "1hr");
    const refreshToken = createToken({ id: data.id }, "20hr");
    return { accessToken, refreshToken };
  }
  async userRegister(req: Request) {
    const { email, password, username, fullname } = req.validateUser;

    const existingUser = await prisma.user.findMany({
      where: {
        OR: [{ email }, { username }],
      },
    });

    console.log(existingUser);

    if (existingUser.length) throw new Error("username/email already used");
    const hashPass = await hashPassword(password);

    const data: Prisma.UserCreateInput = {
      email,
      username,
      fullname,
      password: hashPass,
    };
    console.log(req.file?.filename);

    if (req.file) data.avatar_url = req.file.filename;

    const user = await prisma.user.create({
      data,
    });

    const verif_token = createToken({ id: user.id }, "5m");
    const template = fs
      .readFileSync(__dirname + "/../templates/verify.html")
      .toString();

    const html = render(template, {
      email: data.email,
      fullname: data.fullname,
      verify_url: `http://localhost:8002/users/verif/${verif_token}`,
    });

    transporter.sendMail({
      to: data.email,
      subject: "welcome to purwadhika",
      html,
    });
  }
  async getUserByUsername(req: Request) {
    const { username } = req.params;
    console.log("masuk", req.params);

    const data: TUser = await prisma.user.findUnique({
      select: {
        id: true,
        username: true,
        gender: true,
        avatar_url: true,
        User_Follower: true,
        User_Following: true,
        Post: {
          include: {
            Comment: true,
            Like: true,
            user: true,
          },
        },
      },
      where: {
        username,
      },
    });
    console.log(data);

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
  async verifyUser(req: Request) {
    const { otp } = req.body;

    await prisma.user.update({
      data: {
        is_verified: true,
        otp: null,
      },
      where: {
        otp: Number(otp),
      },
    });
    console.log(otp);
  }

  async validate(req: Request) {
    const select: Prisma.UserSelectScalar = {
      id: true,
      username: true,
      email: true,
      fullname: true,
      avatar_url: true,
      bio: true,
      is_verified: true,
    };

    const data = await prisma.user.findUnique({
      select,
      where: {
        id: req.user?.id,
      },
    });
    const access_token = createToken(data, "1hr");
    return { access_token, is_verified: data?.is_verified };
  }
}

export default new UserService();
