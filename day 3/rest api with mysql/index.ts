/** @format */

import express, { Application, Request, Response } from "express";
import mysql from "mysql2";
const app: Application = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb",
});

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to my api");
});
app.get("/students", (req: Request, res: Response) => {
  const query = "select * from student";
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({
      message: "fetch student",
      data: result,
    });
  });
});

app.get("/students/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `select * from student where id = ${id}`;
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({
      message: "fetch student by id",
      data: result,
    });
  });
});

app.delete("/students/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `delete from student where id = ${id}`;
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({
      message: "student has been deleted",
    });
  });
});

app.post("/students/", (req: Request, res: Response) => {
  const { name, address, marks } = req.body;
  const query = `insert into student (name,address,marks) values('${name}','${address}','${marks}')`;

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({
      message: "new student has been added",
    });
  });
});

app.listen(PORT, () => {
  console.log("api is running on port", PORT);

  db.getConnection((error, connection) => {
    if (error) {
      return console.log(error);
    }
    console.log("success connection", connection.threadId);
  });
});
