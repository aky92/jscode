//IIFE-immidiatly invlked function expressiom
//is a way to execute function explicitly immidietly after defining of a function
//it used to overcome pollution issue of variable from global scope with var keyword

//name space pollution
//in large porject there are many devloper working on same project so some time names of funtions 
//are collusion is called "Named pollution" in js


var a=100;
let b=200;

//normal function
// function calc(){
//     // var a=10
//     let b=20
//     var c=30 

//     console.log(`${a} and ${b}`)
// }

// calc();

//how to write above function in IIFE
//named IIFE
(function calc(a,c){
    // var a=10
    // let b=20
     //var c=50 
    let d=a+c

    console.log(` ${d}`)
})(2,3);

//---------IMP: when you are using 2 IIFE use semicolan at end

//arrow function in iife
//unnamed IIFE
(()=>{
    console.log("test")
})();



// (function name(){console.log('tt')})();

// (()=>{console.log('akshay')})();