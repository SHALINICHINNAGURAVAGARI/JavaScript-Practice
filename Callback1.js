//What is a Callback function in JavaScript?
//When we call the X function and pass an another function then that Y is called as CallBack Function.
//Like We call this function Y somewhere else in my code.
//JS is a Synchronously single threaded langauge-Does one thing at a time in specific order.
//But Due to Callbacks we can async things inside Js
//Basically I give the responsibilty to another function.It'slike I pass Y inside X
//Now It's upto X's interest when to it wants to call Y.
//This Function Y is called back sometime later in your code.

//Lets see How it is used in async tasks??
//SetTimeout takes a callback function.
//The function over here which u pass as an first param to the setTimeout-Callback Function
//It is passed on to setTimeout and called sometime else in your program.
setTimeout(function (){
    console.log("Timer");
},5000)//5000 millisec
//It will take the call back function and store it somewhere and along with it timer is also attached
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
})

//Blocking Main Thread in Js:
//Js has one call stack-Main Thread
//All function gets excecuted using call stack
//If any operation blocks the call stack that is called BMT
//That's why we use async operation which takes much time.




//Deep about Event Listeners

//Closures Demo with Event Listeners

//Scope Demo with Event Listeners

//Garbage Collection & removeEventListeners => when we are not using them.
//Event Listeners are heavy-takes memory

