/*
 hwo javascript execute code
 1.global execution context
 2.functiom execution context
 3.Eval excutiom context

 
 example
 let a=10;
 let b=20;
 function add(num1+num2){
    let result=num1+num2;
    return result;
 }
 let final=add(a,b);
 let final2=add(15,20)

 how JS execute above code

 01.Global execution context has been created //it created only once throughout program

 02.memory creation phase
-- in this phase memory allocate to variable in given code snippet
--in above example in line 1 memory has been created for 'a' value as "undifined"
--in 2nd line memory created to variable 'b' as "undifined"
-- in 3rd line of code function is there so memory for 'add' has been store as 'defination'
--now skip function scope and after that final and final2 stored as "undefined" respectivly.


03.Exection phase
-- line by line now vlaues are execute for stored memory locations
--for a=10
--for b=20

--so here comes tricky part where function come, 
when function come for execution, here 'add' it create SandBox as "veriable enviroment and ecxecution thread"
---------within sandbox of add function  "let final=add(a,b);"-----------------
    001.memory creation phase (within function scope)
    --a stored as undifined
    --b stored as undifined
    --result stored as undifined

    002.execution phase
    --for a= 10
    --for b=20
    --for result =30
    --when return keyword execute in global context 
    
-----------here execution of sandbox has been completed so it will "delete" from enviroment----------------

for final1=30

now we have another function execution for let final2=add(15,20)
------------sandbox has been created for let final2=add(15,20)--------------------------------------
     001.memory creation phase (within function scope)
    --a stored as undifined
    --b stored as undifined
    --result stored as undifined

    002.execution phase
    --for a= 15
    --for b=20
    --for result=35
    --when return keyword execute in global context 
-----------here execution of sandbox has been completed so it will "delete" from enviroment----------------

for final2=35

*/