/** @format */

// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10

let number = 9;
[...Array(10)].forEach((val, idx) => console.log(number, "x", idx + 1));

// Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome
const str = "udin";
const checkPalindrome = str.split("").reverse().join("");

// console.log(str.split("").reverse().join(""));

console.log(str != checkPalindrome ? "not palindrome" : "palindrome");

// Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”

const cm = 100000;
console.log(cm / 10 ** 5, "km");

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
const currency = 1000;
console.log("Rp.", currency.toLocaleString("id-ID") + ",00");

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
const word = "hello world";
console.log(word.replaceAll("ello", ""));

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”
console.log(
  word
    .split("") //[h,e,l,l,o, ,w,o,r,l,d] =>  [H,e,l,l,o, ,W,o,r,l,d]
    .map((val, idx, self) =>
      idx == 0 || self[idx - 1] == " " ? val.toUpperCase() : val
    )
    .join("")
);

console.log("ayam"[0], "ayam".charAt(0));

// Write a code to reverse a string.
// Example : “hello” → “olleh”
console.log("hello".split("").reverse().join(""));
