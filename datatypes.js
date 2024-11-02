// javaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.

// primitive dts
// // string, number, boolean , null, undefined, symbol, bigint
// const score = 21;
// const scoreValue = 234.3;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;
// const id = Symbol("123");
// const anotherID = Symbol("123");
// console.log(id == anotherID);
// console.log(id === anotherID);
// const bigNumber = 2343423423544352345n;
// console.log(bigNumber);
// console.log(anotherID);

// // (non-primitive) - reference type
// // array, objects, functions
// const heros = ["shaktiman", "naagraj", "doga"];
// console.log(heros);
// let myObj = {
//   name: "varun",
//   age: 21,
//   sex: Male,
// };

const fun = function () {
  console.log("Hello Varun!");
};
// console.log(typeof bigNumber);
fun();
console.log(typeof fun);


