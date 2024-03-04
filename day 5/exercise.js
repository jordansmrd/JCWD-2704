/** @format */

const lha = (arr = []) => {
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted[0], "lowest");
  console.log(
    sorted.reduce((sum, number) => sum + number) / sorted.length,
    "average"
  );
  console.log(sorted[sorted.length - 1], "highest");
};

lha([20, 10, 30, 50]);

const arr2String = (arr = []) => {
  arr[arr.length - 1] = " and " + arr[arr.length - 1];
  console.log(arr.join());
};

arr2String(["cherry", "strawberry", "apple"]);

const sumArr = (arr1 = [], arr2 = []) =>
  console.log(arr1.map((val, idx) => val + arr2[idx]));

sumArr([1, 2, 3], [3, 2, 1]);

const addNewElement = (arr = [], element) =>
  console.log(arr.indexOf(element) != -1 ? arr : [...arr, element]);

addNewElement([1, 2, 3, 4, 5], 5);

const arrMax = (max, ...values) =>
  console.log(values.slice(0, max), "length", max);

arrMax(5, 1, 2, 3, 4, 5, 6, 7, 8);

const combineArr = (arr1 = [], arr2 = []) =>
  console.log(arr1.concat(arr2), "combined 2 array");
combineArr([1, 2, 3], [4, 5, 6]);

const duplicate = (arr = []) => {
  const tmp = []; //1
  arr
    .sort()
    .forEach((val, idx) =>
      val == arr[idx + 1] && tmp.indexOf(val) == -1 ? tmp.push(val) : null
    );
  console.log(tmp, "duplicate");
};

duplicate([1, 2, 3, 1, 1, 1, 1, 2, 2, 100]);

const diff = (arr1 = [], arr2 = []) => {
  console.log(
    arr1
      .concat(arr2)
      .sort()
      .filter(
        (val, idx, combined) =>
          val != combined[idx - 1] && val != combined[idx + 1]
      )
  );
};

diff([1, 2, 3, 1, 1, 1, 1, 2, 2, 100], [100]);

const primitiveDataOnly = (arr = []) =>
  console.log(arr.filter((val) => typeof val != "object"));

primitiveDataOnly([1, [], undefined, {}, "string", {}, []]);

const secondSmallest = (arr = []) =>
  console.log(arr.sort((a, b) => a - b)[1], "kedua terkecil");

secondSmallest([10, 2, 3, -1, 1, 2, -3]);

const sumNumber = (arr = []) =>
  console.log(
    arr.reduce(
      (sum, current) => (typeof current == "number" ? sum + current : sum),
      0
    ),
    "sum number"
  );

sumNumber(["3", 1, "string", null, false, undefined, 2]);

const sumDuplicate = (arr = []) =>
  console.log(
    arr.sort().reduce((sum, curr, idx, sorted) => {
      return curr == sorted[idx + 1] || curr == sorted[idx - 1]
        ? sum + curr
        : sum;
    }, 0),
    "sum duplicate"
  );

sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]); // 10,10,10,10,20,30,40,50,60

const rps = (pick = "") => {
  const options = ["rock", "paper", "scissor"];
  const user = options.indexOf(pick.toLowerCase()); // 1
  const computer = Math.floor(Math.random() * 3); // 0 1 2
  console.log(
    `user menggunakan ${options[user]}, computer menggunakan ${options[computer]}, user`,
    (user == 0 && computer == 1) ||
      (user == 1 && computer == 2) ||
      (user == 2 && computer == 0)
      ? "kalah"
      : user == computer
      ? "seri"
      : "menang"
  );
};
rps("paper");

//remove odd with recursive

const nArr = [1, 2, 3, 4, 5];

const removeOdd = (arr = [], n = 0) => {
  if (n == arr.length + 1 && !(arr[n] % 2)) return arr;
  arr.splice(n, 1);
  return removeOdd(arr, n + 1);
};
console.log(removeOdd(nArr));
