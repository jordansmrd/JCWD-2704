/** @format */

// Create a function to check if two objects are equal
// Example
// Input :  { a: 2 } & { a: 1 }
// Output: false
// Example
// Input :  { a: “Hello” } & { a: 1 }
// Output: false
// Example
// Input :  { a: 1 } & { a: 1 }
// Output: true

interface Iobj {
  [key: string]: any;
}

console.log({ a: 1, b: 2 });

console.log(Object.entries({ a: 1, b: 2 }));

const checkEqual = (obj1: Iobj, obj2: Iobj) => {
  const objEntries1 = Object.entries(obj1);
  const objEntries2 = Object.entries(obj2);
  if (objEntries1.length != objEntries2.length) return false;
  for (const [key] of objEntries1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

const a = [1, 2, 3, 4];
// for (const value of a) {
//   // 1,2,3,4
// }

console.log(checkEqual({ a: 1, b: 2 }, { a: 1, b: 2, z: 2 }));

// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

const intersection = (obj1: Iobj, obj2: Iobj) => {
  const objEntries1 = Object.entries(obj1);
  const intersectEntries = objEntries1.filter(
    ([key]) => obj1[key] == obj2[key]
  );
  return Object.fromEntries(intersectEntries);
};

console.log(intersection({ a: 1, c: 2 }, { a: 1, c: 3 }));

// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example :
// Array1 → [
// { name: 'Student 1', email : 'student1@mail.com'  },
// { name: 'Student 2', email : 'student2@mail.com'  }
// ]
// Array2 → [
// { name: 'Student 1', email : 'student1@mail.com'  },
// { name: 'Student 3', email : 'student3@mail.com'  }
// ]
// Result :
// ArrayResult → [
// { name: 'Student 1', email : 'student1@mail.com'  },
// { name: 'Student 2', email : 'student2@mail.com'  },
// { name: 'Student 3', email : 'student3@mail.com'  }
// ]

interface IStudent {
  name: string;
  email: string;
}

const merge = (students1: IStudent[], students2: IStudent[]) => [
  ...students1,
  ...students2.filter(
    (student) => students1.findIndex((s) => s.name == student.name) == -1
  ),
];

const merge2 = (students1: IStudent[], students2: IStudent[]) => {
  const distinctStudent2 = students2.filter(
    (student) => students1.findIndex((s) => s.name == student.name) == -1
  ); // cari yg ga ada di student 1

  return students1.concat(distinctStudent2); //student1 + yg sudah difilter
};

const students1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const students2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(merge(students1, students2));

// Create a function that can accept input as an array of objects and switch all values into property and property into value
// Example :
// Input : [{ name: ‘David’, age: 20 }]
// Output : [{ David: ‘name’, 20: ‘age’}]

const switchObj = (arrObj: Iobj[]) =>
  arrObj.map((obj) =>
    Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]))
  );

const sObj = (arrObj: Iobj[]) => {
  const swObj = arrObj.map((obj) => {
    //{ name: ‘David’, age: 20 }
    const ent = Object.entries(obj); // [["name", "david"], ["age",20] ]
    const sw = ent.map(([key, value]) => [value, key]); // [["david", "name"], [20,"age"] ]
    return Object.fromEntries(sw); //{ "David": "name", '20': "age" }
  });
  return swObj; //[{ "David": "name", '20': "age" }]
};

console.log(switchObj([{ name: "David", age: 20 }]));

// Create a function to find a factorial number using recursion
// Example
// Input :  5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n: number): number {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

const factorial2 = (n: number): number => (n == 1 ? 1 : n * factorial2(n - 1));

console.log(factorial(5));

5 * factorial(4);
5 * 4 * factorial(3);
5 * 4 * 3 * factorial(2);
5 * 4 * 3 * 2 * factorial(1);
5 * 4 * 3 * 2 * 1;

const multi = (a: number, b: number) => a * b;
console.log(multi(5, 2));
