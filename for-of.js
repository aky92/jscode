// let fr=["apple","mango","orange"]
// let fr="akshay"


// for(let i of fr){
//     console.log(i)
// }


//-----------------Map--------------------------------------
//it is type of object which  hold key value pair and remembers original insertion order 
//of the keys
//any value [both objects and preimitive] may be used either used as key and value
//there is no duplicate value init-only unique values

//create Map object
let mp=new Map()
//set key value pair init
mp.set("IN",'India')
mp.set("Es","spanish")
mp.set("RU","Russia")
mp.set("IN",'India')//try to put duplicate key-vallue pair init
mp.set("IN",'India1')//key needs to be unique if key repeat then it take latest key value pair
mp.set("IN1",'India')//if key is different and value repeat it treat value as new key value pair
console.log(mp)


//if we are trying to apply for of loop on map,
//it will print as array of key velue pair
//so getting itration of only key or only vlaue syntax will be
//for([i,j] of map_name)
// here i refer as key and j is refer as value --destrucring of array

for([m,n] of mp){
    console.log(n)
    console.log(m)
}

///---------------------------------

//--------aplly for of on object

// let sal={
//     "akshay":558,
//     "Tushar":555
// }

// for([s,l] of sal){
//     console.log(`${s} and ${l}`)
// }

//aove peice of code give you error because this is not correct way to iterare object

//------------------------------------------------------------------------------

//to itrate objects there is another method called "for in loop"

let emp={
    "name":"akshay",
    "age":25,
    "gender":"male"
}

for(z in emp){
    console.log(z)//gives keys
    console.log(emp[z]) //gives values of object
}