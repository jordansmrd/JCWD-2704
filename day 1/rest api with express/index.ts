/** @format */

import express, {
  Application,
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";

const PORT = 8000;

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());
// app.get("/", (req: Request, res: Response) => {
//   res.send("welcome to express api");
// });

type TUSER = {
  name: string;
  age: number;
};

const users: TUSER[] = [
  { name: "bastian", age: 24 },
  { name: "kristal", age: 26 },
];

app.get("/users", (req: Request, res: Response) => {
  res.send({
    message: "fetch users",
    data: users,
  });
});

app.get(
  "/users/:name",
  (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.query;
    const { name } = req.params;

    console.log(token, name);

    if (token == name) {
      return next();
    }
    res.status(404).send("user tidak dapat mengakses");
  },

  (req: Request, res: Response) => {
    const { name } = req.params;
    const user: TUSER = users.find((u) => u.name == name) as TUSER;
    if (user)
      return res.send({
        message: "user",
        data: user,
      });

    res.send({
      message: "user",
      data: "not found",
    });
  }
);

app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("lewat middleware");
    console.log(req.query);
    const { user } = req.query;
    if (user == "udin") {
      return next();
    } else if (user == "bagas") {
      return res.status(404).send("krystal not found");
    } else if (user == "google") {
      return res.redirect("https://google.com");
    }
    res.status(401).send("user bukan udin");
  },
  (req: Request, res: Response) => {
    res.send("sudah melewati middleware");
  }
);

app.get("/api", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({
      message: "hello world",
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api2", (req: Request, res: Response) => {
  console.log(req.body);

  res.send({
    message: "ini post",
    data: req.body,
  });
});

app.delete("/api", (req: Request, res: Response) => {
  res.send("ini delete");
});

app.patch("/api", (req: Request, res: Response) => {
  res.send("ini patch");
});

app.put("/api", (req: Request, res: Response) => {
  res.send("ini put");
});

app.use((error: any, req: Request, res: Response) => {
  res.status(500).send({
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`api is running on port ${PORT}`);
});

// buat api
// users register,login
// todos create, read, update,delete

// id,email,password,name
// todo, userid, date, id

// {
//     id: 2,
//     email: "test@mail.com",
//     password : "password",
//     name : "edi"
// }

// {
//     id: 3,
//     email: "test3@mail.com",
//     password : "password",
//     name : "echa"
// }

// {
//     id:1,
//     todo: "makan indomie",
//     date : "2024/1/1",
//     userid: 2
// }

// {
//     id:2,
//     todo: "minum aqua",
//     date : "2024/1/1",
//     userid: 2
// }

// {
//     id: 3,
//     todo: "minum soju",
//     date : "2024/1/1",
//     userid: 3
// }

// {
//     id:4,
//     todo: "makan indomie",
//     date : "2024/1/1",
//     userid: 3
// }
