/** @format */

import { Request } from "express";
import { execute_query } from "../lib/mysql";

class CateogryService {
  getCategory(req: Request) {
    const { category } = req.query;
    const query = `select * from category where category_name like '%${
      category || ""
    }%'`;
    return execute_query(query);
  }
  create(req: Request) {
    const { category_name } = req.body;
    if (!category_name) throw new Error("please input category name");
    const query = `insert into category (category_name) values('${category_name}')`;
    return execute_query(query);
  }
  delete(req: Request) {
    const { id } = req.params;
    const query = `delete from category where id = ${id}`;
    return execute_query(query);
  }
  update(req: Request) {
    const { id } = req.params;
    const { category_name } = req.body;
    const query = `update category set category_name = '${category_name}' where id  = ${id}`;
    return execute_query(query);
  }
}

export default new CateogryService();
