// let a=10;
// let b=20;
// let result=a+b;
// console.log(result);

function task1(){
    console.log("Task1 started..");
    //Between its starting and ending task let us assume 
    //the task is going to take some time. this will 
    //execute in fraction of seconds but,
    //If i were to artificially induce some delay then the
    //easiest way to do is in the below:
    let start =Date.now();
    //whatever is the current time of my machine now, i want to fetch it.
    let delay=5000;
    let end=start+delay;
    console.log("Task1 executing...");
    while(Date.now()<=end){
        
    }
    console.log("Task1 completed");
}

task1();

function task2(){
    console.log("Task2 started..");
    let start =Date.now();
    let delay=3000;
    let end=start+delay;
    console.log("Task2 executing...");
    while(Date.now()<=end){
        
    }
    console.log("Task2 completed");
}
task2();

function task3(){
    console.log("Task3 started");
    let start=Date.now();
    let delay=2000;
    console.log("Task3 executing...");
    let end=start+delay;
    while(start<=end){

    }
    console.log("Task3 completed");
}
task3();
