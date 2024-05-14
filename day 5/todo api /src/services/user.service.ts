/** @format */

import { Request } from "express";
import { execute_query } from "../lib/mysql";

class UserService {
  async userLogin(req: Request) {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("please input email and password");
    const query = `select id,email,name from user where email = '${email}' and password = '${password}'`;
    return execute_query(query);
  }
  async userRegister(req: Request) {
    const { email, password, name } = req.body;

    if (!email || !password || !name)
      throw new Error("please input email, password and name");
    const query = `insert into user (email,password,name) values('${email}','${password}','${name}')`;
    return execute_query(query);
  }
}

export default new UserService();
