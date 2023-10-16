/*
  there are two types of momory
  1.stack - used in primitive (value type)
  2.heap - used in non-premitive (referance type)

  in stack original value is store as it is its copy made if that variable stored in another variable

  but in heap memory original value is referance as new value so if new value changed it is affected on onriginal value

  */

//stack
  let a="akshay";
  let b=a;
  console.log(b);
  console.log(a);
  b="raj";
 console.log(b);
 console.log(a);

  //heap
//   let emp={
//     name:"akshay",
//     empId:123
//   }

//   console.log(emp.empId);

// let manager=emp;
// console.log(manager);
// manager.empId=789
// console.log(emp.empId);