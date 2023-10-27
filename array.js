// array is a collection of elment (with same type or mixed) in single variable
//javascript elements are resizeable
//javascript array copy opration create shalow copies
// let fruits=["apple","pineapple","mango"];
// console.log(fruits);

// fruits.push(100);
// console.log(fruits);


// let x=fruits.pop();
// console.log(fruits);
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
// let fr1=fruits.slice(1,3);
// console.log(fr1);
// console.log(fruits);



//splice-it just splice element of array and affect og array and 
//splice(index,finalvalue)it show index value and final value 
// let fr2=fruits.splice(1,3);
// console.log(fr2);
// console.log(fruits);



//join- it will convert array into a string and if you want you wil add text, symbol between op and it will atore in 
// new variable

// let a=["banana","orange"]
// let t=a.join(); 

//concate array
let a=["bannaa","apple","orange"]
let b=["rose","lily"]


//Method1: by push
//add 2 array by push method--it adds direct array inside array ehich is not useful , also it update og array
// a.push(b)

//Metho2:by concat
//concat: it will combine 2 or more array and store it in new array, doesnt change og array
let c=a.concat(b);


//Method 3:by spread oprator
//concate 2 or more than 2 arrays  by professional way
let z=[...a,...b]

console.log(a)
console.log(z)

//flat- if there are condition were array wit in array then use flat method to split array
let uu=["one","two",["raj","reshma"]];
console.log(uu);
let er=uu.flat(Infinity);
console.log(er);
// let df="akshay"
console.log(Array.isArray(er))

//string to array
console.log(Array.from("raj"))

//variable to array
let p="100"
let o="200"
let m="300"
console.log(Array.of(p,o,m))

