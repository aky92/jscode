//reduce method is ued add and remove iem in e commerance website

//reducer have a step to run
//syntax
// it always require initial value 
//let initial_value=0
// .reduce((accumator,current_value)=>{return accumator+current_value,initial_value})

let a=[120,212,332] //take as items  bill amount  
let iv=0;

let z=a.reduce((acc,crr)=>{console.log(`${acc} and ${crr}`); return acc+crr},0)

console.log(z)

//1//0+1,0
//2//1+2,3
//3//3+3,6
