// when you convert any datatype to any datatype rember use capital letter(Number,String,Boolean etc)
// let a= Number(b)  => here we convert b into number

// let credit_score="599";
// let credit_score=599;
// let credit_score=null;
// let credit_score=undefined;
// let credit_score=true;
let credit_score=225;


console.log(credit_score);
console.log(typeof(credit_score));

//now we are trying to convert variable credit_score into Number only

// let convo=Number(credit_score);
// console.log(typeof(convo));
// console.log(convo);
// console.log(credit_score);

let convo2=String(credit_score);
console.log(convo2);
console.log(credit_score);
console.log(typeof(convo2));

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