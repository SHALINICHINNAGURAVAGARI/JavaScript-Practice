// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Success"),3000);
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P2 Success"),2000);
//     //setTimeout(()=>reject("P2 reject"),2000);
// })

// const p3=new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("P3 Success"),1000);
//     setTimeout(()=>reject("P3 reject"),2000);
// })
// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// });

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Success"),3000);
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P2 Success"),2000);
//     //setTimeout(()=>reject("P2 reject"),2000);
// })

// const p3=new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("P3 Success"),1000);
//     setTimeout(()=>reject("P3 reject"),2000);
// })
// Promise.allSettled([p1,p2,p3]).then(res=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// });

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 Success"),2000);
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P2 Success"),1000);
//     //setTimeout(()=>reject("P2 reject"),2000);
// })

// const p3=new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("P3 Success"),1000);
//     setTimeout(()=>reject("P3 reject"),3000);
// })
// Promise.race([p1,p2,p3]).then(res=>{//returns the first settled promise
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// });


const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P1 reject"),2000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P2 reject"),3000);
    //setTimeout(()=>reject("P2 reject"),2000);
})

const p3=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P3 Success"),1000);
    setTimeout(()=>reject("P3 reject"),3000);
})
Promise.any([p1,p2,p3]).then(res=>{//returns the first settled promise
    console.log(res);
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors);
});