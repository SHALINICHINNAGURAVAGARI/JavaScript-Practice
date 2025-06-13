// function dice(){
//     for(let i=1;i<=6;i++){
//         console.log(i+" ");
//     }
// }
// dice();

function dice(){
   let res=Math.floor(Math.random()*6)+1;
   console.log(res);
}
dice();

console.log("5 5");
console.log(5,5);

//Prints 1 to 4 and new line it prints 5
console.log("1 2 3 4\n5");
console.log("1", "2", "3", "4\n5");
console.log("1 2 3 4", "\n5");
console.log("1 2 3 4"); 
console.log("5");

let x = "64";//"64" is converted to 64
let y = 8;
console.log(x/y);
console.log(x*y);
console.log(x-y);

let z = 10 == 9;
console.log(z);

Boolean("true") //is true because a non-empty string is always truthy.
Boolean("False") //is true for the same reason as above. Any non-empty string becomes true.
Boolean(300) //is true because any number other than 0 is truthy.
let o = true //is simply assigning the boolean value true to x.

function roundOff(num, ndigits) {
    return num.toFixed(ndigits);
}
roundOff(0.778899,2)

//1. Function Declaration
 function greet(name) {
 return "Hello, " + name;
 }
//Hoisted: Yes | Use: General reusable functions

//2. Fucntion Expression
 const greet = function(name) {
 return "Hello, " + name;
 };
//Hoisted: No | Use: Assignable to variables

//3.Arrow Function (ES6+)
 const greet = (name) => "Hello, " + name;


//4.IIFE (Immediately Invoked Function Expression)
 (function() {
 console.log("Runs immediately!");
 })();

//5. Constructor Function
 function Person(name) {
 this.name = name;
 }
 const user1 = new Person("Shalini");

//6. Function as a Method
 const user = {
 name: "Shalini",
 greet: function() {
 return "Hi " + this.name;
 }
 };
 user.greet();

//7. Anonymous Function
 setTimeout(function() {
 console.log("Runs later");
 }, 1000);
