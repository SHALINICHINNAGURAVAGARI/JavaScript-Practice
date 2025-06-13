// function task1(){
//     console.log("Task1 started");
//     console.log("Task1 got over");
// }
// function task2(){
//     console.log("Task2 started");
//     let start=Date.now();
//     let delay=4000;
//     let end=start+delay;
//     console.log("Task2 completed");
// }
// function task3(){
//     console.log("Task3 started");
//     console.log("Task3 got over");
// }
// task1();
// setTimeout(task2,2000);
// task3();

function fun1(){
    console.log("Fetching the data");
}
let intervalID=setInterval(fun1,2000);
setTimeout(()=>clearInterval(intervalID),10000);//used inorder to stop the excution we make use of this line.
//function doesn't have any name,it has only single line body and doesn't have any parameters
// clearInterval(intervalID);takes only 1 argument