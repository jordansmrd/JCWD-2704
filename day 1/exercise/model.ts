/** @format */

export type TUser = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type TTodo = {
  id: number;
  todo: string;
  userid: number;
  date: string;
};
