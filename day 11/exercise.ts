/** @format */

// Create a function to convert Excel sheet column title to its corresponding column number.
// Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// …
// Example :
// Input : AB
// Output : 28

const convertExcel = (col: string): void => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""); //[A,B,C,D,E,F,...Z]
  const array = col
    .toUpperCase()
    .split("")
    .map((char) => alphabets.indexOf(char) + 1);
  // aa =  AA = ["A","A"] = [1,1]
  // AA = 27
  // A = 703
  // AA
  // A

  let result = 0;
  if (array.length == 1) {
    result = array[0];
  } else if (array.length == 2) {
    result = 26 * array[0] + array[1]; // 26 + 1
  } else if (array.length == 3) {
    result = 26 ** 2 * array[0] + 26 * array[1] + array[2];
  } else return console.log("parameter tidak sesuai");

  if (result > 16384) return console.log(`tidak boleh melebihi column XFD`);
  return console.log(`Column ${col} adalah ${result}`);
};

convertExcel("xff");

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

const findSingle = (nums: number[]): number | undefined => {
  const notDuplicate = new Set(nums);
  //   console.log(notDuplicate);

  return [...notDuplicate].find((value) => {
    return nums.filter((s) => s == value).length == 1 ? true : false;
  });
};

console.log(findSingle([2, 2, 1, 1, 3]));

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const checkAnagram = (s: string, t: string) =>
  s.split("").sort().join() == t.split("").sort().join();

console.log(checkAnagram("ayam", "mayam"));

// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbing = (n: number): number => {
  let tempArr = [0, 1];
  for (let i = 2; i < n + 2; i++) {
    tempArr.push(tempArr[i - 2] + tempArr[i - 1]);
  }
  return tempArr[tempArr.length - 1];
};

console.log(climbing(4));
