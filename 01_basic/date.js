//date is object in js
let myday= new Date();

console.log(myday);
console.log(typeof myday);
// console.log(myday.toLocaleDateString());
// console.log(myday.toISOString());
// console.log(myday.toLocaleTimeString());
// console.log(myday.toTimeString());
// console.log(myday.toUTCString());

/*--------------------Date formatting-------------------------------------*/
//formating in array
//creating spacific date (year,month,date,hour,min) -month strta from 0
// let joindaate=new Date(2028,5,15);
// console.log(joindaate.toDateString())

// let joindaate2=new Date("10-05-2015");
// console.log(joindaate2.toLocaleDateString());


/*--------------------Time stamp-------------------------------------*/

let mytime=Date.now();
console.log(mytime);