const cart=["shoes","pants","kurtas"];
createOrder(cart,function(orderId){
    proceedToPayment(orderId);
});//we passed a fun to create order API and we were blindly trusting create order API will execute. 


const promise=createOrder(cart);
//takes cart deatils and return us a promise.
//Promise is nothing but you can assume it to be an empty object with some data in it.
//{data:undefined} 
//after 1sec,2sec,3sec...how much ever time it takes
//It will create an order and it will give away order details and it will fill the undefined object back at later point of time.
promise.then(function(orderId){
    proceedToPayment(orderId);
});
//The improvement: Next we attach a callback function with proise object

const GITHUB_API="https://github.com/SHALINICHINNAGURAVAGARI/git-course"
const user=fetch(GITHUB_API);
console.log(user);
