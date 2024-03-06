/** @format */

// Create a function to calculate array of student data
// The object has this following properties :
// Name → String
// Email → String
// Age → Date
// Score → Number
// Parameters : array of student
// Return values :
// Object with this following properties :
// Score
// Highest
// Lowest
// Average
// Age
// Highest
// Lowest
// Average
class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

class HLA {
  constructor(arrNumber = []) {
    this.highest = Math.max(...arrNumber);
    this.lowest = Math.min(...arrNumber);
    const sum = arrNumber.reduce((sum, current) => sum + current);
    this.average = (sum / arrNumber.length).toFixed(2);
  }
}

const calculate = (arrStudent = []) => {
  const score = new HLA(arrStudent.map((std) => std.score));
  const age = new HLA(arrStudent.map((std) => std.age));
  return {
    score,
    age,
  };
};

const naruto = new Student("Naruto", "naruto@mail.com", 17, 60);
const sasuke = new Student("Sasuke", "sasuke@mail.com", 17, 100);
const sakura = new Student("Sakura", "sakura@mail.com", 16, 90);
const students = [naruto, sasuke, sakura];

console.log(calculate(students));

// Create a program to create transaction
// Product Class
// Properties
// Name
// Price
// Transaction Class
// Properties
// Total
// Product
// All product data
// Qty
// Add to cart method → Add product to transaction
// Show total method → Show total current transaction
// Checkout method → Finalize transaction, return transaction data

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Cart extends Product {
  constructor(name, price, qty) {
    super(name, price);
    this.qty = qty;
  }
}

class Transaction {
  #total = 0; //number
  #products = []; //array

  addToCart(product, qty) {
    if (product instanceof Product == false)
      return console.log("produk tidak sesuai");
    else if (isNaN(qty)) return console.log("qty tidak sesuai");

    product.qty = qty; // name,price,qty

    const findIndexCart = this.#products.findIndex(
      (cart) => cart.name == product.name
    );

    if (findIndexCart != -1) {
      //edit
      this.#products[findIndexCart].qty += qty;
    } else {
      //add
      this.#products.push({ ...product });
    }

    this.#total = this.#products.reduce(
      (sum, current) => sum + current.price * current.qty,
      0
    );
  }

  #tampil() {
    console.log(
      "================================================================"
    );
    this.#products.map(({ name, price, qty }) =>
      console.log(
        `product_name: '${name}' quantity: ${qty} price: Rp.${price.toLocaleString(
          "id-ID"
        )}`
      )
    );
    console.log(
      "================================================================"
    );
  }
  show() {
    if (!this.#products.length) return console.log("cart kosong");
    this.#tampil();

    console.log("total Rp.", this.#total.toLocaleString("id-ID"));
  }
  checkout() {
    this.#tampil();
    this.#products.splice(0, this.#products.length);
    this.#total = 0;
    console.log("terimakasih sudah berbelanja");
  }
}

const tv = new Product("tv", 500000);
const tv2 = new Product("tv", 500000);

const sepeda = new Product("sepeda roadbike", 2000000);
const macbook = new Product("macbook pro m3", 24000000);

const trans = new Transaction();
// trans.addToCart({ product: "hello" });
trans.addToCart(tv, 5);
trans.addToCart(tv, 10);

trans.addToCart(sepeda, 2);
trans.addToCart(macbook, 1);
trans.show();

// trans.checkout();
// trans.show();

// console.log(trans.total);

// create repo = buat repo di dalam github
// commit = menyetujui perubahan(changes) (repo local,repo online)
// push = memperbarui repo online sesuai dengan repo local
// fetch = memperbarui repo local sesuai dengan repo online

//pull = cek perubahan repo online lewat local

//branch = cabang di dalam repo github
//fork = copy repo orang lain menjadi repo kita, sync sesuai dengan perubahan yang dibuat sama ownernya

//pull request = mengirimkan permintaan untuk ngepush hasil commit fork repository menuju pemilik repo

// git collaboration = memberikan akses kepada orang lain untuk melakukan push/pull/fetch dll dari pemilik repo
