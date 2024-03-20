/** @format */
let result = "";

const greet = (str: string) => {
  result = str;
};

const hello = () => greet("hello");
const arigatou = () => greet("arigatou");

arigatou(); //calling function greet => reassign result jadi "arigatou"
hello(); //calling function greet => reassign result jadi "hello"
console.log(result); //hello

const calculator = (a: number, b: number) => {
  let result = a + b;
  displayer(result);
};

// calculator(5, 5);

const displayer = (something: any) => {
  console.log(something);
};

// let result2 = calculator(5, 5);
// displayer(result2); // 10

function calculator2(a: number, b: number) {
  let result = a * b;
  displayer(result);
}

calculator2(20, 30);
function displayer2(something: any) {
  console.log(something);
}

const c = 50;
const z = 20;
console.log(c + z);

displayer(100 + 20);

function calculator3(a: number, b: number, callback: any) {
  callback(a + b);
}

calculator3(80, 70, displayer);

function message() {
  console.log("async is easy");
}

setTimeout(message, 3000);

console.log("task 1");
setTimeout(() => {
  console.log("task 2");
}, 2000);
console.log("task 3");

const tryPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) resolve("success");
    else reject("error");
  }, 2000);
});

// setInterval(() => {
//   console.log("ini interval");
// }, 2000);

async function asyncAwait() {
  console.log("satu"); // seq 1
  await tryPromise // seq2
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"));
  console.log("dua"); //seq3
}
//seq1
//seq2
//seq3

asyncAwait();

const asyncAwait2 = async () => {
  console.log("satu"); // seq 1
  await tryPromise // seq2
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"));

  tryPromise // seq3
    .then((res) => console.log(res))
    .catch((err) => console.log("promise 2"))
    .finally(() => console.log("finally done"));
  console.log("dua"); //seq4
};
//seq1
//seq2
//seq4
//seq3

asyncAwait2();

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => console.log(users))
    .catch((err) => console.log(err))
    .finally(() => console.log("always running"));
};

// fetchData();
//jalankan fetch (promise)
//hasil dari fetch adalah promise lagi (response.json())
// response.json() merupakan promise => then
//hasil thennya diconsole.log (users)

const fetchWithAsync = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const response2 = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response2.json();

    console.log(users, todos);
  } catch (err) {
    console.log(err);
  }
};

// fetchWithAsync();

const tryThrow = () => {
  try {
    const isFalse = true;
    if (isFalse) throw new Error("There is an error");
  } catch (error: any) {
    console.log(error);
  }
};

tryThrow();

const jsonString = JSON.stringify({ name: "udin" }); // merubah object jadi json string

console.log(jsonString);
console.log(JSON.parse(jsonString)); //merubah json string menjadi object

import { students, products } from "./data.json";
import calc from "./f";

console.log(students);
console.log(products);

console.log(calc(10, 5));
