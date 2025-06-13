// const cart=["shoes","pants","kurta"];

// const promise=createOrder(cart);

// promise.then(function(){
//     proceedToPayment(orderID);
// })

// const prm=new Promise(
//     function executorFunc(resolve,reject){
//         console.log("Water has started to boil");
//         setTimeout(()=>{
//             console.log("Water has been boiled");
//             reject();
//         },3000);
//     }
// );
// prm
// .then(()=>{
//     console.log("Promise fulfilled");
// })
// .catch(()=>{
//     console.log("Promise unfulfilled");
// });

// setTimeout(()=>console.log("Macro task"),4000);

function step1(){
    return new Promise(
        (resolve,reject)=>{
            console.log("Step1 started");
            setTimeout(()=>{
                console.log("step1 successful");
                resolve();
            },4000);
        }
    );
}
function step2(){
     return new Promise(
        (resolve,reject)=>{
            console.log("Step2 started");
            setTimeout(()=>{
                console.log("step2 successful");
                resolve();
            },3000);
        }
    );

}
function step3(){
      return new Promise(
        (resolve,reject)=>{
            console.log("Step3 started");
            setTimeout(()=>{
                console.log("step3 successful");
                resolve();
            },2000);
        }
    );

}
function step4(){
      return new Promise(
        (resolve,reject)=>{
            console.log("Step4 started");
            setTimeout(()=>{
                console.log("step4 Unsuccessful");
                reject();
            },1000);
        }
    );
}
step1()
.then(step2)
.then(step3)
.then(step4)
.then(()=>console.log("All Steps executed sucessfully"))
.catch(()=>console.log("Promises failed"));