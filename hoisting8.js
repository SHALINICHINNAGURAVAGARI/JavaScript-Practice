function test() {
    console.log(typeof hoisted);
    var hoisted = "I am a variable";
    function hoisted() {
        return "I am a function";
    }
}

test();