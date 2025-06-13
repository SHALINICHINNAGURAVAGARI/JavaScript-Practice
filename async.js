// async function getData(){
//     return "async";
// }
// const data=getData();
// console.log(data);


// async function getData(){
//     return "shalu";
// }
// const dataPromise=getData();

// dataPromise.then(res=>console.log(res));


// const p=new Promise((resolve,reject)=>{
//     resolve("Promise Resolved Value!!");
// });
// async function getData(){
//     return p;
// }
// getData().then(console.log);

// const dataPromise=getData();

// dataPromise.then(res=>console.log(res));


//Using async await
//await can only be used wihtin the async function only
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved Value!!");
//     },10000);
// });

// async function handlePromise(){
//     const val=await p;
//     console.log(val);
// }
// handlePromise();



//without using async await
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved Value!!");
//     },10000);
// });

// function getData(){
//     //JS Engine will not wait for promise to be resolved.
//     p.then((res)=>console.log(res));

// console.log("Hello World!");
// }
// getData();


//using async await!
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved Value!!");
//     },10000);
// });
// async function handlePromise(){
//     console.log("Hi!")
//     //JS Engine was waiting for the promise to be resolved.
//     const val=await p;//code was waiting.
//     console.log("Hello World!")
//     console.log(val);
// }
// handlePromise();


// const p=new Promise((resolvereject)=>{
//     setTimeout(()=>{
//         resolvereject("Promise Resolved Value!!");
//     },10000);
// });
// async function handlePromise(){
//     console.log("Hi!")
//     //JS Engine was waiting for the promise to be resolved.
//     const val=await p;//code was waiting.
//     console.log("Hello World!")
//     console.log(val);

//     //after 10sec both the promises printed
//     const val2=await p;//code was waiting.
//     console.log("Hello World2!")
//     console.log(val2);
// }
// handlePromise();


const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise got resolved1!!");
    },10000);
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise got resolved2!!");
    },5000);
});
async function handlePromise(){
    console.log("Hi!")
    //JS Engine waits for the promise to be resolved.
    const val=await p2;
    console.log("Hello World1!")
    console.log(val);
    
    const val2=await p1;
    console.log("Hello World2!")
    console.log(val2);
}
handlePromise();




// Empty call stack
// call satck-a place where every function works.
// There are two promises p1,p2.Async promises.






// First way of handling errors using Try catch blocks

// const API_URL="https://api.github.com/users/akshaymarch7";
// async function handlePromise(){
//     try{
//         const data=await fetch(API_URL);//when you fetch it gives you a promise
//         const jsonValue=await data.json();//fetch()=>Response.json()=>jsonValue
//         console.log(jsonValue);
//     }catch(err){
//         console.log(err);
//     }
// }
// handlePromise();

// Second way of handling errors is using only catch
// const API_URL="https://api.github.com/users/akshaymarch7";
// async function handlePromise(){
//     const data=await fetch(API_URL);//when you fetch it gives you a promise
//     const jsonValue=await data.json();//fetch()=>Response.json()=>jsonValue
//     console.log(jsonValue);
// }
// handlePromise().catch(err =>console.log(err));