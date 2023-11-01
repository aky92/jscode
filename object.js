//object can be done as singleton when you create object from instance
//const emp=new Object();


//othersiee it will be literals/ non singleton
// const emp={
//     "name": "akshay",
//     "last name": "tari",
//     "exp": 7,
//     attend: ["monday","tuesday"]
// }
// console.log(emp.la);
// console.log(emp["name"]);



//creare object for tinder user

let tinder_user={};
tinder_user.id="1233aswe"
tinder_user.name="akshjay"
tinder_user.age=28
tinder_user.loggedin={
    f_n:"akshay",
    f_l:"tari",
    activity:{
        days:"wekly"
    }
}

// console.log(tinder_user);



// let another_User={
//     name:"raj",
//     gender:"male",
//     active_User:true,
//     activity:{
//         daily:"yes",
//         weekday:"no"
//     }
// }

// console.log(another_User);

//combine objects
//remember that if you have same key name in both object , only letest key will takes place

//method1:by Object.assign method
// let all_User=Object.assign({},tinder_user,another_User)

//method2:by spread opretor
// let all_User={...tinder_user,...another_User}
// console.log(all_User)

//--------------------
//in actual projects how values use
let all_User=[
    {
            name:"raj",
            gender:"male",
            active_User:true,
            activity:{
                daily:"yes",
                weekday:"no"
            }
        },
        {
            name:"raj",
            gender:"male",
            active_User:true,
            activity:{
                daily:"yes",
                weekday:"no"
            }
        },
]

// console.log(all_User[1].name)
console.log(Object.keys(tinder_user))

//check if key present in given objects
console.log(tinder_user.hasOwnProperty('Logged'))