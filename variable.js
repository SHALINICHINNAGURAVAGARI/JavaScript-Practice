//Ways to declare a variable
//var, let ,const

// let firstName='Shalini';
// let lastName='C';

// console.log(firstName,lastName,age);//can't access age before initialization.
// //you get error

// let age=30;//Initialization of varibale

// console.log(age);

// let firstName='Shalini';
// let lastName='C';

// console.log(firstName,lastName,age);//can be accessed.
// //you get undefined

// let age=30;//Initialization of varibale

// console.log(age);

//Naming Conventions
//-Only letters,numbers,underscores and dollar signs
//-Can't start with a number

//Multi-Word Formatting
//firstName=camelCase
//first_Name=underscore
//FirstName=PascalCase
//firstname=lowerCase

//Re-assigning Variables
// age=31;
// console.log(age);

// let score;
// score=1;
// console.log(score);
// if(true){
//     score+=1;
// }
// console.log(score);

//const can't be directly re-assigned
// const x=100;
// x=200;
// console.log(x);

//declare it but not intialized then it is error
// const score1;

//can i have array with const? Yes
// const arr=[1,2,3,4,5];
// arr.push(6);
// console.log(arr);

// const person ={
//     name:'Shalu',
// };

// person.name='john';
// person.email='shalu@gmail.com';
// console.log(person);

//we can declare multiple values at once.
// let a,b,c;
// const d=10,e=20,f=30;
// console.log(d);
// console.log(a);

// var - Variable can be re-declared and Updated. A gobal scope variable.
// let - Variable cannot be re-declared but can be updated.A blcok scope variable.
// const - Variable cannot be re-declared or updated.A blcok scope variable.
// var age=24;
// var age=59;
// var age=84;
// console.log(age); //correct but not used nowadays

// let age=24;
// let age=59;
// let age=84;
// console.log(age);//incorrect

const age=24;
age=98;
console.log(age);//incorrect

let a1;
console.log(a);//undefined

// const a;
// console.log(a);//incorrect
