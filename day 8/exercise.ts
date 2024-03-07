/** @format */

// Specifications :
// Create a program to calculate total salary based on employee type
// There are two types of employee : full-time & part-time
// Salary for full-time employee :
// IDR 100.000 / hour
// IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// Salary for part-time employee :
// IDR 50.000 / hour
// IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// Requirements :
// Create an Employee as a parent class
// Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// Create a method in that class to add working hour per day
// Create a method in that class to calculate total salary
// Use inheritance concept

class Employee {
  name: string;
  age: number;
  address: string;
  #type: string;
  #hours: number[] = [];
  #salary: number;
  #overtime: number;

  constructor(
    name: string,
    age: number,
    address: string,
    type: string,
    salary: number,
    overtime: number
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.#type = type;
    this.#salary = salary;
    this.#overtime = overtime;
  }

  get tipe() {
    return this.#type;
  }

  calculateSalary() {
    console.log(
      `====== Perhitungan Gaji ${this.#type} milik ${this.name}  ======`
    );

    const total = this.#hours.reduce((sum, hour, idx) => {
      let subtotal: number;

      if (hour <= 6) {
        subtotal = hour * this.#salary;
      } else {
        subtotal = this.#salary * 6 + (hour - 6) * this.#overtime;
      }
      console.log(
        `hari ke ${
          idx + 1
        } bekerja sebanyak ${hour} jam subtotal Rp.${subtotal.toLocaleString(
          "id-ID"
        )}`
      );

      return sum + subtotal;
    }, 0);

    return `\nTotal Rp. ${total.toLocaleString("id-ID")} \n`;
  }
  addWorkingHour(hour: number) {
    if (hour < 1 || hour > 14) return console.log("jam kerja tidak sesuai");
    this.#hours.push(hour);
  }
}

class FullTimeEmployee extends Employee {
  constructor(name: string, age: number, address: string) {
    super(name, age, address, "full-time", 100000, 75000);
  }
}

class PartTimeEmployee extends Employee {
  constructor(name: string, age: number, address: string) {
    super(name, age, address, "part-time", 50000, 30000);
  }
}

const karyawan = new FullTimeEmployee("udin", 20, "jakarta");
console.log(karyawan.tipe);
karyawan.addWorkingHour(10);
karyawan.addWorkingHour(5);
console.log(karyawan.calculateSalary());

const karyawan_magang = new PartTimeEmployee("ujang", 16, "jakarta");
karyawan_magang.addWorkingHour(7); //hari pertama
karyawan_magang.addWorkingHour(3); // hari kedua

console.log(karyawan_magang.calculateSalary());

// Specifications :
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// The game will continue until one of the players has health < 0
// Requirements :
// Create ShootingGame & Player class
// ShootingGame class :
// constructor(player1, player2) → player objects as a parameter
// getRandomItem() → return { health: 0 or 10, power: 0 or 10 } => {health : 0 , power : 10}
// start() → start shooting games
// Player class :
// Property → name, health (default 100), power (default 10)
// damage(power) →  subtract player health
// useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ShootingGame start() function flow :
// In every turn :
// Show each player status before shooting
// Get random item for each player before shooting
// Show each player status after shooting
// Show winner name

interface IItem {
  health: number;
  power: number;
}

class Player {
  #health = 100;
  #power = 10;
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
  damage(hit: number) {
    this.#health -= this.#health - hit > 0 ? hit : this.#health;
  }
  //100 = 100 - 20
  // 20 = 20 - 20

  useItem(item: IItem) {
    this.#health += item.health;
    this.#power += item.power;
  }
  showStatus() {
    console.log(
      `Player ${this.#name} health: ${this.#health} power:${this.#power}`
    );
  }
  get pwr() {
    return this.#power;
  }
  get h() {
    return this.#health;
  }
  get name() {
    return this.#name;
  }
}

class ShootingGame {
  #player1: Player;
  #player2: Player;
  constructor(player1: Player, player2: Player) {
    this.#player1 = player1;
    this.#player2 = player2;
  }

  #getRandom() {
    return Math.floor(Math.random() * 2); //0 atau 1
  }

  #getRandomItem(): IItem {
    if (this.#getRandom()) return { health: 10, power: 0 };
    return { health: 0, power: 10 };
  }

  start() {
    console.log("GAME START!");
    console.log(this.#player1.name, "vs", this.#player2.name);

    while (this.#player1.h && this.#player2.h) {
      this.#player1.showStatus();
      this.#player2.showStatus();

      this.#player1.useItem(this.#getRandomItem());
      this.#player2.useItem(this.#getRandomItem());

      console.log("\n======= Players used buff =======");

      this.#player1.showStatus();
      this.#player2.showStatus();

      console.log("\n==========  BATTLE !!! ==========");

      if (this.#getRandom()) {
        this.#player1.damage(this.#player2.pwr);
        if (this.#player1.h == 0) break;
        this.#player2.damage(this.#player1.pwr);
      } else {
        this.#player2.damage(this.#player1.pwr);
        if (this.#player2.h == 0) break;
        this.#player1.damage(this.#player2.pwr);
      }
    }
    if (this.#player1.h > 0) {
      this.#player2.showStatus();
      this.#player1.showStatus();

      console.log("\n====== THE WINNER IS", this.#player1.name, "======");
    } else {
      this.#player1.showStatus();
      this.#player2.showStatus();

      console.log("\n====== THE WINNER IS", this.#player2.name, "======");
    }
  }
}

const player1 = new Player("naruto");
const player2 = new Player("sasuke");
const game = new ShootingGame(player1, player2);

game.start();
