// // arrays
// const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myArray);
// console.log(typeof myArray);

// const myBikes = ["Hayabusa","S1kRR","Fireblade","Ducati"]
// console.log(myBikes[3]);
// myBikes.push("Zx6R")
// console.log(myBikes);
// // myBikes.unshift("Zx10R")
// console.log(myBikes);

// // console.log(myArray.includes(3));
// // console.log(myArray.indexOf(1));
// // const newArr = myArray.join()
// // console.log(newArr);

// // slice and splice
// // console.log("A", myArray);
// const myn1 = myArray.slice(1,4)
// console.log(myn1);
// // console.log("B",myArray);

// const myn2 = myArray.splice(1,4)
// console.log("b" , myn2);
// console.log("c", myArray);

// *****************
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3]); //this is the wrong way to merge these two arrays this will make it array a single element

const all_Heros = marvel_heros.concat(dc_heros);
console.log(all_Heros);

// spread operator

const all = [...marvel_heros, ...dc_heros];
console.log(all);
// this is the ggood approact to do that task, i.e concatinate two or more arrays

const another_array = [1,2,3, [4,5,6],7 , [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("VarunSharma"))
console.log(Array.from("VarunSharma"))
// console.log(Array.from({name: "Varun", age: 21}))
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

