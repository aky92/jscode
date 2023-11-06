// function one(){
//     let a=10
//     function two(){
//         let b=20
//          console.log(a)
//         console.log(b)

//     }
//     two()
    // console.log(b)
    // console.log("test")
    
// }
//one()
//++++++++++++important aspect of sequnce of declearing function and defing function

//Type 1 --function decleration
drive1();
function drive1(){
    console.log("driver");
}

//type2--function expression--store function in variable 
//it can not access before initilization
drive2();
let drive2=function(){
    console.log("driver2");
}
// drive2();
