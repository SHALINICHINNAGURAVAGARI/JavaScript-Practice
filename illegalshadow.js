//Yes shadowing is possible
// var a=20;
// {
//     var a=20;
// }

//Yes shadowing is possible
// let a=20;
// {
//     let a=20;
// }


//No shadowing is possible
// let a=20;
// {
//     var a=20;//Should not cross the boundary of the scope
// }//var is a function scope

//Yes shadowing is possible
// let a=20;
// function c(){
//     var a=20;
// }

//Yes shadowing is possible
// var a=20;
// {
//     let a=20;
// }


//Same for const as well