let fruit=["mango","pineapple","banana"]


// fruit.forEach((key)=>{
//     let str="i eat"
//     console.log(`${str} ${key}`)
// })
/*here we are applying foreach loop on fruit which gives itration value
but what if we want return value of whole for each?
so foreach doesnt have any return value

for ex, take above example as it is and store it in variablle*/

// let result=fruit.forEach((key)=>{
//     let str="i eat"
//    console.log(`${str} ${key}`)
   
// })
// console.log(result)

/*it will give undefined value*/ 

/* so there is time where we want to return foreach vlaue or do any opratiom
on whole foreach loop like give condition to array , then we wont directly give
so thats why filter method is introduced*/


//lets see evample of filter
let range=[1,2,3,4,5,6,7,8,9,10,11,12,13]
let rp=range.filter((key)=>{
    let pp=key%2
    return pp
})

console.log(rp)