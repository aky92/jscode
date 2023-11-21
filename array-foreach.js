
//for each is inbuilt mechnisam for array in which you assign callback function init
//foreach syntax
//array.foreach(function(item,index,arr){})
//here item>> item in array, index>>index in array, arr>>complete array



// let dt=[2,3,4,5]

// dt.forEach(function(val,index,arr){
//     let res=val*2;
//     console.log(`${val},${index},${arr}`);
// })

//foreach in arrow function
// let dt=[2,3,4,5]

// dt.forEach((val)=>{
//  console.log(val);
// })


//foreach- pass outside function in foreach
// let dt=[2,3,4,5,8]
// function test(k){
//     console.log(k)
// }
// dt.forEach(test);

//--------------------------IMP---------------------------------------------
//in live projects we faced arrays which contains objects
//so now we look how to hamdle objects in array by foreach loop

let lang=[
    {
        "language_name":"English",
        "language_code":"En"
    },
    {
        "language_name":"Spanish",
        "language_code":"es"
    },
    {
        "language_name":"German",
        "language_code":"de"
    }
]

lang.forEach(function(val){
    console.log(val.language_code);
})