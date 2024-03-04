/** @format */

const triangle = (h) => {
  let number = 1;
  for (let i = 0; i < h; i++) {
    //loop atas ke bawah
    let print = "";
    for (let j = 0; j <= i; j++) {
      //loop dari kiri ke kanan
      print += (number > 9 ? "" : "0") + number++ + " "; //
    }
    console.log(print);
  }
};

triangle(5);

const fizzBuzz = (n) => {
  let print = "";
  for (let i = 1; i <= n; i++) {
    if (!(i % 3) && !(i % 5)) print += "fizzBuzz ";
    else if (!(i % 3)) print += "fizz ";
    else if (!(i % 5)) print += "buzz ";
    else print += i + " "; //1 2 fizz 4 buzz ...
  }
  console.log(print);
};

fizzBuzz(15);

const bmiFunction = (w, h) => {
  const bmi = w / h ** 2;
  if (bmi < 18.5) console.log("less weight");
  else if (bmi >= 18.5 && bmi < 25) console.log("ideal");
  else if (bmi >= 25 && bmi < 30) console.log("overweight");
  else if (bmi >= 30 && bmi < 40) console.log("very overweight");
  else console.log("obesity");
};

bmiFunction(75, 1.75);

const removeAllOdd = (arr = []) =>
  console.log(arr.filter((value) => !(value % 2)));

removeAllOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const string2Arr = (str = "") => console.log(str.split(" "));

string2Arr("hello world");
