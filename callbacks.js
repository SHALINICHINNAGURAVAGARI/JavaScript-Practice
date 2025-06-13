function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function calculator(a,b,callback){
    return callback(a,b);
}
console.log(calculator(10,20,add));

//Asynchronous programming in Js exists because of this callback function exists.