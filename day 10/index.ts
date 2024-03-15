/** @format */

// palindrome
// - filter the alphabeth
// - store into Array
// - reverse the array
// - turn it back to string
// - compare the reverse with the non reverse

let palindrome: string | string[] = "race, car";
const arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
palindrome = palindrome.split("");
palindrome = palindrome.filter((letter) => arrAlpha.includes(letter));
let reverse = [...palindrome].reverse().join("");
palindrome = palindrome.join("");
console.log(
  `is '${palindrome}' a palindrome? ${reverse == palindrome ? true : false}`
);

// brute force
const checkDuplicate = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
};
console.log(checkDuplicate([1, 2, 3, 1]));

// optimize with extra memory
const checkDuplicateWithExtraMemory = (arr: number[]) => {
  const uniqueDatas = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (uniqueDatas.has(arr[i])) return true;
    else uniqueDatas.add(arr[i]);
  }
  return false;
};
console.log(checkDuplicateWithExtraMemory([1, 2, 3, 1]));

// optimize without extra memory

const checkDuplicateWithoutExtraMemory = (arr: number[]) => {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) return true;
  }
  return false;
};
console.log(checkDuplicateWithoutExtraMemory([1, 2, 3, 1]));

// linear search
const linearSearch = (arr: number[], x: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) return i;
  }
  return -1;
};
console.log(linearSearch([2, 20, 13, 3], 20));

// binary search
const binarySearch = (
  arr: number[],
  l: number,
  r: number,
  x: number
): number => {
  if (r >= l) {
    //jika x ada di tengah
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) return mid;

    //jika x lebih kecil dari mid, maka element ada di kiri
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
    //selain itu maka x ada di kanan
    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
};

const arr = [2, 3, 4, 10, 40];
let x = 10;

console.log(binarySearch(arr, 0, arr.length - 1, x));

//bubble sort
const bubbleSort = (arr: number[]) => {
  //[5, 3, 8, 4, 6]
  for (let i = 0; i < arr.length; i++) {
    // i = 3
    for (let j = 0; j < arr.length - i - 1; j++) {
      // j = 0
      // 2x
      // 6 < 5 ?
      if (arr[j + 1] < arr[j]) {
        // [5,4] = [4,5]
        //[3,4,5,6,8]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([5, 3, 8, 4, 6]));

//selection sort

const selectionSort = (arr: number[]) => {
  let min = 0;
  // [13, 29, 98, 72, 87, 66, 52, 51, 36]
  for (let i = 0; i < arr.length; i++) {
    //index angka terkecil
    min = i; //1
    //bandingkan setiap element next index
    for (let j = i + 1; j < arr.length; j++) {
      //length = 9
      // j =3
      if (arr[j] < arr[min]) min = j;
      //87 < 29 =
      // min = 3
    }
    //bandingkan index dan tukar
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    // [72,29] = [29,72]
  }
  return arr;
};

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
