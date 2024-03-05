/** @format */

//declare class
class User {
  #email;
  static contoh = "ini contoh static";
  constructor(name, kelas, age, email) {
    this.name = name;
    this.kelas = kelas;
    this.age = age;
    this.kota = "jkt";
    this.#email = email;
  }
  greetings() {
    console.log("hello world", this.#email);
  }
}

//expression class
const User2 = class {
  greetings() {
    console.log("hello world");
  }
};

const user1 = new User("tyo", "JCWD", 58, "tyo@mail.com"); // instance of class User
const user2 = new User("santos", "JCVD", 59, "santos@mail.com"); // instance of class User

user1.greetings(); // accessing method from obj user1
console.log(user1.name, user1.kelas, user1.age);
console.log(user2.name, user2.kelas, user2.age);
user1.provinsi = "banten";
console.log(user1.email); //private key/prop
console.log(user2);
user1.greetings();

console.log(User.contoh);

class DB {
  static #connection = "";

  static #initializeConnection() {
    const randomNumber = Math.ceil(Math.random() * 100);
    DB.#connection = `New Database Connection ${randomNumber}`;
  }

  static getConnection() {
    if (!DB.#connection) DB.#initializeConnection();
    return DB.#connection;
  }
}

const { getConnection } = DB;
console.log(getConnection());

console.log(DB.getConnection());
console.log(DB.getConnection());

console.log(User.contoh);
console.log(user1.contoh);

const user3 = {
  firstName: "tyo",
  lastName: "tomo",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    const splittedValue = value.split(" ");
    this.firstName = splittedValue[0];
    this.lastName = splittedValue[1];
  },
};

console.log(user3.firstName, user3.lastName);

user3.fullName = "udin sedunia";
// user3.fullName("naruto sedunia");

console.log(user3.firstName, user3.lastName);

//get merupakan function yang dipanggil seperti memanggil prop
//set merupakan function untuk re-assign dan dipanggil seperti prop

//encapsulation

class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get employeeName() {
    return this.#name;
  }

  set employeeName(value) {
    if (typeof value !== "string") throw new Error("bukan string");
    this.#name = value;
  }
}

const employee1 = new Employee("naruto");

console.log(employee1.employeeName);

// employee1.employeeName = 1;
employee1.employeeName = "udin";

console.log(employee1.employeeName);

class Hewan {
  constructor(name, jumlah_kaki) {
    this.name = name;
    this.jumlah_kaki = jumlah_kaki;
  }
  panggil() {
    console.log(`hello saya adalah ${name}`);
  }
}

class Bebek extends Hewan {
  constructor(name, jumlah_kaki) {
    super(name, jumlah_kaki); // memanggil constructor dari hewan
    this.species = "unggas";
  }
}

class Kucing extends Hewan {
  constructor(name, jumlah_kaki, warna) {
    super(name, jumlah_kaki); /// memanggil constructor dari hewan
    this.species = "mamalia";
    this.warna = warna;
  }
}

const bebek = new Bebek("bebek", 2);
const kucing = new Kucing("kucing persia", 4, "oren");

console.log(bebek);
console.log(kucing);
