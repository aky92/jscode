//q1-creare empty arrray in javascript
//let a=[];
// let a=new Array();
// console.log(typeof a);


//-----------------------------------------------
//q2-how to access 1st and last element of array
// let student=["akshay","rajesh","nimish"];
// console.log(student);
//accessig first elememt
// let first=student[0];
// console.log(first)

//accessing last elements
// let last=student[student.length-1];
// console.log(last)


//---------------------------------
//q3-add elements in array
// let student=["akshay","rajesh","nimish"];
// let addi=student.push(5)
// console.log(student)

//-----------------------------------
//Question 4: How do you remove the last element from an array?
// let student=["akshay","rajesh","nimish"];
// let rmv=student.pop();
// console.log(student)
// let s2=[...rmv]
// console.log(s2)

//-------------------------------------
//Question 5: How do you loop through an array in JavaScript?

// let student=["akshay","rajesh","nimish"];
//usingg for
// for(i=0;i<=student.length-1;i++){
//     console.log(student[i]);
// }

//using foreach
// student.forEach((i)=>{
//     console.log(i);
// })


//-----------------------------------
//Question 6: How do you check if an element exists in an array?
// let student=["akshay","rajesh","nimish"];
//let fnd=student.indexOf("rajesh");
//console.log(fnd)
// if(student.indexOf("rajesh")!=-1){
//     console.log("elment found");
// }else{console.log("elkement not found")}

//-------------------------------------
//Question 7: How do you remove an element from an array at a specific index?

// let student=["akshay","rajesh","nimish"];
// let per_rmv=student.splice(1,1);
// console.log(student)


//--------------------------------------
//Question 8: How do you concatenate two arrays in JavaScript?
// let student=["akshay","rajesh","nimish"];
// let student2=["akshay1","rajesh1","nimish3"];

// let combi=student.concat(student2);
// console.log(combi)

//array methods
//lenght
// let student=["akshay","rajesh","nimish"];
// console.log(student.length)
// console.log(student.toString());
// student.push("raj")
// console.log(student)
// student.pop()
// console.log(student)
// student.unshift("qwerty")
// console.log(student)
// student.shift();
// console.log(student)
// let s2=["abc","xyz","qwerty"]
// let s3=student.join(s2);
// console.log(typeof s3)
// console.log(typeof student.concat(s2))
// console.log(student)
// s2[0]="xyz"
// console.log(s2);

// delete s2[1]
// console.log(s2)
