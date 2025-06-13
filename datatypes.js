//Primitive DataTypes:
//1. String-Sequence of characters.
//2.Number=Integers as well as floating-point numbers.
//3. Boolean=Logical entity/true or false
//4.Null=Intentional absence of any object value.
//5. Undefined-A variable that has not yet been defined/assigned
//6. Symbol- Built-in object whose constructor returns a unique symbol.
//7. BigInt-Numbers that are greater than "Number" type can handle.


//Reference Types(objects): These are non-primitve value and when assigned to a variable,
// the variable is given a reference to that value.
// Example: Object literals,arrays and functions are all reference types.

//Static Typing Vs Dynamic Types:
// Javascript is a dynamically-types language. This MediaSession,we do not eplicitly define the types of our variables.Many other
// languages are statistially-typed such as C,C++ and Java.

//TypeScript: It is a superset of Javascript,which allows static-typing.This can make your code more verbose and less prone to errors.

//String:
// const firstName='Shalini';
// const output=firstName;
// console.log(output,typeof output);

// //Number:
// const age=30;
// const temp=98.9;
// const output=temp;
// console.log(output,typeof output);

//Boolean:
// const haKids=true;
// const aptNumber=null;
// const output=aptNumber;
// console.log(output,typeof output);

//Undefined:
// let score=undefined;
// const output=score;
// console.log(output,typeof output);

//Symbol:
// const id=Symbol('id');
// const output=id;
// console.log(output,typeof output);

//BigInt:
// const n=304555586758581n;
// const output=n;
// console.log(output,typeof output);

// Reference Types:
// const numbers=[1,2,3,4,5];
// const output=numbers;
// console.log(output,typeof output);

// const person={
//     name:'Shalini',
// };
// const output=person;//function is also a reference type
// console.log(output,typeof output);

function sayHello(){
    console.log('Hello');
}
const output=sayHello;
console.log(output,typeof output);

let sentence='this is an "apple"';
let sentence2="this is an 'apple'";
// let sentence3='this is an 'apple'';//incorrect
console.log(sentence2);

let pencilPrice=10;
let erasorPrice=5;
let output2="The total price is: "+(pencilPrice+erasorPrice)+"Rupees";
console.log(output2);

let size="XL";
if(size==="XL"){
    console.log("Price is Rs.250");
}else if(size==="L"){
    console.log("price is Rs.100");
}else if(size==="M"){
    console.log("Price is Rs.100");
}else{
    console.log("Price is Rs.50");
}

let goodString="apple";
if(goodString[0]==="a" && goodString.length>3){
    console.log("Yes it is a GoodString!");
}else{
    console.log("Not a Good String!");
}

//Switch Statement
let color="red";
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken Light");
}

let day="1";
switch(day){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("None");
}