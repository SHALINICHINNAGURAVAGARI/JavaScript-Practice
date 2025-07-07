function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);// will store it somewhereand will not wait
    console.log("Namasthe JavaScript!!")//immediately prints
}
x();