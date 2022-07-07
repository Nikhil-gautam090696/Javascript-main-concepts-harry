 The map() method creates a new array with the result of calling a function for every array Element.
The map() method calls the provided function once for each element in an array, in order .
 Syntax
Array.map(function (currentValue,index,arr),thisValue)




const arr = ["Nikhil", "yashee", "Mousumi", "Divya"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

const oldarr = arr.map(function (cvalue) {
  return cvalue + "friends";
});
console.log(arr);
console.log(oldarr);
