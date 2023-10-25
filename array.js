// array is a collection of elment (with same type or mixed) in single variable
//javascript elements are resizeable
//javascript array copy opration create shalow copies
let fruits=["apple","pineapple","mango"];
console.log(fruits);

fruits.push(100);
console.log(fruits);


// let x=fruits.pop();
console.log(fruits);
// console.log(x);


//some array methods
//includes-it find element in array
// console.log(fruits.includes('100'));

//indexof
// console.log(fruits.indexOf(100));

//join-it join whole elents in string

// console.log(typeof fruits.join());


//slice-it just splice element of array butnot affect og array and 
//slice(index,finalvalue)it show index value and final value -1
let fr1=fruits.slice(1,3);
console.log(fr1);
console.log(fruits);



//splice-it just splice element of array and affect og array and 
//splice(index,finalvalue)it show index value and final value 
let fr2=fruits.splice(1,3);
console.log(fr2);
console.log(fruits);

