// let arr=["Shalini","Yashoda"];
// let arr=["Shalu","5.11",true,];
// let arr=new Array(5);
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }
// // console.log(arr);
// for(let x of arr){
//     console.log(x);
// }
// let arr=[10,20,30,40,50];

// // 1. Adding elt at the end of an array
// arr.push(60);
// console.log(arr);

// // 2. Adding elt at the beginning of the Array.
// arr.unshift(5);
// console.log(arr);

//3. To remove the element at the end by default.
// let x=arr.pop();//function returning the element
// console.log(x);
// console.log(arr);

//4. To remove the element at the begininng.
// let y=arr.shift();
// console.log(y);
// console.log(arr);

//5.splice(startIndex,deleteCount,items) To remove the element int between
// let remove=arr.splice(2,2);
// console.log(remove);
// console.log(arr);

// console.log(arr);
// arr.splice(2,0,60);
// console.log(arr);

// let remove=arr.splice(2,2,60,70);
// console.log(remove);
// console.log(arr);

//6.To find the particular element's index[always returns the first occurance]
// console.log(arr.indexOf(30));
// console.log(arr.indexOf(300));

//Inorder to get the last occurance
// console.log(arr.lastIndexOf(30));
// console.log(arr.includes(400));

//Understanding Array method with callback functions
//sort,map,filter,reduce,some,every,find,findIndex

//Map Function
// let numbers=[1,4,9,16,25];

//1.One way of solving
// function squareRoot(x){
//     return Math.sqrt(x);
// }
// let result=numbers.map(squareRoot);
// console.log(numbers);
// console.log(result);

//2. Passing function as a parameter
// let result=numbers.map(function squareRoot(x){
//      return Math.sqrt(x);
//  });

//3.
// let result=numbers.map(function(x){
//       return Math.sqrt(x);
//   });
// console.log(numbers);
// console.log(result);

//4. Arrow functions
// let result=numbers.map(x=>Math.sqrt(x));
// console.log(numbers);
// console.log(result);


//Filter Function
// let ages=[32,15,19,12];
// function checkAge(x){
//     if(x>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// let result=ages.filter(checkAge);
// console.log(result);


// let result=ages.filter(function checkAge(x){
//     if(x>18){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(result);

// let result=ages.filter(x=> x>18?true:false);
// console.log(result);


//Reduce Filter
// let numbers=[1,2,3,4,5];
// let res=numbers.reduce((total,x)=> total+x,0 );
// console.log(numbers);
// console.log(res);


//Some Function
// let score=[85,72,90,67];
// let hasGradeA=score.some((x)=> x>85);
// console.log(hasGradeA);

//Every Function
// let hasPassed=score.every((x)=> x>=70);
// console.log(hasPassed);


//Find Function
// let score=[85,76,34,90];
// let result1=score.find((x)=> x>80);
// console.log(result1);

//FindIndex Function
// let result2=score.findIndex((x)=>x=85);
// console.log(result2);

//Sort function
let fruits=["banana","kiwi","mango","apple"];
console.log(fruits);
fruits.sort();
console.log(fruits);

let scores=[85,87,5,94];
console.log(scores);
scores.sort();
console.log(scores);
