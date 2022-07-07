//Spread Operator and destructuring
// let say we have an array arr[1,2,4] and we create a function to average
/*

// ... is a spread operator
arr = [1, 2, 3];

function avg(a, b, c) {
  return a + b + c / 3;
}
let a = avg(...arr);
console.log(a);
*/
// 4 is the result

//if we have more array then it would again took 3 element

// arr = [1, 2, 3, 4, 5, 6];

// function avg(a, b, c) {
//   return a + b + c / 3;
// }
// let a = avg(...arr);
// console.log(a);

// result is again the same 4

// let ar = [6, 7, ...arr, 67];
// console.log(a);

// it will make a copy of array
/*
[
  6, 7, 1,  2, 3,
  4, 5, 6, 67
]
*/

// i can also concatenate an array with spread operator

// arr = [1, 2, 4, 6, 32];

// function avg(a, b, c) {
//   return a + b + c / 3;
// }

// let a2 = [5, 7, 9];
// let a = [...arr, ...a2];
// console.log(a);

// output
// [
//   1, 2, 4, 6,
//  32, 5, 7, 9
// ]

// Spread Operators With Objects

let person = {
  name: "John",
  age: 20,
  favLang: "Javascript",
};

// let person2 = {};
// person2.name = person.name;
// person2.age = person.age;
// person2.favLang = "Python";

// instead of above we can do this

let person2 = { ...person, favLang: "Python" };

console.log(person2);
