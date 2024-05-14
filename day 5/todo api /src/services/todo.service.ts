/** @format */

import { Request } from "express";
import { execute_query } from "../lib/mysql";

class todoService {
  getTodo(req: Request) {
    const { todo } = req.query;
    const query = `select * from todo where title like '%${todo || ""}%'`;
    return execute_query(query);
  }
  create(req: Request) {
    const { title, description, duedate, user_id, category_id } = req.body;
    if (!title || !description || !duedate || !user_id || !category_id)
      throw new Error(
        "please input title, description, duedate, user_id, category_id "
      );
    const query = `insert into todo (title,description,duedate,user_id,category_id) values('${title}','${description}','${duedate}','${user_id}','${category_id}')`;
    return execute_query(query);
  }
  delete(req: Request) {
    const { id } = req.params;
    const query = `delete from todo where id = ${id}`;
    return execute_query(query);
  }
  update(req: Request) {
    const { id } = req.params;
    const { title, description, duedate } = req.body;
    if (!title && !description && !duedate)
      throw new Error("please input title, description, duedate");

    const q = "update todo SET ";
    const where = ` where id = ${id}`;
    const tmp = Object.entries(req.body)
      .reduce((arr: string[], [key, value]) => {
        value && arr.push(`${key} = '${value}'`);
        return arr;
      }, [])
      .join(", ");
    //   ["title", "jalan jalan"], ["description", "makan cilor"]

    // if (title) sets += `title = '${title}' `;
    // if (description) {
    //   if (title) sets += ", ";
    //   sets += `description = '${description}' `;
    // }
    // if (duedate) {
    //   if (title || description) sets += ", ";
    //   sets += `duedate = '${duedate}' `;
    // }

    return execute_query(q + tmp + where);
  }
}

export default new todoService();

("update  a set name='test', email='aasa', ");
