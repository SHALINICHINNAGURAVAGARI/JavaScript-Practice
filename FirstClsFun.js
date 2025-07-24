//1. Function Statement/Declaration:The way of creating a function
function a(){
    console.log("A is Called");
}



//2. Function Expression: Assigning it to a variable,acts like a value.
//Note: The major differnce between the above and below one is: Hoisting
var b=function(){
    //Only JS can have this option
    console.log("B is Called");
}
b();
//In the above program u can use anonymous functions
//Function Declaration:Same as Function Expression
//Questions : What if the function a() and b() even before creating it?
//The Answer: "A is Called" - during the memory creation phase "A"is created a memory and the function is assigned to "a()"
//Incase of Function expression"B" is treated as any other variable and it is undefined.But surprisingly we called b() function which gives error.


//3. Anonymous Function: A function without a name is called Anonymous Function
// function (){

// }
//Here you cannot use. Definetly function name has to be there.
//Function Statements require a function name.




//4. Named Funtion Expression:
var c=function s(){
    //Only JS can have this option
    console.log("B is Called");
}
c();
s();//You cannot call something like this you will get an error.
//This S is not created in the outer scope.S is Not a function in the outside/global scope, But created as a local variable.
//This S is accessible inside the Function but not in Global Scope.
//Here it is same as Function Expression but we cannot give anonymous function here, instead we should provide Function name.



//5. Difference between Parameters & Arguments?
var d=function(param1,param2){
    //These Label/Identifiers which get those values are params
    //Only JS can have this option
    console.log("B is Called");
}
d(arg1,arg2);//The values which we pass inside a function are known as arg




//6. First Class Functions:The ability to use functions as VALUES and passed as an ARGUMENT to another functions and can be returned fromthe functions
//We can pass anonymous function inside the functional args 
var e=function(param1){
    console.log(param1);
}
e(function (){
});

//Another method of passing anonymous function
var f=function(param1){
    console.log(param1);
}
function g(){
}
f(g);

//We can return anonymous function from the function
var f=function(param1){
    return function (){

    }
}
console.log(f());

var f=function(param1){
    return function i(){

    }
}
console.log(f());
//Fucntions are FIRST CLASS CITIZENS[Same]


