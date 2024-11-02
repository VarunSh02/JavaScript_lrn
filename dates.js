let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 2, 21)
console.log(myCreatedDate.toDateString());

let mtTimeStamp = Date.now()
// console.log(mtTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

