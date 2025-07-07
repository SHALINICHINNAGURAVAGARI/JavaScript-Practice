//Closure: A function bind together with its lexical environment!

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();


// function x(){
//     var a=function y(){
//         console.log(a);
//     };
    
//     y();
// }
// x();



// function x(){
//     var a=7;
    
//     y();
// }
// x(function y(){
//         console.log(a);
//     });

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// x();

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;//funtion+lexcial environment whole thing was returned
}
let z=x();//whatever is returned is then collected here
console.log(z);//printed
//..........1000 lines after if i invokea function
z();
//when u execute z somewhere else in your program it still remembers the ref to a and try to find value of a


// function x(){
//     var a=7;
//     return function y(){
//         console.log(a);
//     }
// }
// x();