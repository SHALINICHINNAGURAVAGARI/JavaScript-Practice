//Example 1:
function x(){
    var a=7;
    function y(){
       console.log(a);
    }
    a=100;
    return y;
}
let z=x();
console.log(z);
//.......
z();


// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

//Uses of closures:
// -Module Design CanvasPattern
// -Currying
// -Functions like once
// -memorize
// -maintaining state in async world
// -setTimeouts
// -Iterators

