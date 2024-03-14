/** @format */

// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
const findMajority = (nums: number[]) => {
  //[3,2,3]
  const set = new Set(nums); //[3,2]

  const pointer = {
    max: -Infinity,
    value: 0,
  };

  set.forEach((val) => {
    const filter = nums.filter((n) => n == val); //[3,3] [2]
    if (pointer.max < filter.length) {
      (pointer.max = filter.length), (pointer.value = val);
      // {max = 2, value =3 }
    }
  });
  return pointer.value;
};

const findMajority2 = (nums: number[]) =>
  nums
    .map((val, i, self) => [val, self.filter((v) => v == val).length])
    .sort((a, b) => b[1] - a[1])[0][0];

//[3,2,3]
//[ [3,2], [2,1] , [3,2] ] => [ [3,2], [3,2], [2,1]] => [3,2] => 3

console.log(findMajority([2, 2, 1, 1, 1, 2, 2]));
console.log(findMajority([3, 2, 3]));

console.log(findMajority2([3, 2, 3]));
console.log(findMajority2([1, 2, 3, 3]));

// Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const convertRoman = (s: string) => {
  let arrS = s.toUpperCase().split(""); // XI => [X,I]
  const objRoman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  } as { [k: string]: number };

  if (arrS.length == 1) return objRoman[arrS[0]]; //IX

  let result = 0;
  for (let i = 0; i < arrS.length; i++) {
    //ix
    //1,10
    if (objRoman[arrS[i + 1]] > objRoman[arrS[i]]) {
      result += objRoman[arrS[i + 1]] - objRoman[arrS[i]]; //9
      i++;
    } else result += objRoman[arrS[i]]; //
  }

  return result;
};

console.log(convertRoman("MCMXCIV"), "roman");

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

const pascal = (rows: number) => {
  const arr = [[1], [1, 1]]; // 2
  for (let i = 2; i < rows; i++) {
    const tmp: number[] = [];
    for (let j = 0; j < i - 1; j++) {
      //isi index ke 2 adalah sebuah array
      // untuk hitung array di index sebelumnya
      tmp.push(arr[i - 1][j] + arr[i - 1][j + 1]);
      //arr[1] = [1,1]
      // 1 + 1 = 2
    }
    arr.push([1, ...tmp, 1]); // [1,2 ,1]
  }
  arr.length = rows;

  return arr;
};

console.log(pascal(4));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const cuan = (prices: number[]) => {
  let min = Infinity; // nilai terbesar
  let max = -Infinity; // nilai terkecil
  // [7,1,5,3,6,4]
  prices.forEach((value) => {
    if (min > value) {
      min = value; //1
      max = value; //6
    }

    if (max < value) {
      max = value; // 6
    }
  });

  return max - min;
};

console.log(cuan([7, 6, 4, 3, 1]));
console.log(cuan([7, 1, 5, 3, 6, 4]));
