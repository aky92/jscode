
//when you use this keyword inside function it gives values for global scope
//but when you prnt out side of functuin (in global scope) it indicated blank object
//  function chai(){
//     let pp=1456
//     console.log(this.pp)
//  }
//  console.log(this)
//  chai()

// let discount={
//     category:"cake",
//     price:145,
//     discount:'10%'
// }

// function dis(art){
//     console.log(art.price);
// }

// dis(discount)


//create object which contain normal function
// let amz={
//     name:'holder',
//     type:"art",
//     cost:112.54,
//     print_bill:function pb(){
//         console.log(`total bill for ${this.name} is ${this.cost}`)

//     }
   
// }
// amz.print_bill()


//create object which contain arrow function
//you can nt acess this with in arrow function
let amz={
    name:'holder',
    type:"art",
    cost:112.54,
    print_bill: pb=()=>{
        console.log(`total bill for ${this.name} is ${this.cost}`)

    }
   
}
amz.print_bill()
