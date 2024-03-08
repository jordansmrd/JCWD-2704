/** @format */

const myMap = new Map();
myMap.set("David", "001");
myMap.set("Buchanan", "002");

console.log(myMap);

for (const [key, value] of myMap) {
  console.log(key, value);
}

console.log(myMap.entries()); // map menjadi array
console.log(Object.fromEntries(myMap.entries())); //map menjadi object
