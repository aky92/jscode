// when you convert any datatype to any datatype rember use capital letter(Number,String,Boolean etc)
// let a= Number(b)  => here we convert b into number

// let credit_score="599";
// let credit_score=599;
// let credit_score=null;
// let credit_score=undefined;
// let credit_score=true;
let credit_score=225;


// console.log(credit_score);
// console.log(typeof(credit_score));

//now we are trying to convert variable credit_score into Number only

// let convo=Number(credit_score);
// console.log(typeof(convo));
// console.log(convo);
// console.log(credit_score);

let convo2=String(credit_score);
// console.log(convo2);
// console.log(credit_score);
// console.log(typeof(convo2));

/*results
for Number
123 >> 123 - number
"123" >> 123
"abc" >> NAN

null >> null

undifined >> undifined

forBoolean
1 >> true
0 >> false
"" >> false
"akshay" >> true

*/


/*---------------oprations------------- */

// console.log(20+2);
// console.log(2-2);
// console.log(2-3);
// console.log(2*3);
// console.log(4**4) //**gives you power */
// console.log(8/2)
// console.log(9%3)

//concot string
// let str1="akahay"
// let str2="tari"
// let str3=str1+str2;
// console.log(str3);


//string conversion opration
//  console.log("2" + 2)
//  console.log(2+ "2")
//  console.log("2" + "2")
//  console.log("2"+2+2)
//  console.log(2+2+"2") //if numer first then it add first and then concat string
//  console.log(2+"2"+2)

// let counter=22;
// let xx=counter++
// console.log(counter);
// console.log(counter++);
// console.log(xx)

// console.log(2>3)
// console.log(2<3)
// console.log(2==3)
// console.log(2>=3)
// console.log(2<=3)

// console.log("2"<3) //trear "" s a number
// console.log(2<"3")

//while we compare == euqal oprators and comparison oprator(<,<=,.,>=) it treat different
//in comparision oprator null take as 0
// console.log(null==0);
// console.log(null>=0);
// console.log(null<=3)


//when you compare undefine with any it always gives you flase value
// console.log(undefined==0);
// console.log(undefined>=0);
// console.log(undefined<=3)


console.log("2"==2);
console.log("2"===0);// it also compare datatype 
