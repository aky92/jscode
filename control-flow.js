/*
control flow:
when you run code in real time it not always works all code , it 
run only coditional code snippet 
ex.if user logged in only logged in code logic work 
otherwise if any one wants to register only register code work
*/

//example-forlogin code
// let userLoggedin=false;
// let userLoggedin=true;
// if(userLoggedin){console.log("loggedin successfully")}

// console.log("welcome to dmart")

//comparrison opretor
// =,!=,<(lessthyan),>(greter than),<=,>=,==,===

// let temp=35
// if(temp==35){console.log("normal temp")}
// else if(temp<35){console.log("below normal temp")}
// else if(temp>35){console.log("above normal temp")}
// else if(temp!=35){console.log("error")}


//switch case
// let balance=500

// switch(balance){
//         case 300:
//         console.log("a");
//         break;

//         case 550:
//             console.log("b");
//             break;

//         default:
//             console.log("not foumd")
//             break;
        


// }
/*
truthy value and falsey value
when we assume the value is true or false

*/
//exmaple
let userName="abc.kk.com"

//here we assume value is true
if(userName){
    console.log("logged in")
}else{
    console.log("not logged in")
}


let userName2=""

//here we assume value is false--empty sring is falsy value
if(userName2){
    console.log("logged in2")
}else{
    console.log("not logged in2")
}

//below is list of all and only flasey vlaues
// "",0,-0,null,undefined,NaN,Bigint 0n,false

//below is list of all and only truthy vlaues
//"0","false"," ",[],{},function(){} --all values in sring format


//how to detect wether array is empty or not
let sal=['dd'];
if(sal.length==0){console.log("empty")}else{console.log("not empty")}


//how to detect wether object is empty or not

let tt={}
if(Object.keys(tt).length===0){console.log("empty2")}else{console.log("not empty2")}


//-----------------------------------------------------------------------------------------
//nullish coloesense opretor--null ?? undifined
// let qw;
// qw=5 ?? 15;
// console.log(qw)


// let qw;
// qw=null ?? 15;
// console.log(qw)


let qw;
qw=undefined ?? 15;
console.log(qw)

//------------------------------------------------------------


//terenery opreator
//condition?true:false