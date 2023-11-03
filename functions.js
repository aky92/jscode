// function clgname(a,b){
//     // console.log(`MCC collage is at ${a},${b}`)
//    let result=a+b
//     // if(a==undefined){
//     //     console.log("no")
//     //     return
//     // }

//     //or use this syntax insted (professional methods)
//     if(!undefined){
//         console.log("no")
//         return
//     }
//     return `my collage is ${a} in to  ${b}`
//     console.log("hello")//it wont print because after return statement nothing is executed
// }
// console.log(clgname())

//in above example you pass 2 parameters that are a and b
//but what if you working on real cart projects and dont know 
//how many parameters are there in given functionm
//here are you will use REST/SPREAD opretor
//so what it will do it bind n numbers of arguments at runtime in givenfunction

//example1
// function amazonShoppingCart(...num1){
//   return num1
// }
// console.log(amazonShoppingCart(5,5,8,4))

//example2--spread opreater with other parameters

// function flipkarthoppingCart(a,...num1){
//     return num1
//   }
//   console.log(flipkarthoppingCart(5,5,8,4))
  
//----------------------------------------------------------------------------------------
//How to pass objects in functions

//method 1 ---when object is define seprately
// emp={
//     name:"akshay",
//     noOfDays:25,
    
// }
// function empAttendence(myatten){
//     console.log(`${myatten.name} is present for ${myatten.noOfDays} days in SEPTEMBER`)
// }
// empAttendence(emp);

//method2--when object is pass while excution of function

// function stuAttendence(myatten){
//     console.log(`in school ${myatten.name} is present for ${myatten.days} days only`)
// }

// stuAttendence({
//     name:"rajesh",
//     days:2

// })

//------------------------------------------------------------
//How to pass arrrays in functions

//method 1 ---when array is define seprately

let clg=["ram","laxuman","bharat"]


function fnClg(myclg){
  console.log(myclg[1]);
}

fnClg(clg);

//method 2 ---when array is define while excuting code

function fnClg2(myclg){
    console.log(myclg[1]);
  }
  
  fnClg2(["ravan","vibhishan","shurphanaka"]);