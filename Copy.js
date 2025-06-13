//Slice Operator[...]-Shallow Copy

// let ar1=[10,20,30,40];
// console.log(ar1);

// let ar2=[...ar1];
// console.log(ar2);

// ar1.push(99);
// console.log(ar1);
// console.log(ar2);

//Slice()-Shallow Copy
// let ar1=[10,20,30,40];
// console.log(ar1);

// let ar2=ar1.slice();
// console.log(ar2);

// ar1.push(99);
// console.log(ar1);
// console.log(ar2);


//Deep Copy
// let ar1=[[10,20],[30,40]];
// console.log(ar1);

// let ar2=ar1.slice();
// console.log(ar2);

// ar1[1].push(99);
// console.log(ar1);
// console.log(ar2);

// let ar1=[[10,20],[30,40]];
// console.log(ar1);

// let ar2=structuredClone(ar1);
// console.log(ar2);

// ar1.push(99);
// console.log(ar1);
// console.log(ar2);

// let arr1=[{name:"Shalu"},{name:"Shrithika"}]
// console.log(arr1);

// let arr2=arr1.slice();
// console.log(arr2);

// arr1[0].name="Shalini";
// console.log(arr1);
// console.log(arr2);

let arr1=[{name:"Shalu"},{name:"Shrithika"}]
console.log(arr1);

let arr2=structuredClone(arr1);
console.log(arr2);

arr1[0].name="Shalini";
console.log(arr1);
console.log(arr2);