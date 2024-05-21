/** @format */

import { compare, genSalt, hash } from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
};

export const comparePassword = async (
  hashPassword: string,
  password: string
) => {
  return await compare(password, hashPassword);
};
