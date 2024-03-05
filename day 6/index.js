/** @format */

const objProduk_1 = {
  nama: "sepeda",
  warna: "biru",
  harga: 20000,
};

const objProduk_2 = {
  nama: "raket badminton",
  warna: "hitam",
  harga: 30000,
};
// object = multi values dan menggambarkan deskripsi dari sesuatu
// class = merupakan template dari sebuah object

const car = {
  brand: "BMW",
  model: "M135i xDrive",
  price: 800000000,
};

console.log(car);
let user2 = new Object({
  fName: "Donald",
  lName: "Bebek",
});

const arr = [];
const arr2 = new Array(1, 2, 3, 3);

console.log(user2);

let user = {
  name: "David",
  greet() {
    console.log("hello");
    return "ada isinya";
  },
};
const tanggal = new Date();
console.log(user.name);
console.log(user.greet());

const person = {
  name: "Franky",
  age: 26,
  hobby: "main ikan",
  test: () => {
    console.log("test");
  },
  tes2() {
    console.log("method 2");
  },
  arr: [1, 2, 3, 4, 5, 6],
  userDavid: user,
};
console.log(person);
person.hobby = "main bola"; // assign/reassign key dan value sebuah object
console.log(person);

delete person.hobby; //hapus key hobby

console.log(person);

const { age } = person; //mengeluarkan key dari object, menjadi variable
console.log(age);
person.test();

// prop sudah pasti key dan bukan method
// method sudah pasti key dan bukan prop
// key sudah pasti prop/method

const student_1 = {
  name: "santos",
  age: 100,
};
const student_2 = {
  name: "tyo",
  age: 400,
};

const kelas_jcwd = {
  size: "xl",
  total_murid: 2,
  students: new Array(student_1, student_2),
};

kelas_jcwd.students.map((student) => console.log(student, "ini student "));
kelas_jcwd.students.map((student) =>
  console.log(student.name, "access nama student lewat object")
);

kelas_jcwd.students.map(({ name }) =>
  console.log(name, "access nama student langsung")
);

console.log(kelas_jcwd.students[0].name);

const arrAneh = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
console.log(arrAneh.length);
// console.log(arrAneh[3]);
// console.log(arrAneh[3][2]);
// console.log(arrAneh[3][2][2]);
// console.log(arrAneh[3][2][2][1]);

const state1 = arrAneh[3]; //[ 4, 5, [ 6, 7, [ 8, 9 ] ] ]
const state2 = state1[2]; // [ 6, 7, [ 8, 9 ] ]
const state3 = state2[2]; //[ 8, 9 ]
const state4 = state3[1]; // 9

console.log(state1);
console.log(state2);
console.log(state3);
console.log(state4);

const arr3 = [1, 2];
const arr4 = [3, 4];

console.log([...arr3, ...arr4]);
console.log(arr3.concat(arr4));
console.log(arr3.concat(arr4).join("santos"));

[...arr3, ...arr4];
arr3.concat(arr4).map((value, idx, self) => {
  console.log(value, idx, self);
});

const contohObj1 = {
  warna: "red",
};

const contohObj2 = {
  name: "mawar",
};
// console.log(Object.assign(contohObj1, contohObj2));
console.log({ ...contohObj1, contohObj2, ...arr3 });

// object = variable
// class = class
// class adalah template object
// didalam class kita bisa memasukan key dan method
// key dan method di dalam class kita akses melalui variable/object yg sudah jadi
//static key adalah key yg diakses langsung dari class tanpa harus jadi object/variable

const arr5 = new Array(1, 2, 3);

arr5.push(4); //method biasa
Array.bind(); // static method

const person2 = {
  name: "santos",
  age: 20,
  0: "nol",
  deskripsi_address: {
    jalan: "jalan mawar",
    blok: "b10",
    nomor: 34,
  },
  greet() {
    console.log("hello", this.name);
  },
  greet2: () => {
    console.log("hello", this.name);
  },
};

console.log(person2.name);
person2.address = "jkt";
console.log(person2["address"]);
person2["address"] = "bsd";
console.log(person2);
// console.log(person2.0); -- error
console.log(person2["0"]);

console.log(person2.kelas);

console.log(person2.deskripsi_address.jalan);
console.log(person2.online_shop?.nama);
console.log(Object.keys(person2)); //memunculkan array of keys

for (const key in person2) {
  console.log(key, person2[key]);
}

let a, b;
[a, b] = [10, 20];

console.log(a, b);

person2.greet(); //bisa akses key dalam object itu sendiri
person2.greet2(); // tidak bisa akses key dlm obj

console.log(Object.entries(person2));

Object.entries(person2).map((el) => {
  console.log(el, "ini el");
});
