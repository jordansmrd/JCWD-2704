/** @format */

const separator = (s: string) => {
  console.log("=============");
  console.log(s);
  console.log("=============");
};

// *
// **
// ***
// ****
// *****

const tr1 = (h: number): void => {
  [...Array(h)].map((value, index) => {
    let print = "";
    [...Array(index + 1)].map(() => {
      print += "*";
    });
    console.log(print);
  });
};

separator("tr1");
tr1(5);

// *****
// ****
// ***
// **
// *

const tr2 = (h: number): void => {
  for (let i = h; i >= 1; i--) {
    let print = "";
    for (let j = 1; j <= i; j++) {
      print += "*";
    }
    console.log(print);
  }
};
separator("tr2");

tr2(5);

// *****
//  ****
//   ***
//    **
//     *

const tr3 = (h: number): void => {
  for (let i = 0; i < h; i++) {
    let print = "";
    for (let j = 0; j < h; j++) {
      if (i > j) print += " ";
      else print += "*";
    }
    console.log(print);
  }
};

separator("tr3");
tr3(5);

//     *
//    **
//   ***
//  ****
// *****

const tr4 = (h: number): void => {
  for (let i = h; i >= 1; i--) {
    let print = "";
    for (let j = 1; j <= h; j++) {
      if (i > j) print += " ";
      else print += "*";
    }
    console.log(print);
  }
};

separator("tr4");
tr4(5);
