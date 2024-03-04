/** @format */

const mobil = {
  merk: "toyota",
  warna: "hitam",
  hello() {
    console.log("hello juga");
  },
  kenalan() {
    console.log("halo saya mobil");
    return "hasil return dari kenalan";
  },
};
console.log(mobil.merk); // toyota prop
console.log(mobil.warna); // toyota prop
mobil.hello(); // hello juga method
mobil.kenalan();
console.log(mobil.kenalan());
//prop = menyimpan sebuah value (tipe data)
//method = menyimpan sebuah function (menjalan instruksi)

const penjumlahan = (a, b) => {
  return a + b;
};

function penjumlahan2(a, b) {
  return a + b;
}
if ("hello") {
  console.log("ayam goreng");
  console.log("masuk 1");
}
if ("hello") console.log("ayam bakar");
if (Boolean("false")) console.log("hey");

console.log("masuk 2 ");
console.log(penjumlahan(5, 3));

const colors = ["red", "blue", "yellow"];

console.log(colors.length, "panjang dari array colors");
colors.push("green"); //menambahkan value di index pertama
colors.unshift("pink"); //menambahkan value di index terakhir
colors.pop(); // mengahpus element index terakhir dari array
colors.shift(); //mengahpus element index pertama dari array

colors.fill("white", 1, 2);

console.log(colors.length);
console.log(
  colors.filter((color) => color == "red" || color == "blue"),
  "return value red atau blue"
);

console.log(
  colors.map((color) => {
    return color == "red" ? "merah" : color;
  }),
  "return value red atau blue"
);

colors.forEach((color, idx) => {
  if (color == "white") colors[idx] = "putih";
});
console.log(colors);

() => {
  return "something";
};

colors.forEach((color, index) => {
  console.log(color, index);
});

console.log(colors.indexOf("red"), "ini adalah index red");
console.log(
  colors.findIndex((color) => color == "red"),
  "ini find index red"
);

console.log("ayam".split(""));

console.log(colors.lastIndexOf("red"), "ini adalah index red");

const newArrayColors = colors.forEach((color) => {
  return color == "red" ? "merah" : color;
});
console.log(newArrayColors, "ini array baru");

console.log(colors.map((color) => color));

const numbers = [5, 10, 15];
console.log(numbers.sort((a, b) => b - a)); // desc(besar ke kecil)
console.log(numbers.sort((a, b) => a - b)); // asc (kecil ke besar)

const total = numbers.reduce((sum, number) => sum + number, 30);
console.log(total);

// () => {
// return
// };
// () => ;

console.log(colors);
colors.splice(1, 0, "gantiin blue");
// param1 = lokasi index
// param2 = berapa banyak value yang mau dihapus
// param3 = value baru yang ditambahkan ke dalam array
console.log(colors);

const restParams = (a, b, ...c) => {
  console.log(c);
  const sumC = c.reduce((sum, val) => sum + val);

  console.log(a + b + sumC); //sum dari parameter
};

restParams(1, 2, 3, 4, 5, 6);

//nested

const getMessage = (fName) => {
  const sayHello = () => "hello " + fName + ". ";
  const WelcomeMsg = () => "welcome to purwadhika";
  return sayHello() + WelcomeMsg();
};
const getMessage2 = (fName) => {
  const sayHello = () => {
    return "hello " + fName + ". ";
  };
  const WelcomeMsg = () => {
    return "welcome to purwadhika";
  };
  return sayHello() + WelcomeMsg();
};

console.log(getMessage("udin"));
console.log(getMessage2("udin"));

const closureGreeting = (name) => {
  const defaultMsg = "hello ";
  return () => defaultMsg + name;
};

// const greetDavid = closureGreeting("david");
// console.log(greetDavid());
console.log(closureGreeting("david")());

const multi = (factor, number) => factor * number;

const multi2 = (factor) => (number) => factor * number;
//currying
function multi3(factor) {
  return function (number) {
    return factor * number;
  };
}

const mul3 = multi3(3); // 3 untuk factor
const mul5 = mul3(5); // 5 untuk number
console.log(mul5);
console.log(multi3(3)(5));

console.log(multi2(5)(10));

//recursive

const countDown = (fromNumber) => {
  console.log(fromNumber, "count down");

  let nextNumber = fromNumber - 1;
  if (nextNumber > 0) countDown(nextNumber);
};

countDown(3);

const factorial = (n) => {
  if (n == 1) return 1;
  else return n + factorial(n - 1);
};

console.log(factorial(5)); // 1 + 2 + 3 + 4 + 5
// 5 + factorial(4)
// 5 + 4 + factorial(3)
// 5 + 4 + 3 + factorial(2)
// 5 + 4 + 3 + 2 + factorial(1)
// 5 + 4 + 3 + 2 + 1
