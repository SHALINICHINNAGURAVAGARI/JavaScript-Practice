let b=100;
{
    var a=10;//shadows the above var = 100
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);
//same scenario with const as well
//if we have a function scope the showding behaves in a similar way
