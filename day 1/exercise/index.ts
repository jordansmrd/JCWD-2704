/** @format */

import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import type { TUser } from "./model";
const app: Application = express();
import { users, todos } from "./data.json";

const PORT = 8000;

app.use(express.json()); // supaya bisa baca json body
app.use(express.urlencoded()); //supaya bisa baca json urlencoded

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome to my api");
});

//#region users routes

//login
app.get("/users", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password }: TUser = req.body;
    if (!email || !password) throw new Error("email dan password wajib diisi");

    const user = users.find(
      (user) =>
        user.email.toLowerCase() == email.toLowerCase() &&
        user.password == password
    ) as { password?: string };

    if (!user) throw new Error("email/password salah");
    else delete user.password;

    res.send({
      message: "fetch users",
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

//register
app.post("/users", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name }: TUser = req.body;
    if (!email && !password && !name) throw new Error("lengkapi data");
    const checkEmail = users.find(
      (u) => u.email.toLowerCase() == email.toLowerCase()
    );
    if (checkEmail) throw new Error("email sudah terdaftar");

    const id: number = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser: TUser = { id, name, password, email };

    users.push(newUser); // add new user

    return res.status(201).send({
      message: "user berhasil register",
    });
  } catch (error) {
    next(error);
  }
});

//#endregion

//#region todo routes
//get all todos
app.get("/todos", (req: Request, res: Response, next: NextFunction) => {
  try {
    const todoUser = todos.map((t) => {
      const user = users.find((u) => u.id == t.userid) as { password?: string };
      delete user.password;
      return {
        ...t,
        user,
      };
    });

    res.send({
      message: "fetch todos",
      data: todoUser,
    });
  } catch (error) {
    next(error);
  }
});

// get todo by useremail
app.get(
  "/users/:email/todos",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.params;
      const user = users.find(
        (u) => u.email.toLowerCase() == email.toLowerCase()
      ) as {
        id: number;
        password?: string;
      };

      if (!user) throw new Error("user tidak ditemukan");
      delete user.password;
      const todoUser = todos.filter((t) => {
        return t.userid == user.id;
      });

      res.send({
        message: "fetch todos",
        data: { todos: todoUser, user },
      });
    } catch (error) {
      next(error);
    }
  }
);

//create todo
app.post("/todos", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { todo, date, email } = req.body;

    const findUser = users.find(
      (u) => u.email.toLowerCase() == email.toLowerCase()
    );

    if (!findUser) throw new Error("user not found");

    const id: number = todos.length ? todos[todos.length - 1].id + 1 : 1;

    const newTodo = {
      id,
      todo,
      date,
      userid: findUser.id,
    };

    todos.push(newTodo);

    res.send({
      message: "todo baru berhasil ditambahkan",
    });
  } catch (error) {
    next(error);
  }
});

//delete todo
app.delete("/todos/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const idx = todos.findIndex((t) => t.id == Number(id));
    if (idx == -1) throw new Error("todo tidak ditemukan");
    todos.splice(idx, 1);
    res.send({
      message: "data berhasil dihapus",
    });
  } catch (error) {
    next(error);
  }
});

//update todo
app.patch("/todos/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { todo, date } = req.body;
    const idx = todos.findIndex((t) => t.id == Number(id));
    if (idx == -1) throw new Error("todo tidak ditemukan");

    todos[idx] = { ...todos[idx], todo, date };

    res.send({
      message: "data berhasil diupdate",
      data: todos[idx],
    });
  } catch (error) {
    next(error);
  }
});

//#endregion

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    message: error.message,
  });
});

// router => handler untuk ngehandle route kita
app.use("/users", express.Router());
app.use((req: Request, res: Response) => {
  res.send();
});

app.listen(PORT, () => {
  console.log("my api is running on port", PORT);
});
