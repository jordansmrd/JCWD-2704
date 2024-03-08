/** @format */

const fruits = ["banana", "apple", "jackfruit", "apple"];
const newFruits = new Set(fruits);
newFruits.add("avocado"); // add new element
newFruits.delete("banana"); //remove banana
// newFruits.clear(); // remove all elements

console.log(newFruits.size); //length
console.log(newFruits.has("avocado"));
newFruits.forEach((val) => console.log(val)); //looping per value

const objFruits = Object.fromEntries(newFruits.entries()); //rubah set ke object
console.log(objFruits);

console.log([...newFruits]);
