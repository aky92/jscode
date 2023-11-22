//main differance between map and filter is , in filter it gives only truthy values to you
//but in map it will give you whole aray as per your opration conditin

let song=[1,2,3,4,5,6,7,8,9]

//map - work like filter but it store reslt in new array wrt opration
//it is used to make some opration on array element

// let jj=song.map((i)=>{
//     return i*8
// })

//console.log(jj)

//you also make channing for map or filter like apply .map().map() or .map().filter()
//but remenber 2nd channing value take input ref from privious method output

let qw=song.map((num)=>{return num*10}).filter((num)=>{return num>40})

console.log(qw)