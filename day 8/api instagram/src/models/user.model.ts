/** @format */

import type { Gender, Post } from "@prisma/client";

export type TUser = {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  fullname?: string;
  gender?: Gender | null;
  is_verified?: boolean;
  bio?: string | null;
  avatar_url?: string;
  createdAt?: Date;
  updatedAt?: Date;
  Post?: Post[];
} | null;
