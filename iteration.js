//for loop-basic
// for(let i=0;i<=10;i++){
    
    
//     if(i==0){
//         console.log("pass")
//     }
//     console.log(i)


// }


//for loop  with in for loop
// for(i=0;i<=10;i++){
//     console.log(i)
//     for(j=0;j<=10;j++){
//         console.log(`${i}*${j} = ${i*j}`)
//     }
// }


//break and continue keyword
//in real time project we dont want to print all data in loop on same page 
// so we use break and continue keywords


//break keyword--it will break itraton if givren condition satisfied
// for(i=1;i<=10;i++){
//     if(i==5){console.log("5 detected");break;}
//     console.log(i);
// }

//continue keyword--it work like break but after the condiiton satisfy, it skip respectve loop
//iteration but contune for next itration till for condition

for(i=1;i<=10;i++){
    if(i==5){console.log("5 detected");continue;}
    console.log(i);
}