let a ="akshay"
let sal =45000
let profile=`your pprofile  is ${a} and salary is${sal}`
/*------------------------------------------Number----------------------------------------------- */
// console.log(a)
// console.log(typeof(a))
// console.log(sal)
// console.log(typeof(sal))
// console.log(profile)
// console.log(typeof(profile)) 

// console.log(a.length)
// console.log(profile.length)

// you will create onject of number, it will show properties to number

let sal2=new Number(14545254.33658)
console.log(sal2);

//Tofixed is a method to fix decimal point,it is used in e commerce website
console.log(sal2.toFixed(2))

//toString
console.log(sal2.toString().length)

//precition
console.log(sal2.toPrecision(1))

//toLocalstring, it conver viewing mehod of number
console.log(sal2.toLocaleString()); // by defalut american standerd
console.log(sal2.toLocaleString('en-IN')); //by indian standerd


/*------------------------------------------Math ----------------------------------------------- */
//it is bydefault library in js